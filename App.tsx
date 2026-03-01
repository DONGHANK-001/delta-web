import { motion } from 'motion/react';

const milestones = [
  {
    year: '1971',
    title: '台達電子成立',
    description: '開啟電源技術研發，奠定全球電源供應器領導地位基礎。'
  },
  {
    year: '1988',
    title: '正式掛牌上市',
    description: '於台灣證券交易所上市，進入資本市場加速全球佈局。'
  },
  {
    year: '2002',
    title: '高效率電源領航',
    description: '推出首款高效率電源供應器，引領產業節能技術趨勢。'
  },
  {
    year: '2010',
    title: '品牌轉型啟動',
    description: '確立「節能、自動化、基礎設施」發展方向，從零組件轉向解決方案。'
  },
  {
    year: '2021',
    title: '承諾 RE100',
    description: '承諾 2030 年達成 100% 再生能源使用與碳中和目標。'
  }
];

export default function Timeline() {
  return (
    <section id="milestones" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">發展里程碑</h2>
          <div className="w-20 h-1 bg-delta-blue mx-auto" />
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gray-200 -translate-x-1/2 hidden md:block" />

          <div className="space-y-12 md:space-y-24">
            {milestones.map((item, index) => (
              <div 
                key={item.year}
                data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
                className={`relative flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Content */}
                <div className="w-full md:w-1/2 px-0 md:px-12 mb-8 md:mb-0">
                  <div className={`p-8 rounded-3xl bg-slate-50 border border-gray-100 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'} hover:bg-white hover:shadow-xl transition-all duration-300`}>
                    <span className="text-delta-blue font-display font-bold text-4xl mb-4 block">{item.year}</span>
                    <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{item.description}</p>
                  </div>
                </div>

                {/* Dot */}
                <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-delta-blue border-4 border-white shadow-lg z-10 hidden md:block" />

                {/* Spacer for the other side */}
                <div className="w-full md:w-1/2 hidden md:block" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
