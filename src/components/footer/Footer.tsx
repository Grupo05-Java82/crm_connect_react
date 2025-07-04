
function Footer() {
    return (
        <>
            <div className='py-20 bg-[#2D502C] flex flex-col text-white'>

                <article className="flex gap-55 justify-center items-center">
                    <section className="flex flex-col items-center gap-2">
                        <div className="flex flex-col items-center gap-40">

                            <div className="flex flex-row-reverse justify-center items-center gap-3">

                                <p className="text-3xl">Rua do Ouvidor 666, <br /> Campinas</p>
                                <img src="https://ik.imagekit.io/gqta2uhtht/Logo%20(1).png?updatedAt=1751644590860" alt="logo" />

                            </div>
                            <p >+55 (19) 49928922</p>

                        </div>

                        <p>contact@conect.com</p>
                    </section>

                    <section className="flex flex-col gap-6 pb-40">
                        <p className="hover:scale-105 transition-transform duration-200 hover:cursor-pointer">Sobre</p>
                        <p className="hover:scale-105 transition-transform duration-200 hover:cursor-pointer">Oportunidades</p>
                        <p className="hover:scale-105 transition-transform duration-200 hover:cursor-pointer">Equipe</p>
                        <p className="hover:scale-105 transition-transform duration-200 hover:cursor-pointer">Contato</p>
                    </section>

                    <section className="flex flex-col gap-6 pb-40">
                        <p className="hover:scale-105 transition-transform duration-200 hover:cursor-pointer">Instagram</p>
                        <p className="hover:scale-105 transition-transform duration-200 hover:cursor-pointer">Linkedin</p>
                        <p className="hover:scale-105 transition-transform duration-200 hover:cursor-pointer">LinkThree</p>
                        <p className="hover:scale-105 transition-transform duration-200 hover:cursor-pointer">Github</p>
                    </section>
                </article>
            </div>
        </>
    )
}

export default Footer