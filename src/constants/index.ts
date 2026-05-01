import { MapPinIcon, PhoneIcon, SunIcon } from "@heroicons/react/24/solid";
import { EnvelopeIcon } from "@heroicons/react/24/solid";
import { BuildingStorefrontIcon } from "@heroicons/react/24/solid";
import { BanknotesIcon } from "@heroicons/react/24/solid";
import { BuildingOffice2Icon } from "@heroicons/react/24/solid";

export const NAV_LINKS = [
  { label: "Home", href: "/home" },
  { label: "About Us", href: "/about" },
  { label: "Properties", href: "/properties" },
  { label: "Services", href: "/services" }
];

export const FOOTER_SECTIONS = [
  {
    title: "Home",
    links: [
      { label: "Hero Section", href: "/" },
      { label: "Features", href: "/" },
      { label: "Properties", href: "/properties" },
      { label: "Testimonials", href: "/" },
      { label: "FAQ's", href: "/" }
    ]
  },
  {
    title: "About Us",
    links: [
      { label: "Our Story", href: "/about" },
      { label: "Our Works", href: "/about" },
      { label: "How It Works", href: "/about" },
      { label: "Our Team", href: "/about" },
      { label: "Our Clients", href: "/about" }
    ]
  },
  {
    title: "Properties",
    links: [
      { label: "Portfolio", href: "/properties" },
      { label: "Categories", href: "/properties" }
    ]
  },
  {
    title: "Services",
    links: [
      { label: "Valuation Mastery", href: "/services" },
      { label: "Strategic Marketing", href: "/services" },
      { label: "Negotiation Wizardry", href: "/services" },
      { label: "Closing Success", href: "/services" },
      { label: "Property Management", href: "/services" }
    ]
  },
  {
    title: "Contact Us",
    links: [
      { label: "Contact Form", href: "/contact" },
      { label: "Our Offices", href: "/contact" }
    ]
  }
];

export const SOCIAL_LINKS = [
  { label: "Facebook", href: "https://facebook.com" },
  { label: "Twitter", href: "https://twitter.com" },
  { label: "LinkedIn", href: "https://linkedin.com" },
  { label: "Instagram", href: "https://instagram.com" }
];

export const FAQS = [
  {
    question: "How do I search for properties on Estatein?",
    answer:
      "Learn how to use our user-friendly search tools to find properties that match your criteria."
  },
  {
    question: "What documents do I need to sell my property through Estatein?",
    answer:
      "Find out about the necessary documentation for listing your property with us."
  },
  {
    question: "How can I contact an Estatein agent?",
    answer:
      "Discover the different ways you can get in touch with our experienced agents."
  },
  {
    question: "How do I search for properties on Estatein?",
    answer:
      "Learn how to use our user-friendly search tools to find properties that match your criteria."
  },
  {
    question: "What documents do I need to sell my property through Estatein?",
    answer:
      "Find out about the necessary documentation for listing your property with us."
  },
  {
    question: "How can I contact an Estatein agent?",
    answer:
      "Discover the different ways you can get in touch with our experienced agents."
  }
];

export const TESTIMONIALS = [
  {
    id: 1,
    rating: 5,
    imageURL: "https://i.pravatar.cc/150?u=1",
    name: "Wade Warren",
    title: "Exceptional Service!",
    description:
      "Our experience with Estatein was outstanding. Their team's dedication and professionalism made finding our dream home a breeze. Highly recommended!"
  },
  {
    id: 2,
    rating: 5,
    imageURL: "https://i.pravatar.cc/150?u=2",
    name: "Emelie Thomson",
    title: "Efficient and Reliable",
    description:
      "Estatein provided us with top-notch service. They helped us sell our property quickly and at a great price. We couldn't be happier with the results."
  },
  {
    id: 3,
    rating: 5,
    imageURL: "https://i.pravatar.cc/150?u=3",
    name: "John Mans",
    title: "Trusted Advisors",
    description:
      "The Estatein team guided us through the entire buying process. Their knowledge and commitment to our needs were impressive. Thank you for your support!"
  },
  {
    id: 4,
    rating: 4,
    imageURL: "https://i.pravatar.cc/150?u=4",
    name: "Robert Fox",
    title: "Smooth Transition",
    description:
      "Moving to a new city is stressful, but Estatein made finding an Flat so easy. The virtual tours were a life-saver for my busy schedule."
  },
  {
    id: 5,
    rating: 5,
    imageURL: "https://i.pravatar.cc/150?u=5",
    name: "Brooklyn Simmons",
    title: "Professional Excellence",
    description:
      "I've worked with many real estate firms, but none match the level of detail provided here. Every question was answered promptly and clearly."
  },
  {
    id: 6,
    rating: 4,
    imageURL: "https://i.pravatar.cc/150?u=6",
    name: "Guy Hawkins",
    title: "Great Market Insight",
    description:
      "Their understanding of the local market trends helped us invest in the right neighborhood. A truly valuable partner for long-term growth."
  },
  {
    id: 7,
    rating: 5,
    imageURL: "https://i.pravatar.cc/150?u=7",
    name: "Jane Cooper",
    title: "Exceeded Expectations",
    description:
      "I was looking for a very specific type of loft, and they didn't stop until they found the perfect match. The attention to detail was amazing."
  },
  {
    id: 8,
    rating: 5,
    imageURL: "https://i.pravatar.cc/150?u=8",
    name: "Leslie Alexander",
    title: "Fantastic Communication",
    description:
      "They kept me informed at every step of the closing process. I never felt left in the dark, which made the whole experience very pleasant."
  },
  {
    id: 9,
    rating: 4,
    imageURL: "https://i.pravatar.cc/150?u=9",
    name: "Kristin Watson",
    title: "High Integrity",
    description:
      "Honesty is hard to find in real estate, but Estatein was transparent about every detail and fee from day one. I really appreciated that."
  },
  {
    id: 10,
    rating: 5,
    imageURL: "https://i.pravatar.cc/150?u=10",
    name: "Cameron Williamson",
    title: "Best in the Business",
    description:
      "From the first meeting to the final signature, the experience was flawless. I recommend them to all my friends and family looking for a home."
  }
];

