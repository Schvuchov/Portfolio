import React from 'react'
import "./style.css"

const About = () => {
  return (
    <section id="aboutSection" className='aboutSection'>
      <div>
        <h2 className="abouth2">Sobre mim</h2>
        <p className='aboutp'>Um pouco sobre quem eu sou</p>
      </div>
      <div className='aboutContainerContent'>
        <div className="aboutSecImg">
            <img src="/Imagens/Img2.png" alt="AboutMe" />
        </div>
        <div className="aboutSecContentDiv">  
            <p className='aboutpContent'>Eu sou a Bárbara, tenho 28 anos, moro em Florianópolis. Viajante, amante da natureza e tutora do caramelo Mint.</p>
            <p className='aboutpContent'>Sou bacharel em Física pela UFSC e foi na faculdade que tive meu primeiro contato com programação usando Python e Javascript</p>
            <p className='aboutpContent'>Conclui recentemente o programa Entra21-Blusoft na turma de React, desenvolvendo conhecimentos técnicos e soft skills. Além de cursos através de plataformas online.</p>
            <p className='aboutpContent'>Estou sempre em busca de novos projetos. Vamos trabalhar juntos? </p>
        </div>
      </div> 
    </section>
  )
}

export default About