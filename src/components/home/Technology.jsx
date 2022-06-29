import React from 'react'
import { Tech } from '../../assets/styles/components/tech'
import { data } from '../../data/Tech'

export function Technology() {
  return (
    <Tech>
      <div className="container">
        <div className="tech">
          <h1>Tecnologias</h1>
            <div className="container">
                <section>
                    {data.map((tech) => (
                        <div className="techIcons" key={tech.text}>
                            <div className="icon">{tech.Icon}</div>
                            <p>{tech.text}</p>
                        </div>
                    ))}
                </section>
            </div>
        </div>
      </div>
    </Tech>
  )
}
