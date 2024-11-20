import {Input} from "@/components/ui/input";
import {Label} from "@/components/ui/label";
import Link from "next/link";
import {register} from "@/action/user";


const Register = async () => {
    return (
        <div className={"mt-10 max-w-md w-full mx-auto rounded-none md:rounded-2xl p4 md:p-8 shadow-input bg-white border border-[#121212] dark:bg-black"}>
            <h2 className={"font-bold text-xl text-neutral-800 dark:text-neutral-200"}>Welcome to MyWebSite</h2>
            <p className={"text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300"}>Please provide all the necessary information</p>

            <form className={"my-8"} action={register}>
                <div className={"flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4"}>
                    <div className="flex flex-col">
                        <Label htmlFor="firstname" className={"mb-2"}>First Name</Label>
                        <Input type="text" id="firstname" name={"firstName"} placeholder={"your first name"} />
                    </div>

                    <div className="flex flex-col">
                        <Label htmlFor="lasttname" className={"mb-2"}>Last Name</Label>
                        <Input type="text" id="lasttname" name={"lastName"} placeholder={"your last name"} />
                    </div>

                </div>

                <Label htmlFor={"email"} className={"mb-2"}>Email Address</Label>
                <Input type="email" id="email" name={"email"} placeholder={"your email address"} />

                <Label htmlFor={"password"} className={"mb-2"}>Password</Label>
                <Input type="password" id="password" name={"password"} placeholder={"your password"} />

                <button className={"mt-6 bg-gradient-to-br relative group/btn from-black dark:from-zinc-900" +
                    "dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]" +
                    ""}>Sign up &rarr;</button>

                <p className={"text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300"}>
                    Already have an account? <Link href={"/login"} className={"text-blue-500"}>Login</Link>
                </p>
            </form>
        </div>
    )
}

export default Register;
