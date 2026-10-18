import React from "react";
import Image from "next/image";
import { Coffee, ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-b from-amatu-charcoal via-amatu-deep to-amatu-charcoal"
    >
      {/* Background glow accents */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amatu-gold/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-amatu-cherry/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-20">
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-12 items-center">
          {/* Left Column: Copy & Value Proposition */}
          <div className="xl:col-span-7 space-y-6 text-center xl:text-left">
            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-white leading-tight">
              Aroma dulce con notas a{" "}
              <span className="text-amatu-gold font-serif">chocolate</span> y
              cerezas rojas.
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-stone-300 max-w-xl mx-auto xl:mx-0 font-light leading-relaxed">
              Café especial cultivado a más de 1.850 metros de altura en el
              Huila. Un blend insignia de Borbón Rosado con Supremo, cosechado
              grano a grano para una taza dulce y balanceada.
            </p>

            {/* Quick Tasting & Origin Attributes - Solid Golden Bar */}
            <div className="grid grid-cols-3 max-w-xl w-full mx-auto xl:mx-0 py-3 px-2 sm:p-4 bg-amatu-gold rounded-sm divide-x divide-black/15 shadow-lg shadow-amatu-gold/15 items-start sm:items-center">
              <div className="px-1.5 sm:px-3 text-center flex flex-col justify-start sm:justify-center">
                <span className="block text-[10px] sm:text-xs uppercase tracking-wider text-black/75 font-bold">
                  Variedad
                </span>
                <span className="font-serif text-sm sm:text-base md:text-lg text-black font-bold block mt-0.5 leading-snug">
                  Excelso
                </span>
              </div>
              <div className="px-1.5 sm:px-3 text-center flex flex-col justify-start sm:justify-center">
                <span className="block text-[10px] sm:text-xs uppercase tracking-wider text-black/75 font-bold">
                  Altitud
                </span>
                <span className="font-serif text-sm sm:text-base md:text-lg text-black font-bold block mt-0.5 leading-snug">
                  1.850 - 1.930 m
                </span>
              </div>
              <div className="px-1.5 sm:px-3 text-center flex flex-col justify-start sm:justify-center">
                <span className="block text-[10px] sm:text-xs uppercase tracking-wider text-black/75 font-bold">
                  Origen
                </span>
                <span className="font-serif text-sm sm:text-base md:text-lg text-black font-bold block mt-0.5 leading-snug">
                  Huila, Colombia
                </span>
              </div>
            </div>

            {/* CTAs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 max-w-xl w-full mx-auto xl:mx-0">
              <a
                href="#catalogo"
                className="w-full inline-flex items-center justify-center gap-3 bg-[#932619] hover:bg-[#b02e1f] text-stone-100 hover:text-white font-semibold px-8 py-4 rounded-sm transition-colors shadow-lg shadow-[#932619]/25 hover:shadow-[#932619]/40 text-center"
              >
                <Coffee className="w-5 h-5" />
                <span>Ver Catálogo</span>
              </a>
              <a
                href="#historia"
                className="w-full inline-flex items-center justify-center gap-2 border border-white/20 hover:border-white text-stone-300 hover:text-white font-semibold px-7 py-4 rounded-sm transition-colors text-center"
              >
                <span>Nuestra Historia</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Column: Dynamic Diagonal Composition */}
          <div className="xl:col-span-5 relative flex justify-center items-center py-6 xl:py-0">
            {/* Circular ambient background */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] h-[320px] sm:w-[500px] sm:h-[500px] rounded-full border border-amatu-gold/25 bg-radial from-amatu-gold/15 to-transparent blur-xs pointer-events-none z-0" />

            {/* Stage */}
            <div className="relative z-30 w-full max-w-[320px] sm:max-w-[500px] h-[380px] sm:h-[540px] select-none translate-x-8 sm:translate-x-8 transition-transform duration-300">
              {/* Coffee Bag */}
              <div className="absolute top-2 right-1 sm:-top-10 sm:-right-10 z-20 -rotate-12 transform hover:-rotate-6 transition-transform duration-500 origin-bottom-right">
                <Image
                  src="/assets/Iteracion-3.png"
                  alt="Bolsa de Café Especial Amatu Excelso 500g"
                  width={375}
                  height={506}
                  priority
                  className="w-56 sm:w-[352px] h-auto object-contain product-shadow animate-float"
                />
              </div>

              {/* Floating Coffee Beans */}
              <div className="absolute top-[36%] left-[22%] sm:top-[30%] sm:left-[30%] z-30 pointer-events-none">
                <Image
                  src="/assets/coffe_bean.png"
                  alt="Grano de café especial"
                  width={52}
                  height={52}
                  className="w-7 h-7 sm:w-13 sm:h-13 object-contain drop-shadow-[0_8px_14px_rgba(0,0,0,0.85)] rotate-[25deg] animate-float"
                  style={{ animationDelay: "0.3s", animationDuration: "4.2s" }}
                />
              </div>

              <div className="absolute top-[50%] left-[18%] sm:top-[43%] sm:left-[29%] z-30 pointer-events-none">
                <Image
                  src="/assets/coffe_bean.png"
                  alt="Grano de café especial"
                  width={60}
                  height={60}
                  className="w-8 h-8 sm:w-15 sm:h-15 object-contain drop-shadow-[0_10px_16px_rgba(0,0,0,0.9)] -rotate-45 animate-float"
                  style={{ animationDelay: "1.1s", animationDuration: "4.8s" }}
                />
              </div>

              <div className="absolute top-[66%] left-[16%] sm:top-[52%] sm:left-[20%] z-30 pointer-events-none">
                <Image
                  src="/assets/coffe_bean.png"
                  alt="Grano de café especial"
                  width={48}
                  height={48}
                  className="w-6 h-6 sm:w-12 sm:h-12 object-contain drop-shadow-[0_8px_14px_rgba(0,0,0,0.85)] rotate-[75deg] animate-float"
                  style={{ animationDelay: "1.9s", animationDuration: "3.8s" }}
                />
              </div>

              {/* Coffee Cup */}
              <div className="absolute bottom-3 left-3 sm:bottom-2 sm:left-4 z-20 transform hover:scale-105 transition-transform duration-500">
                <Image
                  src="/assets/coffe_cup.png"
                  alt="Pocillo de Café Especial Amatu recién preparado"
                  width={200}
                  height={160}
                  className="w-28 sm:w-48 h-auto object-contain drop-shadow-[0_20px_30px_rgba(0,0,0,0.85)]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Curved SVG Divider to Story section */}
      <div className="absolute -bottom-px left-0 right-0 w-full overflow-hidden leading-none pointer-events-none z-10 translate-y-[1px]">
        <svg
          className="block w-full h-16 sm:h-24 lg:h-32 text-amatu-linen scale-y-[1.02] origin-bottom"
          viewBox="0 0 1440 120"
          fill="none"
          preserveAspectRatio="none"
        >
          <path
            d="M0,45 C320,115 640,125 960,65 C1200,15 1360,45 1440,65 L1440,125 L0,125 Z"
            fill="currentColor"
          />
        </svg>
      </div>
    </section>
  );
}
