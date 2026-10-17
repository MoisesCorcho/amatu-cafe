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
