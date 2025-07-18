// src/data/sarees.ts
// src/data/sarees.ts
export interface Saree {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  images: string[];
  fabric: string;
  description: string;
  rating?: number;
  reviews?: number;
  inStock: number;
  features: string[];
  tags: string[];
  category: string;
  subcategory?: string;
}

// ✅ Exported array
// export let sarees: Saree[] = [];

// // ✅ Function to fetch and update sarees array
// export const fetchSareesFromBackend = async () => {
//   try {
//     const response = await axios.get<Saree[]>('http://localhost:5000/api/sarees');
//     sarees = response.data; // ✅ correct assignment
//     console.log('Successfully fetched sarees:', sarees);
//   } catch (error) {
//     console.error('Error fetching sarees:', error);
//   }
// };


export const sarees: Saree[] = [
  {
    id: 1,
    name: "Elegant Cotton Saree",
    price: 999,
    originalPrice: 1299,
    image: "/s1.jpg",
    images: ["/s1.jpg", "/s2.jpg", "/s3.jpg"],
    fabric: "Cotton",
    description: "A breathable and lightweight cotton saree perfect for daily wear.",
    rating: 4.5,
    reviews: 22,
    inStock: 10,
    features: ["Pure cotton", "Handwoven", "Soft texture"],
    tags: ["cotton", "handloom"],
    category: "daily",
  },
  {
    id: 2,
    name: "Luxury Silk Saree",
    price: 1999,
    originalPrice: 2499,
    image: "/s2.avif",
    images: ["/s2.avif", "/s4.jpg", "/s5.jpg"],
    fabric: "Silk",
    description: "Premium silk saree with golden zari work for special occasions.",
    rating: 4.8,
    reviews: 18,
    inStock: 12,
    features: ["Pure silk", "Zari work", "Elegant drape"],
    tags: ["silk", "premium", "occasion"],
    category: "party",
  },
  {
    id: 3,
    name: "Bridal Wedding Saree",
    price: 5999,
    originalPrice: 7999,
    image: "/s3.jpg",
    images: ["/s3.jpg", "/s6.jpg", "/s7.jpg"],
    fabric: "Silk",
    description: "Exquisite bridal saree with intricate embroidery and zari work.",
    rating: 4.9,
    reviews: 35,
    inStock: 15,
    features: ["Heavy embroidery", "Pure silk", "Bridal collection"],
    tags: ["wedding", "bridal", "luxury"],
    category: "wedding",
  }]
  // {
  //   id: 4,
  //   name: "Georgette Printed Saree",
  //   price: 1299,
  //   originalPrice: 1599,
  //   image: "/s4.jpg",
  //   images: ["/s4.jpg", "/s8.jpg", "/s9.jpg"],
  //   fabric: "Georgette",
  //   description: "Lightweight georgette saree with beautiful prints for casual outings.",
  //   rating: 4.3,
  //   reviews: 15,
  //   inStock: true,
  //   features: ["Printed design", "Easy to drape", "Comfortable wear"],
  //   tags: ["georgette", "printed", "casual"],
  //   category: "daily",
  
