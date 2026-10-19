import React from "react";
import Image from "next/image";

export function HeroVisualStage() {
  return (
    <div className="xl:col-span-5 relative flex justify-center items-center py-6 xl:py-0">
      {/* Circular ambient background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] h-[320px] sm:w-[500px] sm:h-[500px] rounded-full border border-amatu-gold/25 bg-radial from-amatu-gold/15 to-transparent blur-xs pointer-events-none z-0" />

      {/* Stage */}
      <div className="relative z-30 w-full max-w-[320px] sm:max-w-[500px] h-[380px] sm:h-[540px] select-none translate-x-4 sm:translate-x-6 xl:translate-x-8 transition-transform duration-300">
        {/* Coffee Bag */}
        <div className="absolute top-2 right-1 sm:-top-10 sm:-right-10 z-20 -rotate-12 transform hover:-rotate-6 transition-transform duration-500 origin-bottom-right">
          <Image
            src="/assets/Iteracion-3.png"
            alt="Bolsa de Café Especial Amatu Excelso 500g"
            width={375}
            height={506}
            priority
            sizes="(max-width: 640px) 224px, (max-width: 1280px) 352px, 375px"
            className="w-56 sm:w-[352px] h-auto object-contain product-shadow animate-float will-change-transform"
          />
        </div>

        {/* Floating Coffee Beans (Decorative) */}
        <div
          className="absolute top-[36%] left-[22%] sm:top-[30%] sm:left-[30%] z-30 pointer-events-none select-none"
          aria-hidden="true"
        >
          <Image
            src="/assets/coffe_bean.png"
            alt=""
            width={52}
            height={52}
            className="w-7 h-7 sm:w-13 sm:h-13 object-contain drop-shadow-[0_8px_14px_rgba(0,0,0,0.85)] rotate-[25deg] animate-float will-change-transform"
            style={{ animationDelay: "0.3s", animationDuration: "4.2s" }}
          />
        </div>

        <div
          className="absolute top-[50%] left-[18%] sm:top-[43%] sm:left-[29%] z-30 pointer-events-none select-none"
          aria-hidden="true"
        >
          <Image
            src="/assets/coffe_bean.png"
            alt=""
            width={60}
            height={60}
            className="w-8 h-8 sm:w-15 sm:h-15 object-contain drop-shadow-[0_10px_16px_rgba(0,0,0,0.9)] -rotate-45 animate-float will-change-transform"
            style={{ animationDelay: "1.1s", animationDuration: "4.8s" }}
          />
        </div>

        <div
          className="absolute top-[66%] left-[16%] sm:top-[52%] sm:left-[20%] z-30 pointer-events-none select-none"
          aria-hidden="true"
        >
          <Image
            src="/assets/coffe_bean.png"
            alt=""
            width={48}
            height={48}
            className="w-6 h-6 sm:w-12 sm:h-12 object-contain drop-shadow-[0_8px_14px_rgba(0,0,0,0.85)] rotate-[75deg] animate-float will-change-transform"
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
            sizes="(max-width: 640px) 112px, 192px"
            className="w-28 sm:w-48 h-auto object-contain drop-shadow-[0_20px_30px_rgba(0,0,0,0.85)]"
          />
        </div>
      </div>
    </div>
  );
}
