// Mock data for the e-commerce website

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  image: string;
  images: string[];
  category: string;
  rating: number;
  reviews: number;
  isNew?: boolean;
  isFeatured?: boolean;
  stock: number;
  specifications: Record<string, string>;
}

export interface Category {
  id: string;
  name: string;
  image: string;
  count: number;
}

export const featuredCategories: Category[] = [
  {
    id: 'cookware',
    name: 'Cookware',
    image: 'https://images.unsplash.com/photo-1584883790088-31d5bd8cada6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
    count: 42
  },
  {
    id: 'utensils',
    name: 'Utensils',
    image: 'https://images.unsplash.com/photo-1590794056431-d117846e7dc6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
    count: 38
  },
  {
    id: 'storage',
    name: 'Storage',
    image: 'https://images.unsplash.com/photo-1599056984575-ccd934a1271b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
    count: 27
  },
  {
    id: 'appliances',
    name: 'Appliances',
    image: 'https://images.unsplash.com/photo-1585515320310-259814833e62?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
    count: 19
  }
];

export const products: Product[] = [
  {
    id: 'p1',
    name: 'Professional Chef\'s Knife',
    description: 'High-carbon stainless steel chef\'s knife with ergonomic handle for comfortable grip. Perfect for chopping, slicing, and dicing with precision.',
    price: 89.99,
    originalPrice: 119.99,
    image: 'https://images.unsplash.com/photos/silver-and-black-knife-on-silver-table-Dz9aN44nDsA',
    images: [
      'https://images.unsplash.com/photos/silver-and-black-knife-on-silver-table-Dz9aN44nDsA',
      'https://images.unsplash.com/photo-1566454825481-43caac51a266?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
      'https://images.unsplash.com/photo-1602774895247-a574a2ae5e55?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80'
    ],
    category: 'utensils',
    rating: 4.8,
    reviews: 125,
    isFeatured: true,
    stock: 45,
    specifications: {
      'Blade Material': 'High-carbon stainless steel',
      'Handle Material': 'Pakkawood',
      'Blade Length': '8 inches',
      'Dishwasher Safe': 'No',
      'Weight': '227g'
    }
  },
  {
    id: 'p2',
    name: 'Non-Stick Frying Pan Set',
    description: 'Set of 3 non-stick frying pans in different sizes. Features a durable ceramic coating and heat-resistant handles for safe cooking.',
    price: 79.99,
    originalPrice: 99.99,
    image: 'https://www.istockphoto.com/photo/black-pan-with-non-stick-coating-and-plastic-handle-in-different-positions-3d-gm1621677892-531762790',
    images: [
      'https://www.istockphoto.com/photo/black-pan-with-non-stick-coating-and-plastic-handle-in-different-positions-3d-gm1621677892-531762790',
      'https://images.unsplash.com/photo-1590794056467-1c7170e543ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
      'https://images.unsplash.com/photo-1593784991095-a205069470b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80'
    ],
    category: 'cookware',
    rating: 4.5,
    reviews: 89,
    isFeatured: true,
    stock: 32,
    specifications: {
      'Material': 'Aluminum with ceramic coating',
      'Sizes': '8, 10, and 12 inches',
      'Dishwasher Safe': 'Yes',
      'Induction Compatible': 'Yes',
      'Oven Safe': 'Up to 450°F'
    }
  },
  {
    id: 'p3',
    name: 'Stainless Steel Food Storage Containers',
    description: 'Set of 5 airtight stainless steel food storage containers. Perfect for meal prep and storing leftovers.',
    price: 34.99,
    image: 'https://unsplash.com/photos/red-and-silver-steel-cooking-pots-V_o1_Hz1Ysw',
    images: [
      'https://unsplash.com/photos/red-and-silver-steel-cooking-pots-V_o1_Hz1Ysw',
      'https://images.unsplash.com/photo-1585515320310-259814833e62?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
      'https://images.unsplash.com/photo-1583947582886-f40ec95cc4c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80'
    ],
    category: 'storage',
    rating: 4.7,
    reviews: 56,
    isNew: true,
    stock: 78,
    specifications: {
      'Material': '304 Stainless Steel',
      'Pieces': '5 containers with lids',
      'Sizes': 'Varying from 4oz to 24oz',
      'Dishwasher Safe': 'Yes',
      'Leak-proof': 'Yes'
    }
  },
  {
    id: 'p4',
    name: 'Electric Stand Mixer',
    description: 'Powerful stand mixer with 10 speed settings and multiple attachments for various cooking tasks.',
    price: 249.99,
    originalPrice: 299.99,
    image: 'https://www.istockphoto.com/photo/purple-stand-kitchen-mixer-isolated-on-white-background-gm2206488808-623800801',
    images: [
      'https://www.istockphoto.com/photo/purple-stand-kitchen-mixer-isolated-on-white-background-gm2206488808-623800801',
      'https://images.unsplash.com/photo-1591224227071-5cfada8aaf43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
      'https://images.unsplash.com/photo-1617622142633-21db7718010e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80'
    ],
    category: 'appliances',
    rating: 4.9,
    reviews: 203,
    isFeatured: true,
    stock: 12,
    specifications: {
      'Power': '550 Watts',
      'Bowl Capacity': '5 Quarts',
      'Speed Settings': '10',
      'Attachments': 'Flat beater, dough hook, wire whip',
      'Warranty': '1 year'
    }
  },
  {
    id: 'p5',
    name: 'Ceramic Dinner Set',
    description: 'Beautiful 24-piece ceramic dinner set including plates, bowls, and mugs. Elegant design suitable for any table setting.',
    price: 129.99,
    image: 'https://www.istockphoto.com/photo/plates-variation-gm910468040-250738706',
    images: [
      'https://www.istockphoto.com/photo/plates-variation-gm910468040-250738706',
      'https://images.unsplash.com/photo-1605826832916-d0a401da2a40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
      'https://images.unsplash.com/photo-1590794056467-1c7170e543ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80'
    ],
    category: 'utensils',
    rating: 4.6,
    reviews: 78,
    isNew: true,
    stock: 23,
    specifications: {
      'Material': 'Ceramic',
      'Pieces': '24 piece set',
      'Includes': '6 dinner plates, 6 salad plates, 6 bowls, 6 mugs',
      'Dishwasher Safe': 'Yes',
      'Microwave Safe': 'Yes'
    }
  },
  {
    id: 'p6',
    name: 'Wooden Cutting Board Set',
    description: 'Set of 3 wooden cutting boards in different sizes. Made from sustainable acacia wood with juice grooves and handles.',
    price: 49.99,
    image: 'https://unsplash.com/photos/brown-wooden-chopping-board-on-white-background-P4IqT4BHp5g',
    images: [
      'https://unsplash.com/photos/brown-wooden-chopping-board-on-white-background-P4IqT4BHp5g',
      'https://images.unsplash.com/photo-1590794058222-39922153e4cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
      'https://images.unsplash.com/photo-1593618980870-f68d149fac60?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80'
    ],
    category: 'utensils',
    rating: 4.7,
    reviews: 62,
    stock: 54,
    specifications: {
      'Material': 'Acacia Wood',
      'Sizes': 'Small, Medium, Large',
      'Features': 'Juice grooves, handles',
      'Dimensions': '10x7, 14x10, 18x12 inches',
      'Care': 'Hand wash only, oil regularly'
    }
  },
  {
    id: 'p7',
    name: 'Silicone Utensil Set',
    description: 'Heat-resistant silicone kitchen utensil set with stainless steel handles. Includes spatula, spoon, ladle, and more.',
    price: 29.99,
    originalPrice: 39.99,
    image: 'https://www.istockphoto.com/photo/set-of-different-kitchen-utensils-on-white-table-against-pink-wooden-background-gm1908307586-554641167',
    images: [
      'https://www.istockphoto.com/photo/set-of-different-kitchen-utensils-on-white-table-against-pink-wooden-background-gm1908307586-554641167',
      'https://images.unsplash.com/photo-1584269857337-2925e2d8091d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
      'https://images.unsplash.com/photo-1591223992056-61658e7839c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80'
    ],
    category: 'utensils',
    rating: 4.4,
    reviews: 41,
    stock: 67,
    specifications: {
      'Material': 'Silicone with stainless steel handles',
      'Pieces': '7 piece set',
      'Heat Resistant': 'Up to 480°F',
      'Dishwasher Safe': 'Yes',
      'Non-scratch': 'Yes'
    }
  },
  {
    id: 'p8',
    name: 'Cast Iron Dutch Oven',
    description: 'Premium enameled cast iron dutch oven with 6-quart capacity. Perfect for slow cooking, braising, and baking.',
    price: 89.99,
    originalPrice: 119.99,
    image: 'https://images.unsplash.com/photo-1619895092538-128341789043?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
    images: [
      'https://images.unsplash.com/photo-1619895092538-128341789043?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
      'https://images.unsplash.com/photo-1626200953934-f7b1a83e736c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
      'https://images.unsplash.com/photo-1600367162897-640fcd49f0d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80'
    ],
    category: 'cookware',
    rating: 4.9,
    reviews: 156,
    isFeatured: true,
    stock: 18,
    specifications: {
      'Material': 'Cast iron with enamel coating',
      'Capacity': '6 quarts',
      'Oven Safe': 'Up to 500°F',
      'Dishwasher Safe': 'Yes',
      'Compatible With': 'All stovetops including induction'
    }
  }
];

