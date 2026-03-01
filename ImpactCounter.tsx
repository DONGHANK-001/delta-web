/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect } from 'react';
import AOS from 'aos';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BusinessGroups from './components/BusinessGroups';
import ImpactCounter from './components/ImpactCounter';
import GlobalMap from './components/GlobalMap';
import GreenBuildingGallery from './components/GreenBuildingGallery';
import ESGStats from './components/ESGStats';
import Timeline from './components/Timeline';
import Footer from './components/Footer';
import ErrorBoundary from './components/ErrorBoundary';

export default function App() {
  useEffect(() => {
    // AOS Optimization Parameters
    AOS.init({
      duration: 800,           // 縮短動畫時長減少掉幀感
      easing: 'ease-out-quad', // 使用更輕量的緩動函數
      once: true,              // 動畫只執行一次，減少滾動時的計算負擔
      offset: 120,             // 觸發偏移量
      delay: 50,               // 減少初始延遲
      disable: 'mobile',       // 在低階行動裝置上禁用動畫以確保流暢度
    });

    // Lazy Loading Script for Images (Intersection Observer)
    const lazyImages = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement;
          img.src = img.dataset.src || '';
          img.removeAttribute('data-src');
          observer.unobserve(img);
        }
      });
    });

    lazyImages.forEach(img => imageObserver.observe(img));
  }, []);

  return (
    <ErrorBoundary>
      <div className="min-h-screen selection:bg-delta-blue selection:text-white">
        <Navbar />
        <main>
          <Hero />
          <ImpactCounter />
          <BusinessGroups />
          <GlobalMap />
          <GreenBuildingGallery />
          <ESGStats />
          <Timeline />
        </main>
        <Footer />
      </div>
    </ErrorBoundary>
  );
}
