import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'glass-nav py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-delta-blue rounded-sm flex items-center justify-center text-white font-bold text-xl">D</div>
          <span className={`font-display font-bold text-xl tracking-tight ${isScrolled ? 'text-delta-blue' : 'text-white'}`}>
            DELTA
          </span>
        </div>

        {/* Desktop Menu */}
        <div className={`hidden md:flex items-center gap-8 font-medium text-sm uppercase tracking-wider ${isScrolled ? 'text-gray-600' : 'text-white/90'}`}>
          <a href="#hero" className="hover:text-delta-blue transition-colors">首頁</a>
          <a href="#business" className="hover:text-delta-blue transition-colors">事業群</a>
          <a href="#esg" className="hover:text-delta-blue transition-colors">永續發展</a>
          <a href="#milestones" className="hover:text-delta-blue transition-colors">里程碑</a>
          <button className="bg-delta-blue text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/20">
            聯絡我們
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X className={isScrolled ? 'text-delta-blue' : 'text-white'} /> : <Menu className={isScrolled ? 'text-delta-blue' : 'text-white'} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 w-full bg-white shadow-xl p-6 flex flex-col gap-4 md:hidden"
        >
          <a href="#hero" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-800 font-medium">首頁</a>
          <a href="#business" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-800 font-medium">事業群</a>
          <a href="#esg" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-800 font-medium">永續發展</a>
          <a href="#milestones" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-800 font-medium">里程碑</a>
        </motion.div>
      )}
    </nav>
  );
}
