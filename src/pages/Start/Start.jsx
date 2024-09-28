import React from 'react';
import "./style.css"

import { Link } from "react-scroll"

const Start = () => {
    return (
        <section id="startSection" className='startSec'>
            <div className='divStartSec'>
                <div className='conteudoSec'>
                    <p className='startp'>Olá! Meu nome é Bárbara e esse é o meu portfolio</p>
                    <h1>Dev <span className='spanStart'>Front End</span></h1>
                    <p className='startp'>Fique a vontade para explorar por aqui</p>
                    <Link 
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500} 
                        to="contactSection" 
                        className='btn btnContato'
                    >
                        Entre em contato
                    </Link>    
                </div>
                <div className='imgStart'>
                {/*<img src="/Imagens/StarImg2.png" alt="Imagem Start" />*/}
                </div>
            </div>
            
        </section>
    );
};
 export default Start