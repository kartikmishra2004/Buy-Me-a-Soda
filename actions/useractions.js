"use server";
import Razorpay from "razorpay";
import Payment from "@/models/Payment";
import connectDb from "@/db/dbConnection";
import User from "@/models/User";

export const initiate = async (amount, to_username, paymentform) => {
    // Connect to database
    connectDb();

    // Creating order
    var instance = new Razorpay({ key_id: process.env.NEXT_PUBLIC_RAZOR_KEY_ID, key_secret: process.env.RAZOR_KEY_SECRET })

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
    connectDb();
    let u = User.findOne({ username: username }).lean();
    return u;
}

// Fetch payments
export const fetchpayments = async (username) => {
    connectDb();
    // find all payments sorted by decresing order of amount and flatten objectid
    let p = Payment.find({ to_username: username }).sort({ amount: -1 }).lean();
    return p;
}