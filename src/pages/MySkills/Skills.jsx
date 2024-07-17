import { useState } from "react";
import data from "../../data/indexSkills.json";
import "./style.css";
import { Plus, X } from "lucide-react";

const Skills = () => {
    //o estado inicializa atribuindo false a cada item da lista de skills
    //description controla se a descrição de cada card esta visivel ou não
    const [description, setDescription] = useState(data.skills.map(() => false));

    //index é o do card cujo button esta chamando a função
    const openDescription = (index) => {
        //prev é o estado previo do array de booleanos la do useState
        //atual é o valor atual do elemento durante o processo e i o seu indice
        setDescription((prev) => 
            //percorrendo o array prev, se o indice i é igual ao index(do card), mudamos de false pra true, se não deixamos o estado atual 
            prev.map((atual, i) => (i === index ? true : atual)));
    };

    const closeDescription = (index) => {
        setDescription((prev) => 
            prev.map((atual, i) => (i === index ? false : atual)));
    };

    return (
        <section id="skillsSection" className="skillsSection">
            <div className="skillsTitleSec">
                <h2 className="skillsh2">Conhecimentos</h2>
                <p className="skillsp">Alguns dos meus conhecimentos</p>
            </div>
            <div className="skillsContainerContent">
                {data?.skills?.map((item, index) => (
                    <div key={index} className="skillsCard">
                        {!description[index] ? (
                            <div className="skillsImgDiv">
                                <img className="skillsImg" src={item.src} alt="Imagem Habilidade"/>
                                <h3 className="skillsCardTitle">{item.title}</h3>
                                <button type="button" className="buttonSkill" onClick={() => openDescription(index)}><Plus /></button>
                            </div>
                        ) : (
                            <div className="skillsCardContent">
                                <p className="skillsCardDescrip">{item.description}</p>
                                <button type="button" className="buttonSkill" onClick={() => closeDescription(index)} ><X /></button>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
