import ColaboradorCard from "../../components/colaborador/ColaboradorCard";

function Home() {
    const membros = [
        {
            nome: 'Carlos Moroni',
            cargo: 'Desenvolvedor Front-end',
            linkedin: 'https://www.linkedin.com/in/carlosmoroni/',
            imagem: 'https://github.com/carlosmoronisud.png',
        },
        {
            nome: 'Bruno',
            cargo: 'Designer UI/UX',
            linkedin: 'https://www.linkedin.com/in/bruno-exemplo',
            imagem: 'https://github.com/BrunoAlves-tech.png',
        },
        {
            nome: 'Luiz',
            cargo: 'Dev Fullstack',
            linkedin: 'https://www.linkedin.com/in/luizhenrique-dev/',
            imagem: 'https://github.com/luizsantos7.png',
        },
        {
            nome: 'Murilo',
            cargo: 'Product Owner',
            linkedin: 'https://www.linkedin.com/in/murilomattosm/',
            imagem: 'https://github.com/Matttosz.png',
        },
        {
            nome: 'Natan',
            cargo: 'QA Tester',
            linkedin: 'https://www.linkedin.com/in/natan-macedo/',
            imagem: 'https://github.com/natanmac.png',
        },
        {
            nome: 'Pablo',
            cargo: 'Scrum Master',
            linkedin: 'https://github.com/Pablo-Casagrande',
            imagem: 'https://github.com/Pablo-Casagrande.png',
        },
    ];
    return (
        <>
            <div className="bg-[#C9DBDB]  flex w-full pr-5 gap-20">


                <article className="
            flex 
            gap-20
            flex-col 
            justify-end
            pb-30
            pr-29">
                    <section>
                        <h1 className="
                    font-bold
                    text-5xl
                    py-6
                    px-6">
                            Sobre o Connect</h1>
                    </section>
                    <div className="flex ">
                        <img className=""
                        src="https://ik.imagekit.io/gqta2uhtht/CnP_07072025_120113.png?updatedAt=1751900551928" alt="ASKKKKKKKKKKKKKKKKKKKKKKKKKKKK" />

                        <div>
                            <section className="flex">
                                <div className="
                    flex
                    flex-col
                    gap-4
                    px-5
                    pr-13                       
                    py-4
                    ">
                                    <h2>Ele oferece:</h2>
                                    <ul className="list-disc ml-5">
                                        <li>Gestão inteligente de clientes: Centraliza informações essenciais dos clientes, histórico de interações e dados de contato para um atendimento personalizado.</li>
                                        <li>Gestão de oportunidades: Permite registrar e acompanhar cada etapa do funil de vendas, transformando leads em negócios concretos.</li>
                                        <li>Simplicidade, agilidade e eficiência: Desenvolvido com tecnologias modernas para otimizar o tempo, reduzir tarefas repetitivas e aumentar a produtividade de equipes comerciais e gestores.</li>
                                    </ul>
                                </div>
                            </section>
                        </div>
                    </div>

                    <section>
                        <p className="font-bold text-xl px-6">
                            O CRM Connect é uma plataforma para gerenciar clientes e impulsionar resultados.
                        </p>
                    </section>
                </article>
            </div>

            <div className="max-w-7xl mx-auto px-4 py-10">
                <h1 className="text-3xl font-bold text-center  mb-8">
                    Equipe Desenvolvedora do Projeto
                </h1>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center">
                    {membros.map((membro) => (
                        <ColaboradorCard
                            key={membro.nome}
                            nome={membro.nome}
                            cargo={membro.cargo}
                            linkedin={membro.linkedin}
                            imagem={membro.imagem}
                        />
                    ))}
                </div>
            </div>



        </>
    )
}

export default Home