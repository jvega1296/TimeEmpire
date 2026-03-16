export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {/* Brand */}
          <div>
            <h3 className="font-mono text-2xl tracking-[0.15em] text-cream mb-4">
              VEGA
            </h3>
            <p className="text-sm text-gray-500 leading-relaxed max-w-xs mb-6">
              Tu destino de lujo en México. Relojes, moda y accesorios exclusivos.
            </p>
            <div className="flex items-center gap-4">
              {['Instagram', 'TikTok', 'WhatsApp'].map(
                (item) => (
                  <a
                    key={item}
                    href="#"
                    className="text-xs text-gray-500 hover:text-accent transition-colors duration-300"
                    aria-label={item}
                  >
                    {item.slice(0, 2)}
                  </a>
                ),
              )}
            </div>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-mono text-xs tracking-[0.2em] text-gray-400 uppercase mb-5">
              Categorías
            </h4>
            <ul className="space-y-3">
              {['Relojes', 'Moda', 'Accesorios', 'Novedades'].map(
                (item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-sm text-gray-500 hover:text-cream transition-colors duration-300"
                    >
                      {item}
                    </a>
                  </li>
                ),
              )}
            </ul>
          </div>

          {/* Info */}
          <div>
            <h4 className="font-mono text-xs tracking-[0.2em] text-gray-400 uppercase mb-5">
              Información
            </h4>
            <ul className="space-y-3">
              {['Envíos', 'Devoluciones', 'Contacto'].map(
                (item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-sm text-gray-500 hover:text-cream transition-colors duration-300"
                    >
                      {item}
                    </a>
                  </li>
                ),
              )}
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-600 tracking-wider">
            &copy; {new Date().getFullYear()} VEGA. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-6">
            {['Privacidad', 'Términos', 'Cookies'].map((item) => (
              <a
                key={item}
                href="#"
                className="text-xs text-gray-600 hover:text-gray-400 transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
