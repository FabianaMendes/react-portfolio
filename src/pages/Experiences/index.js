import Card from "../../components/Cards";
import { formatItemsForList } from "../../helpers";
import "./style.css";

export default function Experiences() {
  return (
    <>
      <div className="container">
        <h2>Experiences</h2>
        <div className="line"></div>
        <div className="cards-experiences">
          <Card
            position="Senior Frontend Software Developer"
            company="Theia"
            time="10/2022 - o momento"
            description={formatItemsForList([
              `Atuar na manutenção e evolução dos web apps da Theia`,
              `Mentorar e auxiliar estagiários ou juniores contribuindo
              para uma evolução mais rápida e focada em nossas necessidades`,
              `Contribuir para melhor documentação de nossos produtos,
              regras de negócio e fluxos`,
              `Escrever testes unitários, de integração e E2E e garantir
              que a cobertura de testes seja sempre crescente`,
              `Acompanhar andamento das tarefas do time, auxiliando nos desbloqueios,
              quando possível, a fim de reduzir tempo de entrega e garantir
              um bom fluxo da esteira`,
              `Fomentar e contribuir com a cultura de melhoria contínua`,
              `Melhorar continuamente a arquitetura aumentando a escalabilidade
              das aplicações`,
              `Melhorar e automatizar fluxos sempre que possível`,
              `Uma de minhas realizações foi reativar o projeto que tinham
              de uma biblioteca de componentes e incentivar seu uso, a fim de
              otimizar o processo de desenvolvimento no frontend.`
            ])}
          />
          <Card
            position="Frontend Developer"
            company="Close-Up International"
            time="05/2022 - 10/2022"
            description={formatItemsForList([
              `Sustentação e implantação de novas features em microfrontends com Module Federation`,
              `Criação de interfaces e pequenas prototipações no Figma`,
              `Utilizamos metodologia Scrum e Jira para gestão de tarefas`
            ])}
          />
          <Card
            position="Analista de Desenvolvimento Front-End Mobile"
            company="Jazz Tech"
            time="08/2021 - 04/2022"
            description={formatItemsForList([
              `Desenvolver novas features e participar da sustentação
              (correção de bugs) de apps móveis (white label) em React Native
              + Typescript utilizando React Native CLI (não utilizamos Expo).`,
              `Desenvolver testes unitários com Jest e testes de integração
              (e2e) com Detox.`,
              `Realizar code-review de itens de sustentação e implementação
              dos apps.`,
              `Participar ativamente dos rituais da metodologia Scrum (Daily,
              Planejamento, Refinamento, Retrospectiva, Review).`,
              `Acompanhar e mover os cards conforme status das tarefas da
              sprint no Jira.`,
              `Realizar merges gradativos conforme itens vão sendo aprovados,
              resolvendo eventuais conflitos. Para versionamento utilizamos
              Gitlab e um fluxo próximo ao Gitflow (master/pprd/dev/branchs de
              desenvolvimento).`,
              `Gerar novas versões quando necessário e disponibilizar
              atualizações com codepush.`,
              `Adicionar, excluir ou editar arquivos do projeto na AWS-S3.`,
              `Utilizamos Design System(Atomic Design) e Styled Components`
            ])
            }
          />
          <Card
            position="Desenvolvedora Front-End React"
            company="Oni Web Officer"
            time="01/2021 - 05/2021"
            description={formatItemsForList([
              `Criação e prototipação de interfaces web com Figma.`,
              `Desenvolvimento de aplicações web em React, com responsividade
              e fidelidade aos layouts.`,
              `Identificar melhorias, reparos e necessidades dos projetos e
              solucioná-los.`,
              `Criar e seguir sprints e tarefas no Jira (metodologia Scrum),
              reportando tempo gasto em cada atividade.`,
              `Ferramentas, bibliotecas, frameworks e linguagens com os quais
              tive contato: HTML, CSS, Javascript, React.js (Jest, Mock,
              Axios, Hooks, Router, etc.), Next.js, Styled Components,
              Typescript, Bootstrap, MaterialUI, Jira, Scrum, Toggl, Slack,
              Figma, Canva, Gimp, Git, Github, GitLab.`
            ])
            }
          />
        </div>
      </div>
    </>
  );
}
