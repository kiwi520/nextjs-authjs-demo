import NextAuth, {CredentialsSignin} from "next-auth"
import Credentials from "next-auth/providers/credentials"
import connectDB from "@/lib/db";
import {User} from "@/models/User";
import {compare} from "bcryptjs";
import GitHub from "next-auth/providers/github"


export const { handlers, signIn, signOut, auth } = NextAuth({
    providers: [
        GitHub({
            clientId: process.env.GITHUB_CLIENT_ID,
            clientSecret: process.env.GITHUB_CLIENT_AUTH_SECRET,
        }),
        Credentials({
            // You can specify which fields should be submitted, by adding keys to the `credentials` object.
            // e.g. domain, username, password, 2FA token, etc.
            credentials: {
                email: {
                    label: "Email",
                    type: "email",
                    placeholder: "place your email",
                },
                password: {
                    label: "Password",
                    type: "password",
                    placeholder: "place your password",
                },
            },
            authorize: async (credentials) => {
                const email = credentials.email as string | undefined
                const password = credentials.password as string | undefined

                if (!email || !password) {
                    throw new CredentialsSignin("Please enter your email and password.")
                }

                await connectDB()

                const user = await User.findOne({ email }).select("+password +role")

                console.log("0000000------user-ooooooo")
                console.log(user)
                console.log("0000000------user-ooooooo")

                if (!user) {
                    throw new Error("Invalid email or password.1")
                }

                if (!user.password){
                    throw new Error("Invalid email or password.2")
                }

                const isMatched = await compare(password,user.password)

                console.log("isMatched")
                console.log(isMatched)
                console.log(password)
                console.log(user.password)
                console.log("isMatched")
                if (!isMatched) {
                    throw new Error("Invalid email or password.3")
                }


                const userData = {
                    id: user._id,
                    name: user.firstName + " " + user.lastName,
                    email: user.email,
                    image: user.image,
                    role: user.role,
                }

                console.log("userData")
                console.log(userData)
                console.log("userData")

                return userData
            },
        }),
    ],
    secret: process.env.AUTH_SECRET,
    jwt: {
        secret: process.env.JWT_SECRET as string, // 用于签名 JWT token
        encryption: true, // 可选，启用加密 JWT token
    },
    pages:{
        signIn: "/login",
    },
    callbacks: {
        async jwt(params) {
            const { token,user } = params
            // console.log("llllllllll")
            // console.log(user)
            // // console.log(user)
            // console.log("llllllllll")
            if (user) {
                token.id = user.id
                token.name = user.name
                token.email = user.email
                token.image = user.image
                token.role = user?.role;
            }

            console.log("token")
            console.log(token)
            console.log("token")
            return token

            // return params
        },
        async session({session, token}) {
            console.log("session")
            console.log(session)
            console.log(token)
            console.log("session")
            // if (token?.sub && token?.role) {
            //     session.user.id = token?.sub
            //     session.user.name = token?.name
            //     session.user.email = token?.email
            //     session.user.image = token?.image
            //     // session.user.role = token?.role
            // }

            return session
        },
    }
})
