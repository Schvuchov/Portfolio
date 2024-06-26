import React from 'react';
import "./style.css"

const Start = () => {
    return (
        <section id="startSection" className='startSec'>
            <div className='conteudoSec'>
                <p className='startp'>Olá! Meu nome é Bárbara e esse é o meu portfolio</p>
                <h1>Dev <span>Front End</span></h1>
                <p className='startp'>Fique a vontade para explorar por aqui</p>
                <button className='btn btnContato'>Entre em contato</button>    
            </div>
            <div className='imgStart'>
                <img src="/Imagens/startImg1.jpg" alt="Imagem Start" />

            </div>
        </section>
    );
};
 export default Start