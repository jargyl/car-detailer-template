import {
  FAQType,
  GalleryImageType,
  ServiceType,
  TestimonialType,
} from "../types";

export const SERVICES: ServiceType[] = [
  {
    id: 1,
    name: "Basic Wash & Wax",
    description: "Essential exterior cleaning and protection for your vehicle.",
    price: "$80",
    features: [
      "Exterior hand wash",
      "Wheel and tire cleaning",
      "Windows and mirrors cleaning",
      "Spray wax application",
      "Tire dressing",
    ],
  },
  {
    id: 2,
    name: "Premium Detail",
    description: "Comprehensive interior and exterior detailing service.",
    price: "$150",
    features: [
      "Everything in Basic Wash & Wax",
      "Interior vacuuming",
      "Dashboard and console cleaning",
      "Leather/upholstery conditioning",
      "Door jambs cleaning",
      "Hand wax application",
    ],
    popular: true,
  },
  {
    id: 3,
    name: "Ultimate Showroom",
    description: "The complete package for the most discerning vehicle owners.",
    price: "$250+",
    features: [
      "Everything in Premium Detail",
      "Paint correction",
      "Ceramic coating application",
      "Engine bay cleaning",
      "Headlight restoration",
      "Premium carnauba wax",
      "Interior steam cleaning",
    ],
  },
];

export const TESTIMONIALS: TestimonialType[] = [
  {
    id: 1,
    name: "James Wilson",
    quote:
      "Absolutely blown away by the results. My BMW looks better than when I first bought it!",
    vehicle: "BMW M3",
    rating: 5,
  },
  {
    id: 2,
    name: "Sarah Thompson",
    quote:
      "Professional, punctual, and perfect attention to detail. Worth every penny.",
    vehicle: "Audi Q5",
    rating: 5,
  },
  {
    id: 3,
    name: "Michael Rodriguez",
    quote:
      "The Ultimate Showroom package transformed my car completely. Can't recommend enough.",
    vehicle: "Tesla Model S",
    rating: 5,
  },
];

export const GALLERY_IMAGES: GalleryImageType[] = [
  {
    id: 1,
    before:
      "https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    after:
      "https://images.pexels.com/photos/3802508/pexels-photo-3802508.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "Full exterior detail on a black sedan",
  },
  {
    id: 2,
    before:
      "https://images.pexels.com/photos/32244322/pexels-photo-32244322.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    after:
      "https://images.pexels.com/photos/32244322/pexels-photo-32244322.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "Premium detail on a luxury sports car",
  },
  {
    id: 3,
    before:
      "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    after:
      "https://images.pexels.com/photos/244206/pexels-photo-244206.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "Showroom finish on a classic car",
  },
];

export const FAQS: FAQType[] = [
  {
    id: 1,
    question: "How long does a typical detailing service take?",
    answer:
      "Service times vary based on the package and vehicle condition. Basic Wash & Wax takes 1-2 hours, Premium Detail takes 3-4 hours, and Ultimate Showroom can take 6-8 hours or more depending on the vehicle's condition.",
  },
  {
    id: 2,
    question: "Do I need to prepare my vehicle before the service?",
    answer:
      "We recommend removing personal items from your vehicle before the appointment, but it's not required. We'll handle everything else to ensure your car receives the best possible care.",
  },
  {
    id: 3,
    question: "Do you offer mobile detailing services?",
    answer:
      "Yes! We come to your location within a 25-mile radius at no additional charge. For locations beyond that range, a small travel fee may apply.",
  },
  {
    id: 4,
    question: "How often should I have my car detailed?",
    answer:
      "For optimal results, we recommend a basic wash every 2-3 weeks, a premium detail every 3-4 months, and the ultimate showroom package once or twice a year depending on your driving conditions.",
  },
];
