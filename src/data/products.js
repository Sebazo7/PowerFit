/**
 * Catálogo de productos PowerFit
 * Las imágenes están en /public/images/ y se referencian con rutas absolutas
 * Precios en pesos chilenos (CLP)
 */
const products = [
  {
    id: "p1",
    name: "Proteina Whey",
    category: "Proteínas",
    price: 29990,
    description: "Proteína aislada de suero 1kg",
    image: "/images/Proteina.png",
  },
  {
    id: "p2",
    name: "Creatina Monohidrato",
    category: "Recuperación",
    price: 19990,
    description: "Monohidrato puro 300g",
    image: "/images/creatina.png",
  },
  {
    id: "p3",
    name: "BCAA",
    category: "Aminoácidos",
    price: 15550,
    description: "Aminoácidos ramificados 200g",
    image: "/images/bcaa.png",
  },
  {
    id: "p4",
    name: "Pre-Entreno",
    category: "Pre-Entreno",
    price: 24000,
    description: "Mezcla pre-entreno 250g",
    image: "/images/pre-entreno.png",
  },
  {
    id: "p5",
    name: "Multivitamínico",
    category: "Vitaminas",
    price: 12500,
    description: "Complejo multivitamínico diario 60 cápsulas",
    image: "/images/multivitaminico.png",
  },
  {
    id: "p6",
    name: "Vitamina D3",
    category: "Vitaminas",
    price: 9990,
    description: "Vitamina D3 2000 IU, 90 cápsulas",
    image: "/images/vitamina-d.png",
  },
  {
    id: "p7",
    name: "Omega-3",
    category: "Salud",
    price: 18000,
    description: "Aceite de pescado omega-3 1000mg, 60 cápsulas",
    image: "/images/omega-3.png",
  },
  {
    id: "p8",
    name: "Magnesio",
    category: "Recuperación",
    price: 16500,
    description: "Magnesio para recuperación",
    image: "/images/magnesio.png",
  },
  {
    id: "p9",
    name: "Glutamina",
    category: "Recuperación",
    price: 22000,
    description: "L-Glutamina 500g para recuperación muscular",
    image: "/images/glutamina.png",
  },
  {
    id: "p10",
    name: "Vitamina C",
    category: "Vitaminas",
    price: 8500,
    description: "Vitamina C 1000mg, 100 comprimidos",
    image: "/images/vitamina C.png",
  },
  {
    id: "p11",
    name: "Probióticos",
    category: "Salud",
    price: 21000,
    description: "Mezcla probiótica para salud digestiva, 60 cápsulas",
    image: "/images/probioticos.webp",
  },
  {
    id: "p12",
    name: "Complejo B",
    category: "Vitaminas",
    price: 11500,
    description:
      "Vitamina B complex para energía y metabolismo, 60 comprimidos",
    image: "/images/complejo b.jpg",
  },
]

export default products
