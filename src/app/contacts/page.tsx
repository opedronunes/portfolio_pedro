import Link from "next/link";
import Social from "../components/Social";

export default function Contacts() {
    return (
        <section className="md:h-screen my-4 container mx-auto">
            <div className="flex  md:px-2  items-center flex-col justify-center gap-4 text-gray-400 h-full">
                <div className="flex flex-col-reverse md:flex-row gap-2 h-full w-full">
                    <div className="flex items-center justify-center md:w-1/3 px-2">
                        <img src="/images/contact.png" className="rounded-lg" alt="" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:w-2/3 p-2">
                        <div className="bg-bg-secondary flex items-center justify-center rounded-lg w-full p-10">em breve</div>
                        <div className="bg-bg-secondary flex items-center justify-center rounded-lg w-full p-10">em breve</div>
                        <div className="bg-bg-secondary flex items-center justify-center rounded-lg w-full p-10">em breve</div>
                        <div className="bg-bg-secondary flex items-center justify-center rounded-lg w-full p-10">em breve</div>
                    </div>
                </div>
            </div>
        </section>
    )
}