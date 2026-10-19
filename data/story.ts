import { StoryContent } from "@/types";

export const STORY_CONTENT: StoryContent = {
  eyebrow: "Tradición & Altura",
  coordinates: "Pitalito, Huila · 1°51′N 76°03′W · 1.850 - 1.930 msnm",
  title: "Nacido en las cumbres donde el sol acaricia la tierra",
  quote:
    "En las montañas donde el sol acaricia la tierra, el café se viste de flores, cada botón blanco es promesa de fruto, cada aroma anuncia la vida que despierta en los cafetales. Así florece la esperanza, así nace la esencia de nuestro café especial.",
  altitudeHighlight: "1.850 y 1.930 metros sobre el nivel del mar",
  descriptionPrefix: "Cultivado entre los ",
  descriptionSuffix:
    ", nuestro café se beneficia del clima de alta montaña del Huila. Esa altitud retarda la maduración de las cerezas, concentrando azúcares naturales y regalando notas complejas a chocolate y frutos rojos.",
  highlights: [
    {
      title: "Variedades Nobles",
      description: "Castillo, Colombia y blend insignia de Borbón Rosado con Supremo.",
    },
    {
      title: "De Calidad a Excelencia",
      description: "Tueste artesanal calibrado para resaltar aroma y cuerpo sedoso.",
    },
  ],
  mainImage: {
    src: "/assets/Foto planta de cafe-1.jpg",
    alt: "Frutos de café maduro en los cafetales de Amatu",
  },
  floatingCard: {
    src: "/assets/Foto planta de cafe-2-sin texto.jpg",
    alt: "Cafetales de Amatu en las montañas del Huila",
    caption: "Cafetales en el Huila",
  },
};

export const STORY_HIGHLIGHTS = STORY_CONTENT.highlights;
