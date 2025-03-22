
import Link from "next/link"

// export async function InstaFeed() {
//     const token = process.env.NEXT_INSTA_TOKEN;
//     const fields = "media_url, media_type, permalink";
//     const url = await fetch(`https://graph.instagram.com/me/media?access_token=${token}&fields=${fields}`, {
//         next: {
//             revalidate: 60
//         }
//     })



//     const data = await url.json();

//     return (
//         <div>
//             <div className="grid grid-cols-1 gap-2 md:grid-cols-3">
//                 {data.map(item => {
//                     return (
//                         <a className="border border-dashed border-tertiary bg-[rgba(255, 255, 255, 0.1)] rounded-lg backdrop-blur-md p-3" key={item.id} href={item.permalink} target="_blank">
//                             {item.media_type === "IMAGE" ? <img src={item.media_url}/> : (
//                                 <video controls>
//                                     <source src={item.media_url} />
//                                 </video>
//                             )}
//                         </a>
//                     )
//                 })}
//             </div>
//         </div>
//     )
// }

// export async function InstaFeed() {
//     const token = process.env.NEXT_INSTA_TOKEN;
//     if (!token) {
//         console.error("Token do Instagram não encontrado.");
//         return null;
//     }

//     const fields = "media_url,media_type,permalink";
//     let data = [];

//     try {
//         const response = await fetch(`https://graph.instagram.com/me/media?access_token=${token}&fields=${fields}`, {
//             next: {
//                 revalidate: 60
//             }
//         });

//         if (!response.ok) {
//             console.error("Erro na resposta da API do Instagram:", response.statusText);
//             return null;
//         }

//         data = await response.json();

//         if (!data || !data.data) {
//             console.error("Nenhum dado encontrado no feed do Instagram.");
//             return null;
//         }

//     } catch (error) {
//         console.error("Erro ao buscar o feed do Instagram:", error);
//         return null;
//     }

//     return (
//         <div>
//             <div className="grid grid-cols-1 gap-2 md:grid-cols-3">
//                 {data.data.map(item => (
//                     <a
//                         className="border border-dashed border-tertiary bg-[rgba(255, 255, 255, 0.1)] rounded-lg backdrop-blur-md p-3"
//                         key={item.id}
//                         href={item.permalink}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                     >
//                         {item.media_type === "IMAGE" ? (
//                             <img src={item.media_url} alt="Instagram media" />
//                         ) : (
//                             item.media_type === "VIDEO" && (
//                                 <video controls>
//                                     <source src={item.media_url} />
//                                 </video>
//                             )
//                         )}
//                     </a>
//                 ))}
//             </div>
//         </div>
//     );
// }

interface InstagramMedia {
    id: string;
    media_url: string;
    media_type: string;
    permalink: string;
    caption: string;
    thumbnail_url: string;
    timestamp: string;
}

export async function InstaFeed() {
    const token = process.env.NEXT_INSTA_TOKEN;
    if (!token) {
        console.error("Token do Instagram não encontrado.");
        return null;
    }

    const fields = "media_url,media_type,permalink";
    let data: { data: InstagramMedia[] } | null = null;

    try {
        const response = await fetch(`https://graph.instagram.com/me/media?access_token=${token}&fields=${fields}`, {
            next: {
                revalidate: 60
            },
        });

        if (!response.ok) {
            console.error("Erro na resposta da API do Instagram:", response.statusText);
            return null;
        }

        data = await response.json();

        if (!data || !data.data) {
            console.error("Nenhum dado encontrado no feed do Instagram.");
            return null;
        }

        // Ordena os posts por data (mais recente primeiro)
        data.data.sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime());

    } catch (error) {
        console.error("Erro ao buscar o feed do Instagram:", error);
        return null;
    }

    return (
        <div>
            <h3 className="text-4xl font-bold text-tertiary mb-16 my-4 text-center">Portfólio de Vídeos com Drone <br /><small className="text-sm text-gray-400 font-light">Visite o instagram para videos novos!</small></h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {data.data.slice(0, 6).map(item => (
                    <a
                        className="bg-[rgba(255,255,255,0.1)] w-full rounded-xl  backdrop-blur-md p-2 flex items-center justify-center"
                        key={item.id}
                        href={item.permalink}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {/* {item.media_type === "IMAGE" ? (
                            <img src={item.media_url} alt="Instagram media" />
                        ) : (
                            item.media_type === "VIDEO" && (
                                <video controls className="">
                                    <source src={item.media_url} />
                                </video>
                            )
                        )} */}
                        {item.media_type === "IMAGE" && item.media_url && (
                            <img
                                src={item.media_url}
                                alt="Instagram media"
                                className="rounded-md w-full h-auto object-cover max-h-[700px]"
                            />
                        )}

                        {item.media_type === "VIDEO" && item.thumbnail_url ? (
                            <img
                                src={item.thumbnail_url}
                                alt="Thumbnail do vídeo"
                                className="rounded-md w-full h-auto object-cover max-h-[700px]"
                            />
                        ) : item.media_type === "VIDEO" ? (
                            <iframe
                                src={`${item.permalink}embed`}
                                className="rounded-md w-full h-[700px]"
                                allowFullScreen
                            ></iframe>
                        ) : null}

                    </a>
                ))}
            </div>
        </div>
    );
}



