import Link from "next/link";
import {Button} from "@/components/ui/button";
import {signOut} from "@/auth";
import {getSession} from "@/lib/getSession";

const Navbar = async () => {
    const session = await getSession();
    const user = session?.user;
    return (
        <nav className={"flex justify-around items-center py-4 bg-[#141414] text-white"}>
            <Link className={"text-xl font-bold"} href={"/"}>My Facny Website</Link>

            <ul className={"hidden md:flex space-x-4 list-none justify-center items-center"}>
                {
                    user ? (
                        <>
                            <li className={"font-bold text-blue-500"}>
                                {user.name}
                            </li>
                            <li>
                                <Link href={"/private/dashboard"} className={"hover:text-gray-400"}>Dashboard</Link>
                            </li>
                            <li>
                                <form action={async () => {
                                    "use server"
                                    await signOut({"redirectTo": "/login"})
                                }}>
                                    <Button type={"submit"} variant={"ghost"}> Logout</Button>
                                </form>
                            </li>
                        </>
                    ) : (
                        <>
                            <li>
                                <Link href={"/login"} className={"hover:text-gray-400"}>Login</Link>
                            </li>
                            <li>
                                <Link href={"/register"} className={"hover:text-gray-400"}>Register</Link>
                            </li>
                        </>
                    )
                }
            </ul>
        </nav>
    )
}

export default Navbar;
