import React from 'react'
import { ExperienceStyled } from '../../assets/styles/components/experiences';

export function Experiences() {

let btn = document.querySelectorAll('button')
let tabs = document.querySelectorAll('.tabs > div')

btn.forEach(function(click){
  click.addEventListener('click', () => {
    tabs.forEach((tab) => {
      tab.classList.add('content-tabs')
    })

    let tabId = click.getAttribute('data-id')
    let tab = document.querySelector("#" + tabId)
    tab.classList.remove('content-tabs')

  })
});

const list = document.querySelectorAll('.list');
function activeLink(){
    list.forEach((item) =>
    item.classList.remove('active'));
    this.classList.add('active');
}
list.forEach((item) =>
item.addEventListener('click', activeLink));

  return (
    <ExperienceStyled>
      <div className="container">
        <h2 className="title">Experiências</h2>
        <div className="row">
          <div className="col-md-3">
            <div id="btn-tabs">
              <button className="list active" data-id="content1">Freelancer</button>
              <button className="list" data-id="content2">Nonô Transportes</button>
            </div>
          </div>

          <div className="tabs col-md-9">

            <div id="content1">
              <div className="header-tabs">
                <h4>Web Developer</h4>
                <small>Jan 2021 - Atual</small>
              </div>
              <p>Freelancer</p>
              <p className="body-tabs">
                Criando soluções para empresas com a criação de sites responsivos e dinâmicos.
              </p>
            </div>
            
            <div id="content2" className="content-tabs">
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

