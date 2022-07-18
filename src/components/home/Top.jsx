import { motion, AnimatePresence } from 'framer-motion'
import React from 'react'
import { Link } from 'react-router-dom'
import Emoji from '../../assets/images/emoji.png'
import { TopSection } from '../../assets/styles/components/top'

export function Top() {
  
  return (
    <TopSection>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <AnimatePresence>
              <motion.div className="top"
              initial={{opacity: 0}}
              animate={{opacity: 1, x: [-80, 0]}}
              transition={{duration: 0.8, times: [0, 0.2, 1]}}
              exit={{opacity: 0}}
              >
                <h1>Pedro Nunes</h1>
                <p>Olá humano!</p>
                <p>Sou um <strong>desenvolvedor Web</strong>. Em constante <strong>evoluçao</strong>.</p>
                <p>Pronto para <strong>aprender</strong> e <strong>contribuir</strong>!</p>
                
                <div className="top-links">
                  <a href="https://wa.me/qr/OZWPJVZZLJ2WG1" target="_blank">Saiba mais</a>
                  <Link to={'/projects'}>Projetos</Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="col-md-6">
            <div className="top-img">
              <img src={Emoji} alt="" />
            </div>
          </div>
        </div>
      </div>
    </TopSection>
  )
}
