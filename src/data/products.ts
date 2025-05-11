import { CalendarProps } from './../components/ui/calendar';
import { Slot } from '@radix-ui/react-slot';
// men
import hublotWatch from '@/assets/images/men/hublot watch.jpg';
import tissotWatch from '@/assets/images/men/Tissot silver chain watch.jpg';
import rolexBraclet from '@/assets/images/men/rolex braclet.jpg';
import blueRolexBraclet from '@/assets/images/men/blur rolex braclet.jpg'
import blackRolexBraclet from '@/assets/images/men/black rolex bracelt.jpg'
import silwerblackRolexBraclet from '@/assets/images/men/silwerand black.jpg'
import blackFashionBraclet from '@/assets/images/men/black fashion braclet.jpg'
import fashionGoldenRolexChain from '@/assets/images/men/golden rolex braclet with fashionable chain.jpg'
import goldenBangle from '@/assets/images/men/golden bangle.jpg'
import locketNecklace from '@/assets/images/men/silwer locket necklace.jpg'
import silmNeckchain from '@/assets/images/men/slim silwer neckchain.jpg'
import cubicHandBracelet from "@/assets/images/men/cubic hand bracelet.jpg"
import blackNeckChain from "@/assets/images/men/black neck chain.jpg"
import silverBracelet from "@/assets/images/men/silver bracelet.jpg"
import goldenLocketChain from "@/assets/images/men/golden locket chain.jpg"
import blackJesusChain from "@/assets/images/men/black jesus chain.jpg"
import wovenBracelet from "@/assets/images/men/woven design bracelet.jpg"
import rolexSilverBlueWatch from '@/assets/images/men/rolex silver blue watch.jpg';
import rolexGreenSilverWatch from '@/assets/images/men/rolex green silver watch.jpg';
import rolexGoldBlueWatch from '@/assets/images/men/rolex gold blue watch.jpg';
import rolexBlackSilverWatch from '@/assets/images/men/rolex black silver watch.jpg';
import rolexGoldBlackWatch from '@/assets/images/men/rolex gold black watch.jpg';
// women
import chanelNeckChain from '@/assets/images/women/chanel neck chain.jpg'
import heartChain from '@/assets/images/women/heart chain.jpg'
import blackFloralBracelet from '@/assets/images/women/black floral bracelet.jpg'
import diamondHeartKara from '@/assets/images/women/diamond  heart kara.jpg'
import goldenFashionableKara from '@/assets/images/women/Golden fashionable kara.jpg'
import goldenBallChain from '@/assets/images/women/Golden Ball Chain.jpg'
import goldPinkFashionEarRings from '@/assets/images/women/gold pink ear rings.jpg'
import goldBlueFashionEarRings from '@/assets/images/women/gold blue ear rings.jpg'
import goldVersaceKara from '@/assets/images/women/gold versace kara.jpg'
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
    name: 'Hublot black Watch',
    description: 'Luxury Hublot watch with a black leather strap and stainless steel case, perfect for any occasion.',
    price: 2499,
    category: 'jewelry',
    subcategory: 'watches',
    gender: 'men',
    image: hublotWatch,
    // 'https://images.unsplash.com/photo-1548169874-53e85f753f1e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    images: [
      hublotWatch,
      // 'https://images.unsplash.com/photo-1548169874-53e85f753f1e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
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
    name: 'Tissot Silver Chain Watch',
    description: 'Stylish silver chain watch with a minimalist design, perfect for any occasion.',
    price: 3499,
    category: 'jewelry',
    subcategory: 'watches',
    gender: 'men',
    image: tissotWatch,
    // 'https://images.unsplash.com/photo-1591369822096-ffd140ec948f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    images: [
      tissotWatch,
      // 'https://images.unsplash.com/photo-1591369822096-ffd140ec948f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
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
    name: 'Rolex Braclet',
    description: 'Luxury Rolex braclet made from high-quality materials, perfect for adding a touch of elegance to any outfit.',
    price: 1799,
    category: 'jewelry',
    subcategory: 'braclets',
    gender: 'men',
    image: rolexBraclet,
    // 'https://images.unsplash.com/photo-1627123424574-724758594e93?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    images: [
      rolexBraclet,
      blueRolexBraclet,
      blackRolexBraclet,
      silwerblackRolexBraclet
      // 'https://images.unsplash.com/photo-1627123424574-724758594e93?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
      // 'https://images.unsplash.com/photo-1559694204-49dee8a482c2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
      // 'https://images.unsplash.com/photo-1517254797898-04edd251bfb9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80'
    ],
    colors: ['Black', 'Brown', 'Tan'],
    materials: ['Full-grain Leather'],
    isFeatured: true,
    isNewArrival: false,
    inStock: true
  },
  {
    id: 'm4',
    name: 'Black Fashion Braclet',
    description: 'Stylish black fashion braclet made from high-quality materials, perfect for adding a touch of elegance to any outfit.',
    price: 399 ,
    category: 'jewelry',
    subcategory: 'braclets',
    gender: 'men',
    image: 
    blackFashionBraclet,
    // 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    images: [
      blackFashionBraclet,
      // 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
      // 'https://images.unsplash.com/photo-1596273501899-0cba9147aa12?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
      // 'https://images.unsplash.com/photo-1622560480654-d96214fdc887?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80'
    ],
    colors: ['Black', 'Dark Brown'],
    materials: ['Full-grain Leather', 'Brass Hardware'],
    isFeatured: true,
    isNewArrival: false,
    inStock: true
  },
  {
    id: 'm5',
    name: 'Golden Fashionable Rolex Chain',
    description: 'Luxury Rolex chain with a fashionable design, perfect for adding a touch of elegance to any outfit.',
    price: 1899,
    category: 'jewelry',
    subcategory: 'braclets',
    gender: 'men',
    image: 
  fashionGoldenRolexChain,
    // 'https://images.unsplash.com/photo-1614253429340-98120bd6d753?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    images: [
      fashionGoldenRolexChain,
      // 'https://images.unsplash.com/photo-1614253429340-98120bd6d753?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
      // 'https://images.unsplash.com/photo-1631541410846-324d7daab52a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
      // 'https://images.unsplash.com/photo-1653415739432-6a5296e5605c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80'
    ],
    colors: ['Brown', 'Black', 'Burgundy'],
    materials: ['Full-grain Leather', 'Leather Sole'],
    isFeatured: false,
    isNewArrival: true,
    inStock: true
  },
  {
    id: 'm6',
    name: 'Golden Bangle',
    description: 'Luxury golden bangle with a fashionable design, perfect for adding a touch of elegance to any outfit.',
    price:999 ,
    category: 'jewelry',
    subcategory: 'braclets',
    gender: 'men',
    image: 
  goldenBangle,
    // 'https://images.unsplash.com/photo-1614253429340-98120bd6d753?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    images: [
      goldenBangle,
      // 'https://images.unsplash.com/photo-1614253429340-98120bd6d753?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
      // 'https://images.unsplash.com/photo-1631541410846-324d7daab52a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
      // 'https://images.unsplash.com/photo-1653415739432-6a5296e5605c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80'
    ],
    colors: ['Brown', 'Black', 'Burgundy'],
    materials: ['Full-grain Leather', 'Leather Sole'],
    isFeatured: false,
    isNewArrival: true,
    inStock: true
  },
  {
    id: 'm7',
    name: 'Octagon Locket Necklace',
    description: 'Stylish octagon locket necklace made from high-quality materials, perfect for adding a touch of elegance to any outfit.',
    price:399 ,
    category: 'jewelry',
    subcategory: 'necklaces',
    gender: 'men',
    image: 
  locketNecklace,
    // 'https://images.unsplash.com/photo-1614253429340-98120bd6d753?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    images: [
      locketNecklace,
      // 'https://images.unsplash.com/photo-1614253429340-98120bd6d753?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
      // 'https://images.unsplash.com/photo-1631541410846-324d7daab52a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
      // 'https://images.unsplash.com/photo-1653415739432-6a5296e5605c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80'
    ],
    colors: ['Brown', 'Black', 'Burgundy'],
    materials: ['Full-grain Leather', 'Leather Sole'],
    isFeatured: false,
    isNewArrival: true,
    inStock: true
  },
  {
    id: 'm8',
    name: 'Slim Silver Neckchain',
    description: 'Stylish slim silver neckchain made from high-quality materials, perfect for adding a touch of elegance to any outfit.',
    price:249 ,
    category: 'jewelry',
    subcategory: 'necklaces',
    gender: 'men',
    image: 
  silmNeckchain,
    // 'https://images.unsplash.com/photo-1614253429340-98120bd6d753?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    images: [
      silmNeckchain,
      // 'https://images.unsplash.com/photo-1614253429340-98120bd6d753?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
      // 'https://images.unsplash.com/photo-1631541410846-324d7daab52a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
      // 'https://images.unsplash.com/photo-1653415739432-6a5296e5605c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80'
    ],
    colors: ['Brown', 'Black', 'Burgundy'],
    materials: ['Full-grain Leather', 'Leather Sole'],
    isFeatured: false,
    isNewArrival: true,
    inStock: true
  },
  {
    id: 'm9',
    name: 'Cubic Hand Braclet',
    description: 'Stylish cubic hand braclet made from high-quality materials, perfect for adding a touch of elegance to any outfit.',
    price:249 ,
    category: 'jewelry',
    subcategory: 'braclets',
    gender: 'men',
    image: 
  cubicHandBracelet,
    // 'https://images.unsplash.com/photo-1614253429340-98120bd6d753?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    images: [
      cubicHandBracelet,
      // 'https://images.unsplash.com/photo-1614253429340-98120bd6d753?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
      // 'https://images.unsplash.com/photo-1631541410846-324d7daab52a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
      // 'https://images.unsplash.com/photo-1653415739432-6a5296e5605c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80'
    ],
    colors: ['Brown', 'Black', 'Burgundy'],
    materials: ['metal'],
    isFeatured: false,
    isNewArrival: true,
    inStock: true
  },
  {
    id: 'm10',
    name: 'Black Neck Chain',
    description: 'Stylish black neck chain made from high-quality materials, perfect for adding a touch of elegance to any outfit.',
    price:149 ,
    category: 'jewelry',
    subcategory: 'necklaces',
    gender: 'men',
    image: 
  blackNeckChain,
    // 'https://images.unsplash.com/photo-1614253429340-98120bd6d753?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    images: [
      blackNeckChain,
      // 'https://images.unsplash.com/photo-1614253429340-98120bd6d753?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
      // 'https://images.unsplash.com/photo-1631541410846-324d7daab52a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
      // 'https://images.unsplash.com/photo-1653415739432-6a5296e5605c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80'
    ],
    colors: ['Brown', 'Black', 'Burgundy'],
    materials: ['metal'],
    isFeatured: false,
    isNewArrival: true,
    inStock: true
  },
  {
    id: 'm11',
    name: 'Silver Braclet',
    description: 'Stylish silver braclet made from high-quality materials, perfect for adding a touch of elegance to any outfit.',
    price: 299,
    category: 'jewelry',
    subcategory: 'braclets',
    gender: 'men',
    image: 
  silverBracelet,
    // 'https://images.unsplash.com/photo-1614253429340-98120bd6d753?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    images: [
      silverBracelet,
      // 'https://images.unsplash.com/photo-1614253429340-98120bd6d753?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
      // 'https://images.unsplash.com/photo-1631541410846-324d7daab52a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
      // 'https://images.unsplash.com/photo-1653415739432-6a5296e5605c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80'
    ],
    colors: ['Brown', 'Black', 'Burgundy'],
    materials: ['metal'],
    isFeatured: false,
    isNewArrival: true,
    inStock: true
  },
  {
    id: 'm12',
    name: 'Golden Locket Chain',
    description: 'Stylish golden locket chain made from high-quality materials, perfect for adding a touch of elegance to any outfit.',
    price: 399,
    category: 'jewelry',
    subcategory: 'necklaces',
    gender: 'men',
    image: 
  goldenLocketChain,
    // 'https://images.unsplash.com/photo-1614253429340-98120bd6d753?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    images: [
      goldenLocketChain,
      // 'https://images.unsplash.com/photo-1614253429340-98120bd6d753?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
      // 'https://images.unsplash.com/photo-1631541410846-324d7daab52a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
      // 'https://images.unsplash.com/photo-1653415739432-6a5296e5605c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80'
    ],
    colors: ['Brown', 'Black', 'Burgundy'],
    materials: ['metal'],
    isFeatured: false,
    isNewArrival: true,
    inStock: true
  },
  {
    id: 'm13',
    name: 'Black Jesus Chain',
    description: 'Stylish black Jesus chain made from high-quality materials, perfect for adding a touch of elegance to any outfit.',
    price:299 ,
    category: 'jewelry',
    subcategory: 'necklaces',
    gender: 'men',
    image: 
  blackJesusChain,
    // 'https://images.unsplash.com/photo-1614253429340-98120bd6d753?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    images: [
      blackJesusChain,
      // 'https://images.unsplash.com/photo-1614253429340-98120bd6d753?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
      // 'https://images.unsplash.com/photo-1631541410846-324d7daab52a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
      // 'https://images.unsplash.com/photo-1653415739432-6a5296e5605c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80'
    ],
    colors: ['Brown', 'Black', 'Burgundy'],
    materials: ['metal'],
    isFeatured: false,
    isNewArrival: true,
    inStock: true
  },
  {
    id: 'm14',
    name: 'Woven Design Braclet',
    description: 'Stylish woven design braclet made from high-quality materials, perfect for adding a touch of elegance to any outfit.',
    price:799 ,
    category: 'jewelry',
    subcategory: 'braclets',
    gender: 'men',
    image: 
  wovenBracelet,
    // 'https://images.unsplash.com/photo-1614253429340-98120bd6d753?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    images: [
        wovenBracelet,
      // 'https://images.unsplash.com/photo-1614253429340-98120bd6d753?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
      // 'https://images.unsplash.com/photo-1631541410846-324d7daab52a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
      // 'https://images.unsplash.com/photo-1653415739432-6a5296e5605c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80'
    ],
    colors: ['Brown', 'Black', 'Burgundy'],
    materials: ['metal'],
    isFeatured: false,
    isNewArrival: true,
    inStock: true
  },
  {
    id: 'm15',
    name: 'Luxury Rolex Watch Collection',
    description: 'Exclusive collection of premium Rolex watches featuring multiple color combinations and styles, perfect for the discerning gentleman.',
    price: 2999,
    category: 'jewelry',
    subcategory: 'watches',
    gender: 'men',
    image: rolexGoldBlackWatch,
    images: [
      rolexGoldBlackWatch,
      rolexBlackSilverWatch,
      rolexGoldBlueWatch,
      rolexGreenSilverWatch,
      rolexSilverBlueWatch
    ],
    colors: ['Gold-Black', 'Black-Silver', 'Gold-Blue', 'Green-Silver', 'Silver-Blue'],
    materials: ['Stainless Steel', '18k Gold', 'Sapphire Crystal'],
    isFeatured: true,
    isNewArrival: true,
    inStock: true
  },
  // Women's Products
  {
    id: 'w1',
    name: 'Chanel Neck Chain',
    description: 'Luxury Chanel neck chain with a stylish design, perfect for adding a touch of elegance to any outfit.',
    price: 399,
    category: 'jewelry',
    subcategory: 'necklaces',
    gender: 'women',
    image:chanelNeckChain , images: [
      chanelNeckChain,
       ],
    colors: ['White Gold', 'Yellow Gold', 'Rose Gold'],
    materials: ['18k Gold', 'Diamond'],
    isFeatured: true,
    isNewArrival: false,
    inStock: true
  },
  {
    id: 'w2',
    name: 'Golden Heart Chain',
    description: 'Luxury Golden Heart Chain with a stylish design, perfect for adding a touch of elegance to any outfit.',
    price: 399,
    category: 'jewelry',
    subcategory: 'necklaces',
    gender: 'women',
    image: heartChain,
    images: [
      heartChain],
    colors: ['Gold'],
    materials: ['Freshwater Pearl', 'Sterling Silver'],
    isFeatured: true,
    isNewArrival: true,
    inStock: true
  },
  {
    id: 'w3',
    name: 'Floral Braclet',
    description: 'Luxury floral braclet with a stylish design, perfect for adding a touch of elegance to any outfit.',
    price: 499,
    category: 'jewelry',
    subcategory: 'braclets',
    gender: 'women',
    image: blackFloralBracelet,
    images: [
      blackFloralBracelet,],
    colors: ['Gold'],
    materials: ["metal"],
    isFeatured: true,
    isNewArrival: false,
    inStock: true
  },
  {
    id: 'w4',
    name: 'Diamond Heart Kara',
    description: 'Diamond Heart Kara with a stylish design, perfect for adding a touch of elegance to any outfit.',
    price: 499,
    category: 'jewelry',
    subcategory: 'braclets',
    gender: 'women',
    image: diamondHeartKara,
    images: [
      diamondHeartKara,],
    colors: ['Gold'],
    materials: ["metal"],
    isFeatured: true,
    isNewArrival: false,
    inStock: true
  },
  {
    id: 'w5',
    name: 'Golden Fashionable Kara',
    description: 'Golden Fashionable Kara with a stylish design, perfect for adding a touch of elegance to any outfit.',
    price: 799,
    category: 'jewelry',
    subcategory: 'braclets',
    gender: 'women',
    image: goldenFashionableKara,
    images: [
      goldenFashionableKara,],
    colors: ['Gold'],
    materials: ["metal"],
    isFeatured: true,
    isNewArrival: false,
    inStock: true
  },
  {
    id: 'w6',
    name: 'Golden Ball Chain',
    description: 'Golden Ball Chain with a stylish design, perfect for adding a touch of elegance to any outfit.',
    price: 699,
    category: 'jewelry',
    subcategory: 'necklaces',
    gender: 'women',
    image: goldenBallChain,
    images: [
      goldenBallChain],
    colors: ['Gold'],
    materials: ["metal"],
    isFeatured: true,
    isNewArrival: false,
    inStock: true
  },
  {
    id: 'w7',
    name: 'Golden fashion ear rings',
    description: 'Golden fashion ear rings with a stylish design, perfect for adding a touch of elegance to any outfit.',
    price: 599,
    category: 'jewelry',
    subcategory: 'earrings',
    gender: 'women',
    image: goldPinkFashionEarRings,
    images: [
      goldPinkFashionEarRings,
    goldBlueFashionEarRings],
    colors: ['Pink','Blue',],
    materials: ["metal"],
    isFeatured: true,
    isNewArrival: false,
    inStock: true
  },
  {
    id: 'w8',
    name: 'Golden versace kara',
    description: 'Golden versace kara with a stylish design, perfect for adding a touch of elegance to any outfit.',
    price: 699,
    category: 'jewelry',
    subcategory: 'braclets',
    gender: 'women',
    image: goldVersaceKara,
    images: [
      goldVersaceKara],
    colors: ['Pink','Blue',],
    materials: ["metal"],
    isFeatured: true,
    isNewArrival: false,
    inStock: true
  },
  
];

export const getFeaturedProducts = () => products.filter(product => product.isFeatured);
export const getNewArrivals = () => products.filter(product => product.isNewArrival);
export const getMensProducts = () => products.filter(product => product.gender === 'men');
export const getWomensProducts = () => products.filter(product => product.gender === 'women');
export const getProductsByCategory = (category: string) => products.filter(product => product.category === category);
export const getProductById = (id: string) => products.find(product => product.id === id);
