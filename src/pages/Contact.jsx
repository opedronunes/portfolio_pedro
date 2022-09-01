import { useForm, ValidationError } from '@formspree/react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { ContactStyled, FormStyled } from '../assets/styles/components/contact'
import { data } from '../data/social'
 

export function Contact() {
  
  /*
  const [formValues, setFormValues] = useState({});

  const handleInputChange = (e) => {
    
  #Função que gerencia todos os inputs, pegando o name e seus valores 
    const {name, value} = e.target;
    setFormValues({...formValues, [name]: value});
  
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    console.log('*** handleSubmit', data);
  
  }
  */

  
  const [state, handleSubmit] = useForm("maykwopk");

  if(state.succeeded){
    return <div className="container">
      <div className="d-flex flex-column align-items-center justify-content-center">
        <h2>Obrigado pela mensagem!</h2>
        <a className="btn btn-success py-2" href="/contact">Voltar</a>
      </div>
    </div>
    //window.location.href = "/contact";
  }
  return (
    <ContactStyled>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="card-social">
              {data.map((social) => (
                <ul key={social.id} className="social">
                  <li>
                    <div className="icon-social">{social.Icon}</div>
                    <a href={social.link} target="_blank">{social.name}</a>
                  </li>
                </ul>
              ))}
            </div>
          </div>
          <div className="col-md-6">
            <FormStyled>
              <form onSubmit={handleSubmit}>

                <label htmlFor="name">Nome e Sobrenome:
                  <input type="text" name="name" id="name" placeholder="Digite seu nome" required />
                  <ValidationError field="name" prefix="Nome" errors={state.errors} />
                </label>

                <label htmlFor="email">E-mail:
                  <input type="email" name="email" id="email" placeholder="Digite seu email" required />
                  <ValidationError field="email" prefix="Email" errors={state.errors}/>
                </label>

                <label htmlFor="message">Mensagem:
                  <textarea name="message" id="message" placeholder="Descreva do que você precisa" />
                  <ValidationError field="message" prefix="Message" errors={state.errors} />
                </label>

                <button type="submit" disabled={state.submitting}>Enviar</button>

                {/*
                <label htmlFor="name">
                  Nome e sobrenome:
                  <input type="text" id="name" name="name" placeholder="Seu Nome" onChange={handleInputChange} value={formValues.name || ''} required />
                </label>

                <label htmlFor="email">
                  E-mail:
                  <input type="email" id="email" name="email" placeholder="Seu e-mail" onChange={handleInputChange} value={formValues.email || ''} required />
                </label>

                <label htmlFor="description">
                  Mensagem:
                  <textarea type="text" id="description" name="description" placeholder="Descreva do que você precisa." onChange={handleInputChange} value={formValues.description || ''} required />
                </label>

                <button type="submit">
                  Enviar
                </button>
              */}
              </form>
            </FormStyled>
          </div>
        </div>
      </div>
    </ContactStyled>
  )
}
