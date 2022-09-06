import React from 'react'
import { useState } from 'react';
import { ExperienceStyled } from '../../assets/styles/components/experiences';

export function Experiences() {

  const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
      setToggleState(index);
    }

  return (
    <ExperienceStyled>
      <div className="container">
        <h2 className="title">Experiências</h2>
        <div className="row">
          <div className="col-md-3">
            <div id="btn-tabs">
              <button 
              className={toggleState === 1 ? "list active" : ""}
              onClick={() => toggleTab(1)}
              >
                Freelancer
              </button>
              <button 
              className={toggleState === 2 ? "list active" : ""}
              onClick={() => toggleTab(2)}
              >
                Nonô Transportes
              </button>
            </div>
          </div>

          <div className="tabs col-md-9">

            <div className={toggleState === 1 ? "content active-content" : "content"}>
              <div className="header-tabs">
                <h4>Web Developer</h4>
                <small>Jan 2021 - Atual</small>
              </div>
              <p>Freelancer</p>
              <p className="body-tabs">
                Criando soluções para empresas com a criação de sites responsivos e dinâmicos.
              </p>
            </div>

            <div className={toggleState === 2 ? "content active-content" : "content"}>
              <div className="header-tabs">
                <h4>Gerente administrativo</h4>
                <small>Jun 2021 - Atual</small>
              </div>
              <p>Nonô Transportes</p>
              <p className="body-tabs">
                Nesta empresa atuo em diversas áreas como recursos humanos, gestão financeira, gestão de transporte e faturamento.
              </p>
            </div>
          </div>


        </div>
      </div>
    </ExperienceStyled>
  )
}

