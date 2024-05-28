import React from 'react'
import "./style.css"

const About = () => {
  return (
    <section id="aboutSection" className='aboutSection'>
        <div className="aboutSecImg">
            <img src="Portfolio/src/Imagens/Img.png" alt="AboutMe" />
        </div>
        <div className="aboutSecContentDiv">
            <h1 className="aboutSecHeading">Sobre mim</h1>
            <p className='aboutp'>Eu sou a Bárbara, tenho 28 anos, moro em Florianópolis. Viajante, amante da natureza e tutora do caramelo Mint.</p>
            <p className='aboutp'>Sou bacharel em Física pela UFSC e foi na faculdade que tive meu primeiro contato com programação usando Python e Javascript</p>
            <p className='aboutp'>Conclui recentemente o programa Entra21-Blusoft na turma de React, desenvolvendo conhecimentos técnicos e soft skills. Além de cursos através de plataformas online.</p>
            <p className='aboutp'>Estou sempre em busca de novos projetos. Vamos trabalhar juntos? </p>
        </div>
    </section>
  )
}

export default About