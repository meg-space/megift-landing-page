// app/landing/page.tsx
'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  FaGift,
  FaUsers,
  FaCalendarAlt,
  FaShoppingBag,
  FaMedal,
  FaHeart,
  FaArrowRight,
  FaCheck,
} from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function LandingPage() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const featuresRef = useRef<HTMLDivElement>(null);
  const [animateFeatures, setAnimateFeatures] = useState(false);

  // Mock submit function - in production, connect this to your backend
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate form
    if (!email.trim() || !name.trim()) {
      setError('Por favor, preencha todos os campos.');
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Por favor, insira um email válido.');
      return;
    }

    try {
      // Here you would connect to your backend to save the lead
      // For now, we'll simulate a successful submission

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setSubmitted(true);
      setError('');
      setEmail('');
      setName('');

      // After 3 seconds, reset the success message
      setTimeout(() => {
        setSubmitted(false);
      }, 3000);
    } catch (err) {
      setError('Ocorreu um erro. Tente novamente.');
    }
  };

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setAnimateFeatures(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (featuresRef.current) {
      observer.observe(featuresRef.current);
    }

    return () => {
      if (featuresRef.current) {
        observer.unobserve(featuresRef.current);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-[#ED2F59] to-[#B51235] text-white">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <div className="flex items-center">
            <div className="relative h-12 w-32">
              <Image
                src="/logo.png"
                alt="Megift Logo"
                width={128}
                height={48}
                className="object-contain"
              />
            </div>
          </div>

          <nav className="hidden md:flex space-x-8">
            <a href="#features" className="hover:text-gray-200 transition">
              Funcionalidades
            </a>
            <a href="#how-it-works" className="hover:text-gray-200 transition">
              Como Funciona
            </a>
            <a href="#join" className="hover:text-gray-200 transition">
              Participar
            </a>
          </nav>

          <motion.a
            href="#join"
            className="bg-white text-[#ED2F59] px-6 py-2 rounded-2xl font-semibold hover:bg-gray-100 transition shadow flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Image
              src="/icons/icon-48x48.png"
              alt=""
              width={24}
              height={24}
              className="object-contain"
            />
            <span>Pré-Cadastro</span>
          </motion.a>
        </div>

        <div className="container mx-auto px-4 py-16 md:py-24 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Um jeito fácil de presentear!
              </h1>
              <p className="text-xl mb-8">
                Transforme a forma de dar e receber presentes através da
                tecnologia. Crie listas de desejos, compartilhe com amigos e
                receba exatamente o que você quer.
              </p>
              <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
                <motion.a
                  href="#join"
                  className="bg-white text-[#ED2F59] px-6 py-3 rounded-2xl font-semibold hover:bg-gray-100 transition shadow-lg flex items-center justify-center group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>Quero participar</span>
                  <FaArrowRight className="ml-2 transform group-hover:translate-x-1 transition-transform" />
                </motion.a>
                <motion.a
                  href="#features"
                  className="border-2 border-white text-white px-6 py-3 rounded-2xl font-semibold hover:bg-white/10 transition flex items-center justify-center"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Saiba mais
                </motion.a>
              </div>
            </motion.div>
          </div>

          <div className="md:w-1/2 flex justify-center relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute -top-20 -right-20 w-40 h-40 animate-float">
                <Image
                  src="/megift-coin.png"
                  alt="Megift Coin"
                  width={160}
                  height={160}
                  className="object-contain"
                />
              </div>
              <AppMockup />
            </motion.div>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-50" ref={featuresRef}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-3 text-[#ED2F59]">
            Funcionalidades Principais
          </h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
            O Megift vai além de listas de presentes, oferecendo uma experiência
            completa para tornar o ato de presentear mais significativo e
            pessoal.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FeatureCard
                key={feature.title}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                delay={index * 0.2}
                animate={animateFeatures}
                color={feature.color}
              />
            ))}
          </div>
        </div>
      </section>

      {/* App Preview */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h2 className="text-3xl font-bold mb-6 text-[#ED2F59]">
                Tenha toda experiência na palma da sua mão
              </h2>
              <p className="text-gray-600 mb-8">
                O aplicativo Megift torna a experiência de presentear mais
                intuitiva e conectada. Descubra as possibilidades que o Megift
                oferece para facilitar sua vida.
              </p>

              <ul className="space-y-4">
                {appFeatures.map((feature) => (
                  <li key={feature} className="flex items-center">
                    <div className="bg-green-500 p-1 rounded-full mr-3">
                      <FaCheck className="text-white" />
                    </div>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="md:w-1/2 flex justify-center">
              <div className="relative w-[320px] h-[640px]">
                <Image
                  src="/screens/home-mobile.png"
                  alt="Megift App Showcase"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-3xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-3 text-[#ED2F59]">
            Como Funciona
          </h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
            Três passos simples para começar a usar o Megift e transformar sua
            experiência com presentes.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {steps.map((step, index) => (
              <StepCard
                key={step.title}
                number={`${index + 1}`}
                title={step.title}
                description={step.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-3 text-[#ED2F59]">
            O que dizem sobre nós
          </h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
            Veja o que nossos usuários beta estão falando sobre sua experiência
            com o Megift.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {testimonials.map((testimonial) => (
              <TestimonialCard
                key={testimonial.author}
                quote={testimonial.quote}
                author={testimonial.author}
                role={testimonial.role}
                image={testimonial.image}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Join Waitlist */}
      <section
        id="join"
        className="py-20 bg-gradient-to-r from-[#ED2F59] to-[#B51235] text-white"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              Participe da pré-release
            </h2>
            <p className="text-xl mb-8">
              Seja um dos primeiros a experimentar o Megift. Inscreva-se para
              receber acesso antecipado e novidades exclusivas.
            </p>

            <form
              onSubmit={handleSubmit}
              className="max-w-md mx-auto bg-white/20 p-8 rounded-xl backdrop-blur-sm border border-white/30"
            >
              {error && (
                <div className="bg-red-500/90 text-white p-3 rounded-lg mb-4">
                  {error}
                </div>
              )}

              {submitted && (
                <div className="bg-green-500/90 text-white p-3 rounded-lg mb-4">
                  Obrigado! Seu cadastro foi realizado com sucesso.
                </div>
              )}

              <div className="mb-4">
                <input
                  type="text"
                  placeholder="Seu nome"
                  className="w-full px-4 py-3 rounded-lg bg-white/90 text-gray-800 placeholder-gray-500 border border-white/30 focus:outline-none focus:ring-2 focus:ring-white/50"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div className="mb-4">
                <input
                  type="email"
                  placeholder="Seu e-mail"
                  className="w-full px-4 py-3 rounded-lg bg-white/90 text-gray-800 placeholder-gray-500 border border-white/30 focus:outline-none focus:ring-2 focus:ring-white/50"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <button
                type="submit"
                className="w-full bg-white text-[#ED2F59] font-bold py-3 px-4 rounded-lg hover:bg-gray-100 transition shadow-lg"
              >
                Quero participar
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white text-gray-800 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-8 md:mb-0">
              <div className="relative h-12 w-32">
                <Image
                  src="/logo-rosa.png"
                  alt="Megift Logo"
                  width={128}
                  height={48}
                  className="object-contain"
                />
              </div>
              <p className="mt-2 text-gray-600 max-w-xs">
                Transformando a experiência de dar presentes em momentos memoráveis.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <h3 className="font-semibold text-[#ED2F59] mb-4">Produtos</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="text-gray-600 hover:text-[#ED2F59] transition">
                      Presentes
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-600 hover:text-[#ED2F59] transition">
                      Listas
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-600 hover:text-[#ED2F59] transition">
                      Grupos
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-[#ED2F59] mb-4">Empresa</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="text-gray-600 hover:text-[#ED2F59] transition">
                      Sobre
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-600 hover:text-[#ED2F59] transition">
                      Blog
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-600 hover:text-[#ED2F59] transition">
                      Carreiras
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-[#ED2F59] mb-4">Suporte</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="text-gray-600 hover:text-[#ED2F59] transition">
                      Central de Ajuda
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-600 hover:text-[#ED2F59] transition">
                      Contato
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-600 hover:text-[#ED2F59] transition">
                      FAQ
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-[#ED2F59] mb-4">Legal</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="text-gray-600 hover:text-[#ED2F59] transition">
                      Privacidade
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-600 hover:text-[#ED2F59] transition">
                      Termos
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-600 hover:text-[#ED2F59] transition">
                      Cookies
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200 text-center text-gray-600">
            <p>&copy; {new Date().getFullYear()} MegStudio. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

// App Features list
const appFeatures = [
  'Crie e gerencie múltiplas listas de presentes',
  'Adicione itens de qualquer loja online',
  'Compartilhe suas listas por link ou diretamente no app',
  'Receba notificações de aniversários próximos',
  'Complete missões e ganhe Gift Points',
  'Organize eventos e presentes em grupo',
];

// Features list
const features = [
  {
    icon: <FaGift className="text-4xl" />,
    title: 'Listas de Presentes',
    description:
      'Crie listas personalizadas, adicione itens e compartilhe com amigos e familiares.',
    color: 'from-pink-500 to-red-500',
  },
  {
    icon: <FaUsers className="text-4xl" />,
    title: 'Grupos Sociais',
    description:
      'Crie e participe de grupos para eventos especiais e planeje presentes em conjunto.',
    color: 'from-blue-500 to-purple-500',
  },
  {
    icon: <FaCalendarAlt className="text-4xl" />,
    title: 'Eventos',
    description:
      'Organize eventos e aniversários e receba notificações de datas importantes.',
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: <FaShoppingBag className="text-4xl" />,
    title: 'Catálogo de Produtos',
    description:
      'Explore produtos recomendados e adicione-os diretamente à sua lista de desejos.',
    color: 'from-yellow-500 to-orange-500',
  },
  {
    icon: <FaMedal className="text-4xl" />,
    title: 'Missões e Conquistas',
    description:
      'Complete missões, ganhe pontos e desbloqueie recursos especiais no aplicativo.',
    color: 'from-purple-500 to-indigo-500',
  },
  {
    icon: <FaHeart className="text-4xl" />,
    title: 'Megift Stars',
    description:
      'Apoie seus influenciadores e celebridades favoritos presenteando-os.',
    color: 'from-red-500 to-pink-500',
  },
];

// Steps
const steps = [
  {
    title: 'Crie sua conta',
    description:
      'Registre-se gratuitamente e configure seu perfil com seus interesses.',
  },
  {
    title: 'Crie listas de desejos',
    description:
      'Adicione produtos que você gostaria de ganhar nas suas listas.',
  },
  {
    title: 'Compartilhe e receba',
    description:
      'Compartilhe com amigos e familiares e receba exatamente o que deseja.',
  },
];

// Testimonials
const testimonials = [
  {
    quote:
      'O Megift revolucionou a forma como damos presentes em nossa família. Agora todos sabem exatamente o que dar!',
    author: 'Ana Silva',
    role: 'Usuária beta',
    image: 'https://api.dicebear.com/9.x/avataaars/svg?seed=Ana-Silva',
  },
  {
    quote:
      'Como influenciador, adoro poder conectar com meus seguidores através das listas de presentes. É inovador!',
    author: 'Marcos Ribeiro',
    role: 'Megift Star',
    image: 'https://api.dicebear.com/9.x/avataaars/svg?seed=Marcos-Ribeiro',
  },
  {
    quote:
      'Organizar presentes em grupo nunca foi tão fácil. Usamos para o chá de bebê da minha irmã e foi perfeito!',
    author: 'Carolina Lima',
    role: 'Usuária beta',
    image: 'https://api.dicebear.com/9.x/avataaars/svg?seed=Carolina-Lima',
  },
];

// App mockup component
const AppMockup = () => {
  const [currentScreen, setCurrentScreen] = useState(0);

  // Screens to show
  const screens = [
    {
      id: 1,
      src: '/screens/home-mobile.png',
      alt: 'Tela inicial do Megift',
      title: 'Home',
      description: 'Sua experiência personalizada de presentes',
      imagePosition: 'top',
    },
    {
      id: 2,
      src: '/screens/home-mobile.png',
      alt: 'Tela de lista de desejos',
      title: 'Listas de Desejos',
      description:
        'Crie e gerencie suas listas de presentes de forma fácil e rápida',
      imagePosition: 'bottom',
    },
    {
      id: 3,
      src: '/screens/home-mobile.png',
      alt: 'Tela de produtos',
      title: 'Catálogo de Produtos',
      description: 'Explore produtos recomendados e adicione à sua lista',
      imagePosition: 'top',
    },
    {
      id: 4,
      src: '/screens/home-mobile.png',
      alt: 'Tela de conquistas',
      title: 'Conquistas',
      description: 'Ganhe pontos e desbloqueie recursos especiais',
      imagePosition: 'bottom',
    },
  ];

  // Cycle through screens
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentScreen((prev) => (prev + 1) % screens.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-[320px] h-[640px] mx-auto">
      {/* Phone frame */}
      <div className="absolute inset-0 bg-black rounded-[40px] shadow-2xl overflow-hidden border-8 border-gray-800">
        {/* Status bar */}
        <div className="absolute top-0 inset-x-0 h-6 bg-black z-10">
          <div className="w-20 h-4 mx-auto bg-gray-800 rounded-b-xl"></div>
        </div>

        {/* Screen content with animated transitions */}
        <div className="relative w-full h-full pt-6">
          {screens.map((screen, index) => (
            <motion.div
              key={screen.id}
              initial={{
                opacity: 0,
                y: screen.imagePosition === 'bottom' ? 100 : -100,
              }}
              animate={{
                opacity: index === currentScreen ? 1 : 0,
                y:
                  index === currentScreen
                    ? 0
                    : screen.imagePosition === 'bottom'
                      ? 100
                      : -100,
              }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 pt-6"
            >
              <div className="relative w-full h-full">
                <Image
                  src={screen.src}
                  alt={screen.alt}
                  layout="fill"
                  objectFit="cover"
                  objectPosition={
                    screen.imagePosition === 'bottom' ? 'bottom' : 'top'
                  }
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom indicator */}
        <div className="absolute bottom-4 inset-x-0 flex justify-center space-x-2">
          {screens.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentScreen(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentScreen ? 'bg-[#ED2F59] w-4' : 'bg-gray-400'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

// Components
const FeatureCard = ({
  icon,
  title,
  description,
  delay,
  animate,
  color,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
  animate: boolean;
  color: string;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={animate ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
    transition={{ duration: 0.5, delay }}
    className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
  >
    <div
      className={`bg-gradient-to-r ${color} text-white w-16 h-16 rounded-xl flex items-center justify-center mb-4`}
    >
      {icon}
    </div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </motion.div>
);

const StepCard = ({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) => (
  <div className="flex flex-col items-center text-center">
    <div className="bg-[#ED2F59] text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mb-4">
      {number}
    </div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const TestimonialCard = ({
  quote,
  author,
  role,
  image,
}: {
  quote: string;
  author: string;
  role: string;
  image: string;
}) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
  >
    <div className="flex items-start mb-4">
      <div className="flex-shrink-0 w-12 h-12 rounded-full overflow-hidden mr-4 ring-2 ring-[#ED2F59]">
        <img src={image} alt={author} className="w-full h-full object-cover" />
      </div>
      <div className="flex-1">
        <p className="font-semibold leading-tight">{author}</p>
        <p className="text-sm text-gray-500 leading-tight">{role}</p>
      </div>
    </div>
    <p className="text-gray-600 italic">&ldquo;{quote}&rdquo;</p>
  </motion.div>
);

// Add new animation styles
const styles = `
  @keyframes float {
    0% { transform: translateY(0px); }
    50% { transform: translateY(-20px); }
    100% { transform: translateY(0px); }
  }
  .animate-float {
    animation: float 6s ease-in-out infinite;
  }
  @keyframes spin-slow {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
  .animate-spin-slow {
    animation: spin-slow 10s linear infinite;
  }
`;

// Add style tag to head
if (typeof document !== 'undefined') {
  const styleTag = document.createElement('style');
  styleTag.textContent = styles;
  document.head.appendChild(styleTag);
}
