import React from "react";
import Image from "next/image";

export function CatalogBackground() {
  return (
    <div
      className="absolute inset-0 pointer-events-none select-none overflow-hidden z-0"
      aria-hidden="true"
    >
      <div className="absolute top-2 sm:top-4 md:top-6 -right-16 sm:-right-10 w-72 sm:w-88 md:w-[420px] h-auto opacity-[0.14] rotate-12">
        <Image
          src="/assets/coffeeBeanNuevo.svg"
          alt=""
          width={420}
          height={420}
          className="w-full h-auto"
        />
      </div>
      <div className="absolute bottom-6 sm:bottom-8 md:bottom-12 -left-20 sm:-left-12 w-80 sm:w-96 md:w-[460px] h-auto opacity-[0.12] -rotate-45">
        <Image
          src="/assets/coffeeBeanNuevo.svg"
          alt=""
          width={460}
          height={460}
          className="w-full h-auto"
        />
      </div>
    </div>
  );
}
