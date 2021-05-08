import Card from '../../components/Cards';
import SkillBar from '../../components/SkillBar';
import './style.css';

export default function Skills() {
    return (
        <>
            <div className="container">
                <h2>Courses</h2>
                <div className="line"></div>
                    <div className="courses-container">
                        <Card
                            position="Formação React.js"
                            company="Alura"
                            time="100h"
                            description="Mar. 2021"
                        />
                        <Card
                            position="Java Spring Boot + React.js + React Native"
                            company="DevSuperior"
                            time="16h"
                            description="Jan. 2021"
                        />
                        <Card
                            position="HTML5 e CSS3 Completo"
                            company="Udemy"
                            time="6h"
                            description="Dez. 2020"
                        />
                        <Card
                            position="Javascript ES6 Essencial"
                            company="Digital Innovation One"
                            time=""
                            description="Dez. 2020"
                        />
                        <Card
                            position="Java - Programação Orientada a Objetos"
                            company="Udemy"
                            time="50h"
                            description="Out. 2020"
                        />
                        <Card
                            position="Java - Lógica de Programação e algoritmos"
                            company="Udemy"
                            time="8h"
                            description="Mar. 2020"
                        />
                        <Card
                            position="Gestão Ágil om Scrum"
                            company="Udemy"
                            time="6.5h"
                            description="Jan. 2020"
                        />
                        <Card
                            position="Empreendedorismo, Negócios e Startups"
                            company="Fast MBA"
                            time="7h"
                            description="Jan. 2020"
                        />
                        <Card
                            position="Liderança e Gestão de Pessoas"
                            company="Fast MBA Lead"
                            time="7h"
                            description="Jan. 2020"
                        />
                    </div>
                <h2>My Skills</h2>
                <div className="line"></div>
                <h3>Hard Skills</h3>
                    <div className="skills">
                        <SkillBar 
                            name="HTML"
                            size="70"
                        />
                        <SkillBar 
                            name="CSS"
                            size="70"
                        />
                        <SkillBar 
                            name="Javascript"
                            size="60"
                        />
                        <SkillBar 
                            name="React"
                            size="60"
                        />
                        <SkillBar 
                            name="Figma"
                            size="60"
                        />
                        <SkillBar 
                            name="Scrum"
                            size="50"
                        />
                        <SkillBar 
                            name="Git/Github/Gitlab"
                            size="50"
                        />
                        <SkillBar 
                            name="Java"
                            size="30"
                        />
                        <SkillBar 
                            name="Typescript"
                            size="20"
                        />
                        <SkillBar 
                            name="Bootstrap"
                            size="20"
                        />
                        <SkillBar 
                            name="Material UI"
                            size="10"
                        />
                    </div>
                    <br/>
                <h3>Soft Skills</h3>
                    <div className="skills">
                        <SkillBar 
                            name="Flexibilidade"
                            size="80"
                        />
                        <SkillBar 
                            name="Resolução de problemas"
                            size="80"
                        />
                        <SkillBar 
                            name="Ética"
                            size="80"
                        />
                        <SkillBar 
                            name="Empatia"
                            size="80"
                        />
                        <SkillBar 
                            name="Comunicação oral e escrita"
                            size="80"
                        />
                        <SkillBar 
                            name="Foco"
                            size="80"
                        />
                        <SkillBar 
                            name="Resiliência"
                            size="80"
                        />
                        <SkillBar 
                            name="Colaboração"
                            size="70"
                        />
                        <SkillBar 
                            name="Liderança"
                            size="70"
                        />
                        <SkillBar 
                            name="Organização"
                            size="70"
                        />
                        <SkillBar 
                            name="Autonomia"
                            size="70"
                        />
                        <SkillBar 
                            name="Negociação"
                            size="60"
                        />
                        <SkillBar 
                            name="Criatividade"
                            size="50"
                        />
                    </div>
            </div>
        </>
    );
}