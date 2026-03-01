import { motion } from 'motion/react';
import { Leaf, Building, ArrowUpRight } from 'lucide-react';

const buildings = [
  {
    id: 1,
    name: '那瑪夏民權國小',
    location: '高雄, 台灣',
    saving: '93%',
    type: '淨零耗能綠建築',
    description: '莫拉克風災後重建，融合原住民文化與尖端節能技術，達成年度淨零耗能。',
    image: 'https://picsum.photos/seed/delta-school/800/600'
  },
  {
    id: 2,
    name: '台達美洲總部',
    location: 'Fremont, 美國',
    saving: '100%',
    type: 'LEED 鉑金級認證',
    description: '利用地源熱泵與太陽能發電，成為 Fremont 首座淨零耗能商用建築。',
    image: 'https://picsum.photos/seed/delta-us/800/600'
  },
  {
    id: 3,
    name: '台達內湖總部',
    location: '台北, 台灣',
    saving: '50%+',
    type: 'LEED 鉑金級 (EBOM)',
    description: '透過智慧樓宇管理系統優化舊建築效能，展現既有建築轉型綠建築的實力。',
    image: 'https://picsum.photos/seed/delta-hq/800/600'
  }
];

export default function GreenBuildingGallery() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6" data-aos="fade-up">
          <div>
            <div className="flex items-center gap-2 text-delta-green font-bold text-sm uppercase tracking-widest mb-4">
              <Leaf className="w-4 h-4" />
              <span>Green Building Excellence</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-display font-bold">綠建築專案展示</h2>
          </div>
          <p className="text-gray-500 max-w-md">
            台達電在全球已捐贈或自建超過 30 座綠建築，我們用實際行動證明「建築節能」的無限可能。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {buildings.map((building, index) => (
            <div 
              key={building.id}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="group relative h-[500px] rounded-[32px] overflow-hidden cursor-pointer shadow-xl"
            >
              {/* Background Image */}
              <img 
                data-src={building.image} 
                src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                alt={building.name} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

              {/* Static Content (Bottom) */}
              <div className="absolute bottom-0 left-0 w-full p-8 transition-transform duration-500 group-hover:-translate-y-4">
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-3 py-1 rounded-full bg-delta-green text-white text-[10px] font-bold uppercase tracking-wider">
                    節能 {building.saving}
                  </span>
                  <span className="text-white/60 text-xs font-medium flex items-center gap-1">
                    <Building className="w-3 h-3" />
                    {building.location}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{building.name}</h3>
                <p className="text-white/40 text-sm font-medium uppercase tracking-widest">{building.type}</p>
              </div>

              {/* Hover Content (Glassmorphism Overlay) */}
              <div className="absolute inset-0 flex items-center justify-center p-8 opacity-0 group-hover:opacity-100 transition-all duration-500 backdrop-blur-sm bg-delta-blue/40">
                <div className="text-center transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="w-16 h-16 rounded-full bg-white/20 border border-white/30 flex items-center justify-center mx-auto mb-6">
                    <ArrowUpRight className="text-white w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-4">{building.name}</h4>
                  <p className="text-white/80 text-sm leading-relaxed mb-6">
                    {building.description}
                  </p>
                  <button className="px-6 py-2 rounded-full bg-white text-delta-blue font-bold text-sm hover:bg-delta-green hover:text-white transition-colors">
                    查看專案詳情
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
