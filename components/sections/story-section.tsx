import React from "react";
import Image from "next/image";

export function StorySection() {
  return (
    <section
      id="historia"
      className="bg-amatu-linen text-stone-800 pt-20 pb-28 md:pt-32 md:pb-36 relative z-10 -mt-[2px]"
    >
      <div className="max-w-7xl mx-auto px-6 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Visual Composition Left */}
          <div className="lg:col-span-6 relative">
            {/* Main plantation photo */}
            <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white relative h-96 sm:h-[460px]">
              <Image
                src="/assets/Foto planta de cafe-2.jpg"
                alt="Cafetales de Amatu en las montañas del Huila"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>

            {/* Overlapping ripe cherries card */}
            <div className="absolute -bottom-8 -right-4 sm:-right-8 bg-white p-3 rounded-2xl shadow-xl max-w-[220px] hidden sm:block border border-stone-200">
              <div className="relative w-full h-28 rounded-xl overflow-hidden mb-2">
                <Image
                  src="/assets/Foto planta de cafe-1.jpg"
                  alt="Frutos de café maduro"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-xs font-semibold text-stone-800 text-center">
                Cosecha manual grano a grano
              </p>
            </div>
          </div>

          {/* Editorial Narrative Right */}
          <div className="lg:col-span-6 space-y-6">
            <span className="inline-block text-xs uppercase font-bold tracking-widest text-amatu-gold-dark">
              Tradición & Altura • Huila, Colombia
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-stone-900 leading-tight">
              Nacido en las cumbres donde el sol acaricia la tierra
            </h2>

            {/* Poetic quote */}
            <blockquote className="p-4 border-l-4 border-amatu-gold bg-stone-100/80 rounded-r-xl italic text-stone-700 font-serif text-lg leading-relaxed shadow-sm">
              &ldquo;En las montañas donde el sol acaricia la tierra, el café se
              viste de flores, cada botón blanco es promesa de fruto, cada aroma
              anuncia la vida que despierta en los cafetales. Así florece la
              esperanza, así nace la esencia de nuestro café especial.&rdquo;
            </blockquote>

            <p className="text-stone-600 leading-relaxed">
              Cultivado entre los{" "}
              <strong>1.850 y 1.930 metros sobre el nivel del mar</strong>,
              nuestro café se beneficia del clima de alta montaña del Huila. Esa
              altitud retarda la maduración de las cerezas, concentrando azúcares
              naturales y regalando notas complejas a chocolate y frutos rojos.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-4 border-t border-stone-300">
              <div>
                <div className="text-amatu-gold-dark font-serif text-2xl font-bold">
                  Variedades Nobles
                </div>
                <p className="text-xs text-stone-600 mt-1">
                  Castillo, Colombia y blend insignia de Borbón Rosado con
                  Supremo.
                </p>
              </div>
              <div>
                <div className="text-amatu-gold-dark font-serif text-2xl font-bold">
                  De Calidad a Excelencia
                </div>
                <p className="text-xs text-stone-600 mt-1">
                  Tueste artesanal calibrado para resaltar aroma y cuerpo
                  sedoso.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Curved SVG Divider to Catalog section */}
      <div className="absolute -bottom-px left-0 right-0 w-full overflow-hidden leading-none pointer-events-none z-10 translate-y-[1px]">
        <svg
          className="block w-full h-16 sm:h-24 lg:h-32 text-amatu-charcoal scale-y-[1.02] origin-bottom"
          viewBox="0 0 1440 120"
          fill="none"
          preserveAspectRatio="none"
        >
          <path
            d="M0,45 C280,115 620,120 920,55 C1180,5 1340,40 1440,65 L1440,125 L0,125 Z"
            fill="currentColor"
          />
        </svg>
      </div>
    </section>
  );
}
