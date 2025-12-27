// src/components/Footer.tsx (Atualizado para Responsividade)

function Footer() {
  return (
    <div className='py-10 md:py-20 bg-[#2D502C] flex flex-col text-white'>
      <article className="flex flex-col md:flex-row gap-10 md:gap-55 justify-center items-center md:items-start px-4 md:px-0"> {/* Ajustes para mobile */}
        <section className="flex flex-col items-center md:items-start gap-4 text-center md:text-left">
          <div className="flex flex-col items-center md:items-start gap-4 md:gap-40"> {/* Reduzir gap em mobile */}
            <div className="flex flex-col-reverse sm:flex-row-reverse justify-center items-center gap-3"> {/* Ajustar direção do logo/endereço */}
              <p className="text-xl sm:text-3xl text-center md:text-left">Rua do Ouvidor 666, <br /> Campinas</p>
              <img src="https://ik.imagekit.io/gqta2uhtht/Logo%20(1).png?updatedAt=1751644590860" alt="logo" className="h-8 sm:h-10" /> {/* Tamanho do logo */}
            </div>
            <p className="text-base sm:text-lg">+55 (19) 49928922</p>
          </div>
          <p className="text-base sm:text-lg">contact@conect.com</p>
        </section>

        <section className="flex flex-col gap-3 md:gap-6 pt-4 md:pt-0"> {/* Ajuste de padding/gap */}
          <p className="hover:scale-105 transition-transform duration-200 hover:cursor-pointer text-sm sm:text-base">Sobre</p>
          <p className="hover:scale-105 transition-transform duration-200 hover:cursor-pointer text-sm sm:text-base">Oportunidades</p>
          <p className="hover:scale-105 transition-transform duration-200 hover:cursor-pointer text-sm sm:text-base">Equipe</p>
          <p className="hover:scale-105 transition-transform duration-200 hover:cursor-pointer text-sm sm:text-base">Contato</p>
        </section>

        <section className="flex flex-col gap-3 md:gap-6 pt-4 md:pt-0"> {/* Ajuste de padding/gap */}
          <p className="hover:scale-105 transition-transform duration-200 hover:cursor-pointer text-sm sm:text-base">Instagram</p>
          <p className="hover:scale-105 transition-transform duration-200 hover:cursor-pointer text-sm sm:text-base">Linkedin</p>
          <p className="hover:scale-105 transition-transform duration-200 hover:cursor-pointer text-sm sm:text-base">LinkThree</p>
          <p className="hover:scale-105 transition-transform duration-200 hover:cursor-pointer text-sm sm:text-base">Github</p>
        </section>
      </article>
      <div className="text-center text-xs mt-8 md:mt-16 opacity-60">
        © 2025 Connect CRM. All rights reserved. {/* Atualizado o ano */}
      </div>
    </div>
  )
}

export default Footer;