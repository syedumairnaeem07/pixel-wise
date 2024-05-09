import { Document, Schema, model, models } from "mongoose";

export interface ITransaction extends Document {
    stripeId: string;
    amount: number;
    credits: number;
    buyer: {
        _id: string;
        firstName: string;
        lastName: string;
    };
    plan?: string;
    createdAt?: Date;
}

const TransactionSchema = new Schema({
    createdAt: {
        type: Date,
        default: Date.now,
    },
    stripeId: {
        type: String,
        required: true,
        unique: true,
    },
    amount: {
        type: Number,
        required: true,
    },
    plan: {
        type: String,
    },
    credits: {
        type: Number,
    },
    buyer: {
        type: Schema.Types.ObjectId,
        ref: "User",
    },
});

const Transaction =
    models?.Transaction || model("Transaction", TransactionSchema);

export default Transaction;
