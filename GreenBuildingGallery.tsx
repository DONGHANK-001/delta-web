import { useState, useEffect, useRef } from 'react';
import { motion, useInView, useSpring, useTransform } from 'motion/react';

interface CounterProps {
  value: number;
  duration?: number;
}

function Counter({ value, duration = 2 }: CounterProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const spring = useSpring(0, {
    duration: duration * 1000,
    bounce: 0,
  });

  const displayValue = useTransform(spring, (latest) => Math.floor(latest).toLocaleString());

  useEffect(() => {
    if (isInView) {
      spring.set(value);
    }
  }, [isInView, value, spring]);

  return <motion.span ref={ref}>{displayValue}</motion.span>;
}

export default function ImpactCounter() {
  return (
    <section className="py-24 bg-delta-blue text-white overflow-hidden relative">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-delta-green blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-white blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">節能貢獻，守護地球</h2>
          <p className="text-white/70 max-w-2xl mx-auto text-lg font-light">
            台達電始終秉持「環保 節能 愛地球」的經營使命，透過高效能產品協助全球客戶大幅降低碳排放。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          <div className="p-8 rounded-3xl bg-white/5 backdrop-blur-md border border-white/10" data-aos="zoom-in" data-aos-delay="100">
            <div className="text-5xl md:text-7xl font-display font-bold text-delta-green mb-4">
              <Counter value={399} />
              <span className="text-2xl ml-2">億度</span>
            </div>
            <p className="text-white/60 font-medium uppercase tracking-widest text-sm">2010-2023 累計節電量</p>
            <div className="mt-4 h-1 w-12 bg-delta-green mx-auto rounded-full" />
          </div>

          <div className="p-8 rounded-3xl bg-white/5 backdrop-blur-md border border-white/10" data-aos="zoom-in" data-aos-delay="200">
            <div className="text-5xl md:text-7xl font-display font-bold text-delta-green mb-4">
              <Counter value={2105} />
              <span className="text-2xl ml-2">萬噸</span>
            </div>
            <p className="text-white/60 font-medium uppercase tracking-widest text-sm">累計減少二氧化碳排放</p>
            <div className="mt-4 h-1 w-12 bg-delta-green mx-auto rounded-full" />
          </div>

          <div className="p-8 rounded-3xl bg-white/5 backdrop-blur-md border border-white/10" data-aos="zoom-in" data-aos-delay="300">
            <div className="text-5xl md:text-7xl font-display font-bold text-delta-green mb-4">
              <Counter value={32} />
              <span className="text-2xl ml-2">座</span>
            </div>
            <p className="text-white/60 font-medium uppercase tracking-widest text-sm">全球經認證之綠建築</p>
            <div className="mt-4 h-1 w-12 bg-delta-green mx-auto rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
}
