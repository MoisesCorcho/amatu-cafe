import {
  BrandAttribute,
  TrustBadge,
  StoryHighlight,
  ContactInfo,
} from "@/types";

export const CONTACT_INFO: ContactInfo = {
  phone: "+57 313 3862479",
  whatsappNumber: "573133862479",
  email: "contacto@amatucafe.com",
  location: "Pitalito, Huila - Colombia",
  instagram: {
    handle: "@amatu_cafeespecial",
    url: "https://www.instagram.com/amatu_cafeespecial/",
  },
};

export const HERO_ATTRIBUTES: BrandAttribute[] = [
  {
    label: "Variedad",
    value: "Excelso",
  },
  {
    label: "Altitud",
    value: "1.850 - 1.930 m",
  },
  {
    label: "Origen",
    value: "Huila, Colombia",
  },
];

export { STORY_HIGHLIGHTS } from "./story";

export const ABOUT_TRUST_BADGES: TrustBadge[] = [
  {
    id: "ficca",
    title: "FICCA Huila 2025",
    description: "Participantes oficiales en feria internacional",
    icon: "award",
  },
  {
    id: "family",
    title: "7 Hermanos",
    description: "Tradición campesina y pasión familiar",
    icon: "users",
  },
  {
    id: "shipping",
    title: "Envíos Nacionales",
    description: "Café fresco a cualquier ciudad de Colombia",
    icon: "truck",
  },
];
