
import Link from "next/link"

export async function Repos() {
    const response = await fetch('https://api.github.com/users/opedronunes/repos', {
        next: {
            revalidate: 60
        }
    })

    

    const repos = await response.json()

    return (
        <div>
            <div className="grid grid-cols-1 gap-2 md:grid-cols-3">
                {repos?.slice(0, 12).map(repo => {
                    return (
                        <div className="border border-dashed border-green-600 bg-[rgba(255, 255, 255, 0.1)] rounded-lg backdrop-blur-md p-3" key={repo.id}>
                            <li className="list-none">
                                <Link href={repo.html_url} target="_blank" rel="noreferrer" className="">
                                    <h4 className="text-2xl font-semibold text-green-600">{repo.name}</h4>
                                    <div className="text-sm text-gray-400">
                                        <p>{repo.description}</p>
                                        <p>Stack: {repo.language}</p>
                                    </div>
                                </Link>
                            </li>
                        </div>
                    )
                })}
            </div>
        <Link href="https://github.com/opedronunes?tab=repositories" target="_blank" className="flex items-center justify-center w-full my-4 text-gray-200 font-bold text-center transition-colors hover:text-green-600">
            Ver todos
        </Link>
        </div>
    )
}