import mongoose from "mongoose";
const { Schema, model } = mongoose;

const paymentSchema = Schema({
    name: {
        type: String,
        required: true,
    },
    to_username: {
        type: String,
        required: true,
    },
    oid: {
        type: String,
        required: true,
    },
    message: {
        type: String,
        required: true,
    },
    amount: {
        type: Number,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    done: {
        type: Boolean,
        default: false,
    }
});

export default mongoose.models.Payment || model("Payment", paymentSchema);