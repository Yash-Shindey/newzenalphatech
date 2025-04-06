
import { Product, Category, Review, SliderItem, BannerOffer, Testimonial } from './models';

export const categories: Category[] = [
  {
    id: 'cat1',
    name: 'Formal Suits',
    slug: 'formal-suits',
    image: 'https://images.unsplash.com/photo-1603189343302-e603f7add05a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    count: 12,
    subcategories: [
      { id: 'sub1', name: 'Pant Suits', slug: 'pant-suits', count: 8 },
      { id: 'sub2', name: 'Skirt Suits', slug: 'skirt-suits', count: 4 }
    ]
  },
  {
    id: 'cat2',
    name: 'Stitched Collection',
    slug: 'stitched-collection',
    image: 'https://images.unsplash.com/photo-1551232864-3f0890e580d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    count: 16,
    subcategories: [
      { id: 'sub3', name: 'Dresses', slug: 'dresses', count: 10 },
      { id: 'sub4', name: 'Two-piece Sets', slug: 'two-piece-sets', count: 6 }
    ]
  },
  {
    id: 'cat3',
    name: 'Unstitched Fabric',
    slug: 'unstitched-fabric',
    image: 'https://images.unsplash.com/photo-1594040226829-7f251ab46d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    count: 8,
    subcategories: [
      { id: 'sub5', name: 'Cotton', slug: 'cotton', count: 4 },
      { id: 'sub6', name: 'Silk', slug: 'silk', count: 4 }
    ]
  },
  {
    id: 'cat4',
    name: 'Casual Wear',
    slug: 'casual-wear',
    image: 'https://images.unsplash.com/photo-1591369822096-ffd140ec948f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    count: 14,
    subcategories: [
      { id: 'sub7', name: 'T-Shirts', slug: 't-shirts', count: 6 },
      { id: 'sub8', name: 'Jeans', slug: 'jeans', count: 8 }
    ]
  }
];

