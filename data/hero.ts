import { HeroContent } from "@/types";
import { HERO_ATTRIBUTES } from "./brand";

export const HERO_CONTENT: HeroContent = {
  headlinePrefix: "Aroma dulce con notas a ",
  headlineHighlight: "chocolate",
  headlineSuffix: " y cerezas rojas.",
  description:
    "Café especial cultivado a más de 1.850 metros de altura en el Huila. Un blend insignia de Borbón Rosado con Supremo, cosechado grano a grano para una taza dulce y balanceada.",
  attributes: HERO_ATTRIBUTES,
  primaryCta: {
    label: "Ver Catálogo",
    href: "#catalogo",
  },
  secondaryCta: {
    label: "Nuestra Historia",
    href: "#historia",
  },
};
