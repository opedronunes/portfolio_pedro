import React from 'react'
import { FooterStyled } from '../assets/styles/components/footer'

export function Footer() {

  return (
    <FooterStyled>
        <div className="container">
            <div className="footer-content">
                <p><strong>{'<'}</strong>{'Todos os direitos reservados - 👨‍💻 Pedro Nunes'}<strong>{' />'}</strong></p>
            </div>
        </div>
    </FooterStyled>
  )
}
