import React, { useState, useRef } from 'react';
import { PRODUCTS } from './constants';
import { Product } from './types';
import ProductCard from './components/ProductCard';
import OrderModal from './components/OrderModal';
import SecurityScreen from './components/SecurityScreen';
import StatsSection from './components/StatsSection';
import { 
  ArrowRight, Sparkles, Code, ShieldCheck, Zap, Globe, Lock
} from 'lucide-react';

const App: React.FC = () => {
  const [isVerified, setIsVerified] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [filter, setFilter] = useState<'ALL' | 'DISCORD' | 'WEBSITE'>('ALL');
  const productsRef = useRef<HTMLDivElement>(null);

  const filteredProducts = filter === 'ALL' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === filter);

  const handleSelectProduct = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  if (!isVerified) {
    return <SecurityScreen onVerified={() => setIsVerified(true)} />;
  }

  return (
    <div className="min-h-screen font-sans text-slate-200 selection:bg-accent/30 animate-fade-in">
      
      {/* --- NAVBAR FLOTTANTE --- */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-5xl">
        <div className="bg-black/60 backdrop-blur-2xl border border-white/10 rounded-full px-6 py-3 flex justify-between items-center shadow-2xl shadow-black/50">
            <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-primary to-accent flex items-center justify-center text-white font-bold font-display text-lg shadow-[0_0_15px_rgba(94,23,235,0.5)]">
                    S
                </div>
                <span className="font-display font-bold text-white hidden sm:block">SnowELF</span>
            </div>
            
            <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
                <a href="#" className="hover:text-white transition-colors">Studio</a>
                <a href="#services" className="hover:text-white transition-colors">Solutions</a>
                <a href="https://discord.gg/skbCrrTDPG" target="_blank" className="hover:text-white transition-colors">Communauté</a>
            </div>

            <button 
                onClick={() => productsRef.current?.scrollIntoView({behavior:'smooth'})}
                className="bg-white/10 hover:bg-white/20 border border-white/5 text-white px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all"
            >
                Start Project
            </button>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <main className="relative pt-48 pb-20 overflow-hidden">
        
        {/* Hero Content */}
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
            
            {/* Pill Label */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono mb-8 animate-fade-in-up">
                <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                NOUVELLE GÉNÉRATION DE BOTS & SITES
            </div>

            <h1 className="font-display text-6xl md:text-8xl font-bold tracking-tight text-white mb-8 leading-[0.9] animate-fade-in-up delay-100">
                L'Architecte de <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-400 to-gray-600">
                    Votre Univers Digital.
                </span>
            </h1>

            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed animate-fade-in-up delay-200">
                Nous ne vendons pas juste du code. Nous forgeons des expériences Discord et Web immersives qui définissent votre marque.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up delay-300">
                <button 
                    onClick={() => productsRef.current?.scrollIntoView({behavior:'smooth'})}
                    className="group relative px-8 py-4 bg-white text-black rounded-full font-bold overflow-hidden"
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-accent via-primary to-accent opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                    <span className="relative flex items-center gap-2">
                        Explorer les Offres <ArrowRight size={18} />
                    </span>
                </button>
                <a 
                    href="https://discord.gg/skbCrrTDPG" 
                    target="_blank"
                    className="px-8 py-4 bg-white/5 border border-white/10 rounded-full font-medium hover:bg-white/10 transition-colors text-white"
                >
                    Discord Support
                </a>
            </div>
        </div>

        {/* --- STATS SECTION --- */}
        <div className="mt-20">
            <StatsSection />
        </div>

        {/* --- FEATURES GRID (Bento Style) --- */}
        <div className="max-w-7xl mx-auto px-6 py-32 border-t border-white/5">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="p-8 rounded-3xl bg-gradient-to-b from-white/5 to-transparent border border-white/10">
                    <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center text-blue-400 mb-6">
                        <Code size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">Architecture Propre</h3>
                    <p className="text-gray-400 text-sm">Code optimisé, modulaire et scalable. Fini le code spaghetti.</p>
                </div>
                <div className="p-8 rounded-3xl bg-gradient-to-b from-white/5 to-transparent border border-white/10 md:col-span-2 relative overflow-hidden group">
                     {/* Deco BG */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 blur-[100px] rounded-full group-hover:bg-primary/30 transition-colors"></div>
                    
                    <div className="relative z-10">
                        <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center text-purple-400 mb-6">
                            <Sparkles size={24} />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">Design Système Unique</h3>
                        <p className="text-gray-400 text-sm max-w-lg">
                            Nous créons une identité visuelle cohérente entre votre Discord et votre Site Web. 
                            Une immersion totale pour vos utilisateurs.
                        </p>
                    </div>
                </div>
                <div className="p-8 rounded-3xl bg-gradient-to-b from-white/5 to-transparent border border-white/10 md:col-span-2 flex items-center gap-8">
                     <div className="hidden md:block">
                        <ShieldCheck size={48} className="text-green-400 opacity-50" />
                     </div>
                     <div>
                        <h3 className="text-xl font-bold text-white mb-2">Sécurité Anti-DDoS</h3>
                        <p className="text-gray-400 text-sm">Protection avancée contre les attaques layer 4/7. Votre projet reste en ligne quoi qu'il arrive.</p>
                     </div>
                </div>
                <div className="p-8 rounded-3xl bg-gradient-to-b from-white/5 to-transparent border border-white/10">
                     <div className="w-12 h-12 bg-pink-500/20 rounded-xl flex items-center justify-center text-pink-400 mb-6">
                        <Zap size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">Livraison Flash</h3>
                    <p className="text-gray-400 text-sm">Première version testable en moins de 48h.</p>
                </div>
            </div>
        </div>

        {/* --- PRODUCTS SECTION --- */}
        <section id="services" ref={productsRef} className="max-w-7xl mx-auto px-6 py-20 relative">
             {/* Section Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 blur-[120px] rounded-full pointer-events-none"></div>

            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 relative z-10">
                <div>
                    <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">Marketplace</h2>
                    <p className="text-gray-400 max-w-md">Solutions prêtes à l'emploi ou sur-mesure.</p>
                </div>

                {/* Modern Tabs */}
                <div className="bg-white/5 p-1 rounded-full flex gap-1 border border-white/5 backdrop-blur-md">
                    {[
                        { id: 'ALL', label: 'Tout' },
                        { id: 'DISCORD', label: 'Discord' },
                        { id: 'WEBSITE', label: 'Web' }
                    ].map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setFilter(tab.id as any)}
                            className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                                filter === tab.id 
                                ? 'bg-white text-black shadow-[0_0_20px_rgba(255,255,255,0.2)]' 
                                : 'text-gray-500 hover:text-white'
                            }`}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
                {filteredProducts.map((product, index) => (
                    <div key={product.id} className={`${product.colSpan || 'col-span-1'} min-h-[420px]`}>
                        <ProductCard 
                            product={product} 
                            index={index} 
                            onSelect={handleSelectProduct} 
                        />
                    </div>
                ))}
            </div>
        </section>

        {/* --- FOOTER --- */}
        <footer className="mt-20 border-t border-white/5 py-12 bg-black/40">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded bg-white text-black flex items-center justify-center font-bold text-xs">S</div>
                        <span className="text-white font-bold">SnowELF</span>
                    </div>
                    <div className="flex items-center gap-2 text-[10px] text-green-500 bg-green-900/10 px-3 py-1 rounded-full border border-green-900/30 w-fit">
                        <ShieldCheck size={10} />
                        <span>Protected by SnowELF Guard</span>
                    </div>
                </div>
                
                <div className="flex gap-6 text-sm text-gray-500">
                    <a href="#" className="hover:text-white transition-colors">Politique</a>
                    <a href="#" className="hover:text-white transition-colors">CGV</a>
                    <a href="https://discord.gg/skbCrrTDPG" className="hover:text-white transition-colors">Discord</a>
                </div>
                <p className="text-gray-600 text-xs">© 2024 SnowELF Inc.</p>
            </div>
        </footer>

      </main>

      <OrderModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        product={selectedProduct} 
      />
    </div>
  );
};

export default App;