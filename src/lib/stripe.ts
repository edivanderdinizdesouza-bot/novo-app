import { loadStripe } from '@stripe/stripe-js';

// Inicializa o Stripe com a chave pública
export const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || '');

// Planos disponíveis
export const plans = {
  basic: {
    id: 'basic',
    name: 'Plano Básico',
    price: 97,
    priceId: 'price_basic', // Substitua pelo ID real do Stripe
    features: [
      'Acesso a 3 módulos iniciais',
      'Vídeo aulas em HD',
      'Biblioteca de scripts básica',
      'Suporte por email',
      'Acesso por 6 meses'
    ]
  },
  pro: {
    id: 'pro',
    name: 'Plano Profissional',
    price: 197,
    priceId: 'price_pro', // Substitua pelo ID real do Stripe
    features: [
      'Acesso completo a todos os módulos',
      'Vídeo aulas em HD',
      'Biblioteca completa de scripts',
      'Projetos completos para download',
      'Suporte prioritário',
      'Comunidade exclusiva no Discord',
      'Certificado digital',
      'Acesso vitalício'
    ],
    popular: true
  },
  premium: {
    id: 'premium',
    name: 'Plano Premium',
    price: 397,
    priceId: 'price_premium', // Substitua pelo ID real do Stripe
    features: [
      'Tudo do Plano Profissional',
      'Mentoria individual (2 sessões)',
      'Assets premium exclusivos',
      'Templates de jogos prontos',
      'Masterclasses ao vivo',
      'Revisão de código personalizada',
      'Grupo VIP no WhatsApp',
      'Acesso vitalício + atualizações'
    ]
  }
};
