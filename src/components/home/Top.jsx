import { motion, AnimatePresence } from 'framer-motion'
import { React} from 'react'
import { Link } from 'react-router-dom'
import { TopSection } from '../../assets/styles/components/top'
import { Carousel } from 'react-responsive-carousel'
import { GitUser } from './GitUser'

import "react-responsive-carousel/lib/styles/carousel.min.css";


import Foto1 from '../../assets/images/banner-01.jpg';
import Foto2 from '../../assets/images/banner-02.jpg';
import Foto3 from '../../assets/images/banner-03.jpg';



const carouselImg = [
  {
    id: 1,
    Img: Foto1,
    alt: "Banner escrito, criação de sites responsivos."
  },
  {
    id: 2,
    Img: Foto2,
    alt: "Banner escrito, criação de LandingPages."
  },
  {
    id: 3,
    Img: Foto3,
    alt: "Banner escrito, criação de Sites institucionais."
  },
];

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
                <h3>Olá humano!</h3>
                <strong>Me chamo,</strong>
                <h1>Pedro Nunes</h1>
                <p>Sou <strong>desenvolvedor Web</strong>. Em constante <strong>evoluçao</strong>.</p>
                <p>Pronto para <strong>aprender</strong> e <strong>contribuir</strong>!</p>
                
                <div className="top-links">
                  <a href="https://wa.me/qr/OZWPJVZZLJ2WG1" target="_blank">Saiba mais</a>
                  <Link to={'/projects'}>Projetos</Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="col-md-6">
              <GitUser />
          </div>
        </div>
        
        <div className="carousel">
          <Carousel autoPlay infiniteLoop={true} showThumbs={false} interval={3000} showStatus={false} showIndicators={false}>
            {carouselImg.map((carolImg) => (
              <div key={carolImg.id}>
                <img src={carolImg.Img} alt={carolImg.alt} />
              </div>
            ))}
          </Carousel>
        </div>
      </div>  
    </TopSection>
  )
}
