import React from 'react'
import { AboutSection } from '../../assets/styles/components/about'
import { motion } from 'framer-motion'


export function About() {

  const today = new Date()
  const dateInit = new Date('2021-05-12')
  const difference = Math.abs((today.getTime() - dateInit.getTime()))
  const year = Math.ceil(difference / (1000 * 60 * 60 * 24 * 365))

  return (
    <AboutSection>
      <div className="container">
        <div className="about">
          <h2 className="title">Sobre</h2>
          <motion.div className="about-txt"
          animate={{opacity: 0}}
          whileInView={{opacity: 1}}
          viewport={{once: true}}
          transition={{delay: 0.5, duration: 0.8, times: [0, 0.2, 1]}}
          exit={{ opacity: 0 }}
          >
              <p>Sou <strong>desenvolvedor Web</strong> a <strong>{year} anos</strong>, apaixonado por tecnologias. 
              O único arrependimento que tenho é não ter começado os meus estudos na 
              programação antes. Mas nunca é tarde para adquirir novos conhencimentos, 
              neste sentido estou focado em aprender cada vez mais, disposto a conhecer 
              novas linguagens de programação, trabalhar em equipes e ajudar o próximo 
              a evoluir também!</p>
              <p>Atualmente estou estudando <strong>Back-End com PHP</strong> e aprimorando meus conhecimentos
              em <strong>banco de dados com Mysql</strong>, para me tornar um <strong>dev Full Stack</strong>. Paralelamente, 
              estou estudando por conta própria <strong>ReactJs e consumo de API's</strong> com os Hooks dessa Biblioteca 
              para entregar uma aplicação dinâmica e performática.</p>
          </motion.div>
        </div>
      </div>
    </AboutSection>
  )
}
