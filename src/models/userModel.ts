import {Schema, model, models, Model} from "mongoose";

export interface UserDocument {
    email: string;
    password: string;
    name: string;
    phone: string;
    image: string;
    _id: string;
    createdAt: Date;
    updatedAt: Date;
}

const UserSchema = new Schema<UserDocument>({
    email: {
        type: String,
        unique: true,
        required: [true, "Email is required"],
        match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        "Email is invalid",
        ],
    },
    password: {
        type: String,
        required: [true, "Password is required"],
        select: false,
    },
    name: {
        type: String,
        required: [true, "Full name is required"],
        minLength: [3, "Full name must be at least 3 characters"],
        maxLength: [25, "Full name must be at most 25 characters"],
    },
  },
  {
    timestamps: true,
  }
);

const User =( models.User as Model<UserDocument>) || model<UserDocument>('User', UserSchema);
export default User;
