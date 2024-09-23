"use server";
import Razorpay from "razorpay";
import Payment from "@/models/Payment";
import connectDb from "@/db/dbConnection";
import User from "@/models/User";

// Initiate Razorpay order
export const initiate = async (amount, to_username, paymentform) => {
    try {
        // Connect to database
        await connectDb();

        // Input validation
        if (!amount || isNaN(amount) || amount <= 0) {
            return { error: "Invalid amount" };
        }

        if (!to_username || typeof to_username !== "string" || to_username.trim() === "") {
            return { error: "Invalid username" };
        }

        // Fetch the secret of the user who is receiving the payment
        let user = await User.findOne({ username: to_username });
        if (!user) {
            return { error: "User not found" };
        }
        const secret = user.razorpaysecret;

        // Create Razorpay order
        var instance = new Razorpay({ key_id: user.razorpayid, key_secret: secret });

        let order;
        try {
            order = await instance.orders.create({
                amount: Number.parseInt(amount),
                currency: "INR",
            });
        } catch (err) {
            console.error("Razorpay order creation failed:", err);
            return { error: "Failed to create Razorpay order" };
        }

        // Create a payment object which shows pending payment
        await Payment.create({
            oid: order.id,
            amount: amount,
            to_username: to_username,
            name: paymentform.name,
            message: paymentform.message,
        });

        return order;
    } catch (err) {
        console.error("Error in initiating payment:", err);
        return { error: "Failed to initiate payment" };
    }
};

// Fetch user profile by username
export const fetchuser = async (username) => {
    try {
        await connectDb();

        // Input validation
        if (!username || typeof username !== "string" || username.trim() === "") {
            return { error: "Invalid username" };
        }

        let user = await User.findOne({ username: username }).lean();
        if (!user) {
            return { error: "User not found" };
        }

        // Convert MongoDB ObjectIds and Dates to strings
        if (user._id) user._id = user._id.toString();
        if (user.createdAt) user.createdAt = user.createdAt.toISOString();

        return user;
    } catch (err) {
        console.error("Error fetching user:", err);
        return { error: "Failed to fetch user" };
    }
};

// Fetch payments for a user
export const fetchpayments = async (username) => {
    try {
        await connectDb();

        // Input validation
        if (!username || typeof username !== "string" || username.trim() === "") {
            return { error: "Invalid username" };
        }

        let payments = await Payment.find({ to_username: username, done: true })
            .sort({ amount: -1 })
            .lean();

        // Convert MongoDB ObjectIds and Dates to simple values
        payments.forEach(payment => {
            if (payment._id) payment._id = payment._id.toString();
            if (payment.createdAt) payment.createdAt = payment.createdAt.toISOString();
            if (payment.updatedAt) payment.updatedAt = payment.updatedAt.toISOString();
        });

        return payments;
    } catch (err) {
        console.error("Error fetching payments:", err);
        return { error: "Failed to fetch payments" };
    }
};

// Fetch top 5 payments for a user
export const fetch5payments = async (username) => {
    try {
        await connectDb();

        // Input validation
        if (!username || typeof username !== "string" || username.trim() === "") {
            return { error: "Invalid username" };
        }

        let top5Payments = await Payment.find({ to_username: username, done: true })
            .sort({ amount: -1 })
            .limit(5)
            .lean();

        // Convert MongoDB ObjectIds and Dates to simple values
        top5Payments.forEach(payment => {
            if (payment._id) payment._id = payment._id.toString();
            if (payment.createdAt) payment.createdAt = payment.createdAt.toISOString();
            if (payment.updatedAt) payment.updatedAt = payment.updatedAt.toISOString();
        });

        return top5Payments;
    } catch (err) {
        console.error("Error fetching top 5 payments:", err);
        return { error: "Failed to fetch top 5 payments" };
    }
};

// Update user profile
export const updateprofile = async (data, oldusername) => {
    try {
        await connectDb();

        // Validate input data
        let ndata = Object.fromEntries(data);
        if (!ndata.email || !ndata.username) {
            return { error: "Invalid input data" };
        }

        // Check if the new username already exists (only if changed)
        if (oldusername !== ndata.username) {
            let user = await User.findOne({ username: ndata.username });
            if (user) {
                return { error: "Username already exists!" };
            }

            // Update user profile with the new data
            await User.updateOne({ email: ndata.email }, ndata);

            // Update username in payments collection
            await Payment.updateMany({ to_username: oldusername }, { to_username: ndata.username });
        } else {
            // Simply update the profile without changing username
            await User.updateOne({ email: ndata.email }, ndata);
        }

        return { success: "Profile updated successfully" };
    } catch (err) {
        console.error("Error updating profile:", err);
        return { error: "Failed to update profile" };
    }
};


export const fetchalluser = async () => {
    await connectDb();

    const users = await User.find();
    return users;
}