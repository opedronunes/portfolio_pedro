import React from 'react'
import {data} from '../data/projects'
import { Card, CardProject, Project } from '../assets/styles/components/project'
import { BiGitBranch } from 'react-icons/bi'
import { TbWorldUpload } from 'react-icons/tb'
import { motion, AnimatePresence } from 'framer-motion'

import imgCard1 from '../assets/images/rusch.png';

export function Projects() {

  return (
    <Project>
      <div className="container">
        <h2 className="title">Projetos</h2>
        <div id="card-test">
          <div className="card-content">
            <img src={imgCard1} alt="" />
            <div className="card-body">
              <h4>Titulo</h4>
              <p>desciption</p>
              <div className="card-technologies">
                stacks
              </div>
              <div className="card-links">
                <a href="">Link1</a>
                <a href="">Link2</a>
              </div>
            </div>
          </div>
        </div>
        <Card>
          <AnimatePresence>
            {data.map((project) => (
              <motion.div
              animate={{opacity: 0}}
              whileInView={{opacity: 1}}
              viewport={{once: true}}
              transition={{delay: 0.5, duration: 0.8, times: [0, 0.2, 1]}}
              exit={{ opacity: 0 }}
              >
                <CardProject className="project" key={project.id}>
                  <img src={project.image} alt={project.description} />
                  <h4>{project.title}</h4>
                  <div className="tech-card">{project.technologies}</div>
                  <p>{project.description}</p>
                  <div className="link-card">
                    <a href={project.githublink} target="_blank" rel="noreferrer"><BiGitBranch size={19} /> GitHub</a>
                    <a href={project.deploylink} target="_blank" rel="noreferrer"><TbWorldUpload size={19} /> Site</a>
                  </div>
                </CardProject>
              </motion.div>
            ))}
          </AnimatePresence>
        </Card>
      </div>
    </Project>
  )
}
