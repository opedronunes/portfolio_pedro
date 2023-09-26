import { data } from '../../data/Tech'

export function Technology() {
  return (
    <section className="flex flex-col gap-4 py-4">
          <h2 className="title"> Tecnologias</h2>
          <div className="flex flex-wrap justify-around w-full gap-1 md:flex-row">
              {data.map((tech) => (
                <div className="flex flex-col items-center gap-1 p-3 transition-all border border-gray-800 rounded-lg hover:border-green-600 hover:text-green-600" key={tech.text}>
                    <div className=" text-7xl">{tech.Icon}</div>
                </div>
              ))}
          </div>
    </section>
  )
}
