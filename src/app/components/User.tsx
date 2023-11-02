import Image from "next/image"
import Link from "next/link"

export async function User(){

    const response = await fetch('https://api.github.com/users/opedronunes', {
        next: {
            revalidate: 60
        }
    })

    const user = await response.json()

    return(
        <section className="text-gray-400 body-font">
            <div className="flex flex-col items-center py-16 md:flex-row">
                <div className="flex flex-col items-center gap-3 text-center lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 md:items-start md:text-left">
                    <div className="flex flex-col items-center gap-4 md:flex-row">
                        <img className="object-cover object-center border-4 p-0.5 border-gray-600 rounded-full w-72 h-72 md:w-40 md:h-40" alt={"hero"} src={user.avatar_url} />
                        <div className="flex flex-col gap-2 text-gray-200">
                            <div className="text-3xl font-bold">
                                <Link href={user.html_url} target="_blank">
                                    {user.login}
                                </Link>
                            </div>
                            <div className="flex justify-center gap-3 md:justify-start">
                                <p className="m-0">Soluções: {user.public_repos}+</p>
                                <p className="text-gray-400">|</p>
                                <Link href="/projects" className="transition-colors hover:text-green-600">
                                    Ver mais
                                </Link>
                            </div>
                            <div className="flex justify-start w-full gap-2 my-3">
                                <Link href="https://wa.me/5561996681439" className="w-full justify-center animate-pulse inline-flex px-6 py-2 text-lg text-gray-200 transition-colors border rounded focus:outline-none bg-green-600 border-green-600" target="_blank">Explorar +</Link>
                            </div>
                        </div>
                    </div>
                    <p className="leading-relaxed">
                        {user.bio}
                    </p>
                </div>
            </div>
        </section>
    )
}