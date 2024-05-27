import React from 'react'
import data from "../../data/indexProjects.json"
import "./style.css"

const Projects = () => {
  return (
    <section id="projectsSection" className='projectsSection'>
      <div className='projectsTitleSec'>  
        <div className='projectsTitle'>
            <h2 className='projectsh2'>Projetos</h2>
            <p className='projectsp'>Alguns dos projetos que tenho feito</p>
        </div>
        <div>
          <a href="https://github.com/Schvuchov"><button className='btn projectsButton'>Ver no GitHub</button></a>
        </div>
      </div>

      <div className='projectsCard'>
        {data?.projects?.map((item, index) => (
          <a href={item.link} className='projectsLink'>
          <div key={index} className='projectsCardContent'>
            <div className='projectsCardImg'>
              <img src={item.src} alt="ImgProject"/>
            </div>

            <div className='projectsCardText'>
              <h3 className='projectsh3'>{item.title}</h3>
              <p className='projectsp'>{item.description}</p>
            </div>
          </div>
          </a>
        ))}
      </div>  
    </section>
  )
}

export default Projects