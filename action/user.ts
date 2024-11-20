"use server"

import connectDB from "@/lib/db";
import {User} from "@/models/User";
import {redirect} from "next/navigation";
import {hash} from 'bcryptjs';
import {CredentialsSignin} from "next-auth";
import {signIn} from "@/auth";

const register = async (formData: FormData) => {
   const firstName = formData.get("firstName") as string;
   const lastName = formData.get("lastName") as string;
   const email = formData.get("email") as string;
   const password = formData.get("password") as string;

   await connectDB();

   const existingUser = await User.findOne({email});
   if (existingUser) {
      throw new Error("User already exists");
   }

    // generate hash password
    const hashPassword = await hash(password, 12);

   await User.create({
       firstName,
       lastName,
       email,
       password: hashPassword
   });

    console.log("User created successfully");

    redirect("/login");
}

const login = async (formData: FormData) => {
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    try {
        await signIn("credentials", {
            redirect: false,
            callbackUrl: "/",
            email,
            password
        })
    }catch (error: any) {
        const someError =error as CredentialsSignin
        return someError.cause

    }finally {
        redirect("/");
    }
}


export { register, login }
