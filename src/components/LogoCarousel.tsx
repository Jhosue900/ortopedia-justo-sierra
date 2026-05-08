interface Logo {
  name: string;
  src?: string;
  abbr?: string;
  color?: string;
}

interface LogoCarouselProps {
  logos: Logo[];
  reverse?: boolean;
  grayscale?: boolean;
  speed?: number;
  doubleRowMobile?: boolean; // Nueva prop
}

export default function LogoCarousel({ 
  logos, 
  reverse = false, 
  grayscale = false, 
  speed = 30,
  doubleRowMobile = true 
}: LogoCarouselProps) {
  
  // En móvil dividimos los logos en dos grupos para la doble fila
  const midPoint = Math.ceil(logos.length / 2);
  const row1 = doubleRowMobile ? logos.slice(0, midPoint) : logos;
  const row2 = doubleRowMobile ? logos.slice(midPoint) : [];

  const renderRow = (rowLogos: Logo[], isReverse: boolean, customSpeed: number) => {
    const duplicated = [...rowLogos, ...rowLogos, ...rowLogos, ...rowLogos];
    return (
      <div className="relative overflow-hidden w-full py-2">
        <div
          className={`flex items-center gap-4 ${isReverse ? 'animate-carousel-reverse' : 'animate-carousel'}`}
          style={{ animationDuration: `${customSpeed}s` }}
        >
          {duplicated.map((logo, i) => (
            <div
              key={i}
              className={`flex-shrink-0 flex items-center justify-center min-w-[150px] md:min-w-[200px] h-20 md:h-24 px-4 md:px-8 group cursor-default transition-transform duration-300 hover:scale-105 ${
                grayscale ? 'grayscale hover:grayscale-0 transition-all duration-500' : ''
              }`}
            >
              <LogoItem logo={logo} />
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="relative w-full">
      {/* Gradiantes de desvanecimiento laterales */}
      <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 z-10 bg-gradient-to-r from-slate-50 via-slate-50/50 to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 z-10 bg-gradient-to-l from-slate-50 via-slate-50/50 to-transparent pointer-events-none" />

      {/* Fila 1 (Siempre visible) */}
      {renderRow(row1, reverse, speed)}

      {/* Fila 2 (Solo visible en móvil si doubleRowMobile es true) */}
      {doubleRowMobile && (
        <div className="md:hidden">
          {renderRow(row2, !reverse, speed)}
        </div>
      )}
    </div>
  );
}

function LogoItem({ logo }: { logo: Logo }) {
  if (logo.src) {
    return (
      <img 
        src={logo.src} 
        alt={logo.name} 
        className="h-14 md:h-20 w-auto object-contain max-w-[140px] md:max-w-[180px] select-none pointer-events-none filter drop-shadow-sm" 
      />
    );
  }
  return (
    <div className="flex items-center justify-center gap-1.5 select-none">
      {logo.abbr ? (
        <div
          className="flex items-center justify-center px-3 py-1.5 rounded-lg border-2 font-black text-base md:text-lg tracking-tighter"
          style={{ borderColor: logo.color || '#003366', color: logo.color || '#003366' }}
        >
          {logo.abbr}
        </div>
      ) : (
        <span className="font-bold text-sm md:text-base tracking-tight whitespace-nowrap" style={{ color: logo.color || '#4a5568' }}>
          {logo.name}
        </span>
      )}
    </div>
  );
}