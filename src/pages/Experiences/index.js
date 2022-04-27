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
                        position="Analista de Desenvolvimento Front-End Mobile"
                        company="Jazz Tech"
                        time="08/2021 - 04/2022"
                        description={
													<p>
														·Desenvolver novas features e participar da sustentação (correção de bugs) de apps móveis 
														(white label) em React Native + Typescript utilizando React Native CLI (não utilizamos Expo). 
														<br></br>
														·Desenvolver testes unitários com Jest e testes de integração (e2e) com Detox. 
														<br></br>
														·Realizar code-review de itens de sustentação e implementação dos apps. 
														<br></br>
														·Participar ativamente dos rituais da metodologia Scrum (Daily, Planejamento, Refinamento, 
														Retrospectiva, Review). 
														<br></br>
														·Acompanhar e mover os cards conforme status das tarefas da sprint no Jira. 
														<br></br>
														·Realizar merges gradativos conforme itens vão sendo aprovados, resolvendo eventuais conflitos.
														Para versionamento utilizamos Gitlab e um fluxo próximo ao Gitflow (master/pprd/dev/branchs de desenvolvimento).
														<br></br>
														·Gerar novas versões quando necessário e disponibilizar atualizações com codepush.
														<br></br>
														·Adicionar, excluir ou editar arquivos do projeto na AWS-S3.
														<br></br>
														·Utilizamos Design System(Atomic Design) e Styled Components
													</p>
												}
                    />
                    <Card 
                        position="Desenvolvedora Front-End React"
                        company="Oni Web Officer"
                        time="01/2021 - 05/2021"
                        description={
													<p>
														·Criação e prototipação de interfaces web com Figma.
														<br></br>
														·Desenvolvimento de aplicações web em React, com responsividade e 
														fidelidade aos layouts.
														<br></br>
														·Identificar melhorias, reparos e necessidades dos projetos e solucioná-los.
														<br></br>
														·Criar e seguir sprints e tarefas no Jira (metodologia Scrum), reportando tempo gasto em 
														cada atividade.
														<br></br>
														Ferramentas, bibliotecas, frameworks e linguagens com os quais tive contato: HTML, CSS, 
														Javascript, React.js (Jest, Mock, Axios, Hooks, Router, etc.), Next.js, Styled Components, 
														Typescript, Bootstrap, MaterialUI, Jira, Scrum, Toggl, Slack, Figma, Canva, Gimp, Git, Github, 
														GitLab.
													</p>
												}
                    />
                    <Card 
                        position="Analista de RH"
                        company="Equilíbrio Saúde Ambiental"
                        time="05/2020 - 12/2020"
                        description={
													<p>
														·Elaborar procedimentos para o setor de RH.
														<br></br>
														·Realizar processos de admissão, treinamento e rescisão seguindo PPRA e PCMSO da empresa.
														<br></br>
														·Comunicar afastamentos e suspensões e aplicar advertências.
														<br></br>
														·Acompanhar e transcrever pontos manuais para cálculo de vale-alimentação, vale-transporte, 
														horas extras, adicionais noturnos e banco de horas (média de 50 funcionários).
														<br></br>
														·Fechamento de Folha de Pagamento para envio à contabilidade.
														<br></br>
														·Controle de vencimento de férias, ASOs, CNHs, NRs e integrações.
														<br></br>
														·Lançamento mensal de documentação Patronal e Funcional em sistemas/plataformas de clientes.
														<br></br>
														·Recarga mensal de benefícios dos funcionários (vale-transporte, vale-alimentação).
														<br></br>
														·Checar condições e realizar pedidos e entregas de uniformes, materiais de escritório e 
														EPIs aos funcionários.
														<br></br>
														·Responsável pela criação do plano de cargos e salários, correções de erros graves em folha de 
														pagamento, criação de checklist de documentações, organização de pastas e arquivos físicos 
														do RH da empresa, organização do arquivo digital do RH, criação de modelos de termos de 
														responsabilidade, ordens de serviço e fichas, redução em 95% de pendência de documentos em 
														plataformas.
                        	</p>
												}
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
                        description="Abertura, limpeza e organização diária do estabelecimento, separação e envio 
												de condicionais, atendimento e vendas presencial, telefone e whatsapp, cobranças,
                        abertura e fechamento de caixa, baixa e cadastro de vendas e notas no sistema."
                    />
                    <Card 
                        position="Empreendedora"
                        company="Nya Senses e WoodBox Brasil"
                        time="11/2017 - 12/2019"
                        description={
													<p>
														·Nya Senses: Estudo da cosmetologia natural e elaboração de fórmulas para diversos 
														fins e tratamentos, incluindo hidratantes, sabonetes, tônicos, esfoliantes e máscaras. 
														<br></br>
														·WoodBox Brasil: Criação e desenho de peças decorativas e funcionais em madeiras diversas, 
														cálculo e execução das peças(cortes, encaixes, preparação, montagem), estudo de tipos de 
														materiais e indicações, finalizações, impermeabilização, lixação, envernizamento, 
														encaixes, etc, manuseio de máquinas como serra de bancada, tupia, serra de mão, lixadeiras, 
														tico-tico, pirógrafo, entre outras. Entre os modelos produzidos tivemos porta temperos,
														tábuas de corte, porta xícaras, prateleiras, estantes, porta chaves, nichos, quadros, 
														objetos decorativos, dentre outros.
													</p>
												}
                    />
                    <Card 
                        position="Empreendedora"
                        company="Cantinho da Roça"
                        time="04/2017 - 09/2017"
                        description=" Empresa especializada em produtos caipiras e/ou artesanais. 
                        Sócia e funcionária em tempo integral. Horário de funcionamento 7:00-19:00h.
                        Compras, precificação, atendimento e vendas, marketing em redes sociais, controle financeiro, 
                        limpeza e organização diária do estabelecimento faziam parte da rotina de trabalho"
                    />
                    <Card 
                        position="Gerente Geral"
                        company="Só Pedras Patrocínio LTDA"
                        time="11/2014 - 01/2017"
                        description="Atendimento, vendas, administração e gerenciamento.
                        Atividades: Controle de caixa, gestão de pessoas, leitura e desenho de projetos, orçamentos e 
                        vendas, controle de produção e entregas, controle de estoque e compras, cadastro/entradas/saídas 
                        em sistema de NFe, demais funções administrativas relacionadas ao bom funcionamento da 
                        empresa. Equipe: 09 funcionários todos no setor de produção. Responsável pela implantação de 
												planilhas orçamentárias, antes inexistentes na empresa, o que agilizou e padronizou o processo 
												de orçamentos. Responsável pela regulamentação de licenças e autorizações ambientais e programas 
												de saúde antes pendentes"
                    />
                    <Card 
												position="Auxiliar Administrativo"
												company="Só Pedras Patrocínio LTDA"
												time="11/2005 - 11/2014"
												description="Atividades: Controle de estoque e almoxarifado, serviços bancários, manutenção e 
												pequenos reparos em lixadeiras e serra mármores, atendimento ao cliente, desenho de projetos, 
												compras, controle de entregas, abertura de ordens de serviço e agendamentos, limpeza e organização."
                    />
                </div>
            </div>
        </>
    );
}