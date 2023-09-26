'use client'
import React from 'react'
import {data} from '../data/projects'
import { Card, CardProject, Project } from '../assets/styles/components/project'
import { BiGitBranch } from 'react-icons/bi'
import { TbWorldUpload } from 'react-icons/tb'
import { motion, AnimatePresence } from 'framer-motion'
import { FolderOpen } from 'phosphor-react'

import { useFetch } from '../hooks/useFetch'

export function Projects() {

  const { data: repos, isFetching } = useFetch ('https://api.github.com/users/opedronunes/repos');

  return (
    <Project>
      <div className="container">
        <h2 className="title">Principais Projetos</h2>
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

        <div id="git_repo">
          <h2 className="title">GitHub</h2>
          { isFetching && <p>Carregando...</p> }
          {repos?.slice(0,5).map(repo => {
            return(
              <div className="card_repo" key={repo.id}>
                <li className="card_repo_item">
                  <div className="card_repo_icon">
                    <FolderOpen size={32} />
                  </div>
                  <a href={repo.html_url} target="_blank" rel="noreferrer">
                    <h4>{repo.name}</h4>
                    <p>{repo.description}</p>
                    <p>Stack: {repo.language}</p>
                  </a>
                </li>
              </div>
            )
          })}
        </div>

      </div>
    </Project>
  )
}
