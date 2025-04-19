
export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  subcategory: string;
  gender: 'men' | 'women';
  image: string;
  images: string[];
  colors: string[];
  materials: string[];
  isFeatured: boolean;
  isNewArrival: boolean;
  inStock: boolean;
}

export const products: Product[] = [
  // Men's Products
  {
    id: 'm1',
    name: 'Classic Leather Watch',
    description: 'A timeless leather watch with precision Swiss movement and scratch-resistant sapphire crystal.',
    price: 299.99,
    category: 'jewelry',
    subcategory: 'watches',
    gender: 'men',
    image: 'https://images.unsplash.com/photo-1548169874-53e85f753f1e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    images: [
      'https://images.unsplash.com/photo-1548169874-53e85f753f1e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1524592094714-0f0654e20314?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1619994121345-b61cd610c5fd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80'
    ],
    colors: ['Black', 'Brown', 'Navy'],
    materials: ['Leather', 'Stainless Steel'],
    isFeatured: true,
    isNewArrival: false,
    inStock: true
  },
  {
    id: 'm2',
    name: 'Minimalist Bracelet',
    description: 'A sleek and understated bracelet made with premium materials for everyday elegance.',
    price: 129.99,
    category: 'jewelry',
    subcategory: 'bracelets',
    gender: 'men',
    image: 'https://images.unsplash.com/photo-1591369822096-ffd140ec948f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    images: [
      'https://images.unsplash.com/photo-1591369822096-ffd140ec948f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1624526267639-1c24a527a48e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80'
    ],
    colors: ['Silver', 'Gold', 'Matte Black'],
    materials: ['Sterling Silver', 'Stainless Steel'],
    isFeatured: false,
    isNewArrival: true,
    inStock: true
  },
  {
    id: 'm3',
    name: 'Premium Leather Wallet',
    description: 'Handcrafted premium leather wallet with multiple compartments for cards and cash.',
    price: 89.99,
    category: 'leather goods',
    subcategory: 'wallets',
    gender: 'men',
    image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    images: [
      'https://images.unsplash.com/photo-1627123424574-724758594e93?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1559694204-49dee8a482c2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1517254797898-04edd251bfb9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80'
    ],
    colors: ['Black', 'Brown', 'Tan'],
    materials: ['Full-grain Leather'],
    isFeatured: true,
    isNewArrival: false,
    inStock: true
  },
  {
    id: 'm4',
    name: 'Business Briefcase',
    description: 'An elegant briefcase designed for the modern professional, featuring multiple compartments.',
    price: 349.99,
    category: 'bags',
    subcategory: 'briefcases',
    gender: 'men',
    image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    images: [
      'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1596273501899-0cba9147aa12?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1622560480654-d96214fdc887?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80'
    ],
    colors: ['Black', 'Dark Brown'],
    materials: ['Full-grain Leather', 'Brass Hardware'],
    isFeatured: true,
    isNewArrival: false,
    inStock: true
  },
  {
    id: 'm5',
    name: 'Leather Loafers',
    description: 'Premium handcrafted leather loafers designed for comfort and sophistication.',
    price: 199.99,
    category: 'footwear',
    subcategory: 'loafers',
    gender: 'men',
    image: 'https://images.unsplash.com/photo-1614253429340-98120bd6d753?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    images: [
      'https://images.unsplash.com/photo-1614253429340-98120bd6d753?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1631541410846-324d7daab52a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1653415739432-6a5296e5605c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80'
    ],
    colors: ['Brown', 'Black', 'Burgundy'],
    materials: ['Full-grain Leather', 'Leather Sole'],
    isFeatured: false,
    isNewArrival: true,
    inStock: true
  },
  
  // Women's Products
  {
    id: 'w1',
    name: 'Diamond Stud Earrings',
    description: 'Classic diamond stud earrings set in 18k white gold, perfect for any occasion.',
    price: 499.99,
    category: 'jewelry',
    subcategory: 'earrings',
    gender: 'women',
    image: 'https://images.unsplash.com/photo-1610694955371-d4a3e0ce4b52?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    images: [
      'https://images.unsplash.com/photo-1610694955371-d4a3e0ce4b52?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1599458252573-56ae36120de1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1589674781759-b5a75787eb01?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80'
    ],
    colors: ['White Gold', 'Yellow Gold', 'Rose Gold'],
    materials: ['18k Gold', 'Diamond'],
    isFeatured: true,
    isNewArrival: false,
    inStock: true
  },
  {
    id: 'w2',
    name: 'Pearl Necklace',
    description: 'Elegant freshwater pearl necklace with sterling silver clasp, a timeless addition to any collection.',
    price: 249.99,
    category: 'jewelry',
    subcategory: 'necklaces',
    gender: 'women',
    image: 'https://images.unsplash.com/photo-1611591321763-8b63d6ae6d41?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    images: [
      'https://images.unsplash.com/photo-1611591321763-8b63d6ae6d41?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1589128777073-263566ae5e4d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80'
    ],
    colors: ['White Pearl'],
    materials: ['Freshwater Pearl', 'Sterling Silver'],
    isFeatured: true,
    isNewArrival: true,
    inStock: true
  },
  {
    id: 'w3',
    name: 'Designer Tote Bag',
    description: 'Spacious and stylish designer tote bag made from premium materials with multiple compartments.',
    price: 379.99,
    category: 'bags',
    subcategory: 'totes',
    gender: 'women',
    image: 'https://images.unsplash.com/photo-1594223274512-ad4803739b7c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    images: [
      'https://images.unsplash.com/photo-1594223274512-ad4803739b7c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1591561954555-607968c989ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80'
    ],
    colors: ['Black', 'Camel', 'Navy'],
    materials: ['Full-grain Leather', 'Cotton Lining'],
    isFeatured: true,
    isNewArrival: false,
    inStock: true
  },
  {
    id: 'w4',
    name: 'Evening Clutch',
    description: 'Elegant evening clutch with gold-tone hardware, perfect for formal events and special occasions.',
    price: 159.99,
    category: 'bags',
    subcategory: 'clutches',
    gender: 'women',
    image: 'https://images.unsplash.com/photo-1584915003591-a394ea58efc3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    images: [
      'https://images.unsplash.com/photo-1584915003591-a394ea58efc3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1575811078146-0138618bcfff?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1566958247317-7337541c6bc0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80'
    ],
    colors: ['Black', 'Gold', 'Silver'],
    materials: ['Premium Leather', 'Metal Hardware'],
    isFeatured: false,
    isNewArrival: true,
    inStock: true
  },
  {
    id: 'w5',
    name: 'Leather Sandals',
    description: 'Handcrafted premium leather sandals designed for comfort and style.',
    price: 149.99,
    category: 'footwear',
    subcategory: 'sandals',
    gender: 'women',
    image: 'https://images.unsplash.com/photo-1534653299134-96a171b61581?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    images: [
      'https://images.unsplash.com/photo-1534653299134-96a171b61581?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1562273138-f46be4ebdf33?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1581101767113-1677fc2beaa8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80'
    ],
    colors: ['Brown', 'Black', 'Tan'],
    materials: ['Full-grain Leather', 'Leather Sole'],
    isFeatured: true,
    isNewArrival: false,
    inStock: true
  }
];

export const getFeaturedProducts = () => products.filter(product => product.isFeatured);
export const getNewArrivals = () => products.filter(product => product.isNewArrival);
export const getMensProducts = () => products.filter(product => product.gender === 'men');
export const getWomensProducts = () => products.filter(product => product.gender === 'women');
export const getProductsByCategory = (category: string) => products.filter(product => product.category === category);
export const getProductById = (id: string) => products.find(product => product.id === id);
