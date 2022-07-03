import React from 'react'
import {data} from '../data/projects'
import { Card, CardProject, Project } from '../assets/styles/components/project'

export function Projects() {
  return (
    <Project>
      <div className="container">
        <h2 className="title">Projetos</h2>
        <Card>
          {data.map((project) => (
            <CardProject key={project.deployLink}>
              <img src={project.image} alt={project.description} />
              <div>{project.technologies}</div>
              <p>{project.description}</p>
            </CardProject>
          ))}
        </Card>
      </div>
    </Project>
  )
}
