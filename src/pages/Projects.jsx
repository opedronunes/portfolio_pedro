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
            <CardProject key={project.id}>
              <img src={project.image} alt={project.description} />
              <h4>{project.title}</h4>
              <div className="tech-card">{project.technologies}</div>
              <p>{project.description}</p>
              <div className="link-card">
                <a href={project.githublink} target="_blank" rel="noreferrer">GitHub</a>
                <a href={project.deploylink} target="_blank" rel="noreferrer">Site</a>
              </div>
            </CardProject>
          ))}
        </Card>
      </div>
    </Project>
  )
}
