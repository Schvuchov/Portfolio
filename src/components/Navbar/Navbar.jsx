import './style.css'

import { useState, useEffect } from "react"
import { Link } from "react-scroll"

const Navbar = () => {

  const [navActive, setNavActive] = useState(false)

  const toggleNav = () => {
    setNavActive(!navActive)
  }

  const closeMenu = () => {
    setNavActive(false)
  }

  useEffect(() => {
    const handleResize = () => {
      if(window.innerWidth <= 500){
        closeMenu();
      }
    };

    window.addEventListener("resize", handleResize)

    //remove por causa de memory leak
    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  //Não entendi o pq desse ser <= 1200
  useEffect(() => {
    const handleResize = () => {
      if(window.innerWidth <= 1200){
        closeMenu();
      }
    };
  }, [])

  return(
    <nav className={`navbar ${navActive? "active" : ""}`}>

      <div>
        <img className='logoImg' src="Portfolio/src/Imagens/logo.png" alt="Logo" />
      </div>

      <a className={`navHamburguer ${navActive? "active" : ""}`} onClick={toggleNav}>
        <span className="navHamburguerLine"></span>
        <span className="navHamburguerLine"></span>
        <span className="navHamburguerLine"></span>
      </a>

      <div className={`navbarItems ${navActive ? "active" : ""}`}>
        <ul>
          <li>
            <Link 
              onClick={closeMenu} 
              activeClass="navbarActiveContent"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="startSection"
              className="navbarContent"
            >
              Home
            </Link> 
          </li>
          <li>
            <Link 
              onClick={closeMenu} 
              activeClass="navbarActiveContent"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="skillsSection"
              className="navbarContent"
            >
              Conhecimentos
            </Link> 
          </li>
          <li>
            <Link 
              onClick={closeMenu} 
              activeClass="navbarActiveContent"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="aboutSection"
              className="navbarContent"
            >
              Sobre
            </Link> 
          </li>
          <li>
            <Link 
              onClick={closeMenu} 
              activeClass="navbarActiveContent"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="projectsSection"
              className="navbarContent"
            >
              Projetos
            </Link> 
          </li>
                
        </ul>
      </div>
      <Link 
        onClick={closeMenu} 
        activeClass="navbarActiveContent"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        to="contactSection"
        className="btn btnNavContact"
      >
        Contato
      </Link> 
    
    </nav>
  )

}

export default Navbar