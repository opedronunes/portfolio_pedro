import React from 'react'
import { ContactStyled } from '../assets/styles/components/constact'
import { data } from '../data/social'

export function Contact() {
  return (
    <ContactStyled>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="card-social">
              {data.map((social) => (
                <ul className="social">
                  <li key={social.id}>
                    <div className="icon-social">{social.Icon}</div>
                    <a href={social.link}>{social.name}</a>
                  </li>
                </ul>
              ))}
            </div>
          </div>
          <div className="col-md-6">
            <form action="">
              Em construção!
            </form>
          </div>
        </div>
      </div>
    </ContactStyled>
  )
}
