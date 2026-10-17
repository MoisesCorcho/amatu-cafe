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
            {/* Origin Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/5 border border-amatu-gold/30 text-amatu-gold text-xs uppercase tracking-widest font-semibold">
              <span className="w-2 h-2 rounded-full bg-amatu-gold animate-pulse" />
              Del grano a tu alma • Origen Huila
            </div>

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

            {/* Quick Tasting Attributes */}
            <div className="grid grid-cols-3 gap-4 pt-2 max-w-lg mx-auto xl:mx-0">
              <div className="border-l-2 border-amatu-gold/50 pl-3 text-left">
                <span className="block text-xs uppercase text-stone-400 tracking-wider">
                  Variedad
                </span>
                <span className="font-serif text-lg text-white font-semibold">
                  Excelso
                </span>
              </div>
              <div className="border-l-2 border-amatu-gold/50 pl-3 text-left">
                <span className="block text-xs uppercase text-stone-400 tracking-wider">
                  Altitud
                </span>
                <span className="font-serif text-lg text-white font-semibold">
                  1.850-1.930m
                </span>
              </div>
              <div className="border-l-2 border-amatu-gold/50 pl-3 text-left">
                <span className="block text-xs uppercase text-stone-400 tracking-wider">
                  Origen
                </span>
                <span className="font-serif text-lg text-white font-semibold">
                  Huila, COL
                </span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center xl:justify-start gap-4 pt-4">
              <a
                href="#catalogo"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-amatu-gold hover:bg-amatu-gold-light text-stone-950 font-semibold px-8 py-4 rounded-full transition-all transform hover:-translate-y-0.5 shadow-lg shadow-amatu-gold/20"
              >
                <Coffee className="w-5 h-5" />
                <span>Ver Catálogo</span>
              </a>
              <a
                href="#historia"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-white/20 hover:border-amatu-gold text-stone-300 hover:text-white px-7 py-4 rounded-full transition-all"
              >
                <span>Nuestra Historia</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Column: Dynamic Diagonal Composition */}
          <div className="xl:col-span-5 relative flex justify-center items-center py-6 xl:py-0">
            {/* Circular ambient background */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 sm:w-[500px] sm:h-[500px] rounded-full border border-amatu-gold/25 bg-radial from-amatu-gold/15 to-transparent blur-xs pointer-events-none z-0" />

            {/* Stage */}
            <div className="relative z-30 w-full max-w-[380px] sm:max-w-[500px] h-[480px] sm:h-[540px] select-none sm:translate-x-8 transition-transform duration-300">
              {/* Coffee Bag */}
              <div className="absolute -top-10 -right-16 sm:right-0 z-20 -rotate-12 transform hover:-rotate-6 transition-transform duration-500 origin-bottom-right">
                <Image
                  src="/assets/Iteracion-3.png"
                  alt="Bolsa de Café Especial Amatu Excelso 500g"
                  width={340}
                  height={460}
                  priority
                  className="w-72 sm:w-80 h-auto object-contain product-shadow animate-float"
                />
              </div>

              {/* Floating Coffee Beans */}
              <div className="absolute top-[30%] left-[36%] sm:left-[30%] z-30 pointer-events-none">
                <Image
                  src="/assets/coffe_bean.png"
                  alt="Grano de café especial"
                  width={52}
                  height={52}
                  className="w-9 h-9 sm:w-13 sm:h-13 object-contain drop-shadow-[0_8px_14px_rgba(0,0,0,0.85)] rotate-[25deg] animate-float"
                  style={{ animationDelay: "0.3s", animationDuration: "4.2s" }}
                />
              </div>

              <div className="absolute top-[43%] left-[27%] sm:left-[29%] z-30 pointer-events-none">
                <Image
                  src="/assets/coffe_bean.png"
                  alt="Grano de café especial"
                  width={60}
                  height={60}
                  className="w-11 h-11 sm:w-15 sm:h-15 object-contain drop-shadow-[0_10px_16px_rgba(0,0,0,0.9)] -rotate-45 animate-float"
                  style={{ animationDelay: "1.1s", animationDuration: "4.8s" }}
                />
              </div>

              <div className="absolute top-[52%] left-[18%] sm:left-[20%] z-30 pointer-events-none">
                <Image
                  src="/assets/coffe_bean.png"
                  alt="Grano de café especial"
                  width={48}
                  height={48}
                  className="w-8 h-8 sm:w-12 sm:h-12 object-contain drop-shadow-[0_8px_14px_rgba(0,0,0,0.85)] rotate-[75deg] animate-float"
                  style={{ animationDelay: "1.9s", animationDuration: "3.8s" }}
                />
              </div>

              {/* Coffee Cup */}
              <div className="absolute bottom-0 left-0 sm:-left-2 z-20 transform hover:scale-105 transition-transform duration-500">
                <Image
                  src="/assets/coffe_cup.png"
                  alt="Pocillo de Café Especial Amatu recién preparado"
                  width={272}
                  height={220}
                  className="w-48 sm:w-68 h-auto object-contain drop-shadow-[0_24px_36px_rgba(0,0,0,0.85)]"
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
