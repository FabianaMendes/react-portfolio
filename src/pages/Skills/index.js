import Card from '../../components/Cards';
import SkillBar from '../../components/SkillBar';
import './style.css';

export default function Skills() {
  return (
    <div className="container">
      <h2>Courses</h2>
      <div className="line"></div>
      <ul className="courses-container">
        <li>
          <h4>DIO Campus Expert</h4>
          <h5>Digital Innovation One</h5>
          <p><span>Carga Horária: </span>20h</p>
          <p><span>Conclusão: </span>Março/2022</p>
        </li>
        <li>
          <h4>Curso Vue.js do zero ao avançado na prática</h4>
          <h5>Udemy</h5>
          <p><span>Carga Horária: </span>12h</p>
          <p><span>Conclusão: </span>Novembro/2021</p>
        </li>
        <li>
          <h4>React.js + Typescript - Dashboard Completo</h4>
          <h5>Udemy</h5>
          <p><span>Carga Horária: </span>16.5h</p>
          <p><span>Conclusão: </span>Julho/2021</p>
        </li>
        <li>
          <h4>Formação React.js</h4>
          <h5>Alura</h5>
          <p><span>Carga Horária: </span>100h</p>
          <p><span>Conclusão: </span>Março/2021</p>
        </li>
        <li>
          <h4>Java Spring Boot + React.js + React Native</h4>
          <h5>DevSuperior</h5>
          <p><span>Carga Horária: </span>16h</p>
          <p><span>Conclusão: </span>Janeiro/2021</p>
        </li>
        <li>
          <h4>HTML5 e CSS3 Completo</h4>
          <h5>Udemy</h5>
          <p><span>Carga Horária: </span>6h</p>
          <p><span>Conclusão: </span>Dezembro/2020</p>
        </li>
        <li>
          <h4>Javascript ES6 Essencial</h4>
          <h5>Digital Innovation One</h5>
          <p><span>Carga Horária: </span>-</p>
          <p><span>Conclusão: </span>Dezembro/2020</p>
        </li>
        <li>
          <h4>Java - Programação Orientada a Objetos</h4>
          <h5>Udemy</h5>
          <p><span>Carga Horária: </span>50h</p>
          <p><span>Conclusão: </span>Outubro/2020</p>
        </li>
        <li>
          <h4>Java - Lógica de Programação e algoritmos</h4>
          <h5>Udemy</h5>
          <p><span>Carga Horária: </span>8h</p>
          <p><span>Conclusão: </span>Março/2020</p>
        </li>
        <li>
          <h4>Gestão Ágil com Scrum</h4>
          <h5>Udemy</h5>
          <p><span>Carga Horária: </span>6.5h</p>
          <p><span>Conclusão: </span>Janeiro/2020</p>
        </li>
        <li>
          <h4>Empreendedorismo, Negócios e Startups</h4>
          <h5>Fast MBA</h5>
          <p><span>Carga Horária: </span>7h</p>
          <p><span>Conclusão: </span>Janeiro/2020</p>
        </li>
        <li>
          <h4>Liderança e Gestão de Pessoas</h4>
          <h5>Fast MBA Lead</h5>
          <p><span>Carga Horária: </span>7h</p>
          <p><span>Conclusão: </span>Janeiro/2020</p>
        </li>
        <li>
          <h4>Modelagem de Dados</h4>
          <h5>Fundação Bradesco</h5>
          <p><span>Carga Horária: </span>12h</p>
          <p><span>Conclusão: </span>Fevereiro/2019</p>
        </li>
        <li>
          <h4>Empreendedorismo e Inovação</h4>
          <h5>Fundação Bradesco</h5>
          <p><span>Carga Horária: </span>12h</p>
          <p><span>Conclusão: </span>Fevereiro/2019</p>
        </li>
      </ul>
      <h2>My Skills</h2>
      <div className="line"></div>
      <h3>Hard Skills</h3>
      <div className="skills">
        <SkillBar
          name="React Native"
          size="80"
        />
        <SkillBar
          name="React"
          size="80"
        />
        <SkillBar
          name="HTML"
          size="80"
        />
        <SkillBar
          name="CSS"
          size="80"
        />
        <SkillBar
          name="Typescript"
          size="80"
        />
        <SkillBar
          name="Scrum"
          size="80"
        />
        <SkillBar
          name="Javascript"
          size="70"
        />
        <SkillBar
          name="Git/Github/Gitlab"
          size="70"
        />
        <SkillBar
          name="Figma"
          size="60"
        />
        <SkillBar
          name="Design de Interfaces"
          size="30"
        />
        <SkillBar
          name="Next.js"
          size="30"
        />
        <SkillBar
          name="Vue.js"
          size="20"
        />
        <SkillBar
          name="App Center"
          size="20"
        />
        <SkillBar
          name="AWS S3"
          size="10"
        />
        <SkillBar
          name="Java"
          size="10"
        />
        <SkillBar
          name="Bootstrap"
          size="10"
        />
        <SkillBar
          name="Material UI"
          size="10"
        />
      </div>
      <br />
      <h3>Soft Skills</h3>
      <ul className="skills">
        <li >Flexibilidade</li>
        <li>Resolução de problemas</li>
        <li>Ética</li>
        <li>Empatia</li>
        <li>Comunicação oral</li>
        <li>Comunicação escrita</li>
        <li>Curiosidade</li>
        <li>Foco</li>
        <li>Resiliência</li>
        <li>Colaboração</li>
        <li>Liderança</li>
        <li>Organização</li>
        <li>Autonomia</li>
        <li>Auto gestão</li>
        <li>Negociação</li>
        <li>Criatividade</li>
      </ul>
    </div>
  );
}