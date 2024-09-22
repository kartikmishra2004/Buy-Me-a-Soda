"use server";
import Razorpay from "razorpay";
import Payment from "@/models/Payment";
import connectDb from "@/db/dbConnection";
import User from "@/models/User";

export const initiate = async (amount, to_username, paymentform) => {
    // Connect to database
    await connectDb();

    // Fetch the secret of the user who is receiving the payment
    let user = await User.findOne({ username: to_username });
    const secret = user.razorpaysecret;

    // Creating order
    var instance = new Razorpay({ key_id: user.razorpayid, key_secret: secret });

    let x = await instance.orders.create({
        amount: Number.parseInt(amount),
        currency: "INR"
    });

    // Create a payment object which shows pending payment
    await Payment.create({ oid: x.id, amount: amount, to_username: to_username, name: paymentform.name, message: paymentform.message });

    return x;
}

// Fetch users who payed
export const fetchuser = async (username) => {
    await connectDb();
    let u = await User.findOne({ username: username }).lean();
    return u;
}

// Fetch payments
export const fetchpayments = async (username) => {
    await connectDb();
    // find all payments sorted by decresing order of amount and flatten objectid
    let p = await Payment.find({ to_username: username, done: true }).sort({ amount: -1 }).lean();
    return p;
}

export const fetch5payments = async (username) => {
    await connectDb();
    // find all payments sorted by decresing order of amount and flatten objectid
    let p5 = await Payment.find({ to_username: username, done: true }).sort({ amount: -1 }).limit(5).lean();
    return p5;
}

export const updateprofile = async (data, oldusername) => {
    await connectDb();
    let ndata = Object.fromEntries(data);
    // Check the username exist or not
    if (oldusername !== ndata.username) {
        let u = await User.findOne({ username: ndata.username });
        if (u) {
            return { error: "Username already exists!!" }
        } else {
            await User.updateOne({ email: ndata.email }, ndata);
            // Now update all the usernames in payments table
            await Payment.updateMany({ to_username: oldusername }, { to_username: ndata.username })
        }
    } else {
        await User.updateOne({ email: ndata.email }, ndata);
    }

}