import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className='flex px-15 py-6 justify-between bg-gray-50'>
      <div className="pl-10">
        <Link to="/">
          <img
            src="https://ik.imagekit.io/gqta2uhtht/Logo%20(1).png?updatedAt=1751644590860"
            alt="logo"
            className="h-10"
          />
        </Link>
      </div>

      <div className="flex justify-between items-center gap-8 text-xl pr-10">
        <Link to="/" className="hover:text-blue-600">Home</Link>
        <Link to="/clientes" className="hover:text-blue-600">Clientes</Link>
        <Link to="/oportunidades" className="hover:text-blue-600">Oportunidades</Link>
        <Link to="/sobre" className="hover:text-blue-600">Sobre</Link>
        <Link to="/equipe" className="hover:text-blue-600">Equipe</Link>
      </div>
    </div>
  );
}

export default Navbar;
