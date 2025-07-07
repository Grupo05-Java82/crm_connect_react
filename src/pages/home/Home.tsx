import { Link } from "react-router-dom"; // Importe Link para a navegação
import { FaArrowRightLong } from "react-icons/fa6"; // Certifique-se de ter react-icons/fa6 instalado

function Home() {
  return (
    <>
      <div className="bg-gray-50 flex flex-col md:flex-row w-full px-4 sm:px-8 md:px-5 lg:px-20 gap-8 md:gap-10 lg:gap-20 items-center md:items-stretch py-8 md:py-0">
        {/* Imagem Hero - Oculta em telas muito pequenas para dar espaço ao texto, ou redimensionada */}
        <div className="w-full md:w-auto flex justify-center md:justify-start">
          <img
            src="https://ik.imagekit.io/gqta2uhtht/representacao-da-experiencia-utilizador-e-design-da-interface%201%20(2).png"
            alt="Hero Home"
            className="w-full max-w-sm sm:max-w-md md:w-[800px] h-auto object-cover" // Largura responsiva da imagem
          />
        </div>

        <article className="
          flex
          gap-8 md:gap-10 lg:gap-20
          flex-col
          justify-center md:justify-end /* Centraliza verticalmente em mobile, alinha ao fim em desktop */
          pb-8 md:pb-20 lg:pb-30 /* Padding inferior responsivo */
          px-4 sm:px-8 md:px-0 lg:pr-29 /* Padding lateral responsivo */
          text-center md:text-left /* Alinha texto ao centro em mobile, à esquerda em desktop */
        ">
          <section>
            <h1 className="
              font-bold
              text-3xl sm:text-4xl md:text-5xl /* Tamanho de fonte responsivo */
              mb-4 sm:mb-6 /* Margem inferior para o título */
            ">Bem Vindo ao Conect</h1>
          </section>

          <section>
            <p className="
              font-light
              text-base sm:text-lg md:text-xl /* Tamanho de fonte responsivo */
              mb-6 sm:mb-8 /* Margem inferior para o parágrafo */
            ">Um sistema de CRM feito para conectar pessoas e negócios, de forma simples rápida e eficiente </p>
          </section>

          <section className="flex flex-col sm:flex-row justify-center md:justify-start items-center gap-4"> {/* Botões alinhados em linha no desktop, empilhados no mobile */}
            <div className="
              flex
              text-[#ACADB1]
              border-[#F0F1F6]
              bg-[#F0F1F6]
              border
              text-base sm:text-xl /* Tamanho de fonte responsivo */
              px-4 sm:px-5 /* Padding horizontal responsivo */
              py-3 sm:py-4 /* Padding vertical responsivo */
              rounded-l-xl
              justify-center
              items-center
              w-full sm:w-auto /* Ocupa largura total em mobile */
            ">
              <p>Conheça nossos Clientes</p>
            </div>

            {/* Link para ClientesPage com hover verde */}
            <Link
              to="/clientes" // Caminho para a ClientesPage
              className="
                bg-gray-950
                text-white
                text-base sm:text-xl /* Tamanho de fonte responsivo */
                flex
                border
                px-4 sm:px-6 /* Padding horizontal responsivo */
                py-3 sm:py-3 /* Padding vertical responsivo */
                rounded-r-xl /* Arredondamento apenas à direita para se juntar ao div anterior */
                justify-center
                items-center
                gap-2
                transition-colors duration-200 /* Transição suave para o hover */
                hover:bg-green-700 hover:border-green-700 /* Efeito hover verde */
                hover:text-white /* Garante texto branco no hover */
                w-full sm:w-auto /* Ocupa largura total em mobile */
              "
            >
              <p className="pr-1">Comece</p> {/* Ajuste o padding se necessário */}
              <FaArrowRightLong color="white" />
            </Link>
          </section>
        </article>
      </div>

      {/* Seção do quadrado de enfeite */}
      <div className="bg-gray-50 flex justify-end pb-3 px-4 sm:px-8 md:px-20"> {/* Padding responsivo */}
        <img className="w-24 sm:w-32 md:w-48 lg:w-[200px] h-auto object-cover" src="https://ik.imagekit.io/gqta2uhtht/square%20(1).png?updatedAt=1751650067419" alt="enfeite" />
      </div>
    </>
  )
}

export default Home;