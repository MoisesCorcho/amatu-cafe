import React from "react";
import Image from "next/image";
import { Award, Users, Truck, Sparkles } from "lucide-react";
import { FICCA_PHOTOS } from "@/data/ficca";

export function AboutSection() {
  return (
    <section
      id="nosotros"
      className="py-20 md:py-28 bg-amatu-deep relative border-t border-white/10 overflow-hidden"
    >
      {/* Background glow accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-96 bg-amatu-gold/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-10 right-10 w-80 h-80 bg-amatu-cherry/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Narrative & Value Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-16">
          <div className="lg:col-span-7 space-y-5 text-center lg:text-left">
            <span className="inline-block text-xs uppercase font-bold tracking-widest text-amatu-gold">
              Empresa Familiar • 7 Hermanos
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white leading-tight">
              Una historia familiar unida por el amor al café
            </h2>

            <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
              Detrás de cada grano de café Amatu hay una historia de unión y
              arraigo campesino: somos un emprendimiento familiar de{" "}
              <strong className="text-white">7 hermanos</strong> comprometidos con
              llevar la excelencia del café del Huila desde la finca hasta tu
              taza.
            </p>

            <p className="text-stone-400 text-xs sm:text-sm leading-relaxed">
              Nuestra participación en la{" "}
              <strong className="text-stone-200">
                FICCA Huila 2025 (Feria Internacional de Café, Cacao y
                Agroturismo)
              </strong>{" "}
              consolida nuestro compromiso con las buenas prácticas agrícolas, el
              tueste artesanal y el desarrollo cafetero de nuestra región.
            </p>
          </div>

          {/* Trust Badges */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-4">
            <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 hover:border-amatu-gold/40 transition-colors flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-amatu-gold/15 flex items-center justify-center text-amatu-gold shrink-0">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <span className="block font-bold text-white text-sm">
                  FICCA Huila 2025
                </span>
                <span className="text-xs text-stone-400">
                  Participantes oficiales en feria internacional
                </span>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 hover:border-amatu-gold/40 transition-colors flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-amatu-gold/15 flex items-center justify-center text-amatu-gold shrink-0">
                <Users className="w-6 h-6" />
              </div>
              <div>
                <span className="block font-bold text-white text-sm">
                  7 Hermanos
                </span>
                <span className="text-xs text-stone-400">
                  Tradición campesina y pasión familiar
                </span>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 hover:border-amatu-gold/40 transition-colors flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-amatu-gold/15 flex items-center justify-center text-amatu-gold shrink-0">
                <Truck className="w-6 h-6" />
              </div>
              <div>
                <span className="block font-bold text-white text-sm">
                  Envíos Nacionales
                </span>
                <span className="text-xs text-stone-400">
                  Café fresco a cualquier ciudad de Colombia
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Gallery Header */}
        <div className="flex flex-col sm:flex-row items-center justify-between mb-8 pb-4 border-b border-white/10 gap-3 text-center sm:text-left">
          <div>
            <span className="text-xs uppercase tracking-wider text-amatu-gold font-semibold">
              Galería Documental
            </span>
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-white mt-0.5">
              Vivencias en FICCA Huila 2025
            </h3>
          </div>
          <p className="text-xs text-stone-400 flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-amatu-gold" />
            <span>Pasa el cursor o mantén pulsado para pausar</span>
          </p>
        </div>
      </div>

      {/* Infinite Marquee Filmstrip */}
      <div className="marquee-container py-3">
        <div className="marquee-track">
          {/* Loop 1 */}
          {FICCA_PHOTOS.map((photo, idx) => (
            <div
              key={`set1-${idx}`}
              className="w-64 sm:w-72 md:w-80 h-80 sm:h-96 shrink-0 mx-3 rounded-2xl overflow-hidden border border-white/10 hover:border-amatu-gold/50 transition-all duration-300 relative group shadow-xl"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex items-end p-5">
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-wider text-amatu-gold bg-black/60 px-2 py-0.5 rounded-sm border border-amatu-gold/30">
                    {photo.badge}
                  </span>
                  <p className="text-xs font-medium text-stone-200 mt-1.5">
                    {photo.caption}
                  </p>
                </div>
              </div>
            </div>
          ))}

          {/* Loop 2 (identical duplicate for continuous loop) */}
          {FICCA_PHOTOS.map((photo, idx) => (
            <div
              key={`set2-${idx}`}
              className="w-64 sm:w-72 md:w-80 h-80 sm:h-96 shrink-0 mx-3 rounded-2xl overflow-hidden border border-white/10 hover:border-amatu-gold/50 transition-all duration-300 relative group shadow-xl"
              aria-hidden="true"
            >
              <Image
                src={photo.src}
                alt=""
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex items-end p-5">
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-wider text-amatu-gold bg-black/60 px-2 py-0.5 rounded-sm border border-amatu-gold/30">
                    {photo.badge}
                  </span>
                  <p className="text-xs font-medium text-stone-200 mt-1.5">
                    {photo.caption}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
