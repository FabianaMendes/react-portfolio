import Card from '../../components/Cards';
import './style.css';

export default function Experiences() {
    return (
        <>
                <div className="container">
                    <h2>Experiences</h2>
                    <div className="line"></div>
                    <div className="cards-experiences">
                        <Card 
                            position="Desenvolvedora Front-End React"
                            company="Oni Web Officer"
                            time="01/2021 - 05/2021"
                            description="
                            · Criação de designs de interfaces (web/mobile) e prototipações.
                            · Criação do front-end de websites e aplicações web em React, seguindo layouts, 
                            incluindo comunicação com backend e utilização de API’s diversas, testes, 
                            animações, rotas, etc.
                            · Identificar e solucionar demandas dos projetos.
                            · Criar e seguir sprints e tarefas do backlog (Scrum), reportando tempo gasto em cada atividade.
                            (Ferramentas, bibliotecas, linguagens: HTML, CSS, Javascript, React.js, TDD, Jest, Mock, Axios, Hooks, Router, 
                            StyledComponents, Typescript, Bootstrap, MaterialUI, Jira, Scrum, Toggl, Slack, Figma, Canva, Gimp, Git, GitHub, 
                            GitLab, API Rest, Code-Splitting, Linux)"
                        />
                        <Card 
                            position="Analista de RH"
                            company="Equilíbrio Saúde Ambiental"
                            time="05/2020 - 12/2020"
                            description="· Elaborar procedimentos para o setor de RH.
                            · Realizar processos de admissão, treinamento e rescisão seguindo PPRA e PCMSO da empresa.
                            · Comunicar afastamentos e suspensões e aplicar advertências.
                            · Acompanhar e transcrever pontos manuais para cálculo de vale-alimentação, vale-transporte, horas 
                            extras, adicionais noturnos e banco de horas (média de 50 funcionários).
                            · Fechamento de Folha de Pagamento para envio à contabilidade.
                            · Controle de vencimento de férias, ASO’s, CNH’s, NR’s e integrações.
                            · Lançamento mensal de documentação Patronal e Funcional em sistemas/plataformas de clientes.
                            · Recarga mensal de benefícios dos funcionários (vale-transporte, vale-alimentação).Página 2
                            · Checar condições e realizar pedidos e entregas de uniformes, materiais de escritório e EPI’s aos 
                            funcionários.
                            · Responsável pela criação do plano de cargos e salários, correções de erros graves em folha de 
                            pagamento, criação de checklist de documentações, organização de pastas e arquivos físicos do RH 
                            da empresa, organização do arquivo digital do RH, criação de modelos de termos de 
                            responsabilidade, ordens de serviço e fichas, redução em 95% de pendência de documentos em 
                            plataformas.
                            "
                        />
                        <Card 
                            position="Motorista"
                            company="Uber e 99Taxi"
                            time="05/2020 - 05/2020"
                            description="Atuação em Uberlândia-MG atendendo chamados entre 8:00-13:00h / 16:00-20:00h"
                        />
                        <Card 
                            position="Vendedora"
                            company="Planet Teen e Kids"
                            time="06/2019 - 01/2020"
                            description="· Abertura, limpeza e organização diária do estabelecimento.
                            · Separação e envio de condicionais.
                            · Atendimento e vendas presencial, telefone e whatsapp.
                            · Cobranças.
                            · Abertura e fechamento de caia.
                            · Baixa e cadastro de vendas e notas no sistema."
                        />
                        <Card 
                            position="Empreendedora"
                            company="Nya Senses e WoodBox Brasil"
                            time="11/2017 - 12/2019"
                            description="Nya Senses:  Estudo da cosmetologia natural e elaboração de fórmulas para diversos fins e tratamentos, 
                            incluindo hidratantes, sabonetes, tônicos, esfoliantes e máscaras. WoodBox Brasil: · Criação e desenho de peças decorativas e funcionais em madeiras diversas.
                            · Cálculo e execução das peças(cortes, encaixes, preparação, montagem).
                            · Estudo de tipos de materiais e indicações, finalizações, impermeabilização, lixação, envernizamento, 
                            encaixes, etc.
                            · Maquinário: serra de bancada, tupia, serra de mão, lixadeiras, tico-tico, pirógrafo.
                            · Peças da produção: porta temperos, tábuas de corte, porta xícaras, prateleiras, estantes, porta 
                            chaves, nichos, quadros, objetos decorativos, dentre outros"
                        />
                        <Card 
                            position="Empreendedora"
                            company="Cantinho da Roça"
                            time="04/2017 - 09/2017"
                            description=" Empresa especializada em produtos caipiras e/ou artesanais. 
                            · Sócia e funcionária em tempo integral. Horário de funcionamento 7:00-19:00h.
                            · Compras, precificação, atendimento e vendas, marketing em redes sociais, controle financeiro, 
                            limpeza e organização diária do estabelecimento faziam parte da rotina de trabalho"
                        />
                        <Card 
                            position="Gerente Geral"
                            company="Só Pedras Patrocínio LTDA"
                            time="11/2014 - 01/2017"
                            description="· Atendimento, vendas, administração e gerenciamento.
                            · Atividades: Controle de caixa, gestão de pessoas, leitura e desenho de projetos, orçamentos e 
                            vendas, controle de produção e entregas, controle de estoque e compras, cadastro/entradas/saídas 
                            em sistema de NFe, demais funções administrativas relacionadas ao bom funcionamento da 
                            empresa. Equipe: 09 funcionários todos no setor de produção.
                            · Responsável pela implantação de planilhas orçamentárias, antes inexistentes na empresa, o que 
                            agilizou e padronizou o processo de orçamentos.
                            · Responsável pela regulamentação de licenças e autorizações ambientais e programas de saúde 
                            antes pendentes"
                        />
                        <Card 
                            position="Auxiliar Administrativo"
                            company="Só Pedras Patrocínio LTDA"
                            time="11/2005 - 11/2014"
                            description="· Atividades: Controle de estoque e almoxarifado, serviços bancários, manutenção e pequenos 
                            reparos em lixadeiras e serra mármores, atendimento ao cliente, desenho de projetos, compras, 
                            controle de entregas, abertura de OS’s e agendamentos, limpeza e organização."
                        />
                    </div>
                </div>
        </>
    );
}