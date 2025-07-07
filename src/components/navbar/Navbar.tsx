import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react'; // Make sure you have lucide-react installed (yarn add lucide-react)

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { to: '/', label: 'Home' },
    { to: '/clientes', label: 'Clientes' },
    { to: '/oportunidades', label: 'Oportunidades' },
    { to: '/usuarios', label: 'Usuários' },
    { to: '/sobre', label: 'Sobre' },
    { to: '/equipe', label: 'Equipe' },
  ];

  return (
    <div className="w-full bg-gray-50 px-4 sm:px-10 py-4 sm:py-6 shadow-md">
      {/* Main container for logo and navigation (desktop or mobile toggle) */}
      <div className="flex justify-between items-center w-full">
        {/* Logo */}
        <Link to="/">
          <img
            src="https://ik.imagekit.io/gqta2uhtht/Logo%20(1).png?updatedAt=1751644590860"
            alt="logo"
            className="h-8 sm:h-10"
          />
        </Link>

        {/* Desktop Menu (hidden on small screens) */}
        {/* `flex items-center gap-12` aligns links horizontally */}
        {/* `hidden sm:flex` ensures it's only visible on sm and larger screens */}
        <div className="hidden sm:flex items-center gap-12">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="text-Text-defff text-sm sm:text-base font-medium font-['Inter'] leading-tight hover:text-green-600 px-2 py-1"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button (only appears on small screens) */}
        {/* `sm:hidden` ensures it's only visible on screens smaller than sm */}
        <button
          className="sm:hidden text-green-900"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Abrir menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay (only appears on mobile when open) */}
      {/* `sm:hidden` ensures it's only visible on screens smaller than sm */}
      {/* `flex flex-col items-start gap-3` stacks links vertically */}
      {isOpen && (
        <div className="sm:hidden mt-4 flex flex-col items-start gap-3">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setIsOpen(false)} // Close menu on click
              className="text-Text-defff text-base font-medium font-['Inter'] leading-tight hover:text-blue-600 px-2 py-1 w-full" // Added w-full for better click area
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default Navbar;