export const PROPERTIES = [
  {
    id: 1,
    title: "Seaside Serenity House",
    description:
      "A stunning 4-bedroom, 3-bathroom villa in a peaceful suburban neighborhood with breathtaking ocean views and a private infinity pool.",
    price: 550000,
    bedrooms: 4,
    bathrooms: 3,
    category: "House",
    imageURL:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    title: "Metropolitan Modern Loft",
    description:
      "Experience city living at its finest in this sleek, industrial-style loft located in the heart of downtown. Features floor-to-ceiling windows.",
    price: 320000,
    bedrooms: 2,
    bathrooms: 1,
    category: "Flat",
    imageURL:
      "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    title: "Rustic Mountain Retreat",
    description:
      "Escape to the mountains in this cozy timber-framed home. Perfect for weekend getaways with a large stone fireplace and expansive deck.",
    price: 475000,
    bedrooms: 3,
    bathrooms: 2,
    category: "House",
    imageURL:
      "https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 4,
    title: "Golden Gates Mansion",
    description:
      "An architectural masterpiece featuring smart home technology, a private cinema, and lush landscaped gardens in an exclusive gated community.",
    price: 1250000,
    bedrooms: 6,
    bathrooms: 5,
    category: "House",
    imageURL:
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 5,
    title: "Skyline View Flat",
    description:
      "Modern 1-bedroom Flat with minimalist design. Ideally located near public transport and the financial district. Great for investors.",
    price: 210000,
    bedrooms: 1,
    bathrooms: 1,
    category: "Flat",
    imageURL:
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 6,
    title: "Family Suburban Home",
    description:
      "Spacious backyard, open-plan kitchen, and located within the top-rated school district. The perfect place to raise a growing family.",
    price: 385000,
    bedrooms: 3,
    bathrooms: 2,
    category: "House",
    imageURL:
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 7,
    title: "Emerald Garden",
    description:
      "A charming multi-level townhouse featuring a rooftop terrace and private garage. Quiet street with very little traffic.",
    price: 440000,
    bedrooms: 3,
    bathrooms: 3,
    category: "Flat",
    imageURL:
      "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 8,
    title: "Oak Ridge Estate",
    description:
      "Traditional luxury meets modern comfort. This estate boasts a wine cellar, gourmet kitchen, and a guest house on 2 acres of land.",
    price: 890000,
    bedrooms: 5,
    bathrooms: 4,
    category: "House",
    imageURL:
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 9,
    title: "Lakeside Tranquility",
    description:
      "Wake up to the sound of water. This property has direct lake access and a private dock, ideal for water sports enthusiasts.",
    price: 620000,
    bedrooms: 4,
    bathrooms: 2,
    category: "House",
    imageURL:
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 10,
    title: "Urban Chic Studio",
    description:
      "Compact yet highly functional studio in a vibrant neighborhood. Surrounded by cafes, galleries, and a thriving nightlife scene.",
    price: 185000,
    bedrooms: 1,
    bathrooms: 1,
    category: "Flat",
    imageURL:
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=800&q=80"
  }
];

export const SERVICES_DATA_HOME = [
  {
    title: "Find Your Dream Home",
    Icon: BuildingStorefrontIcon,
    href: "/properties"
  },
  {
    title: "Unlock Property Value",
    Icon: BanknotesIcon,
    href: "/services"
  },
  {
    title: "Effortless Property Management",
    Icon: BuildingOffice2Icon,
    href: "/properties"
  },
  {
    title: "Smart Investments, Informed Decisions",
    Icon: SunIcon,
    href: "/services"
  }
];

export const SERVICES_DATA_CONTACT = [
  {
    title: "info@estatein.com",
    Icon: EnvelopeIcon,
    href: "/properties"
  },
  {
    title: "+1 (123) 456-7890",
    Icon: PhoneIcon,
    href: "/services"
  },
  {
    title: "Main Headquarters",
    Icon: MapPinIcon,
    href: "/properties"
  },
  {
    title: "Instagram  Linkedin  Facebook",
    Icon: SunIcon,
    href: "/services"
  }
];
