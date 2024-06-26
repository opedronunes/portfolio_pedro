import { tech } from "@/data/Tech";

export default function Tecnology() {
    return (
        <section className="py-12">
            {/* <h2 className="font-semibold text-tertiary text-2xl my-4"> Tecnologias</h2> */}
            <div className="grid grid-cols-6 md:grid-cols-8 gap-2 lg:flex lg:flex-wrap">
                {tech.map((item) => (
                    <div className="flex flex-col items-center gap-1 p-3 hover:text-tertiary text-gray-500 transition-all border border-gray-600 rounded-lg hover:border-tertiary" key={item.text}>
                        <div className="text-4xl md:text-7xl">{item.Icon}</div>
                    </div>
                ))}
            </div>
        </section>
    )
}