/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { COLOR_CARDS, ColorCard } from './data';
import { motion, AnimatePresence } from 'motion/react';
import ColorCardExplorer from './components/ColorCardExplorer';
import ProductDetails from './components/ProductDetails';
import ContactForm from './components/ContactForm';
import BusinessScope from './components/BusinessScope';
import InteractiveVisualizer from './components/InteractiveVisualizer';
import CaseGallery from './components/CaseGallery';
import { standaloneHtmlTemplate } from './exportTemplate';
import { 
  Factory, ShieldCheck, Award, Menu, X, Phone, ShoppingCart,
  MapPin, CheckCircle, Flame, ExternalLink, HardHat, ChevronRight, MessageSquare,
  FileCode, Download, Copy, Check, Info, Sparkles, Code
} from 'lucide-react';

export default function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDeveloperMode, setIsDeveloperMode] = useState(false);
  const [copied, setCopied] = useState(false);
  const [selectedSamples, setSelectedSamples] = useState<ColorCard[]>([]);

  const handleAddSample = (card: ColorCard) => {
    setSelectedSamples(prev => {
      if (prev.some(s => s.id === card.id)) {
        return prev.filter(s => s.id !== card.id);
      } else {
        return [...prev, card];
      }
    });
  };

  const handleRemoveSample = (card: ColorCard) => {
    setSelectedSamples(prev => prev.filter(s => s.id !== card.id));
  };

  // Copy helper
  const handleCopyCode = () => {
    navigator.clipboard.writeText(standaloneHtmlTemplate);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  // Download helper
  const handleDownloadFile = () => {
    const blob = new Blob([standaloneHtmlTemplate], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'index.html';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  // Scroll helper
  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    setIsDeveloperMode(false); // Return to preview mode if scrolling to standard section
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 85;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen bg-brand-light text-brand-dark font-sans antialiased selection:bg-brand-accent selection:text-white">
      
      {/* 1. TOP PREMIUM HELPER LINE */}
      <div className="bg-brand-dark text-stone-400 text-[11px] sm:text-xs py-2.5 px-4 border-b border-stone-800">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-brand-accent animate-pulse" />
              彰化總廠：彰化縣和美鎮彰草路三段97號
            </span>
            <span className="hidden md:inline-block text-stone-750">|</span>
            <span className="hidden md:inline-flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-brand-accent" />
              專業級高溫真空高壓木紋轉印與氟碳自潔烤漆
            </span>
          </div>
          <div className="flex items-center gap-4 text-stone-300">
            <span className="flex items-center gap-1">
              服務時間：週一到週五 8:00~17:00 (國定假日不營業)
            </span>
          </div>
        </div>
      </div>

      {/* DIRECT DOWNLOAD RIBBON BANNER - HIGHEST VISIBILITY */}
      <div className="bg-[#A69177] text-stone-950 font-sans py-3 px-4 shadow-sm relative z-50 border-b border-brand-accent/20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3 text-center md:text-left">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3">
            <span className="bg-stone-950 text-white text-[10px] uppercase font-serif font-extrabold tracking-widest px-2.5 py-1 rounded-xs animate-pulse">
              GITHUB PAGES HTML5 導出
            </span>
            <p className="text-xs sm:text-xs font-bold text-stone-950 leading-tight">
              純 HTML + CSS + JS 單一首頁檔案！去 React、無打包依賴、直刷即開、秒級部署！
            </p>
          </div>
          <div className="flex items-center gap-2 w-full md:w-auto justify-center">
            <button
              onClick={() => {
                setIsDeveloperMode(true);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="bg-stone-950 hover:bg-stone-900 text-[#FAF9F6] font-bold text-xs tracking-wider px-3.5 py-2 rounded-xs transition-all cursor-pointer shadow-xs whitespace-nowrap"
            >
              📖 看 10 秒上線說明
            </button>
            <button
              onClick={handleDownloadFile}
              className="bg-white hover:bg-stone-50 text-stone-950 font-extrabold text-xs tracking-wider px-4 py-2 rounded-xs shadow-md hover:shadow-lg transition-all flex items-center gap-1.5 cursor-pointer border border-stone-200 hover:scale-[1.02] active:scale-[0.98] whitespace-nowrap"
            >
              <Download className="w-3.5 h-3.5 text-[#A69177] animate-bounce" />
              直接下載 index.html 檔案
            </button>
          </div>
        </div>
      </div>

      {/* 2. NAVIGATION HEADER */}
      <header className="sticky top-0 bg-white/95 backdrop-blur-md border-b border-stone-200/80 z-40 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            
            {/* Logo */}
            <div className="flex items-center gap-3 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
              <img 
                src="input_file_0.png" 
                alt="東華工業 LOGO" 
                className="w-11 h-11 object-contain rounded-full border border-stone-200 bg-white p-0.5 shadow-2xs"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  const fb = document.getElementById('logo-fallback');
                  if (fb) fb.style.display = 'flex';
                }}
              />
              <div id="logo-fallback" className="hidden w-9 h-9 bg-brand-accent items-center justify-center text-white font-bold rounded-sm shadow-xs">
                T
              </div>
              <div className="leading-tight">
                <span className="text-lg font-bold tracking-tighter uppercase text-brand-dark">東華工業 <span className="text-brand-accent font-light">Tung Hua</span></span>
                <p className="text-[9px] text-stone-500 font-bold uppercase tracking-widest mt-0.5" style={{ letterSpacing: '0.05em' }}>Tung Hua Industrial Co., Ltd</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-7 text-xs font-semibold tracking-wider text-stone-600 uppercase">
              <button onClick={() => { setIsDeveloperMode(false); window.scrollTo({ top: 0, behavior: "smooth" }); }} className={`hover:text-brand-accent transition-colors cursor-pointer ${!isDeveloperMode ? 'text-brand-accent' : ''}`}>關於介紹</button>
              <button onClick={() => { setIsDeveloperMode(false); scrollToSection('specifications'); }} className="hover:text-brand-accent transition-colors cursor-pointer">核心工法</button>
              <button onClick={() => { setIsDeveloperMode(false); scrollToSection('business-scope'); }} className="hover:text-brand-accent transition-colors cursor-pointer">營業項目</button>
              <button onClick={() => { setIsDeveloperMode(false); scrollToSection('visualizer'); }} className="hover:text-brand-accent transition-colors cursor-pointer">實境模擬</button>
              <button onClick={() => { setIsDeveloperMode(false); scrollToSection('color-cards'); }} className="hover:text-brand-accent transition-colors cursor-pointer">型錄色卡</button>
              <button onClick={() => { setIsDeveloperMode(false); scrollToSection('cases'); }} className="hover:text-brand-accent transition-colors cursor-pointer">完工實績</button>
              <button onClick={() => { setIsDeveloperMode(false); scrollToSection('contact'); }} className="hover:text-brand-accent transition-colors cursor-pointer">聯絡資訊</button>
            </nav>

            {/* Middle Select Mode Switcher - High visual feedback */}
            <div className="hidden lg:flex items-center bg-stone-100 p-1 rounded-sm border border-stone-200">
              <button 
                onClick={() => setIsDeveloperMode(false)}
                className={`px-3 py-1.5 text-[11px] font-bold tracking-wider rounded-sm cursor-pointer transition-all flex items-center gap-1.5 ${!isDeveloperMode ? 'bg-brand-dark text-white shadow-xs' : 'text-stone-600 hover:text-stone-900'}`}
              >
                💻 Live 預覽
              </button>
              <button 
                onClick={() => setIsDeveloperMode(true)}
                className={`px-3 py-1.5 text-[11px] font-bold tracking-wider rounded-sm cursor-pointer transition-all flex items-center gap-1.5 ${isDeveloperMode ? 'bg-brand-accent text-white shadow-xs' : 'text-stone-600 hover:text-stone-900'}`}
              >
                📦 下載與部署自適應 HTML
              </button>
            </div>

            {/* Right Action Widget */}
            <div className="hidden lg:flex items-center gap-3">
              <button
                onClick={() => scrollToSection('contact')}
                className="bg-brand-dark hover:bg-stone-800 text-white font-bold text-xs tracking-widest uppercase px-5 py-3 rounded-sm shadow-xs cursor-pointer flex items-center gap-1 transition-colors"
              >
                索取建照樣品
              </button>
            </div>

            {/* Mobile menu trigger */}
            <div className="flex items-center gap-3 lg:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 bg-stone-50 border border-stone-200 rounded-sm text-stone-750"
              >
                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div 
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden border-t border-stone-200 bg-brand-light px-4 py-5 space-y-2.5 shadow-inner"
            >
              <button onClick={() => { setIsMobileMenuOpen(false); setIsDeveloperMode(false); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="block w-full text-left py-2.5 px-3 rounded-sm hover:bg-white text-xs font-bold uppercase tracking-wider text-stone-700">關於介紹</button>
              <button onClick={() => { setIsMobileMenuOpen(false); setIsDeveloperMode(false); scrollToSection('specifications'); }} className="block w-full text-left py-2.5 px-3 rounded-sm hover:bg-white text-xs font-bold uppercase tracking-wider text-stone-700">核心工法</button>
              <button onClick={() => { setIsMobileMenuOpen(false); setIsDeveloperMode(false); scrollToSection('business-scope'); }} className="block w-full text-left py-2.5 px-3 rounded-sm hover:bg-white text-xs font-bold uppercase tracking-wider text-stone-700">營業項目</button>
              <button onClick={() => { setIsMobileMenuOpen(false); setIsDeveloperMode(false); scrollToSection('visualizer'); }} className="block w-full text-left py-2.5 px-3 rounded-sm hover:bg-white text-xs font-bold uppercase tracking-wider text-stone-700">實境模擬</button>
              <button onClick={() => { setIsMobileMenuOpen(false); setIsDeveloperMode(false); scrollToSection('color-cards'); }} className="block w-full text-left py-2.5 px-3 rounded-sm hover:bg-white text-xs font-bold uppercase tracking-wider text-stone-700">型錄色卡</button>
              <button onClick={() => { setIsMobileMenuOpen(false); setIsDeveloperMode(false); scrollToSection('cases'); }} className="block w-full text-left py-2.5 px-3 rounded-sm hover:bg-white text-xs font-bold uppercase tracking-wider text-stone-700">完工實績</button>
              <button onClick={() => { setIsMobileMenuOpen(false); setIsDeveloperMode(false); scrollToSection('contact'); }} className="block w-full text-left py-2.5 px-3 rounded-sm hover:bg-white text-xs font-bold uppercase tracking-wider text-stone-700">聯絡資訊</button>
              
              <div className="pt-3 border-t border-stone-200">
                <span className="block text-[10px] font-bold text-stone-400 uppercase tracking-wider mb-1.5">切換系統架構</span>
                <div className="flex gap-2">
                  <button 
                    onClick={() => { setIsDeveloperMode(false); setIsMobileMenuOpen(false); }}
                    className={`flex-1 py-2 text-center text-[10px] font-bold rounded-xs cursor-pointer border ${!isDeveloperMode ? 'bg-brand-dark border-brand-dark text-white' : 'bg-white border-stone-200 text-stone-600'}`}
                  >
                    💻 正常預覽
                  </button>
                  <button 
                    onClick={() => { setIsDeveloperMode(true); setIsMobileMenuOpen(false); }}
                    className={`flex-1 py-2 text-center text-[10px] font-bold rounded-xs cursor-pointer border ${isDeveloperMode ? 'bg-brand-accent border-brand-accent text-white' : 'bg-white border-stone-200 text-stone-600'}`}
                  >
                    📦 導出單頁 HTML
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Toggle View Condition for Standalone HTML Exporter Option */}
      <AnimatePresence mode="wait">
        {isDeveloperMode ? (
          <motion.div 
            key="developer-workspace"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25 }}
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 font-sans relative z-10"
          >
            {/* Main Workstation Header */}
            <div className="bg-gradient-to-r from-stone-900 to-stone-950 text-white rounded-none p-6 sm:p-10 border border-stone-800 shadow-2xl relative overflow-hidden mb-12">
              <div className="absolute right-0 bottom-0 translate-x-10 translate-y-10 opacity-[0.03] pointer-events-none">
                <FileCode className="w-96 h-96" />
              </div>
              
              <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 relative z-10">
                <div className="space-y-3">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-accent/20 border border-brand-accent/30 text-brand-accent text-[11px] font-bold rounded-sm uppercase tracking-widest">
                    <Sparkles className="w-3.5 h-3.5" />
                    GitHub Pages 獨立單頁部署中心 (HTML5)
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-light tracking-tight text-white font-sans">
                    東華工業 <span className="font-bold text-brand-accent">純 HTML + CSS + JS 自適應官網</span>
                  </h2>
                  <p className="text-xs sm:text-sm text-stone-400 font-sans max-w-2xl leading-relaxed">
                    本系統已按您的最高指示，完美重塑並導出 <strong className="text-white">免建置、無打包依賴、去 React/TS、零 Vite</strong> 的純網頁格式！可一鍵下載並直接上傳至 GitHub Pages，支援各類主流行動與桌面裝置 RWD！
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
                  <button
                    onClick={handleCopyCode}
                    className="w-full sm:w-auto px-5 py-3.5 bg-stone-800 hover:bg-stone-750 text-stone-200 hover:text-white text-xs font-bold uppercase tracking-widest rounded-none transition-all flex items-center justify-center gap-2 cursor-pointer border border-stone-700"
                  >
                    {copied ? (
                      <>
                        <Check className="w-4 h-4 text-emerald-400" />
                        已複製代碼！
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4 text-brand-accent" />
                        複製整頁 HTML 原始碼
                      </>
                    )}
                  </button>
                  
                  <button
                    onClick={handleDownloadFile}
                    className="w-full sm:w-auto px-6 py-3.5 bg-brand-accent hover:bg-[#b09b81] text-white text-xs font-bold uppercase tracking-widest rounded-none shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer border border-brand-accent/30"
                  >
                    <Download className="w-4 h-4 text-white animate-bounce" />
                    下載 index.html 檔案
                  </button>
                </div>
              </div>
            </div>

            {/* Guidelines and Code Preview Side-by-Side */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              
              {/* Guidelines (5 cols) */}
              <div className="lg:col-span-5 space-y-6">
                <div className="bg-white border border-stone-200 rounded-none p-6 shadow-xs">
                  <h3 className="text-xs font-bold text-stone-900 tracking-widest uppercase mb-5 flex items-center gap-2 border-b border-stone-100 pb-3 font-sans">
                    <Info className="w-4.5 h-4.5 text-brand-accent" />
                    GitHub Pages 10 秒極速上線指南
                  </h3>
                  
                  <ol className="space-y-4 text-xs text-stone-600 leading-relaxed font-sans list-decimal list-inside pl-1">
                    <li className="marker:text-brand-accent marker:font-bold">
                      <strong className="text-stone-900">下載檔案：</strong>
                      點擊上方金色按鈕，將 <code className="bg-stone-100 px-1.5 py-0.5 rounded font-mono text-brand-dark">index.html</code> 存至桌面。
                    </li>
                    <li className="marker:text-brand-accent marker:font-bold">
                      <strong className="text-stone-900">建立 GitHub 儲存庫：</strong>
                      登入你的 GitHub 帳號，點選 <strong className="text-stone-950">New Repository</strong>，取名為例如 <code className="bg-stone-100 px-1.5 py-0.5 rounded font-mono text-brand-dark">tunghua-website</code>。
                    </li>
                    <li className="marker:text-brand-accent marker:font-bold">
                      <strong className="text-stone-900">上傳代碼：</strong>
                      點選 <strong className="text-stone-950">Upload an existing file</strong>，拖入下載好的 <code className="bg-stone-100 px-1.5 py-0.5 rounded font-mono text-brand-dark">index.html</code> 檔案，按 Commit 儲存。
                    </li>
                    <li className="marker:text-brand-accent marker:font-bold">
                      <strong className="text-stone-900">啟用 Pages 功能：</strong>
                      進入該 Repo 的 <strong className="text-stone-950">Settings</strong> → <strong className="text-stone-950">Pages</strong>，在 Build and deployment 區設定 Branch 為 <code className="bg-stone-100 px-1.5 py-0.5 rounded font-mono text-brand-dark">main</code> (或 root)，按下 Save。
                    </li>
                    <li className="marker:text-brand-accent marker:font-bold">
                      <strong className="text-stone-900">大功告成：</strong>
                      等候幾秒鐘，GitHub 會提供你一個免費的公開網址（如 <code className="bg-stone-100 px-1.5 py-0.5 rounded font-mono text-emerald-700 font-bold">https://yourname.github.io/tunghua-website</code>），官網立即啟用上線！
                    </li>
                  </ol>
                </div>

                <div className="bg-[#FAF9F6] border border-stone-200 rounded-none p-6 space-y-4">
                  <h4 className="text-xs font-bold text-stone-900 uppercase tracking-widest flex items-center gap-1.5 font-sans">
                    <ShieldCheck className="w-4.5 h-4.5 text-emerald-600" />
                    已內建模組化特色
                  </h4>
                  <ul className="space-y-2.5 text-xs text-stone-500 font-sans list-disc list-inside">
                    <li>完整配備 <strong className="text-stone-800 font-bold">20 大建築工程項目項目一覽</strong></li>
                    <li>常見熱門建材 <strong className="text-stone-800 font-bold">交叉大對決對比明細表</strong></li>
                    <li>純原生 JavaScript 滑動選單及型錄色卡分類過濾機制</li>
                    <li>符合 RWD 行動端自適應標準與多合一單頁檔案設計</li>
                    <li>完全去除了 CNS 檢測不相關文字、關於我們旁邊沒有複雜配圖</li>
                  </ul>
                </div>
              </div>

              {/* Code Previewer (7 cols) */}
              <div className="lg:col-span-7 space-y-3">
                <div className="flex items-center justify-between text-xs font-bold text-stone-400 bg-stone-900 rounded-t-sm px-4 py-3 border border-stone-850">
                  <div className="flex items-center gap-2">
                    <Code className="w-4 h-4 text-brand-accent" />
                    <span>index.html 原始碼即時預覽</span>
                  </div>
                  <div className="flex gap-1.5 items-center">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-500"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-green-500"></span>
                  </div>
                </div>
                <div className="bg-stone-950 rounded-b-sm border-x border-b border-stone-850 p-5 font-mono text-[10px] text-stone-300 overflow-x-auto max-h-[500px] leading-relaxed scrollbar-thin">
                  <pre className="whitespace-pre-wrap word-break-all">{standaloneHtmlTemplate}</pre>
                </div>
                <p className="text-[11px] text-stone-500 text-center italic mt-1.5 font-sans">
                  提示：本站點的「Live 預覽」模式與此導出代碼結構內核完全一致。
                </p>
              </div>

            </div>
          </motion.div>
        ) : (
          <motion.div
            key="standard-preview"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {/* 3. HERO SHOWCASE INTRO */}
            <section className="relative overflow-hidden bg-brand-dark text-white py-20 lg:py-32 border-b border-stone-800">
              
              {/* Subtle geometric framing */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(166,145,119,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(166,145,119,0.03)_1px,transparent_1px)] bg-[size:32px_32px]" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(166,145,119,0.1),transparent_50%)] pointer-events-none" />

              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center flex flex-col items-center">
                <div className="max-w-4xl space-y-6">
                  
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-brand-accent/10 border border-brand-accent/25 text-brand-accent text-xs font-semibold rounded-sm">
                    <HardHat className="w-3.5 h-3.5" />
                    專業大宗加工 · 鋼構結構與外牆塗膜表面處理
                  </div>

                  <div className="space-y-3">
                    <span className="text-[#A69177] font-serif italic text-lg sm:text-xl block">Premium Surface Treatment Spec</span>
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight leading-tight text-white font-sans">
                      極致工藝的<br/><span className="font-bold text-brand-accent">木紋轉印</span>與高階烤漆
                    </h2>
                  </div>

                  <p className="text-sm sm:text-base text-stone-300 font-sans leading-relaxed max-w-2xl mx-auto">
                    東華工業專營高品質建築鋁材與鋼板表面烤漆處理，融合精密「真空熱滲透」及「高溫熔融塗裝」。為您的建築表面注入自然與科技的和諧美學，提供高耐候、高品質耐腐與絕佳防霉防蟲表面特性。
                  </p>

                  {/* CTAs */}
                  <div className="flex flex-col sm:flex-row gap-3 pt-4 justify-center items-center">
                    <button
                      id="hero-btn-explorer"
                      onClick={() => scrollToSection('color-cards')}
                      className="w-full sm:w-auto bg-brand-accent hover:bg-[#b09b81] text-white font-bold text-xs tracking-widest uppercase px-8 py-4 rounded-sm shadow-md transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      探索色卡型錄
                      <ChevronRight className="w-4 h-4 stroke-[2.5px]" />
                    </button>
                    <button
                      id="hero-btn-contact"
                      onClick={() => scrollToSection('contact')}
                      className="w-full sm:w-auto bg-transparent hover:bg-stone-50/5 text-stone-200 hover:text-white font-bold text-xs tracking-widest uppercase px-8 py-4 rounded-sm border border-stone-600 hover:border-brand-accent transition-all cursor-pointer"
                    >
                      聯絡我們與 LINE 諮詢
                    </button>
                  </div>

                  {/* Taiwan Local Metrics */}
                  <div className="grid grid-cols-3 gap-8 pt-12 border-t border-stone-800 max-w-xl mx-auto text-center">
                    <div>
                      <span className="block text-xl sm:text-2xl font-bold text-white">專業廠區</span>
                      <span className="text-[10px] text-[#A69177] font-bold uppercase tracking-wider block mt-0.5">金屬加工與塗裝</span>
                    </div>
                    <div>
                      <span className="block text-xl sm:text-2xl font-bold text-brand-accent">15年+</span>
                      <span className="text-[10px] text-[#A69177] font-bold uppercase tracking-wider block mt-0.5">極緻耐候防蟲蛀</span>
                    </div>
                    <div>
                      <span className="block text-xl sm:text-2xl font-bold text-white">全台</span>
                      <span className="text-[10px] text-[#A69177] font-bold uppercase tracking-wider block mt-0.5">案場配送配合</span>
                    </div>
                  </div>

                </div>
              </div>
            </section>

            {/* 4. MAIN LANDING SECTIONS COMPONENTS */}
            {/* 核心工法 */}
            <div id="specifications">
              <ProductDetails />
            </div>

            {/* 營業項目 */}
            <div id="business-scope">
              <BusinessScope />
            </div>

            {/* 實境材質模擬 */}
            <div id="visualizer">
              <InteractiveVisualizer onAddSample={handleAddSample} selectedSamples={selectedSamples} />
            </div>
            
            {/* 型錄色卡 */}
            <div id="color-cards">
              <ColorCardExplorer onAddSample={handleAddSample} selectedSamples={selectedSamples} />
            </div>

            {/* 完工實績 */}
            <div id="cases">
              <CaseGallery />
            </div>
            
            {/* 聯絡資訊 */}
            <div id="contact">
              <ContactForm selectedSamples={selectedSamples} onRemoveSample={handleRemoveSample} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 5. TAIWAN FLOATING CONNECT WIDGET */}
      <div className="fixed bottom-6 right-6 z-45 flex flex-col gap-3 items-end">
        {/* Floating Sample Cart Badge */}
        {selectedSamples.length > 0 && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            onClick={() => scrollToSection('contact')}
            className="bg-brand-accent hover:bg-[#b09b81] text-white px-4 py-3 rounded-full shadow-2xl transition-all border-2 border-white flex items-center gap-2 cursor-pointer text-xs font-bold"
            title="查看已選樣品車"
          >
            <ShoppingCart className="w-4 h-4 animate-bounce" />
            已選樣品 ({selectedSamples.length})
          </motion.button>
        )}

        {/* LINE floating widget */}
        <button
          onClick={() => {
            scrollToSection('contact');
          }}
          className="bg-emerald-600 hover:bg-emerald-500 text-white p-4 rounded-full shadow-2xl transition-all hover:scale-105 inline-flex items-center justify-center border-2 border-white cursor-pointer"
          title="Line線上客服諮詢-chi.chuo"
        >
          <MessageSquare className="w-6 h-6 stroke-[2px]" />
        </button>
      </div>

      {/* 6. CORPORATE FOOTER */}
      <footer className="bg-brand-dark text-stone-400/80 py-16 border-t border-stone-800 text-xs sm:text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
            
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="bg-brand-accent text-white p-2 rounded-sm">
                  <Factory className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-bold tracking-widest text-white uppercase font-sans">東華工業有限公司</h3>
              </div>
              <p className="text-xs text-stone-400 font-sans leading-relaxed">
                專營高品質金屬建材表面處裡、真空木紋滲透/Sublimation轉印、PVDF高階耐候氟碳塗裝。
              </p>
              <p className="text-xs text-stone-600">
                © {new Date().getFullYear()} 東華工業有限公司 版權所有
              </p>
            </div>

            <div>
              <h3 className="font-bold text-white text-xs mb-4 uppercase tracking-widest text-brand-accent">核心工法</h3>
              <ul className="space-y-2.5 text-xs text-stone-400 font-sans">
                <li><button onClick={() => scrollToSection('specifications')} className="hover:text-brand-accent transition-colors">真空氟碳木紋轉印</button></li>
                <li><button onClick={() => scrollToSection('specifications')} className="hover:text-brand-accent transition-colors">高溫高階塗裝烤漆</button></li>
                <li><button onClick={() => scrollToSection('specifications')} className="hover:text-brand-accent transition-colors">耐候PVDF表面防蝕</button></li>
                <li><button onClick={() => scrollToSection('specifications')} className="hover:text-brand-accent transition-colors">免甲醛綠色環保材</button></li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-white text-xs mb-4 uppercase tracking-widest text-brand-accent font-sans">技術品質標準</h3>
              <ul className="space-y-2.5 text-xs text-stone-400 font-sans">
                <li className="flex items-center gap-1">2000小時抗鹽霧耐久耐濕</li>
                <li className="flex items-center gap-1">美國 AAMA 2605 規格超耐候</li>
                <li className="flex items-center gap-1">氟碳與粉體精密一壓固化</li>
                <li className="flex items-center gap-1 font-semibold text-brand-accent">100% 免甲醛綠色環保</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="font-bold text-white text-xs mb-4 uppercase tracking-widest text-brand-accent">聯絡我們</h3>
              <p className="text-xs text-stone-400 leading-relaxed font-sans">
                本廠全台配送發貨，竭誠配合營造大廠、鋼構結構廠、室內高級設計所材料採辦。
              </p>
              <div className="space-y-2 bg-stone-900 p-4 rounded-xs border border-stone-800 text-xs text-stone-300 font-sans">
                <p className="flex items-center gap-1"><strong>● 產品熱線：</strong>04-7615021 / 04-7625021</p>
                <p className="flex items-center gap-1"><strong>● 配送發貨：</strong>彰化縣和美鎮彰草路三段97號</p>
                <p className="flex items-center gap-1 text-emerald-400"><strong>● LINE ID：</strong>chi.chuo</p>
              </div>
            </div>

          </div>

          <div className="border-t border-stone-800/80 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-stone-500">
            <div>
              <p>專業真空木紋轉印工法 · 東華工業有限公司</p>
            </div>
            <div className="flex gap-4">
              <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="hover:underline">隱私保護</button>
              <button onClick={() => scrollToSection('color-cards')} className="hover:underline">型錄色卡授權</button>
              <button onClick={() => scrollToSection('contact')} className="hover:underline">聯絡資訊</button>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}
