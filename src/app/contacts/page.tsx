import Link from "next/link";
import Social from "../components/Social";
import Contact from "../components/formContact";

export default function Contacts() {
    return (
        <section className=" my-4 container mx-auto">
            <div className="flex px-2 md:px-0 items-center flex-col justify-center gap-4 text-gray-400 h-full">
                <div className="flex flex-col-reverse md:flex-row gap-2 h-full w-full">
                    <div className="flex items-center justify-center md:w-1/3">
                        <img src="/images/contact.png" className="rounded-lg" alt="" />
                    </div>
                    <div className="md:w-2/3">
                        <div className="bg-bg-secondary flex items-center justify-center rounded-lg w-full p-5 md:p-10"><Contact /></div>
                    </div>
                </div>
            </div>
        </section>
    )
}