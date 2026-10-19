export interface ProductSpec {
  label: string;
  value: string;
}

export interface Product {
  id: string;
  name: string;
  subtitle: string;
  badge: string;
  badgeColor: string;
  price: number;
  images: string[];
  description: string;
  specs: ProductSpec[];
  variantsLabel?: string;
  variants: string[];
  defaultVariant: string;
  imageFit?: "cover" | "contain";
}

export interface CartItem {
  id: string;
  name: string;
  variant: string;
  price: number;
  quantity: number;
  image?: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface BrandAttribute {
  label: string;
  value: string;
}

export interface TrustBadge {
  id: string;
  title: string;
  description: string;
  icon: "award" | "users" | "truck";
}

export interface StoryHighlight {
  title: string;
  description: string;
}

export interface StoryContent {
  eyebrow: string;
  title: string;
  quote: string;
  altitudeHighlight: string;
  descriptionPrefix: string;
  descriptionSuffix: string;
  highlights: StoryHighlight[];
  mainImage: {
    src: string;
    alt: string;
  };
  floatingCard: {
    src: string;
    alt: string;
    caption: string;
  };
}

export interface SocialLink {
  handle: string;
  url: string;
}

export interface ContactInfo {
  phone: string;
  whatsappNumber: string;
  email: string;
  location: string;
  instagram: SocialLink;
}
