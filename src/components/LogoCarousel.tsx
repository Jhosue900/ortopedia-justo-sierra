interface Logo {
  name: string;
  src?: string; // Nueva propiedad opcional para la imagen
  abbr?: string;
  color?: string;
}

interface LogoCarouselProps {
  logos: Logo[];
  reverse?: boolean;
  grayscale?: boolean;
  speed?: number;
}

export default function LogoCarousel({ logos, reverse = false, grayscale = false, speed = 30 }: LogoCarouselProps) {
  const duplicated = [...logos, ...logos, ...logos];

  const adaptiveSpeed = typeof window !== 'undefined' && window.innerWidth < 768 
    ? speed / 2 
    : speed;

  return (
    <div className="relative overflow-hidden w-full">
      <div className="absolute left-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-r from-white to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-l from-white to-transparent pointer-events-none" />

      <div
        className={`flex items-center gap-4 ${reverse ? 'animate-carousel-reverse' : 'animate-carousel'}`}
        style={{ animationDuration: `${adaptiveSpeed}s` }}
      >
        {duplicated.map((logo, i) => (
          <div
            key={i}
            className={`flex-shrink-0 flex items-center justify-center min-w-[200px] h-24 px-8 group cursor-default transition-transform duration-300 hover:scale-105 ${
              grayscale ? 'grayscale hover:grayscale-0 transition-all duration-500' : ''
            }`}
          >
            <LogoItem logo={logo} />
          </div>
        ))}
      </div>
    </div>
  );
}

function LogoItem({ logo }: { logo: Logo }) {

  if (logo.src) {
    return (
      <img 
        src={logo.src} 
        alt={logo.name} 
        // Aumentamos h-12 a h-20 y el max-w para logos horizontales
        className="h-20 w-auto object-contain max-w-[180px] select-none pointer-events-none filter drop-shadow-sm" 
      />
    );
  }


  return (
    <div className="flex items-center justify-center gap-1.5 select-none">
      {logo.abbr ? (
        <div
          className="flex items-center justify-center px-3 py-1.5 rounded-lg border-2 font-black text-lg tracking-tighter"
          style={{ borderColor: logo.color || '#003366', color: logo.color || '#003366' }}
        >
          {logo.abbr}
        </div>
      ) : (
        <span className="font-bold text-base tracking-tight whitespace-nowrap" style={{ color: logo.color || '#4a5568' }}>
          {logo.name}
        </span>
      )}
    </div>
  );
}