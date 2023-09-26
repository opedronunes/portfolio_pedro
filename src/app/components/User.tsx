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
                        <img className="object-cover object-center rounded-full w-72 h-72 md:w-40 md:h-40" alt={"hero"} src={user.avatar_url} />
                        <div className="flex flex-col gap-2 text-gray-200">
                            <div className="text-3xl font-bold">
                                <Link href={user.html_url} target="_blank">
                                    {user.login}
                                </Link>
                            </div>
                            <div className="flex justify-center gap-3 md:justify-start">
                                <p className="m-0">Projetos: {user.public_repos}+</p>
                                <p className="text-gray-400">|</p>
                                <Link href="https://github.com/opedronunes?tab=repositories" target="_blank" className="transition-colors hover:text-green-600">
                                    Ver todos
                                </Link>
                            </div>
                            <div className="flex justify-center gap-2 my-3">
                                <Link href="https://wa.me/5561996681439" className="inline-flex px-6 py-2 text-lg text-gray-400 transition-colors border border-gray-400 rounded focus:outline-none hover:bg-green-600 hover:border-green-600 hover:text-gray-200" target="_blank">Saiba +</Link>
                                <Link href="/projects" className="inline-flex px-6 py-2 text-lg text-gray-400 transition-colors border border-gray-400 rounded focus:outline-none hover:bg-green-600 hover:border-green-600 hover:text-gray-200">Projetos</Link>
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