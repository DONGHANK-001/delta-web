import { motion } from 'motion/react';
import { Zap, Cpu, Building2, CheckCircle2 } from 'lucide-react';

const groups = [
  {
    id: 'power',
    title: '電源及零組件',
    icon: Zap,
    description: '全球電源管理領導者，提供高效率電力轉換與熱管理解決方案。',
    features: ['高效率電源轉換', '先進散熱技術', '關鍵零組件整合'],
    color: 'bg-blue-50 text-delta-blue',
    image: 'https://picsum.photos/seed/delta-power/600/400'
  },
  {
    id: 'automation',
    title: '自動化',
    icon: Cpu,
    description: '驅動智慧製造，透過工業自動化提升生產力與能源效率。',
    features: ['智慧工廠解決方案', '機器人與運動控制', '工業能源管理'],
    color: 'bg-green-50 text-delta-green',
    image: 'https://picsum.photos/seed/delta-auto/600/400'
  },
  {
    id: 'infrastructure',
    title: '基礎設施',
    icon: Building2,
    description: '建構智慧城市與資料中心，優化關鍵基礎設施的運作效率。',
    features: ['資料中心基礎設施', '電動車充電解決方案', '智慧樓宇自動化'],
    color: 'bg-slate-50 text-slate-700',
    image: 'https://picsum.photos/seed/delta-infra/600/400'
  }
];

export default function BusinessGroups() {
  return (
    <section id="business" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-display font-bold mb-6"
          >
            三大核心事業群
          </motion.h2>
          <div className="w-20 h-1 bg-delta-blue mx-auto mb-6" />
          <p className="text-gray-500 max-w-2xl mx-auto">
            我們將技術實力轉化為多元化的解決方案，滿足全球市場對節能與效率的嚴苛需求。
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {groups.map((group, index) => (
            <div
              key={group.id}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="group flex flex-col bg-white rounded-3xl overflow-hidden border border-gray-100 card-hover-scale"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={group.image} 
                  alt={group.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <div className={`w-12 h-12 rounded-2xl ${group.color} flex items-center justify-center mb-6 transition-transform group-hover:rotate-12`}>
                  <group.icon className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-delta-blue transition-colors">{group.title}</h3>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  {group.description}
                </p>
                <div className="mt-auto space-y-3">
                  {group.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-3 text-sm font-medium text-gray-700">
                      <CheckCircle2 className="w-4 h-4 text-delta-green" />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
