import { NextResponse } from "next/server";
import { validatePaymentVerification } from "razorpay/dist/utils/razorpay-utils";
import Payment from "@/models/Payment";
import connectDb from "@/db/dbConnection";
import User from "@/models/User";

export const POST = async (req) => {
    connectDb();
    let body = await req.formData();
    body = Object.fromEntries(body);

    // Check if razorpay orderId is present on server
    let payment = await Payment.findOne({ oid: body.razorpay_order_id });

    if (!payment) {
        return NextResponse.json({ success: false, message: "Order Id not found!!" });
    }

    // Fetch the secret of the user who is receiving the payment
    let user = await User.findOne({username: payment.to_username});
    const secret = user.razorpaysecret;

    // Verify the payment
    let isPayed = validatePaymentVerification({
        "order_id": body.razorpay_order_id,
        "payment_id": body.razorpay_payment_id
    },
        body.razorpay_signature,
        secret
    );

    if (isPayed) {
        // Update payment status
        const updatedPayment = await Payment.findOneAndUpdate({ oid: body.razorpay_order_id }, { done: true }, { new: true });
        return NextResponse.redirect(`${process.env.NEXT_PUBLIC_URL}/${updatedPayment.to_username}?paymentdone=true`)
    } else {
        return NextResponse.json({ success: false, message: "Payment verification failed!!" });
    }
}