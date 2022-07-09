import React from 'react'
import { Link } from 'react-router-dom'
import ImgTOP from '../../assets/images/cartoon-dev.png'
import Cartoon from '../../assets/images/cartoon.png'
import Emoji from '../../assets/images/emoji.png'
import { TopSection } from '../../assets/styles/components/top'

export function Top() {
  return (
    <TopSection>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="top">
              <h1>Pedro Nunes</h1>
              <p>Olá humano!</p>
              <p>Sou um <strong>desenvolvedor Web</strong>. Em constante <strong>evoluçao</strong>.</p>
              <p>Pronto para <strong>aprender</strong> e <strong>contribuir</strong>!</p>
              
              <div className="top-links">
                <a href="https://wa.me/qr/OZWPJVZZLJ2WG1" target="_blank">Saiba mais</a>
                <Link to={'/projects'}>Projetos</Link>
              </div>
            </div>
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
