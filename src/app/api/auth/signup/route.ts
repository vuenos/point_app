import { connectDB } from "@/utils/connectMongDB";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";
import mongoose from "mongoose";

export async function POST(request: NextRequest) {
    try {
        await connectDB();

        const { email, name, password } = await request.json();

        if (password.length < 6) {
            return NextResponse.json(
                { message: "Password must be least 6 characters" },
                { status: 400 },
            );
        }

        const userFound = await User.findOne({ email });

        if (userFound) {
            return NextResponse.json(
                { message: "Email already exists" },
                { status: 409 }
            );
        }

        const salt = await bcrypt.genSalt(12);
        const hashedPassword = await bcrypt.hash(password, salt);

        const user = new User({
            name,
            email,
            password: hashedPassword,
        });

        const saveUser = await user.save();

        return NextResponse.json({
            name: saveUser.name,
            email: saveUser.email,
            createdAt: saveUser.createdAt,
            updatedAt: saveUser.updatedAt,
        },
        { status: 201 }
        );
    } catch (error: any) {
        if (error instanceof mongoose.Error.ValidationError) {
            return NextResponse.json(
                { message: error.message },
                { status: 400 },
            );
        } else {
            console.error("Error during signup: ", error);
            return NextResponse.error();
        }
    }
}

export async function PUT(request: NextRequest) {
    try {
        await connectDB();

        const { userId, name, email, password } = await request.json();

        if (password && password.length < 6) {
            return NextResponse.json(
                { message: "Paswword must be least 6 characters" },
                { status : 400 },
            );
        }

        const userToUpdate = await User.findById(userId);

        if (!userToUpdate) {
            return NextResponse.json(
                { message: "User not found" },
                { status: 404 },
            );
        }

        if (name) {
            userToUpdate.name = name;
        }

        if (email) {
            userToUpdate.email = email;
        }

        if (password) {
            const salt = await bcrypt.genSalt(12);
            const hashedPassword = await bcrypt.hash(password, salt);
            userToUpdate.password =  hashedPassword;
        }

        await userToUpdate.save();

        console.log(userToUpdate);

        return NextResponse.json(
            {
                message: "User updated successfully",
                updatedUser: {
                    id: userToUpdate._id,
                    name:  userToUpdate.name,
                    email: userToUpdate.email,
                    createdAt: userToUpdate.createdAt,
                    updatedAt: userToUpdate.updatedAt,
                },
            },
            { status: 200 }
        );
    } catch (error: any) {
        if (error instanceof mongoose.Error.ValidationError) {
            return NextResponse.json(
                { message: error.message },
                { status: 400 },
            );
        }  else {
            console.error("Error during user updated", error);
            return NextResponse.error();
        }
    }
}

export async function DELETE(request: NextRequest) {
    try {
        await connectDB();

        const { userId } = await request.json();

        // @ts-ignore
        const user = await User.findById(userId);

        if (!user) {
            return NextResponse.json(
                { mesasage: "User not found" },
                { status: 404 },
            )
        }

        await user.deleteOne();

        return NextResponse.json(
            { mesaage: "User deleted successfully" },
            { status: 200 },
        );
    } catch (error: any) {
        console.error("Error during user/cart item deletion: ", error);
        return NextResponse.error();
    }
}
