/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { COLOR_CARDS, ColorCard } from '../data';
import { Eye, Check, ShoppingCart, RefreshCw, LayoutTemplate, ShieldCheck, Paintbrush } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface InteractiveVisualizerProps {
  onAddSample: (card: ColorCard) => void;
  selectedSamples: ColorCard[];
}

const SCENARIOS = [
  {
    id: 'facade',
    name: '別墅外牆立面格柵',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1000',
    type: 'grille',
    overlayStyle: { top: '35%', left: '45%', width: '40%', height: '55%' },
    desc: '大面側向直立格柵，高溫日照強、氣流流通。常規原木在此處極易扭曲崩裂，而我們的轉印鋁格柵能維持20年紋理常新。'
  },
  {
    id: 'ceiling',
    name: '室內大廳造型挑高天花',
    image: 'https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?auto=format&fit=crop&q=80&w=1000',
    type: 'interior',
    overlayStyle: { top: '0%', left: '15%', width: '70%', height: '32%' },
    desc: '公共大樓、商業門廳天花吊掛吸音複合格柵。我們施作的一級防火木紋轉印，符合都市高安全法規。'
  },
  {
    id: 'door',
    name: '豪宅重裝防颱抗腐大門',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1000',
    type: 'door',
    overlayStyle: { top: '50%', left: '30%', width: '22%', height: '40%' },
    desc: '迎風面海腐蝕性強，對大門之防鏽、防曬極端嚴酷。氟碳烤漆大面積施作，質地緻密、完美防鹽潮。'
  }
];

