import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6"; // Certifique-se de ter react-icons/fa6 instalado

function Home() {
  return (
    <>
      <div className="bg-gray-50 flex flex-col md:flex-row w-full py-8 md:py-12 lg:py-24 gap-8 md:gap-10 lg:gap-20 items-center md:items-stretch">
        
        <div className="w-full md:w-auto flex justify-center md:justify-start flex-shrink-0 pr-4 sm:pr-8 md:pr-12 lg:pr-20">
          <img 
            src="https://ik.imagekit.io/gqta2uhtht/representacao-da-experiencia-utilizador-e-design-da-interface%201%20(2).png"
            alt="Hero Home"
            
            className="w-full max-w-xs sm:max-w-sm md:max-w-lg lg:max-w-xl xl:max-w-5xl h-auto object-cover"
          />
        </div>

        <article className="
          flex
          gap-8 md:gap-10 lg:gap-12 /* Reduzido o gap para o texto ficar mais coeso */
          flex-col
          justify-center /* Centraliza o conteúdo da coluna verticalmente */
          text-center md:text-left /* Alinha texto ao centro em mobile, à esquerda em desktop */
          py-4 md:py-0 /* Ajusta padding vertical para mobile */
        ">
          <section>
            <h1 className="
              font-bold
              text-3xl sm:text-4xl md:text-5xl lg:text-6xl /* Tamanho de fonte responsivo */
              mb-4 sm:mb-6 md:mb-8 /* Margem inferior para o título */
            ">Bem Vindo ao Conect</h1>
          </section>

          <section>
            <p className="
              font-light
              text-base sm:text-lg md:text-xl lg:text-2xl /* Tamanho de fonte responsivo */
              mb-6 sm:mb-8 md:mb-10 /* Margem inferior para o parágrafo */
            ">Um sistema de CRM feito para conectar pessoas e negócios, de forma simples rápida e eficiente </p>
          </section>

          <section className="flex flex-col sm:flex-row justify-center md:justify-start items-center gap-0"> {/* `gap-0` para unir os "botões" */}
            <div className="
              flex
              text-[#ACADB1]
              border border-[#F0F1F6]
              bg-[#F0F1F6]
              text-base sm:text-xl
              px-5 py-3 sm:py-4 /* Ajustado paddings */
              rounded-l-xl /* Arredondamento apenas à esquerda */
              justify-center items-center
              w-full sm:w-auto /* Ocupa largura total em mobile */
            ">
              <p>Conheça nossos Clientes</p>
            </div>

            {/* Link para ClientesPage com fundo preto, hover verde e bordas corretas */}
            <Link
              to="/clientes"
              className="
                flex
                bg-gray-950 /* Fundo preto conforme a imagem */
                text-white
                text-base sm:text-xl
                border border-gray-950 /* Borda preta para combinar com o fundo */
                px-5 py-3 sm:py-4 /* Paddings consistentes */
                rounded-r-xl /* Arredondamento apenas à direita */
                justify-center items-center
                gap-2
                transition-colors duration-200
                hover:bg-green-700 hover:border-green-700 /* Efeito hover verde */
                w-full sm:w-auto
              "
            >
              <p>Comece</p>
              <FaArrowRightLong color="white" />
            </Link>
          </section>
        </article>
      </div>

      {/* Seção do quadrado de enfeite - Ajuste de Largura e Padding */}
      <div className="bg-gray-50 flex justify-end pb-3 px-4 sm:px-8 md:px-12 lg:px-20"> {/* Padding responsivo */}
        <img className="w-24 sm:w-32 md:w-48 lg:w-56 h-auto object-cover" src="https://ik.imagekit.io/gqta2uhtht/square%20(1).png?updatedAt=1751650067419" alt="enfeite" />
      </div>
    </>
  )
}

export default Home;