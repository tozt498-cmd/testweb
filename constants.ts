import { Product, Category } from './types';

export const DISCORD_WEBHOOK_URL = "https://discord.com/api/webhooks/1468617604728885365/urtp0Qj0_n3gbQC7GbgaaIH_e58DoTWOXQznuRRY071W0wsNErWsUiGa86UCb_buzq1f";

export const PAYPAL_EMAIL = "tozt498@gmail.com";

export const PRODUCTS: Product[] = [
  {
    id: 'bot-starter',
    title: 'Bot Discord Starter',
    description: 'L\'essentiel pour démarrer.',
    price: 5.99,
    category: Category.DISCORD,
    features: ['5 Commandes', 'Support Basic', 'Config Simple'],
    colSpan: 'col-span-1',
  },
  {
    id: 'bot-advanced',
    title: 'Bot Advanced',
    description: 'Croissance accélérée.',
    price: 10.99,
    category: Category.DISCORD,
    features: ['10 Commandes', 'Modération Auto', 'Bienvenue Custom'],
    popular: true,
    colSpan: 'col-span-1',
  },
  {
    id: 'web-landing',
    title: 'Site One-Page',
    description: 'Vitrine élégante.',
    price: 10.99,
    category: Category.WEBSITE,
    features: ['Design Responsive', 'Animations', 'SEO Ready'],
    colSpan: 'col-span-1',
  },
  {
    id: 'bot-ultimate',
    title: 'Bot Ultimate System',
    description: 'La solution sans compromis. Dashboard web inclus, économie, tickets et plus encore.',
    price: 25.99,
    category: Category.DISCORD,
    features: ['Commandes Illimitées', 'Système Économie', 'Dashboard Web', 'Support 24/7 VIP', 'Système Tickets'],
    colSpan: 'md:col-span-2 bg-gradient-to-br from-[#0A0A0A] to-[#111]', // Prend 2 colonnes sur desktop
  },
  {
    id: 'web-full',
    title: 'Site Complet',
    description: 'Multi-pages & CMS.',
    price: 15.99,
    category: Category.WEBSITE,
    features: ['5 Pages', 'Blog', 'Admin Panel', 'Analytics'],
    colSpan: 'col-span-1',
  },
];