export default function InteractiveVisualizer({ onAddSample, selectedSamples }: InteractiveVisualizerProps) {
  const [activeScenario, setActiveScenario] = useState(SCENARIOS[0]);
  const [selectedCard, setSelectedCard] = useState<ColorCard>(COLOR_CARDS[0]);
  const [activeTab, setActiveTab] = useState<'wood' | 'coating'>('wood');
  const [isPreviewExpanded, setIsPreviewExpanded] = useState(false);

  const filteredCards = COLOR_CARDS.filter(card => card.category === activeTab);
  const isInCart = selectedSamples.some(s => s.id === selectedCard.id);

  return (
    <section id="visualizer" className="py-16 md:py-24 bg-brand-light border-y border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center px-4 py-1.5 rounded-sm bg-brand-accent/15 border border-brand-accent/20 text-brand-dark text-xs font-semibold tracking-wider uppercase mb-4">
            <Paintbrush className="w-4 h-4 mr-1.5 text-brand-accent" />
            實境材質互動體驗
          </div>
          <h2 className="text-3xl md:text-4xl font-light tracking-tight text-brand-dark font-sans">
            實境色彩、<span className="font-boldSkin">材質模擬展示</span>
          </h2>
          <p className="mt-4 text-sm text-stone-500 font-sans max-w-2xl mx-auto leading-relaxed">
            選擇不同的建築案場情境，一鍵套用本廠精製的「木紋轉印」樣樣款式與「氟碳烤漆」高規色卡，即可提前預覽金屬材料的真實立體層次。
          </p>
        </div>

        {/* Visualizer Frame */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* LEFT: Rendering Canvas (Lg: 7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between bg-white rounded-sm border border-stone-200 p-5 shadow-sm overflow-hidden min-h-[500px]">
            <div>
              {/* Scenario Toggles */}
              <div className="flex flex-wrap gap-2 mb-4">
                {SCENARIOS.map(sc => (
                  <button
                    key={sc.id}
                    id={`btn-sc-${sc.id}`}
                    onClick={() => setActiveScenario(sc)}
                    className={`px-3.5 py-2 text-xs font-semibold rounded-sm transition-all flex items-center gap-1.5 cursor-pointer ${
                      activeScenario.id === sc.id
                        ? 'bg-brand-dark text-white shadow-sm'
                        : 'bg-stone-100 hover:bg-stone-200 text-stone-600'
                    }`}
                  >
                    <LayoutTemplate className="w-3.5 h-3.5" />
                    {sc.name}
                  </button>
                ))}
              </div>

              {/* Dynamic Screen */}
              <div className="relative aspect-[4/3] rounded-sm overflow-hidden bg-stone-100 border border-stone-200 shadow-inner group">
                {/* Base Architecture Photo */}
                <img
                  src={activeScenario.image}
                  alt={activeScenario.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />

                {/* Material Rendering Layer Overlay with CSS mix-blend-mode */}
                <div
                  className="absolute border border-white/10 transition-all duration-500 ease-in-out flex items-center justify-center pointer-events-none"
                  style={{
                    ...activeScenario.overlayStyle,
                    backgroundColor: selectedCard.hex,
                    backgroundImage: `url(${selectedCard.image})`,
                    backgroundSize: 'cover',
                    backgroundBlendMode: selectedCard.category === 'wood' ? 'multiply' : 'normal',
                    mixBlendMode: 'multiply',
                    opacity: 0.85,
                    boxShadow: 'inset 0 4px 12px rgba(0,0,0,0.4), 0 4px 20px rgba(0,0,0,0.15)',
                  }}
                >
                  <span className="sr-only">Overlay Container</span>
                </div>

                {/* Subtle Grid Bars (to mimic Grilles) when Scenario is facade or ceiling */}
                {activeScenario.type === 'grille' && (
                  <div 
                    className="absolute transition-all duration-500 pointer-events-none grid grid-cols-12 gap-1.5"
                    style={{
                      ...activeScenario.overlayStyle,
                      backgroundColor: 'transparent',
                    }}
                  >
                    {Array.from({ length: 12 }).map((_, idx) => (
                      <div 
                        key={idx} 
                        className="h-full border-x border-slate-950/20 shadow-lg"
                        style={{
                          backgroundColor: selectedCard.hex,
                          backgroundImage: `url(${selectedCard.image})`,
                          backgroundSize: 'cover',
                          opacity: 0.9,
                        }}
                      />
                    ))}
                  </div>
                )}

                {/* Subtle Louvers (to mimic Ceiling planks) when Scenario is ceiling */}
                {activeScenario.type === 'interior' && (
                  <div 
                    className="absolute transition-all duration-500 pointer-events-none flex flex-col justify-between"
                    style={{
                      ...activeScenario.overlayStyle,
                      backgroundColor: 'transparent',
                    }}
                  >
                    {Array.from({ length: 8 }).map((_, idx) => (
                      <div 
                        key={idx} 
                        className="w-full h-2 shadow-md border-y border-black/30"
                        style={{
                          backgroundColor: selectedCard.hex,
                          backgroundImage: `url(${selectedCard.image})`,
                          backgroundSize: 'cover',
                          opacity: 0.95,
                        }}
                      />
                    ))}
                  </div>
                )}

                {/* Watermark Label & Info HUD */}
                <div className="absolute bottom-3 left-3 right-3 bg-brand-dark/95 backdrop-blur-md rounded-none p-3.5 text-white flex items-center justify-between border-l-4 border-brand-accent">
                  <div className="flex items-center gap-2">
                    <span 
                      className="w-4 h-4 rounded-full border border-white/20 block"
                      style={{ backgroundColor: selectedCard.hex }}
                    />
                    <div>
                      <p className="text-[10px] font-bold text-stone-400">當前模擬材質套用：</p>
                      <h4 className="text-xs sm:text-sm font-semibold tracking-wide text-white">
                        {selectedCard.code} - {selectedCard.name} <span className="opacity-70">({selectedCard.type})</span>
                      </h4>
                    </div>
                  </div>
                  <div className="hidden sm:block text-right">
                    <span className="text-[10px] uppercase font-mono tracking-widest px-2.5 py-1 rounded-sm bg-brand-accent/20 text-brand-accent border border-brand-accent/30 font-bold">
                      即時模擬
                    </span>
                  </div>
                </div>

                {/* Zoom hover indicator */}
                <div className="absolute top-3 right-3 bg-brand-dark/80 backdrop-blur-sm p-2 rounded-sm text-white cursor-pointer hover:bg-brand-dark transition-colors"
                     onClick={() => setIsPreviewExpanded(true)}>
                  <Eye className="w-4 h-4 text-stone-200" />
                </div>
              </div>
            </div>

            {/* Scenario description footer */}
            <div className="mt-4 pt-4 border-t border-stone-150 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div className="max-w-md">
                <h5 className="text-xs text-stone-400 font-bold mb-1 uppercase tracking-widest">情境與極端耐候測試指南</h5>
                <p className="text-xs text-stone-600 font-sans leading-relaxed">{activeScenario.desc}</p>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-brand-dark bg-brand-accent/15 rounded-sm px-3 py-2 border border-brand-accent/20 font-semibold">
                <ShieldCheck className="w-4 h-4 flex-shrink-0 text-brand-accent" />
                <span>經 AAMA 2604 規格認證</span>
              </div>
            </div>
          </div>

          {/* RIGHT: Swatch Selector & Details (Lg: 5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between bg-white rounded-sm border border-stone-200 p-6 shadow-sm">
            <div>
              <h3 className="text-lg font-bold text-brand-dark mb-1 tracking-tight">精緻數位色卡庫</h3>
              <p className="text-xs text-stone-400 mb-6 font-sans leading-relaxed">
                點選以下任一款材料結構進行搭配。套用即時渲染，您亦可免費申請對應實體樣品。
              </p>

              {/* Sub-Category Selector */}
              <div className="grid grid-cols-2 gap-2 p-1 bg-stone-100 rounded-sm mb-6 border border-stone-250/60">
                <button
                  id="tab-wood-swatch"
                  onClick={() => {
                    setActiveTab('wood');
                    // auto switch base selection if category differs
                    const sublist = COLOR_CARDS.filter(c => c.category === 'wood');
                    if (sublist.length > 0) setSelectedCard(sublist[0]);
                  }}
                  className={`py-2 text-xs font-semibold rounded-sm transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                    activeTab === 'wood'
                      ? 'bg-white text-brand-dark shadow-xs border border-stone-200'
                      : 'text-stone-500 hover:text-brand-dark'
                  }`}
                >
                  <span className="inline-block w-2.5 h-2.5 rounded-full bg-brand-accent" />
                  真空木紋轉印 ({COLOR_CARDS.filter(c => c.category === 'wood').length})
                </button>
                <button
                  id="tab-coating-swatch"
                  onClick={() => {
                    setActiveTab('coating');
                    const sublist = COLOR_CARDS.filter(c => c.category === 'coating');
                    if (sublist.length > 0) setSelectedCard(sublist[0]);
                  }}
                  className={`py-2 text-xs font-semibold rounded-sm transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                    activeTab === 'coating'
                      ? 'bg-white text-brand-dark shadow-xs border border-stone-200'
                      : 'text-stone-500 hover:text-brand-dark'
                  }`}
                >
                  <span className="inline-block w-2.5 h-2.5 rounded-full bg-stone-500" />
                  高階氟碳烤漆 ({COLOR_CARDS.filter(c => c.category === 'coating').length})
                </button>
              </div>

              {/* Swatch Grid */}
              <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-3 gap-3 mb-6">
                {filteredCards.map(card => {
                  const isSelected = selectedCard.id === card.id;
                  return (
                    <button
                      key={card.id}
                      id={`swatch-${card.id}`}
                      onClick={() => setSelectedCard(card)}
                      className={`relative aspect-square rounded-sm overflow-hidden transition-all text-left flex flex-col justify-between group cursor-pointer ${
                        isSelected 
                          ? 'ring-2 ring-brand-accent ring-offset-2 scale-98 shadow'
                          : 'ring-1 ring-stone-200 hover:scale-98 shadow-sm hover:shadow'
                      }`}
                    >
                      {/* Color/Texture display */}
                      <div className="w-full h-2/3 relative">
                        <div 
                          className="absolute inset-0 transition-opacity"
                          style={{
                            backgroundColor: card.hex,
                            backgroundImage: `url(${card.image})`,
                            backgroundSize: 'cover',
                          }}
                        />
                        {isSelected && (
                          <div className="absolute top-1.5 right-1.5 bg-brand-accent text-white rounded-full p-0.5 shadow-sm">
                            <Check className="w-3 h-3 stroke-[3px]" />
                          </div>
                        )}
                      </div>
                      
                      {/* Title display */}
                      <div className="bg-stone-50 p-1.5 h-1/3 leading-tight flex flex-col justify-center">
                        <p className="text-[10px] text-stone-400 font-mono font-bold truncate">{card.code}</p>
                        <p className="text-[11px] text-stone-700 font-medium truncate">{card.name}</p>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Current Material Details Card */}
              <div className="bg-brand-light rounded-sm border border-stone-200 p-4 space-y-3">
                <div className="flex items-center justify-between border-b border-stone-200/60 pb-2.5">
                  <div>
                    <span className={`inline-block px-2.5 py-0.5 rounded-sm text-[10px] font-bold tracking-wider uppercase ${
                      selectedCard.category === 'wood' 
                        ? 'bg-amber-100 text-amber-800' 
                        : 'bg-indigo-100 text-indigo-800'
                    }`}>
                      {selectedCard.type}
                    </span>
                    <h4 className="text-sm font-bold text-brand-dark mt-1.5">{selectedCard.name}</h4>
                  </div>
                  <p className="text-xs font-mono font-bold text-stone-400">{selectedCard.code}</p>
                </div>

                <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-xs">
                  <div>
                    <span className="text-stone-400 block text-[10px]">塗飾光澤</span>
                    <span className="font-semibold text-stone-700">{selectedCard.gloss}</span>
                  </div>
                  <div>
                    <span className="text-stone-400 block text-[10px]">預期耐候等級</span>
                    <span className="font-bold text-brand-accent">{selectedCard.durability}</span>
                  </div>
                  <div className="col-span-2">
                    <span className="text-stone-400 block text-[10px]">工法材質描述</span>
                    <p className="text-stone-600 leading-relaxed font-sans">{selectedCard.desc}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Spec Sheet Action Button */}
            <div className="mt-6 pt-4 border-t border-stone-150">
              <button
                id="btn-add-sample-visualizer"
                onClick={() => onAddSample(selectedCard)}
                className={`w-full py-3.5 rounded-sm font-bold text-xs tracking-widest uppercase flex items-center justify-center gap-2 transition-all cursor-pointer ${
                  isInCart
                    ? 'bg-brand-accent/15 border border-brand-accent/25 text-brand-dark'
                    : 'bg-brand-dark hover:bg-stone-800 text-white shadow-md'
                }`}
              >
                {isInCart ? (
                  <>
                    <Check className="w-4 h-4 text-brand-accent stroke-[3.5px]" />
                    已加入樣品索取清單 ({selectedSamples.length})
                  </>
                ) : (
                  <>
                    <ShoppingCart className="w-4 h-4" />
                    將該色卡加入免費樣品寄送單
                  </>
                )}
              </button>
            </div>
          </div>

        </div>

      </div>

      {/* Full screen Lightbox overlay */}
      <AnimatePresence>
        {isPreviewExpanded && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-slate-950/95 backdrop-blur-md z-50 flex items-center justify-center p-4"
            onClick={() => setIsPreviewExpanded(false)}
          >
            <div className="max-w-4xl w-full relative bg-slate-900 rounded-2xl overflow-hidden border border-slate-800" onClick={e => e.stopPropagation()}>
              <div className="relative">
                <img
                  src={selectedCard.image}
                  alt={selectedCard.name}
                  className="w-full h-[450px] object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent pointer-events-none" />
                
                {/* Visual texture representation zoom */}
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <div className="flex items-center gap-2.5 mb-1.5">
                    <span className="p-1 rounded bg-amber-500 text-xs font-mono font-bold text-slate-950">{selectedCard.code}</span>
                    <span className="text-slate-300 text-xs">{selectedCard.type}</span>
                  </div>
                  <h3 className="text-2xl font-bold">{selectedCard.name} 放大近照細節</h3>
                  <p className="text-sm text-slate-400 mt-2 max-w-xl">{selectedCard.desc}</p>
                </div>

                <button 
                  className="absolute top-4 right-4 bg-black/50 hover:bg-black/80 text-white rounded-full p-2"
                  onClick={() => setIsPreviewExpanded(false)}
                >
                  ✕
                </button>
              </div>
              <div className="grid grid-cols-3 bg-slate-950 p-4 divide-x divide-slate-800 text-center text-xs">
                <div>
                  <span className="text-slate-400 block mb-1">對應底層底漆層</span>
                  <span className="text-white font-semibold">聚酯靜電粉末漆 &gt; 60μm</span>
                </div>
                <div>
                  <span className="text-slate-400 block mb-1">光學光澤細度</span>
                  <span className="text-white font-semibold">{selectedCard.gloss} / 消光啞質</span>
                </div>
                <div>
                  <span className="text-slate-400 block mb-1">抗鹽霧防潮</span>
                  <span className="text-white font-semibold">高標合格 2000小時無異狀</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
