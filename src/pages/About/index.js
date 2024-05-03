import "./style.css";

export default function About() {
  return (
    <>
      <div className="container">
        <h2>Sobre mim</h2>
        <div className="line"></div>
        <h5 className="title-welcome">Olá, meu nome é</h5>
        <h1 className="title-name">Fabiana Mendes</h1>
        <h6>Escrevo código limpo, elegante e eficiente.</h6>
        <br></br>
        <p>
          Mais de 4 anos de experiência profissional trabalhando com diversas ferramentas
          de programação para entregar resultados de qualidade aos clientes.
        </p>
        <p>
          Especializada em construir (e ocasionalmente desenhar) produtos sólidos e
          escaláveis com ótimas experiências de usuário.
        </p>
        <br></br>
        <br></br>
        <ul>
          <li>
            Graduada em Análise e Desenvolvimento de Sistemas.
          </li>
          <li>
            Experiência com desenvolvimento frontend, web e mobile.
          </li>
          <li>
            Atualmente reside em Uberlândia - MG - Brasil.
          </li>
          <li>
            Capaz de contribuir e participar ativamente de outras áreas como design e produto.
          </li>
          <li>
            Pretende se especialializar em arquitetura e engenharia de softwares.
          </li>
          <li>
            Gosta de trabalhar com práticas de desenvolvimento ágil, possui bom raciocínio lógico e pensamento analítico.
          </li>
        </ul>
      </div>
    </>
  );
}
