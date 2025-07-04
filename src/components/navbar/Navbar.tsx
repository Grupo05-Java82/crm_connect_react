import {NavLink} from "react-router-dom";

function Navbar() {
  return (
    <>
        <div className='flex px-15 py-6 justify-between bg-gray-50'>
            <div className="pl-10">
                <img src="https://ik.imagekit.io/gqta2uhtht/Logo%20(1).png?updatedAt=1751644590860" alt="logo" />
            </div>
            <div className="flex justify-between items-center gap-8
            text-xl">
                <p >Home</p>
                <p>Clientes</p>
                <p>Oportunidades</p>
                <p>Sobre</p>
                <p>Equipe</p>
            </div>
        </div>
    </>
  )
}

export default Navbar