import Link from "next/link";

export default function NotFound(){
    return(
        <div className="flex items-center h-screen justify-center flex-col bg-[rgba(255, 255, 255, 0.1)] rounded-lg backdrop-blur-md text-gray-200">
            <h2>Not Found</h2>
            <p>Could not find requested resource</p>
            <Link href={"/"} className="bg-gray-200 flex items-center p-4 rounded-lg font-semibold uppercase text-green-600 hover:bg-green-600 hover:text-gray-200 transition-colors">Return Home</Link>
        </div>
    )
}