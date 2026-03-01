import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '../utils/cn';
import Logo from "../assets/images/hospital_logo_final.JPG";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/#home' },
    { name: 'About Dr.Pawar', href: '/#about' },
    { name: 'Services', href: '/#services' },
    { name: 'Contact Us', href: '/#contact' },
  ];

  return (
    <nav className={cn(
  'fixed top-0 w-full z-50 transition-all duration-300 bg-[#20B2AA]/80 backdrop-blur-lg shadow-md',
  isScrolled ? 'py-4' : 'py-5')}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 flex items-center justify-center bg-white rounded-full shadow-md overflow-hidden">
              <img src={Logo} alt="Hospital Logo" className="w-10 h-10 object-cover rounded-full" />
            </div>
            <div className="flex flex-col">
              <span className="text-[20px] font-bold text-zinc-900 leading-none tracking-tight uppercase">Shree Sai Hospital</span>
              <span className="text-[10px] font-medium text-zinc-900 uppercase tracking-widest">Multispeciality Hospital</span>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative text-sm font-semibold text-zinc-900 transition-colors duration-300 hover:text-white after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full"              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-zinc-600">
              {isMobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-zinc-100 p-6 space-y-4 shadow-xl">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="block text-base font-bold text-zinc-600"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}