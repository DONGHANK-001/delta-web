import { motion } from 'motion/react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, BarChart, Bar } from 'recharts';

const energyData = [
  { year: '2018', savings: 210 },
  { year: '2019', savings: 245 },
  { year: '2020', savings: 280 },
  { year: '2021', savings: 320 },
  { year: '2022', savings: 358 },
];

const renewableData = [
  { name: '再生能源', value: 63 },
  { name: '傳統能源', value: 37 },
];

const carbonData = [
  { year: '2020', reduction: 5 },
  { year: '2021', reduction: 9 },
  { year: '2022', reduction: 13.5 },
];

const COLORS = ['#78BE20', '#E5E7EB'];

export default function ESGStats() {
  return (
    <section id="esg" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-display font-bold mb-6"
          >
            ESG 永續發展成果
          </motion.h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            數據見證我們對地球的承諾。透過創新技術，我們持續降低環境衝擊。
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Chart 1: Energy Savings */}
          <div 
            data-aos="zoom-in"
            data-aos-delay="0"
            className="stats-card"
          >
            <h3 className="text-lg font-bold mb-2">累計節電量 (億度)</h3>
            <p className="text-sm text-gray-500 mb-8">2009-2022 累計成果</p>
            <div className="h-64 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={energyData}>
                  <defs>
                    <linearGradient id="colorSavings" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#005596" stopOpacity={0.1}/>
                      <stop offset="95%" stopColor="#005596" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#F3F4F6" />
                  <XAxis dataKey="year" axisLine={false} tickLine={false} tick={{fontSize: 12}} />
                  <YAxis hide />
                  <Tooltip />
                  <Area type="monotone" dataKey="savings" stroke="#005596" strokeWidth={3} fillOpacity={1} fill="url(#colorSavings)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-6 text-center">
              <span className="text-4xl font-display font-bold text-delta-blue">358</span>
              <span className="text-gray-500 ml-2">億度</span>
            </div>
          </div>

          {/* Chart 2: Renewable Energy */}
          <div 
            data-aos="zoom-in"
            data-aos-delay="100"
            className="stats-card relative"
          >
            <h3 className="text-lg font-bold mb-2">再生能源使用比例</h3>
            <p className="text-sm text-gray-500 mb-8">邁向 RE100 目標</p>
            <div className="h-64 w-full flex items-center justify-center">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={renewableData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {renewableData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
              <div className="absolute flex flex-col items-center">
                <span className="text-3xl font-display font-bold text-delta-green">63%</span>
                <span className="text-[10px] text-gray-400 uppercase tracking-widest">Renewable</span>
              </div>
            </div>
            <p className="mt-6 text-center text-sm text-gray-600">
              承諾 2030 年達成 100% 再生能源使用
            </p>
          </div>

          {/* Chart 3: Carbon Reduction */}
          <div 
            data-aos="zoom-in"
            data-aos-delay="200"
            className="stats-card"
          >
            <h3 className="text-lg font-bold mb-2">碳排放強度降低</h3>
            <p className="text-sm text-gray-500 mb-8">年度減碳成果 (%)</p>
            <div className="h-64 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={carbonData}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#F3F4F6" />
                  <XAxis dataKey="year" axisLine={false} tickLine={false} tick={{fontSize: 12}} />
                  <YAxis hide />
                  <Tooltip cursor={{fill: '#F9FAFB'}} />
                  <Bar dataKey="reduction" fill="#78BE20" radius={[4, 4, 0, 0]} barSize={40} />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-6 text-center">
              <span className="text-4xl font-display font-bold text-delta-green">13.5</span>
              <span className="text-gray-500 ml-2">%</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
