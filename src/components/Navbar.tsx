import { useState, useEffect } from 'react';

const navLinks = [
  { label: 'Colección', href: '#collection' },
  { label: 'Historia', href: '#story' },
  { label: 'Detalles', href: '#features' },
  { label: 'Galería', href: '#gallery' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#0a0118]/90 backdrop-blur-md border-b border-white/5'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between h-16 md:h-20">
        <a
          href="#"
          className="font-mono text-xl md:text-2xl tracking-[0.15em] text-cream"
        >
          TIMEEMPIRE
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-mono text-sm tracking-[0.1em] text-gray-400 hover:text-cream transition-colors duration-300 uppercase"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#purchase"
            className="font-mono text-sm tracking-[0.1em] text-accent border border-accent/30 px-5 py-2 hover:bg-accent/10 transition-all duration-300 uppercase"
          >
            Comprar
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col items-center justify-center gap-1.5 w-11 h-11"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menú"
        >
          <span
            className={`block w-6 h-px bg-cream transition-all duration-300 ${
              menuOpen ? 'rotate-45 translate-y-[3.5px]' : ''
            }`}
          />
          <span
            className={`block w-6 h-px bg-cream transition-all duration-300 ${
              menuOpen ? '-rotate-45 -translate-y-[3.5px]' : ''
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ${
          menuOpen ? 'max-h-80 border-b border-white/5' : 'max-h-0'
        } bg-[#0a0118]/95 backdrop-blur-md`}
      >
        <div className="px-6 py-6 flex flex-col gap-5">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-mono text-sm tracking-[0.15em] text-gray-400 hover:text-cream transition-colors uppercase"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#purchase"
            className="font-mono text-sm tracking-[0.1em] text-accent border border-accent/30 px-5 py-2.5 text-center hover:bg-accent/10 transition-all uppercase"
            onClick={() => setMenuOpen(false)}
          >
            Comprar
          </a>
        </div>
      </div>
    </nav>
  );
}
