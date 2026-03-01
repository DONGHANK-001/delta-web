import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, Info } from 'lucide-react';

const regions = [
  {
    id: 'taiwan',
    name: '台灣 (Taiwan)',
    coords: { x: '82%', y: '45%' },
    stats: {
      rd: '10+ 研發中心',
      focus: '全球總部、智慧製造示範基地、高效能電源研發',
      impact: '核心技術發源地'
    },
    color: '#005596'
  },
  {
    id: 'china',
    name: '中國 (China)',
    coords: { x: '78%', y: '40%' },
    stats: {
      rd: '20+ 研發中心',
      focus: '主要生產基地 (東莞、吳江、蕪湖)、工業自動化',
      impact: '全球供應鏈樞紐'
    },
    color: '#005596'
  },
  {
    id: 'americas',
    name: '美洲 (Americas)',
    coords: { x: '20%', y: '40%' },
    stats: {
      rd: '5+ 研發中心',
      focus: '美洲總部 (Fremont)、電動車充電、資料中心基礎設施',
      impact: '創新應用前哨站'
    },
    color: '#005596'
  },
  {
    id: 'europe',
    name: '歐洲 (Europe)',
    coords: { x: '50%', y: '30%' },
    stats: {
      rd: '8+ 研發中心',
      focus: '歐洲總部 (Hoofddorp)、通訊電源、再生能源解決方案',
      impact: '永續能源轉型先驅'
    },
    color: '#005596'
  }
];

export default function GlobalMap() {
  const [activeRegion, setActiveRegion] = useState<typeof regions[0] | null>(null);

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">全球佈局，在地服務</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            台達電在全球設有研發中心、生產基地與營業據點，為客戶提供即時且專業的技術支援。
          </p>
        </div>

        <div className="relative aspect-[16/9] bg-slate-50 rounded-[40px] border border-slate-100 overflow-hidden group shadow-inner">
          {/* Simplified World Map SVG */}
          <svg viewBox="0 0 1000 500" className="w-full h-full opacity-20 fill-slate-300">
            <path d="M150,150 Q200,100 300,150 T450,200 T600,150 T750,200 T900,150 V350 Q800,400 700,350 T550,300 T400,350 T250,300 T100,350 Z" />
            {/* Very simplified continents for visual context */}
            <circle cx="200" cy="200" r="80" /> {/* Americas */}
            <circle cx="500" cy="150" r="60" /> {/* Europe */}
            <circle cx="800" cy="250" r="100" /> {/* Asia */}
            <circle cx="550" cy="350" r="70" /> {/* Africa */}
            <circle cx="850" cy="400" r="50" /> {/* Oceania */}
          </svg>

          {/* Interactive Pins */}
          {regions.map((region) => (
            <div
              key={region.id}
              className="absolute cursor-pointer group/pin"
              style={{ left: region.coords.x, top: region.coords.y }}
              onMouseEnter={() => setActiveRegion(region)}
              onMouseLeave={() => setActiveRegion(null)}
            >
              <motion.div
                animate={{ scale: activeRegion?.id === region.id ? 1.5 : 1 }}
                className="relative flex items-center justify-center"
              >
                <div className="absolute w-8 h-8 bg-delta-blue/20 rounded-full animate-ping" />
                <MapPin className={`w-6 h-6 ${activeRegion?.id === region.id ? 'text-delta-green' : 'text-delta-blue'} transition-colors`} />
              </motion.div>
              
              {/* Region Label (Desktop) */}
              <span className="absolute top-8 left-1/2 -translate-x-1/2 whitespace-nowrap text-[10px] font-bold uppercase tracking-widest text-slate-400 opacity-0 group-hover/pin:opacity-100 transition-opacity">
                {region.name}
              </span>
            </div>
          ))}

          {/* Info Overlay */}
          <AnimatePresence>
            {activeRegion && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="absolute top-6 right-6 w-full max-w-xs bg-white/90 backdrop-blur-xl p-6 rounded-3xl border border-white shadow-2xl z-20"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-delta-blue/10 flex items-center justify-center text-delta-blue">
                    <Info className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">{activeRegion.name}</h4>
                    <span className="text-xs text-delta-green font-semibold uppercase tracking-wider">{activeRegion.stats.rd}</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold mb-1">核心焦點</p>
                    <p className="text-sm text-slate-600 leading-relaxed">{activeRegion.stats.focus}</p>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold mb-1">區域影響力</p>
                    <p className="text-sm text-slate-600 leading-relaxed">{activeRegion.stats.impact}</p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Default Hint */}
          {!activeRegion && (
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 text-slate-400 text-xs font-medium animate-pulse">
              <MapPin className="w-4 h-4" />
              <span>滑鼠懸停在地圖標記上查看全球佈局詳情</span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
