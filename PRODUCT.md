# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Amantes y conocedores de café especial en Colombia (consumidores finales B2C) que valoran el café de origen único, altitud garantizada y trazabilidad campesina. Compran desde su dispositivo móvil o de escritorio para disfrutar de café fresco en el hogar, oficina o viajes, y prefieren un canal de atención ágil y personalizado cerrando sus pedidos directamente vía WhatsApp.

## Product Purpose

Conectar a los consumidores colombianos directamente con el café de especialidad cosechado en Pitalito, Huila por una familia campesina tradicional de 7 hermanos. El éxito significa convertir visitantes en compradores recurrentes de café fresco y métodos de preparación, transmitiendo autenticidad de origen y calidez sin fricción transaccional.

## Positioning

Café de especialidad cultivado a más de 1.850 msnm en Pitalito, Huila, respaldado por la tradición viva de 7 hermanos caficultores y participación oficial en FICCA Huila 2025. A diferencia de marcas industriales o intermediarios impersonales, Amatu ofrece café de alta montaña con notas equilibradas a chocolate y frutos rojos, con tueste artesanal reciente y despacho directo a cualquier ciudad de Colombia.

## Operating Context

- **Contexto de compra**: Predominantemente dispositivos móviles y de escritorio en momentos de compra reflexiva o reposición de café.
- **Flujo de conversión**: Exploración del catálogo o narrativa de origen, selección de variantes (en grano vs. molido, presentaciones), resumen de pedido en carrito y despacho automático formateado a WhatsApp Business (+57 313 3862479).
- **Logística**: Despacho nacional desde Pitalito, Huila a cualquier destino de Colombia.

## Capabilities and Constraints

- **Capacidades funcionales**: Catálogo modular de productos, selector de variantes y tipo de molienda, QuickView responsivo con tabs de especificaciones y preparación, carrito contextual y generación de mensaje estructurado de compra para WhatsApp.
- **Restricciones técnicas**: Next.js 16 (App Router con Server Components y Client Components aislados), Tailwind CSS v4 con variables semánticas. Sin pasarela de pago bancaria automatizada en esta etapa (checkout directo por WhatsApp).
- **Terminología fija**: "Café Especial Excelso", "msnm", "Pitalito, Huila", "Borbón Rosado", "Sachets Filtrantes (Drip Coffee)", "Prensa Francesa".

## Brand Commitments

- **Nombre e Identidad**: Amatu Café Especial.
- **Origen y Coordenadas**: Pitalito, Huila, Colombia (1.850 - 1.930 msnm · 1°51′N 76°03′W).
- **Tono y Voz**: Poético, sobrio, respetuoso de la tierra y la labor campesina; sofisticado sin perder cercanía humana.
- **Identidad Visual**: Dark Luxury E-commerce & Neo-Editorial (`amatu-charcoal`, `amatu-deep`, acentos en `amatu-cherry` y `amatu-gold`; tipografía IBM Plex Serif para títulos/narrativa y IBM Plex Sans para UI/datos).
- **Firma Geométrica**: `rounded-sm` estricto en botones de acción y controles interactivos; prohibido el uso de botones píldora (`rounded-full`) en textos de acción.

## Evidence on Hand

- **Contacto y Redes**: WhatsApp `+57 313 3862479`, Instagram `@amatu_cafeespecial`, ubicación en Pitalito, Huila.
- **Fotografía Real**: Archivos en `public/assets/` documentando cafetales reales, frutos maduros (`Foto planta de cafe-1.jpg`), empaques de café (`Bolsa de cafe-1.png`, `Iteracion-3.png`), sachets y cafeteras.
- **Reconocimiento Comprobado**: Participantes oficiales en FICCA Huila 2025 (Feria Internacional de Café, Cacao y Agroturismo).
- **Compromiso de Veracidad**: No inventar sellos ni certificaciones no acreditadas (ej. sellos orgánicos no validados) ni reseñas ficticias.

## Product Principles

- **Autenticidad de Origen**: Cada elemento visual y textual debe honrar la labor en Pitalito y la historia familiar de los 7 hermanos, evitando clichés genéricos de marketing.
- **Transparencia Técnica**: El perfil de taza, la altitud, las variedades y el método de preparación deben comunicarse con total claridad para el comprador educado.
- **Cero Fricción en la Acción**: La selección de productos, variantes y la transición a WhatsApp deben ser intuitivas, inmediatas y transparentes.
- **Artesanía Editorial**: La interfaz debe sostener un nivel de detalle digno de una publicación de lujo, donde la tipografía, el espaciado y el color respiren jerarquía y calma.

## Accessibility & Inclusion

- Cumplimiento de pautas WCAG AA en contrastes de texto sobre fondos oscuros.
- Estructura semántica con landmarks accesibles, atributos ARIA adecuados en diálogos/drawers y foco interactivo visible en todos los componentes.