//   {
//     id: 5,
//     name: "Chiffon Party Saree",
//     price: 1799,
//     originalPrice: 2199,
//     image: "/s5.jpg",
//     images: ["/s5.jpg", "/s10.jpg", "/s11.jpg"],
//     fabric: "Chiffon",
//     description: "Elegant chiffon saree with sequin work for evening parties.",
//     rating: 4.6,
//     reviews: 27,
//     inStock: true,
//     features: ["Sequin work", "Flowy fabric", "Party wear"],
//     tags: ["chiffon", "party", "evening"],
//     category: "party",
//   },
//   {
//     id: 6,
//     name: "Banarasi Silk Saree",
//     price: 3599,
//     originalPrice: 4999,
//     image: "/s6.jpg",
//     images: ["/s6.jpg", "/s12.jpg", "/s13.jpg"],
//     fabric: "Silk",
//     description: "Authentic Banarasi silk saree with traditional motifs.",
//     rating: 4.7,
//     reviews: 42,
//     inStock: true,
//     features: ["Banarasi weave", "Gold zari", "Traditional design"],
//     tags: ["banarasi", "silk", "traditional"],
//     category: "festive",
//   },
//   {
//     id: 7,
//     name: "Linen Cotton Saree",
//     price: 1199,
//     originalPrice: 1499,
//     image: "/s7.webp",
//     images: ["/s8.jpg", "/s9.jpg", "/s13.jpg"],
//     fabric: "Cotton",
//     description: "Comfortable linen-cotton blend saree for office wear.",
//     rating: 4.4,
//     reviews: 19,
//     inStock: true,
//     features: ["Linen blend", "Wrinkle-free", "Professional look"],
//     tags: ["cotton", "linen", "office"],
//     category: "office",
//   },
//   {
//     id: 8,
//     name: "Organza Party Saree",
//     price: 2299,
//     originalPrice: 2899,
//     image: "/s8.jpg",
//     images: ["/s8.jpg", "/s16.jpg", "/s17.jpg"],
//     fabric: "Organza",
//     description: "Sheer organza saree with delicate embroidery for special events.",
//     rating: 4.5,
//     reviews: 23,
//     inStock: true,
//     features: ["Sheer fabric", "Delicate work", "Evening wear"],
//     tags: ["organza", "party", "evening"],
//     category: "party",
//   },
//   {
//     id: 9,
//     name: "Tussar Silk Saree",
//     price: 2499,
//     originalPrice: 2999,
//     image: "/s9.jpg",
//     images: ["/s9.jpg", "/s18.jpg", "/s19.jpg"],
//     fabric: "Tussar Silk",
//     description: "Eco-friendly tussar silk saree with ethnic prints.",
//     rating: 4.6,
//     reviews: 31,
//     inStock: true,
//     features: ["Natural silk", "Ethnic prints", "Sustainable"],
//     tags: ["tussar", "silk", "ethnic"],
//     category: "traditional",
//   },
//   {
//     id: 10,
//     name: "Net Embroidered Saree",
//     price: 1899,
//     originalPrice: 2399,
//     image: "/s10.jpg",
//     images: ["/s10.jpg", "/s20.jpg", "/s21.jpg"],
//     fabric: "Net",
//     description: "Stylish net saree with elaborate embroidery for weddings.",
//     rating: 4.7,
//     reviews: 28,
//     inStock: true,
//     features: ["Heavy embroidery", "Net fabric", "Bridal look"],
//     tags: ["net", "embroidered", "wedding"],
//     category: "wedding",
//   },
//   {
//     id: 11,
//     name: "Cotton Ikkat Saree",
//     price: 1399,
//     originalPrice: 1799,
//     image: "/s11.jpg",
//     images: ["/s11.jpg", "/s22.jpg", "/s23.jpg"],
//     fabric: "Cotton",
//     description: "Traditional Ikkat printed cotton saree for casual wear.",
//     rating: 4.3,
//     reviews: 17,
//     inStock: true,
//     features: ["Ikkat print", "Pure cotton", "Traditional design"],
//     tags: ["cotton", "ikkat", "traditional"],
//     category: "daily",
//   },
//   {
//     id: 12,
//     name: "Velvet Designer Saree",
//     price: 2799,
//     originalPrice: 3499,
//     image: "/s12.jpg",
//     images: ["/s12.jpg", "/s24.jpg", "/s25.jpg"],
//     fabric: "Velvet",
//     description: "Luxurious velvet saree with designer work for special occasions.",
//     rating: 4.8,
//     reviews: 36,
//     inStock: true,
//     features: ["Premium velvet", "Designer blouse", "Heavy work"],
//     tags: ["velvet", "designer", "luxury"],
//     category: "party",
//   },
// ];

// // Export unique categories
export const categories = [
  { name: 'wedding', image: '/c1.jpg' },
  { name: 'daily', image: '/c2.jpg' },
  { name: 'party', image: '/c3.jpg' },
  { name: 'festive', image: '/c4.jpg' },
  { name: 'office', image: '/c5.jpg' },
  { name: 'traditional', image: '/c6.jpg' },
];

// Export unique fabrics
export const fabrics = [...new Set(sarees.map(s => s.fabric).filter(Boolean))];