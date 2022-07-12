import React, { useState } from 'react'
import { ContactStyled, FormStyled } from '../assets/styles/components/contact'
import { data } from '../data/social'


export function Contact() {

  //const { register, formState: { errors }, handleSubmit } = useForm();
  //const onSubmit = (data) => console.log(data);
  /*
  const handleInputChange = (e) => {
    console.log('*** handleImputChange', e.target.value);
    setValue(e.target.value)
  }
  */
  
  const [formValues, setFormValues] = useState({});

  const handleInputChange = (e) => {
    
    /** Função que gerencia todos os inputs, pegando o name e seus valores */
    const {name, value} = e.target;
    setFormValues({...formValues, [name]: value});
  
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    console.log('*** handleSubmit', data);
  
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
                    <a href={social.link}>{social.name}</a>
                  </li>
                </ul>
              ))}
            </div>
          </div>
          <div className="col-md-6">
            <FormStyled>
              <form onSubmit={handleSubmit}>
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
              </form>
            </FormStyled>
          </div>
        </div>
      </div>
    </ContactStyled>
  )
}
