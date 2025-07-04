import { PricingPackage } from '../types';

export const pricingPackages: PricingPackage[] = [
  {
    id: 1,
    name: "Essential",
    price: "$1,200",
    duration: "2 hours",
    features: [
      "50 edited high-resolution photos",
      "Online gallery for 6 months",
      "Basic retouching included",
      "Personal usage rights",
      "Email support"
    ]
  },
  {
    id: 2,
    name: "Premium",
    price: "$2,500",
    duration: "4 hours",
    features: [
      "150 edited high-resolution photos",
      "Online gallery for 1 year",
      "Advanced retouching included",
      "Print release included",
      "USB drive with all photos",
      "Priority email & phone support",
      "One location change included"
    ],
    popular: true
  },
  {
    id: 3,
    name: "Luxury",
    price: "$4,200",
    duration: "8 hours",
    features: [
      "300+ edited high-resolution photos",
      "Unlimited online gallery access",
      "Premium retouching & color grading",
      "Commercial usage rights",
      "Custom USB + printed photo album",
      "24/7 priority support",
      "Multiple location shoots",
      "Engagement session included",
      "Wedding day timeline planning"
    ]
  }
];