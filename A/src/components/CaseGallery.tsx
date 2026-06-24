/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { PROJECT_CASES, ProjectCase } from '../data';
import { MapPin, ArrowUpRight, Grid3X3, Filter, Building, Sparkles, Sliders } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function CaseGallery() {
  const [activeCategory, setActiveCategory] = useState<'all' | 'facade' | 'grille' | 'interior' | 'door'>('all');
  const [zoomedCase, setZoomedCase] = useState<ProjectCase | null>(null);

  // Filters
  const filteredCases = PROJECT_CASES.filter(cse => {
    return activeCategory === 'all' || cse.category === activeCategory;
  });

  const categories = [
    { id: 'all', label: '全部完工實績' },
    { id: 'facade', label: '外牆金屬帷幕' },
    { id: 'grille', label: '遮陽造型格柵' },
    { id: 'interior', label: '室內天花裝飾' },
    { id: 'door', label: '玄關防盜大門' }
  ];

  return (
    <section id="cases" className="py-20 md:py-28 bg-stone-950 text-white border-y border-stone-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-4 animate-fadeIn">
          <div className="max-w-2xl">
            <div className="inline-flex items-center px-4 py-1.5 rounded-sm bg-brand-accent/20 border border-brand-accent/25 text-brand-light text-xs font-semibold mb-4 tracking-wider uppercase">
              <Building className="w-4 h-4 mr-1.5 text-brand-accent" />
              實體完工實績案場
            </div>
            <h2 className="text-3xl md:text-5xl font-light tracking-tight text-white font-sans">
              全台建案<span className="font-boldSkin">現場實境照</span>
            </h2>
            <p className="mt-4 text-sm text-stone-400 font-sans leading-relaxed">
              精選全台別墅特區新案、商辦大樓、企業總部帷幕及高規格防盜大門之工程實績。點擊個別案例可放大查看細部工藝、漆面密合度與色彩耐久耐候。
            </p>
          </div>

          <div className="flex items-center gap-2.5 shrink-0 bg-stone-900/50 px-4 py-3 rounded-sm border border-stone-800/80">
            <span className="text-xs text-stone-500 font-sans">施工範圍：</span>
            <span className="text-xs text-brand-accent bg-brand-accent/15 px-3 py-1 rounded-sm border border-brand-accent/20 font-bold">
              全台均提供現勘與工程服務
            </span>
          </div>
        </div>

        {/* Tab Filters */}
        <div className="flex flex-wrap gap-2.5 mb-10 border-b border-stone-850 pb-6 pointer-events-auto">
          {categories.map(cat => (
            <button
              key={cat.id}
              id={`tab-cat-${cat.id}`}
              onClick={() => setActiveCategory(cat.id as any)}
              className={`px-4 py-2.5 rounded-sm text-xs sm:text-xs font-bold tracking-widest uppercase transition-all duration-300 cursor-pointer border ${
                activeCategory === cat.id
                  ? 'bg-brand-accent text-brand-dark border-brand-accent shadow-xs'
                  : 'bg-stone-900/60 border-stone-800 text-stone-400 hover:text-white hover:bg-stone-800'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Cases Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredCases.map(cse => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                key={cse.id}
                id={`case-card-${cse.id}`}
                className="group bg-stone-900/60 rounded-sm border border-stone-850 hover:border-stone-800 overflow-hidden flex flex-col justify-between hover:shadow-xl transition-all"
              >
                <div>
                  {/* Photo area */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-stone-900">
                    <img
                      src={cse.image}
                      alt={cse.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-102"
                      referrerPolicy="no-referrer"
                    />
                    
                    {/* Dark gradient mapping */}
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-transparent to-transparent opacity-85" />
 
                    {/* Top badging */}
                    <div className="absolute top-4 left-4">
                      <span className="px-2.5 py-1 rounded-sm bg-stone-950/90 backdrop-blur-md text-brand-accent text-[10px] font-bold tracking-widest uppercase border border-stone-800">
                        {cse.tag}
                      </span>
                    </div>

                    {/* Location HUD overlay */}
                    <div className="absolute bottom-4 left-4 flex items-center gap-1.5 text-xs text-stone-300 bg-stone-950/95 backdrop-blur-sm py-1.5 px-3 rounded-sm border border-stone-900">
                      <MapPin className="w-3.5 h-3.5 text-brand-accent" />
                      <span className="font-medium">{cse.location}</span>
                    </div>
                  </div>

                  {/* Body textual block */}
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-white mb-2 leading-tight group-hover:text-brand-accent transition-colors flex items-start justify-between gap-2">
                      {cse.title}
                      <ArrowUpRight className="w-4 h-4 text-stone-600 group-hover:text-brand-accent transition-colors flex-shrink-0 mt-0.5" />
                    </h3>
                    <p className="text-stone-400 text-xs font-sans leading-relaxed mb-6">
                      {cse.desc}
                    </p>

                    {/* Spec List */}
                    <div className="space-y-3 bg-stone-950/80 rounded-sm p-4 border border-stone-850/60 text-[11px] sm:text-xs">
                      <div>
                        <span className="text-stone-500 block text-[9px] uppercase tracking-widest font-bold mb-1.5">施作金屬基材</span>
                        <div className="flex flex-wrap gap-1.5">
                          {cse.materials.map((mat, i) => (
                            <span key={i} className="bg-stone-850 text-stone-300 px-2.5 py-0.5 rounded-sm border border-stone-750 font-medium">
                              {mat}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="mt-2.5 pt-2 mb-1 border-t border-stone-850/40">
                        <span className="text-stone-500 block text-[9px] uppercase tracking-widest font-bold mb-1.5">面漆塗層規格</span>
                        <span className="font-semibold text-stone-300">
                          {cse.finishing}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Footer action button */}
                <div className="p-6 pt-0 mt-auto">
                  <button
                    id={`btn-zoom-${cse.id}`}
                    onClick={() => setZoomedCase(cse)}
                    className="w-full py-3 rounded-sm border border-stone-800 hover:border-stone-700 bg-stone-950/65 hover:bg-stone-850 text-xs font-bold uppercase tracking-wider text-stone-300 hover:text-white transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    查看完工實體現場照
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>

      {/* Lightroom Image details lightbox */}
      <AnimatePresence>
        {zoomedCase && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-stone-950/95 backdrop-blur-md z-50 flex items-center justify-center p-4 cursor-pointer"
            onClick={() => setZoomedCase(null)}
          >
            <div 
              className="max-w-4xl w-full bg-brand-dark rounded-sm overflow-hidden border border-stone-800 cursor-default shadow-2xl"
              onClick={e => e.stopPropagation()}
            >
              <div className="relative">
                <img
                  src={zoomedCase.image}
                  alt={zoomedCase.title}
                  className="w-full h-[480px] object-cover animate-fadeIn"
                  referrerPolicy="no-referrer"
                />
                
                {/* Visual shade banner */}
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-transparent pointer-events-none" />

                <button
                  className="absolute top-4 right-4 bg-black/60 p-2.5 text-white hover:bg-black/90 rounded-sm transition-colors cursor-pointer"
                  onClick={() => setZoomedCase(null)}
                >
                  ✕
                </button>

                {/* Data overlays */}
                <div className="absolute bottom-6 left-6 right-6 text-white text-left">
                  <div className="flex flex-wrap items-center gap-2.5 mb-2.5">
                    <span className="px-2.5 py-1 rounded-sm bg-brand-accent text-brand-dark text-[10px] font-bold uppercase tracking-widest">
                      {zoomedCase.tag}
                    </span>
                    <span className="px-2.5 py-1 text-xs bg-stone-900 text-stone-300 rounded-sm border border-stone-800 flex items-center gap-1 shadow-sm">
                      <MapPin className="w-3.5 h-3.5 text-brand-accent" />
                      {zoomedCase.location}
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-light tracking-tight">{zoomedCase.title} <span className="font-boldSkin text-brand-accent">精細完工細部</span></h3>
                  <p className="text-xs sm:text-xs text-stone-400 mt-2 font-sans leading-relaxed max-w-2xl">{zoomedCase.desc}</p>
                </div>
              </div>

              {/* technical HUD */}
              <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-stone-900 bg-stone-950 p-5 text-xs text-left gap-4 md:gap-0">
                <div className="md:px-5">
                  <span className="text-stone-500 block uppercase font-bold text-[9px] mb-1.5 tracking-wider">金屬基材規格體系</span>
                  <p className="text-stone-300 font-semibold">{zoomedCase.materials.join(' + ')}</p>
                </div>
                <div className="px-5">
                  <span className="text-stone-500 block uppercase font-bold text-[9px] mb-1.5 tracking-wider">表面專利耐候級飾工法</span>
                  <p className="text-stone-300 font-semibold">{zoomedCase.finishing}</p>
                </div>
                <div className="px-5 flex items-center justify-between">
                  <div>
                    <span className="text-stone-500 block uppercase font-bold text-[9px] mb-1.5 tracking-wider">自潔抗風剪耐用標準</span>
                    <p className="text-brand-accent font-semibold flex items-center gap-1 text-xs">
                      防霉防蟲配方、卓越防水抗風剪
                    </p>
                  </div>
                  <span className="text-[10px] bg-brand-accent/20 text-brand-accent px-2.5 py-1.5 rounded-sm border border-brand-accent/15 tracking-wide font-bold uppercase">
                    施工合格
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
