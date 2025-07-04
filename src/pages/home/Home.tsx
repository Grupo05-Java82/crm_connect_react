import { FaArrowRightLong } from "react-icons/fa6";

function Home() {
  return (
    <>
        <div className="bg-gray-50  flex w-full pr-5 gap-20">
            <div>
                <img src="https://ik.imagekit.io/gqta2uhtht/representacao-da-experiencia-utilizador-e-design-da-interface%201%20(2).png" alt="Hero Home"  className="w-[800px] h-auto object-cover"/>
            </div>

            <article className="
            flex 
            gap-20
            flex-col 
            justify-end
            pb-30
            pr-29
            ">
                <section>
                    <h1 className="
                    font-bold
                    text-5xl
                    ">Bem Vindo ao Conect</h1>
                </section>

                <section>
                    <p className="
                    font-light
                    text-xl">Um sistema de CRM feito para conectar pessoas e negócios, de forma simples rápida e eficiente </p>
                </section>

                <section className="
                flex">
                    <div className="
                    flex
                    text-[#ACADB1]
                    border-[#F0F1F6]
                    bg-[#F0F1F6]
                    border
                    text-xl
                    px-5
                    pr-13
                    py-4
                    rounded-l-xl
                    justify-center
                    items-center">
                        <p>Conheça nossos Clientes</p>
                    </div>

                    <div className="
                    bg-gray-950
                    text-white
                    text-xl
                    flex
                    border
                    pl-8
                    px-6
                    py-3
                    rounded-lg
                    justify-center
                    items-center
                    gap-2">
                        <p className="">Comece</p>
                        <FaArrowRightLong color="white"/>
                    </div>
                </section>
            </article>
        </div>
        <div className="bg-gray-50 flex flex-row-reverse pb-3 ">
            <img className="w-[200px] h-auto object-cover" src="https://ik.imagekit.io/gqta2uhtht/square%20(1).png?updatedAt=1751650067419" alt="enfeite" />
        </div>
    </>
  )
}

export default Home