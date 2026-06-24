/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from 'react';
import { COLOR_CARDS, ColorCard } from '../data';
import { Search, SlidersHorizontal, Eye, ShoppingCart, Check, Heart, HelpCircle, Compass, MessageSquare } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ColorCardExplorerProps {
  onAddSample?: (card: ColorCard) => void;
  selectedSamples?: ColorCard[];
}

export default function ColorCardExplorer({ onAddSample, selectedSamples = [] }: ColorCardExplorerProps) {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'wood' | 'coating'>('all');
  const [selectedGloss, setSelectedGloss] = useState<string>('all');
  const [activeDetailCard, setActiveDetailCard] = useState<ColorCard | null>(null);

  // Available gloss types for filters
  const glossTypes = useMemo(() => {
    const glosses = new Set(COLOR_CARDS.map(c => {
      if (c.gloss.includes('消光')) return '消光';
      if (c.gloss.includes('啞光') || c.gloss.includes('啞面')) return '啞光';
      if (c.gloss.includes('金屬')) return '金屬亮';
      return '半啞光';
    }));
    return ['all', ...Array.from(glosses)];
  }, []);

  // Filter logic
  const filteredCards = useMemo(() => {
    return COLOR_CARDS.filter(card => {
      const matchesCategory = selectedCategory === 'all' || card.category === selectedCategory;

      let matchesGloss = true;
      if (selectedGloss !== 'all') {
        if (selectedGloss === '消光') {
          matchesGloss = card.gloss.includes('消光');
        } else if (selectedGloss === '啞光') {
          matchesGloss = card.gloss.includes('啞光') || card.gloss.includes('啞面');
        } else if (selectedGloss === '金屬亮') {
          matchesGloss = card.gloss.includes('金屬');
        } else {
          matchesGloss = card.gloss.includes('半') || card.gloss.includes('10%') || card.gloss.includes('12%');
        }
      }

      return matchesCategory && matchesGloss;
    });
  }, [selectedCategory, selectedGloss]);

  return (
    <section id="color-cards" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div className="max-w-xl">
            <div className="inline-flex items-center px-4 py-1.5 rounded-sm bg-brand-accent/15 border border-brand-accent/20 text-brand-dark text-[10px] font-bold tracking-wider uppercase mb-3">
              <Compass className="w-4 h-4 mr-1.5 text-brand-accent" />
              專業級別數位樣品庫
            </div>
            <h2 className="text-3xl md:text-4xl font-light tracking-tight text-brand-dark font-sans">
              木紋轉印與<span className="font-bold text-brand-dark">氟碳烤漆色卡</span>
            </h2>
            <p className="mt-3 text-xs text-stone-500 font-sans leading-relaxed">
              東華工業全線樣品均採用高擬真度數位貼圖。我們提供的每一張數位色卡都同步對應相應的氟碳 PVDF 耐久配方及高階耐紫外線工藝指標。
            </p>
          </div>
          
          <div className="mt-6 md:mt-0 flex items-center gap-2 text-xs bg-brand-light border border-stone-200 rounded-sm px-4 py-3 max-w-xs leading-relaxed">
            <HelpCircle className="w-4 h-4 text-brand-accent flex-shrink-0" />
            <span className="text-stone-600 font-sans">實體樣品與色紙提供，歡迎隨時透過 LINE ID <strong className="text-emerald-600 border-b border-emerald-500">chi.chuo</strong> 或電話與我們聯絡獲取。</span>
          </div>
        </div>

        {/* Filter Controls Bar */}
        <div className="bg-brand-light border border-stone-200 rounded-sm p-4 mb-8 space-y-4 shadow-sm">
          <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
            
            {/* Category Filter */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-semibold text-stone-500 mr-1 flex items-center gap-1 font-sans">
                <SlidersHorizontal className="w-3.5 h-3.5" />
                分類：
              </span>
              <button
                onClick={() => setSelectedCategory('all')}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-sm transition-all cursor-pointer border ${
                  selectedCategory === 'all'
                    ? 'bg-brand-dark text-white border-brand-dark shadow-sm'
                    : 'bg-white text-stone-600 hover:text-brand-dark border-stone-200'
                }`}
              >
                全部類別 ({COLOR_CARDS.length})
              </button>
              <button
                onClick={() => setSelectedCategory('wood')}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-sm transition-all cursor-pointer border ${
                  selectedCategory === 'wood'
                    ? 'bg-brand-dark text-white border-brand-dark shadow-sm'
                    : 'bg-white text-stone-600 hover:text-brand-dark border-stone-200'
                }`}
              >
                真空木紋 ({COLOR_CARDS.filter(c => c.category === 'wood').length})
              </button>
              <button
                onClick={() => setSelectedCategory('coating')}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-sm transition-all cursor-pointer border ${
                  selectedCategory === 'coating'
                    ? 'bg-brand-dark text-white border-brand-dark shadow-sm'
                    : 'bg-white text-stone-600 hover:text-brand-dark border-stone-200'
                }`}
              >
                高階烤漆 ({COLOR_CARDS.filter(c => c.category === 'coating').length})
              </button>
            </div>

            {/* Gloss Filter */}
            <div className="flex items-center gap-2 w-full sm:w-auto">
              <select
                value={selectedGloss}
                onChange={(e) => setSelectedGloss(e.target.value)}
                className="bg-white px-3 py-2 text-xs font-semibold rounded-sm border border-stone-200 focus:outline-none focus:ring-1 focus:ring-brand-accent cursor-pointer text-stone-700 w-full sm:w-auto"
              >
                <option value="all">所有光澤度 (消光/啞面/金屬)</option>
                <option value="消光">極緻消光 (2%~5%)</option>
                <option value="啞光">精細啞光 (5%~10%)</option>
                <option value="半啞光">雅致半啞光 (10%~20%)</option>
                <option value="金屬亮">晶瑩金屬亮 (25%~35%)</option>
              </select>
            </div>

          </div>

          {/* Quick Info summary */}
          {filteredCards.length !== COLOR_CARDS.length && (
            <div className="text-xs text-stone-500 font-sans flex items-center justify-between border-t border-stone-200/55 pt-3">
              <span>
                目前已篩選出 <strong className="text-brand-dark">{filteredCards.length}</strong> 項符合要求的金屬色卡。
              </span>
              <button
                onClick={() => {
                  setSelectedCategory('all');
                  setSelectedGloss('all');
                }}
                className="text-brand-accent hover:underline font-bold"
              >
                重設篩選條件
              </button>
            </div>
          )}
        </div>

        {/* Color Cards Grid Grid */}
        {filteredCards.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredCards.map(card => {
              return (
                <div
                  key={card.id}
                  id={`card-${card.id}`}
                  className="bg-white rounded-sm border border-stone-250/70 hover:border-brand-accent/50 shadow-xs hover:shadow-sm transition-all duration-300 overflow-hidden flex flex-col justify-between group"
                >
                  {/* Swatch Image and preview button */}
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-stone-100">
                    <div 
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-102"
                      style={{
                        backgroundColor: card.hex,
                        backgroundImage: `url(${card.image})`,
                      }}
                    />
                    
                    {/* Hover controls overlay */}
                    <div className="absolute inset-0 bg-brand-dark/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                      <button
                        onClick={() => setActiveDetailCard(card)}
                        className="bg-white hover:bg-stone-50 text-brand-dark rounded-sm px-3.5 py-2 text-xs font-bold tracking-wider uppercase shadow-xs flex items-center gap-1.5 cursor-pointer"
                      >
                        <Eye className="w-3.5 h-3.5" />
                        型錄詳細規格
                      </button>
                    </div>

                    {/* Quick Labels */}
                    <div className="absolute top-3 left-3 flex flex-col gap-1 items-start">
                      <span className="bg-brand-dark text-white font-mono text-[9px] font-bold px-2 py-0.5 rounded-sm tracking-wider uppercase">
                        {card.code}
                      </span>
                    </div>

                    <div className="absolute bottom-3 right-3 shrink-0">
                      <span className="text-[10px] font-bold px-2 py-1 rounded-sm bg-white/95 backdrop-blur-sm text-stone-700 shadow-xs border border-stone-150">
                        {card.gloss}
                      </span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <span className="text-[10px] font-bold text-stone-400 tracking-wider">
                          {card.type}
                        </span>
                        <span className="text-[10px] font-bold text-brand-accent">
                          {card.durability}
                        </span>
                      </div>
                      <h4 className="text-sm font-bold text-brand-dark mb-1.5 truncate">
                        {card.name}
                      </h4>
                      <p className="text-xs text-stone-500 font-sans leading-relaxed line-clamp-3">
                        {card.desc}
                      </p>
                    </div>

                    {/* Action buttons */}
                    <div className="mt-5 pt-3.5 border-t border-stone-150 flex flex-col gap-2">
                      {onAddSample && (
                        <button
                          onClick={() => onAddSample(card)}
                          className={`w-full py-2.5 text-xs font-bold tracking-wider uppercase flex items-center justify-center gap-1.5 transition-all cursor-pointer rounded-sm border ${
                            selectedSamples.some(s => s.id === card.id)
                              ? 'bg-[#A69177]/10 border-[#A69177]/30 text-brand-dark hover:bg-[#A69177]/20'
                              : 'bg-brand-dark hover:bg-stone-800 text-white border-brand-dark'
                          }`}
                        >
                          {selectedSamples.some(s => s.id === card.id) ? (
                            <>
                              <Check className="w-4 h-4 text-brand-accent stroke-[3px]" />
                              已加入樣品車
                            </>
                          ) : (
                            <>
                              <ShoppingCart className="w-4 h-4" />
                              索取實體樣品
                            </>
                          )}
                        </button>
                      )}
                      
                      <div className="flex gap-2">
                        <button
                          onClick={() => {
                            const element = document.getElementById('contact');
                            if (element) {
                              element.scrollIntoView({ behavior: 'smooth' });
                            }
                          }}
                          className="flex-1 py-2 bg-stone-50 hover:bg-stone-100 text-stone-700 border border-stone-200 text-xs font-semibold flex items-center justify-center gap-1.5 transition-all cursor-pointer rounded-sm"
                        >
                          <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
                          LINE/電話諮詢
                        </button>
                        <button
                          onClick={() => setActiveDetailCard(card)}
                          className="bg-stone-50 hover:bg-stone-100 border border-stone-200 p-2 rounded-sm text-stone-500 hover:text-brand-dark transition-colors cursor-pointer"
                          title="查看大圖"
                        >
                          <Eye className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>
        ) : (
          <div className="bg-brand-light border border-stone-200 rounded-sm p-16 text-center max-w-xl mx-auto shadow-xs">
            <SlidersHorizontal className="w-10 h-10 text-stone-300 mx-auto mb-4 animate-pulse" />
            <h4 className="text-base font-bold text-brand-dark mb-1 font-sans">沒有符合條件的色樣</h4>
            <p className="text-xs text-stone-400 font-sans mb-5 leading-relaxed">
              目前沒有滿足當前光澤度的數位色卡。
            </p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSelectedGloss('all');
              }}
              className="bg-brand-dark text-white rounded-sm px-5 py-2.5 text-xs font-bold uppercase tracking-wider hover:bg-stone-800 transition-all cursor-pointer"
            >
              重設篩選
            </button>
          </div>
        )}

      </div>

      {/* Lightbox details modal */}
      <AnimatePresence>
        {activeDetailCard && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-brand-dark/85 backdrop-blur-md z-50 flex items-center justify-center p-4"
            onClick={() => setActiveDetailCard(null)}
          >
            <div 
              className="bg-white rounded-sm max-w-2xl w-full overflow-hidden shadow-xl border border-stone-250 flex flex-col md:flex-row" 
              onClick={e => e.stopPropagation()}
            >
              {/* Swatch Left column */}
              <div className="md:w-1/2 relative bg-stone-100 min-h-[250px] md:min-h-full">
                <div 
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundColor: activeDetailCard.hex,
                    backgroundImage: `url(${activeDetailCard.image})`,
                  }}
                />
                <div className="absolute top-4 left-4 bg-brand-dark text-white font-mono text-[10px] font-bold px-2 py-0.5 rounded-sm border border-stone-800 uppercase tracking-widest">
                  {activeDetailCard.code}
                </div>
              </div>

              {/* Data Right column */}
              <div className="p-6 md:w-1/2 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-1 mb-3 pb-2 border-b border-stone-150">
                    <span className="text-[10px] font-bold text-stone-400 block tracking-widest uppercase">
                      {activeDetailCard.type}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-sm text-[10px] font-bold bg-brand-accent/15 border border-brand-accent/20 text-brand-dark">
                      {activeDetailCard.durability}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-brand-dark mb-4">{activeDetailCard.name}</h3>
                  
                  <div className="space-y-3.5 text-xs text-stone-600 mb-6 leading-relaxed font-sans">
                    <p>{activeDetailCard.desc}</p>
                    
                    <div className="grid grid-cols-2 gap-4 bg-brand-light rounded-sm p-3.5 border border-stone-150">
                      <div>
                        <span className="text-[9px] font-bold text-stone-400 block mb-0.5">表面保護標準</span>
                        <span className="font-semibold text-stone-700 font-mono">AAMA 2605 符合</span>
                      </div>
                      <div>
                        <span className="text-[9px] font-bold text-stone-400 block mb-0.5">預選光學亮澤</span>
                        <span className="font-semibold text-stone-700">{activeDetailCard.gloss}</span>
                      </div>
                    </div>
                  </div>
                </div>

                 <div className="flex flex-col gap-2 border-t border-stone-150 pt-4 w-full">
                   {onAddSample && (
                     <button
                       onClick={() => onAddSample(activeDetailCard)}
                       className={`w-full py-2.5 rounded-sm text-xs font-bold tracking-widest uppercase flex items-center justify-center gap-2 transition-all cursor-pointer border ${
                         selectedSamples.some(s => s.id === activeDetailCard.id)
                           ? 'bg-[#A69177]/10 border-[#A69177]/30 text-brand-dark'
                           : 'bg-brand-accent hover:bg-[#b09b81] text-white border-brand-accent'
                       }`}
                     >
                       {selectedSamples.some(s => s.id === activeDetailCard.id) ? (
                         <>
                           <Check className="w-4 h-4 text-brand-dark stroke-[3.5px]" />
                           已加入樣品索取車 ({selectedSamples.length})
                         </>
                       ) : (
                         <>
                           <ShoppingCart className="w-4 h-4" />
                           加入實體樣品索取單
                         </>
                       )}
                     </button>
                   )}
                   <div className="flex gap-2">
                     <button
                       onClick={() => {
                         setActiveDetailCard(null);
                         const element = document.getElementById('contact');
                         if (element) {
                           element.scrollIntoView({ behavior: 'smooth' });
                         }
                       }}
                       className="flex-1 py-2.5 bg-brand-dark hover:bg-stone-850 text-white rounded-sm text-xs font-bold tracking-widest uppercase flex items-center justify-center gap-2 transition-all cursor-pointer"
                     >
                       <MessageSquare className="w-4 h-4 text-emerald-400" />
                       LINE 諮詢此款 ({activeDetailCard.code})
                     </button>
                     <button
                       onClick={() => setActiveDetailCard(null)}
                       className="px-4 py-2.5 bg-stone-100 hover:bg-stone-200 rounded-sm text-xs font-bold text-stone-600 tracking-wider cursor-pointer"
                     >
                       關閉
                     </button>
                   </div>
                 </div>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
