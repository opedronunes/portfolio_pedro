import React from 'react'
import { Link } from 'react-router-dom'
import ImgTOP from '../../assets/images/cartoon-dev.png'
import { TopSection } from '../../assets/styles/components/top'

export function Top() {
  return (
    <TopSection>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="top">
              <h1><strong>P</strong>edro <strong>N</strong>unes</h1>
              <p>Sou desenvolvedor Web</p>
              <div className="top-links">
                <a href="https://wa.me/qr/OZWPJVZZLJ2WG1" target="_blank">Saiba mais</a>
                <Link to={'/projects'}>Projetos</Link>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="top-img">
              <img src={ImgTOP} alt="" />
            </div>
          </div>
        </div>
      </div>
    </TopSection>
  )
}
