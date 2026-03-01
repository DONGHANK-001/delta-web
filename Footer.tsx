import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-black">
      {/* Background with Ken Burns Effect */}
      <motion.div 
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 10, ease: "easeOut" }}
        className="absolute inset-0 z-0"
      >
        <img 
          src="https://picsum.photos/seed/delta-tech/1920/1080" 
          alt="Delta Technology Background" 
          className="w-full h-full object-cover opacity-60"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/60" />
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <div data-aos="fade-up" data-aos-delay="200">
          <span className="inline-block px-4 py-1.5 mb-6 rounded-full bg-delta-blue/20 border border-delta-blue/30 text-delta-blue font-semibold text-xs uppercase tracking-[0.2em] backdrop-blur-sm">
            Innovation for a Sustainable Future
          </span>
          <h1 className="text-5xl md:text-8xl font-display font-bold text-white mb-8 leading-[1.1] tracking-tight">
            Smarter. Greener.<br />
            <span className="text-delta-green">Together.</span>
          </h1>
          <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
            台達電致力於提供創新、潔淨與節能的解決方案，<br className="hidden md:block" />
            透過領先的電源技術與自動化系統，共創永續未來。
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <button className="w-full md:w-auto bg-delta-blue text-white px-8 py-4 rounded-full font-semibold flex items-center justify-center gap-2 hover:bg-blue-700 transition-all group shadow-xl shadow-blue-500/20">
              探索解決方案
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="w-full md:w-auto bg-white/10 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-full font-semibold hover:bg-white/20 transition-all">
              關於台達
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/40"
      >
        <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-white/40 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}
