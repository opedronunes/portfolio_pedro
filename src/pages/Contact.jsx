import React from 'react'
import { ContactStyled, FormStyled } from '../assets/styles/components/contact'
import { data } from '../data/social'
import { useForm } from 'react-hook-form';

export function Contact() {

  const { register, formState: { errors }, handleSubmit } = useForm();

  const onSubmit = (data) => console.log(data);

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
              <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="">
                  Nome e sobrenome
                  <input {...register("firstName", { required: true })} />
                  <span className='text-danger'>{errors.firstName?.type === 'required' && "Oops, Preciso saber seu nome!"}</span>
                </label>

                <label>
                  E-mail:
                  <input {...register("mail", { required: "Email Address is required" })} />
                  <span className='text-danger'>{errors.mail?.message}</span>
                </label>

                <label>
                  Dissertação:
                  <textarea />
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
