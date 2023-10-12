import Social from "../components/Social";

export default function Contacts(){
    return(
        <section className="h-screen bg-[rgba(255, 255, 255, 0.1)] backdrop-blur-md my-4 flex items-start justify-center">
            <div className="flex items-center flex-col justify-center gap-4 text-gray-400">
                <Social/>
                Em produção...
            </div>
        </section>
    )
}