export const reviews = [
  {
    id: 'r1',
    productId: 'p1',
    name: 'Michael Johnson',
    rating: 5,
    date: '2023-08-15',
    title: 'Exceptional quality knife',
    comment: 'This chef\'s knife exceeded my expectations. The balance is perfect and it holds an edge remarkably well. I\'ve been cooking professionally for 10 years and this is one of the best knives I\'ve used.'
  },
  {
    id: 'r2',
    productId: 'p1',
    name: 'Sarah Miller',
    rating: 4,
    date: '2023-07-29',
    title: 'Great knife, but handle could be better',
    comment: 'The blade is fantastic - sharp and durable. My only complaint is that the handle could be slightly more ergonomic for smaller hands. Still, it\'s an excellent knife for the price.'
  },
  {
    id: 'r3',
    productId: 'p2',
    name: 'David Chen',
    rating: 5,
    date: '2023-08-02',
    title: 'Best non-stick pans I\'ve owned',
    comment: 'After trying many different brands, these pans have the most durable non-stick coating I\'ve found. They heat evenly and the handles stay cool. Very pleased with this purchase!'
  }
];

export const testimonials = [
  {
    id: 't1',
    name: 'Martha K.',
    image: 'https://randomuser.me/api/portraits/women/45.jpg',
    rating: 5,
    testimonial: 'Lily Kitchen Haven has transformed my cooking experience! Their premium kitchenware makes meal prep a joy, and their nationwide delivery was prompt and secure.'
  },
  {
    id: 't2',
    name: 'James T.',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
    rating: 5,
    testimonial: 'As a professional chef, I depend on quality tools. Lily Suppliers delivers exceptional kitchenware that meets my high standards. Their customer service is also top-notch!'
  },
  {
    id: 't3',
    name: 'Sarah M.',
    image: 'https://randomuser.me/api/portraits/women/67.jpg',
    rating: 4,
    testimonial: 'I ordered a complete set of cookware for my new apartment. The quality is excellent, and the prices are reasonable. Very satisfied with my purchase!'
  }
];

