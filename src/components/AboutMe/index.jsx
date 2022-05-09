import React from 'react'
import './styles.css'

const AboutMe = () => {
  return (
    <section className='aboutMe'>
      
        <div className='card-profile'></div>
        <article className='article'>
            <h2 className='subtitulo'>Olá, Eu sou <span className='destaque'>Jackson</span></h2>

            <p className='paragraph'>
              Sou formado em análise e desenvolvimento de sistemas, e atualmente estudante
              Front-End, ê um dos meus principaís objetivo é dominas as tecnologias como HTML, CSS,
              JavaScript, React.JS, APIs, JEST, Atomic Designer e demais tecnologias e metodologias relacionadas.
            </p>

            <div className='conatiner-icons'>

              <a href="https://github.com/cajui54" target='_blank'>
                <i className="fa-brands fa-github"></i>
              </a>

              <a href="https://www.instagram.com/" target='_blank'>
                <i className="fa-brands fa-whatsapp"></i>
              </a>

              <a href="https://www.linkedin.com/in/jackson-silva-50641b184/" target='_blank'>
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
            </div>
        </article>
        
    </section>
  )
}

export default AboutMe
