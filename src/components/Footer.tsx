import { Mail, Phone, MapPin, Linkedin, Twitter, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#1A1A1A] text-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-delta-blue rounded-sm flex items-center justify-center text-white font-bold text-xl">D</div>
              <span className="font-display font-bold text-xl tracking-tight">DELTA</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-8">
              台達電子致力於提供創新、潔淨與節能的解決方案。我們透過領先的電源技術與自動化系統，為全球客戶創造永續價值。
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-delta-blue transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-delta-blue transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-delta-blue transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-6 text-lg">快速連結</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><a href="#hero" className="hover:text-white transition-colors">首頁</a></li>
              <li><a href="#business" className="hover:text-white transition-colors">事業群</a></li>
              <li><a href="#esg" className="hover:text-white transition-colors">永續發展</a></li>
              <li><a href="#milestones" className="hover:text-white transition-colors">發展里程碑</a></li>
            </ul>
          </div>

          {/* Business Groups */}
          <div>
            <h4 className="font-bold mb-6 text-lg">核心事業</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">電源及零組件</a></li>
              <li><a href="#" className="hover:text-white transition-colors">自動化解決方案</a></li>
              <li><a href="#" className="hover:text-white transition-colors">基礎設施建設</a></li>
              <li><a href="#" className="hover:text-white transition-colors">智慧能源管理</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-6 text-lg">聯絡我們</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-delta-blue shrink-0" />
                <span>台北市內湖區瑞光路 186 號</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-delta-blue shrink-0" />
                <span>+886-2-8797-2088</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-delta-blue shrink-0" />
                <span>info@deltaww.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>© 2024 Delta Electronics, Inc. All Rights Reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">隱私權政策</a>
            <a href="#" className="hover:text-white transition-colors">使用條款</a>
            <a href="#" className="hover:text-white transition-colors">Cookie 設定</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