export const blogPosts = [
  {
    id: 'b1',
    title: '10 Essential Kitchen Tools Every Home Cook Should Have',
    excerpt: 'Discover the must-have kitchen tools that will elevate your cooking game and make meal preparation easier.',
    image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1970&q=80',
    date: '2023-08-10',
    author: 'Chef Emily',
    category: 'Kitchen Tips'
  },
  {
    id: 'b2',
    title: 'How to Care for Your Cast Iron Cookware',
    excerpt: 'Learn the proper techniques for seasoning, cleaning, and maintaining your cast iron pots and pans for decades of use.',
    image: 'https://images.unsplash.com/photo-1544794040-a6ab01756cf9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
    date: '2023-07-28',
    author: 'Kitchen Expert John',
    category: 'Maintenance'
  },
  {
    id: 'b3',
    title: 'Organizing Your Kitchen: Storage Solutions for Small Spaces',
    excerpt: 'Maximize your kitchen space with these clever storage ideas and organizational tips for small kitchens.',
    image: 'https://images.unsplash.com/photo-1604669879913-daf5645ae0b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
    date: '2023-08-05',
    author: 'Organizing Pro Amanda',
    category: 'Organization'
  }
];

export const faqs = [
  {
    id: 'f1',
    question: 'What shipping options do you offer?',
    answer: 'We offer standard shipping (5-7 business days), express shipping (2-3 business days), and next-day delivery for select areas. Shipping costs are calculated based on your location and the weight of your order. Free shipping is available for orders above $100.'
  },
  {
    id: 'f2',
    question: 'What is your return policy?',
    answer: 'We accept returns within 30 days of delivery for most items in their original packaging. Some products may have specific return conditions. Please contact our customer service team for return authorization before sending any items back.'
  },
  {
    id: 'f3',
    question: 'Do you ship internationally?',
    answer: 'Yes, we ship to select international destinations. International shipping costs and delivery times vary by location. Please note that international orders may be subject to import duties and taxes, which are the customer\'s responsibility.'
  },
  {
    id: 'f4',
    question: 'How can I track my order?',
    answer: 'Once your order ships, you will receive a confirmation email with a tracking number. You can use this number on our website\'s "Track Order" page or on the carrier\'s website to check the status of your delivery.'
  },
  {
    id: 'f5',
    question: 'Do you offer product warranties?',
    answer: 'Yes, most of our products come with manufacturer warranties ranging from 1 to 5 years, depending on the item. Warranty information is listed on the product page and included with your purchase.'
  },
  {
    id: 'f6',
    question: 'Do you offer bulk discounts for businesses?',
    answer: 'Yes, we offer special pricing for businesses and bulk orders. Please contact our sales team at business@lilykitchenhaven.com for a custom quote based on your requirements.'
  }
];