export const products: Product[] = [
  {
    id: 'p1',
    name: 'Embroidered Chiffon Suit',
    slug: 'embroidered-chiffon-suit',
    category: 'Stitched Collection',
    subcategory: 'Dresses',
    price: 120,
    salePrice: 96,
    images: [
      'https://images.unsplash.com/photo-1618932260643-eee4a2f652a6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1551489186-cf8726f514f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1522706604291-266e1726b001?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ],
    colors: [
      { name: 'Navy Blue', value: '#1a3a63' },
      { name: 'Burgundy', value: '#800020' },
      { name: 'Emerald', value: '#046307' }
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    description: 'Luxurious embroidered chiffon suit with intricate detailing. Perfect for formal occasions and events. The fabric is lightweight and comfortable to wear for extended periods.',
    specs: {
      'Material': 'Chiffon',
      'Pattern': 'Embroidered',
      'Care': 'Dry Clean Only',
      'Style': 'Three-piece'
    },
    stockStatus: 'In Stock',
    rating: 4.8,
    reviewCount: 24,
    isNew: true,
    isFeatured: true,
    isOnSale: true
  },
  {
    id: 'p2',
    name: 'Printed Lawn Collection',
    slug: 'printed-lawn-collection',
    category: 'Stitched Collection',
    subcategory: 'Two-piece Sets',
    price: 85,
    images: [
      'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ],
    colors: [
      { name: 'Floral White', value: '#FFFAF0' },
      { name: 'Sage Green', value: '#9CAF88' },
      { name: 'Soft Pink', value: '#FFC0CB' }
    ],
    sizes: ['XS', 'S', 'M', 'L'],
    description: 'Breathable lawn fabric with beautiful prints, perfect for everyday wear in warm weather. This collection features contemporary designs that blend traditional and modern aesthetics.',
    specs: {
      'Material': 'Lawn Cotton',
      'Pattern': 'Printed',
      'Care': 'Machine Washable',
      'Style': 'Two-piece'
    },
    stockStatus: 'In Stock',
    rating: 4.5,
    reviewCount: 18,
    isNew: false,
    isFeatured: true,
    isOnSale: false
  },
  {
    id: 'p3',
    name: 'Designer Formal Pants Suit',
    slug: 'designer-formal-pants-suit',
    category: 'Formal Suits',
    subcategory: 'Pant Suits',
    price: 200,
    salePrice: 160,
    images: [
      'https://images.unsplash.com/photo-1548454782-15b7a6deb5c9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1539533113208-f6df8cc8b543?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ],
    colors: [
      { name: 'Charcoal', value: '#36454F' },
      { name: 'Navy', value: '#000080' }
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    description: 'Premium tailored pants suit for professional settings. Crafted from high-quality fabric with precise stitching and elegant design. Perfect for business meetings and formal events.',
    specs: {
      'Material': 'Wool Blend',
      'Pattern': 'Solid',
      'Care': 'Dry Clean Only',
      'Style': 'Tailored Fit'
    },
    stockStatus: 'Low Stock',
    rating: 4.9,
    reviewCount: 32,
    isNew: false,
    isFeatured: true,
    isOnSale: true
  },
  {
    id: 'p4',
    name: 'Silk Blend Unstitched Fabric',
    slug: 'silk-blend-unstitched-fabric',
    category: 'Unstitched Fabric',
    subcategory: 'Silk',
    price: 150,
    images: [
      'https://images.unsplash.com/photo-1579656450812-5b0d6657ab0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1584184924103-e310d9dc82fc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ],
    colors: [
      { name: 'Royal Blue', value: '#4169E1' },
      { name: 'Deep Purple', value: '#6A0DAD' },
      { name: 'Golden Beige', value: '#CBB89A' }
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    description: 'Luxurious silk blend fabric for custom-designed outfits. This premium unstitched fabric allows you to create unique garments tailored to your specific preferences and measurements.',
    specs: {
      'Material': 'Silk Blend',
      'Pattern': 'Solid',
      'Length': '5 meters',
      'Width': '45 inches'
    },
    stockStatus: 'In Stock',
    rating: 4.7,
    reviewCount: 15,
    isNew: true,
    isFeatured: false,
    isOnSale: false
  },
  {
    id: 'p5',
    name: 'Contemporary Casual Jeans',
    slug: 'contemporary-casual-jeans',
    category: 'Casual Wear',
    subcategory: 'Jeans',
    price: 75,
    salePrice: 60,
    images: [
      'https://images.unsplash.com/photo-1591369822096-ffd140ec948f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1582418702059-97ebafb35d09?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ],
    colors: [
      { name: 'Light Wash', value: '#B8C4D0' },
      { name: 'Medium Wash', value: '#5D84A6' },
      { name: 'Dark Wash', value: '#1A3C5A' }
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    description: 'Stylish and comfortable jeans for everyday wear. Made from premium denim with just the right amount of stretch for all-day comfort without losing shape.',
    specs: {
      'Material': 'Denim with 2% Elastane',
      'Rise': 'Mid-rise',
      'Care': 'Machine Wash Cold',
      'Style': 'Straight Leg'
    },
    stockStatus: 'In Stock',
    rating: 4.4,
    reviewCount: 42,
    isNew: false,
    isFeatured: true,
    isOnSale: true
  },
  {
    id: 'p6',
    name: 'Premium Cotton T-Shirt',
    slug: 'premium-cotton-t-shirt',
    category: 'Casual Wear',
    subcategory: 'T-Shirts',
    price: 35,
    images: [
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1529720317453-c8da503f2051?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ],
    colors: [
      { name: 'White', value: '#FFFFFF' },
      { name: 'Black', value: '#000000' },
      { name: 'Heather Gray', value: '#D3D3D3' }
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    description: 'Ultra-soft premium cotton t-shirt with a comfortable fit. This essential piece features a classic design that pairs well with any outfit for a casual yet polished look.',
    specs: {
      'Material': '100% Pima Cotton',
      'Pattern': 'Solid',
      'Care': 'Machine Wash',
      'Style': 'Crew Neck'
    },
    stockStatus: 'In Stock',
    rating: 4.6,
    reviewCount: 38,
    isNew: false,
    isFeatured: false,
    isOnSale: false
  },
  {
    id: 'p7',
    name: 'Elegant Skirt Suit',
    slug: 'elegant-skirt-suit',
    category: 'Formal Suits',
    subcategory: 'Skirt Suits',
    price: 180,
    images: [
      'https://images.unsplash.com/photo-1603189343302-e603f7add05a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1561303136-a1bcf52195a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ],
    colors: [
      { name: 'Burgundy', value: '#800020' },
      { name: 'Dark Gray', value: '#333333' }
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    description: 'Sophisticated skirt suit for professional settings. This two-piece set features a tailored blazer and a matching knee-length skirt, creating a polished and elegant silhouette.',
    specs: {
      'Material': 'Polyester Blend',
      'Pattern': 'Solid',
      'Care': 'Dry Clean Only',
      'Style': 'Fitted'
    },
    stockStatus: 'Out of Stock',
    rating: 4.3,
    reviewCount: 12,
    isNew: true,
    isFeatured: true,
    isOnSale: false
  },
  {
    id: 'p8',
    name: 'Luxury Cotton Unstitched',
    slug: 'luxury-cotton-unstitched',
    category: 'Unstitched Fabric',
    subcategory: 'Cotton',
    price: 110,
    salePrice: 90,
    images: [
      'https://images.unsplash.com/photo-1594040226829-7f251ab46d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ],
    colors: [
      { name: 'Off-White', value: '#FAF9F6' },
      { name: 'Light Blue', value: '#ADD8E6' },
      { name: 'Pale Pink', value: '#FDD5D6' }
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    description: 'Premium quality unstitched cotton fabric for custom clothing. This high-grade cotton is perfect for creating comfortable garments for everyday wear with excellent breathability.',
    specs: {
      'Material': 'Egyptian Cotton',
      'Pattern': 'Textured',
      'Length': '5 meters',
      'Width': '45 inches'
    },
    stockStatus: 'Low Stock',
    rating: 4.9,
    reviewCount: 27,
    isNew: false,
    isFeatured: true,
    isOnSale: true
  }
];

export const reviews: Review[] = [
  {
    id: 'r1',
    productId: 'p1',
    customerName: 'Sarah Johnson',
    rating: 5,
    comment: 'Absolutely love this suit! The embroidery is exquisite and the fit is perfect. I received so many compliments when I wore it to a wedding.',
    date: '2024-03-15',
    isVerifiedPurchase: true,
    sentiment: 'positive',
    helpfulCount: 12
  },
  {
    id: 'r2',
    productId: 'p1',
    customerName: 'Amina Khan',
    rating: 4,
    comment: 'Beautiful suit with excellent craftsmanship. Only giving 4 stars because the color is slightly different from what was shown in the picture.',
    date: '2024-02-27',
    isVerifiedPurchase: true,
    sentiment: 'positive',
    helpfulCount: 8
  },
  {
    id: 'r3',
    productId: 'p2',
    customerName: 'Maryam Ahmed',
    rating: 5,
    comment: 'The lawn fabric is so comfortable for summer! The prints are vibrant and haven\'t faded even after multiple washes.',
    date: '2024-03-05',
    isVerifiedPurchase: true,
    sentiment: 'positive',
    helpfulCount: 15
  },
  {
    id: 'r4',
    productId: 'p3',
    customerName: 'Fatima Rahman',
    rating: 5,
    comment: 'This pants suit is worth every penny! The tailoring is immaculate and the fabric feels luxurious. Perfect for business meetings.',
    date: '2024-01-20',
    isVerifiedPurchase: true,
    sentiment: 'positive',
    helpfulCount: 19
  },
  {
    id: 'r5',
    productId: 'p4',
    customerName: 'Nadia Malik',
    rating: 3,
    comment: 'The fabric is beautiful but I expected it to be heavier for the price. It\'s more of a lightweight silk blend.',
    date: '2024-02-10',
    isVerifiedPurchase: true,
    sentiment: 'neutral',
    helpfulCount: 7
  },
  {
    id: 'r6',
    productId: 'p5',
    customerName: 'Zara Khan',
    rating: 2,
    comment: 'Disappointed with these jeans. The sizing runs small and the material is stiffer than expected. Not very comfortable for all-day wear.',
    date: '2024-01-05',
    isVerifiedPurchase: true,
    sentiment: 'negative',
    helpfulCount: 11
  },
  {
    id: 'r7',
    productId: 'p6',
    customerName: 'Aisha Siddiqui',
    rating: 5,
    comment: 'Best t-shirt I\'ve ever owned! The cotton is incredibly soft and the fit is perfect. Already ordered in two more colors.',
    date: '2024-03-01',
    isVerifiedPurchase: true,
    sentiment: 'positive',
    helpfulCount: 14
  },
  {
    id: 'r8',
    productId: 'p7',
    customerName: 'Layla Hassan',
    rating: 4,
    comment: 'Elegant suit, very well made. The skirt length is perfect for professional settings. Taking off one star because the blazer sleeves are a bit short for me.',
    date: '2024-02-15',
    isVerifiedPurchase: true,
    sentiment: 'positive',
    helpfulCount: 6
  },
  {
    id: 'r9',
    productId: 'p8',
    customerName: 'Sameera Ahmed',
    rating: 5,
    comment: 'Such high-quality cotton! Got it stitched into a kurta and it\'s so comfortable to wear in hot weather. Will definitely buy more.',
    date: '2024-01-25',
    isVerifiedPurchase: true,
    sentiment: 'positive',
    helpfulCount: 10
  },
  {
    id: 'r10',
    productId: 'p2',
    customerName: 'Razia Begum',
    rating: 3,
    comment: 'The design is beautiful but the stitching quality could be better. Had to get some parts re-stitched locally.',
    date: '2024-02-20',
    isVerifiedPurchase: true,
    sentiment: 'neutral',
    helpfulCount: 5
  },
  {
    id: 'r11',
    productId: 'p3',
    customerName: 'Yasmeen Ali',
    rating: 1,
    comment: 'Very disappointed! The pants were too long and the jacket didn\'t fit well despite ordering my usual size. Returning it.',
    date: '2024-01-10',
    isVerifiedPurchase: true,
    sentiment: 'negative',
    helpfulCount: 8
  },
  {
    id: 'r12',
    productId: 'p5',
    customerName: 'Hina Mahmood',
    rating: 3,
    comment: 'The jeans are stylish but the denim is a bit thin. Not sure about their durability in the long run.',
    date: '2024-03-10',
    isVerifiedPurchase: true,
    sentiment: 'neutral',
    helpfulCount: 4
  },
  {
    id: 'r13',
    productId: 'p6',
    customerName: 'Saima Khan',
    rating: 5,
    comment: 'Perfect basic t-shirt! The quality is excellent and it washes well without losing shape. Highly recommend!',
    date: '2024-02-05',
    isVerifiedPurchase: true,
    sentiment: 'positive',
    helpfulCount: 12
  },
  {
    id: 'r14',
    productId: 'p7',
    customerName: 'Tania Rahman',
    rating: 2,
    comment: 'The material feels cheap for the price and the skirt is too tight around the waist. Not what I expected from a "luxury" brand.',
    date: '2024-01-15',
    isVerifiedPurchase: true,
    sentiment: 'negative',
    helpfulCount: 9
  },
  {
    id: 'r15',
    productId: 'p8',
    customerName: 'Fariha Jabeen',
    rating: 4,
    comment: 'Beautiful cotton fabric with a nice texture. Just wish it came with design suggestions or stitching patterns.',
    date: '2024-02-25',
    isVerifiedPurchase: true,
    sentiment: 'positive',
    helpfulCount: 7
  }
];

export const sliderItems: SliderItem[] = [
  {
    id: 'slide1',
    image: 'https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
    headline: 'Spring Collection 2024',
    subheadline: 'Discover fresh styles perfect for the season',
    buttonText: 'Shop Collection',
    buttonLink: '/shop?collection=spring2024'
  },
  {
    id: 'slide2',
    image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
    headline: 'Luxury Formal Suits',
    subheadline: 'Elegant designs for professional women',
    buttonText: 'Explore Suits',
    buttonLink: '/shop/formal-suits'
  },
  {
    id: 'slide3',
    image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
    headline: 'Summer Essentials',
    subheadline: 'Light fabrics for hot days, starting at $35',
    buttonText: 'Shop Now',
    buttonLink: '/shop?category=summer-essentials'
  }
];

export const bannerOffer: BannerOffer = {
  headline: 'SUMMER SALE',
  subheadline: 'Up to 40% Off on Selected Items',
  buttonText: 'Shop the Sale',
  buttonLink: '/shop?sale=true',
  background: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
  expiryDate: '2024-06-30T23:59:59'
};

export const testimonials: Testimonial[] = [
  {
    id: 't1',
    customerName: 'Ayesha Khan',
    customerImage: 'https://randomuser.me/api/portraits/women/62.jpg',
    rating: 5,
    comment: 'I\'ve been shopping with NewZenAlpha Tech for over a year now, and their clothing quality is consistently exceptional. Customer service is always helpful and prompt.',
    sentiment: 'positive'
  },
  {
    id: 't2',
    customerName: 'Noor Ahmed',
    customerImage: 'https://randomuser.me/api/portraits/women/44.jpg',
    rating: 4,
    comment: 'Great selection of formal wear! The pants suit I ordered fit perfectly after following their size guide. Would appreciate more color options though.',
    sentiment: 'positive'
  },
  {
    id: 't3',
    customerName: 'Fatima Ali',
    customerImage: 'https://randomuser.me/api/portraits/women/26.jpg',
    rating: 3,
    comment: 'Quality is good but shipping took longer than expected. Some items arrived slightly different from the website photos.',
    sentiment: 'neutral'
  },
  {
    id: 't4',
    customerName: 'Mehwish Rahman',
    customerImage: 'https://randomuser.me/api/portraits/women/65.jpg',
    rating: 5,
    comment: 'The unstitched fabrics are absolutely beautiful! My tailor was impressed with the quality. Definitely coming back for more.',
    sentiment: 'positive'
  },
  {
    id: 't5',
    customerName: 'Zainab Hassan',
    customerImage: 'https://randomuser.me/api/portraits/women/17.jpg',
    rating: 2,
    comment: 'Disappointed with their return policy. Had issues with a dress that didn\'t fit well, and it was complicated to get a refund.',
    sentiment: 'negative'
  }
];
