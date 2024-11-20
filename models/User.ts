import {model, models, Schema} from "mongoose";


const userSchema = new Schema({
    firstName: {
        type: String,
        required: true,
        trim: true,
        maxlength: 50
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
        maxlength: 50
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    password: {
        type: String,
        select: false
    },
    role: {
        type: String,
        default: "user"
    },
    image: {
        type: String,
    },
    authProviderId: {
        type: String,
    }
});

export const User =  models?.User ||  model("User", userSchema);
