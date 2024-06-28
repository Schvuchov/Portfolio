import data from "../../data/indexSkills.json"
import "./style.css"

const Skills = () => {
  return (
    <section id="skillsSection" className='skillsSection'>
        <div>
            <h2 className="skillsh2">Conhecimentos</h2>
            <p className="skillsp">Alguns dos meus conhecimentos</p>
        </div>
        <div className="skillsContainerContent">
            {data?.skills?.map((item, index) => (
                <div key={index} className="skillsCard">
                    <div className="skillsImgDiv">
                        <img className="skillsImg" src={item.src} alt="Imagem Habilidade" />
                        <h3 className="skillsCardTitle">{item.title}</h3>
                    </div>

                    <div className="skillsCardContent"> 
                        <p className="skillsCardDescrip">{item.description}</p>
                    </div>
                </div>
            ))}
        </div>

    </section>
  )
}

export default Skills