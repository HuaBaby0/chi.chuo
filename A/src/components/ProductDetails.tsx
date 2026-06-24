/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { PRODUCTS, FAQS } from '../data';
import { HelpCircle, ChevronRight, CheckCircle2, Award, Shield, FileText, ChevronDown, ListCollapse } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function ProductDetails() {
  const [activeFaqCategory, setActiveFaqCategory] = useState<string>('all');
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const faqCategories = ['all', '技術與耐候性', '漆膜塗料選擇', '施工與採購'];

  const filteredFaqs = FAQS.filter(faq => {
    return activeFaqCategory === 'all' || faq.category === activeFaqCategory;
  });

  return (
    <section id="specifications" className="py-20 md:py-28 bg-brand-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Core Products Technical Showcase */}
        <div className="mb-24">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center px-4 py-1.5 rounded-sm bg-brand-accent/15 border border-brand-accent/20 text-brand-dark text-xs font-semibold tracking-wider uppercase mb-4">
              <Award className="w-4 h-4 mr-1.5 text-brand-accent/90" />
              專業級建材表面處理技術
            </div>
            <h2 className="text-3xl md:text-4xl font-light text-brand-dark font-sans tracking-tight">
              金屬轉印與塗料<span className="font-bold">技術特色</span>
            </h2>
            <p className="mt-4 text-sm text-stone-500 font-sans max-w-2xl mx-auto leading-relaxed">
              完美契合當代綠建材與安全規範，以優質剛性金屬基底為骨幹，施加抗腐、自潔、耐候之精細表面處理工藝。
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
            {PRODUCTS.map(product => (
              <div 
                key={product.id}
                id={`product-${product.id}`}
                className="bg-white rounded-sm border border-stone-200 p-6 sm:p-8 hover:shadow-md transition-all flex flex-col justify-between h-full"
              >
                <div>
                  {/* Photo area */}
                  <div className="relative h-56 rounded-sm overflow-hidden mb-6 bg-stone-100">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/70 to-transparent pointer-events-none" />
                    <div className="absolute bottom-4 left-4 text-white">
                      <span className="text-[10px] uppercase font-mono tracking-widest text-[#A69177] font-bold block mb-1">
                        {product.enTitle}
                      </span>
                      <h3 className="text-xl font-bold tracking-tight">{product.title}</h3>
                    </div>
                  </div>

                  <p className="text-stone-600 text-sm leading-relaxed mb-6 font-sans">
                    {product.desc}
                  </p>

                  {/* Core Features */}
                  <h4 className="text-xs font-bold text-stone-400 uppercase tracking-widest mb-4">關鍵技術優勢</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                    {product.features.map((feat, i) => (
                      <div key={i} className="flex gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-brand-accent flex-shrink-0 mt-0.5" />
                        <div>
                          <h5 className="text-xs font-bold text-stone-900">{feat.title}</h5>
                          <p className="text-[11px] text-stone-500 mt-0.5 leading-relaxed font-sans">{feat.text}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technical Specs Footer */}
                <div className="bg-brand-light border border-stone-150 rounded-sm p-4.5 mt-4">
                  <h5 className="text-[11px] font-bold text-stone-400 uppercase tracking-widest mb-2 flex items-center gap-1.5 border-b border-stone-200/50 pb-2">
                    <FileText className="w-4 h-4 text-[#A69177]" />
                    國家與美標性能指標 (Spec Panel)
                  </h5>
                  <ul className="space-y-1.5 text-xs text-stone-600 font-sans leading-relaxed">
                    {product.specs.map((item, i) => (
                      <li key={i} className="flex items-start gap-1">
                        <ChevronRight className="w-3.5 h-3.5 text-brand-accent/70 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dynamic educational table comparing solid wood vs aluminum vs composite */}
        <div className="bg-brand-dark text-white rounded-sm p-8 md:p-12 mb-24 border border-stone-800 shadow-xl overflow-x-auto">
          <div className="max-w-2xl lg:mx-auto lg:text-center mb-10">
            <h3 className="text-xl md:text-2xl font-light text-white tracking-tight">
              常見建築材料特色<span className="font-bold">交叉大對決</span>
            </h3>
            <p className="text-xs text-stone-400 mt-2 font-sans">
              依據耐候性、健康環保安全性、表面保養維度等全面對比，為您的別墅及建案做出最明智的材料選配。
            </p>
          </div>

          <table className="w-full text-xs text-left divide-y divide-stone-850 min-w-[600px]">
            <thead>
              <tr className="text-stone-400">
                <th className="pb-4 font-bold tracking-wider">考量性能目標</th>
                <th className="pb-4 font-bold text-brand-accent tracking-wider">真空木紋轉印金屬 (本廠加工)</th>
                <th className="pb-4 font-bold tracking-wider">天然防腐實木</th>
                <th className="pb-4 font-bold tracking-wider">塑木/合成木塑板 (WPC)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-800/50 text-stone-300">
              <tr>
                <td className="py-4 font-bold text-white">健康環保安全性</td>
                <td className="py-4 text-brand-accent font-semibold">★ 100% 零揮發物與符合零甲醛健康標準</td>
                <td className="py-4 text-stone-400">常施加防腐化學防蟻藥劑、具溶劑殘留</td>
                <td className="py-4 text-stone-400">部分低階塑膠原料可能日曬緩釋異味</td>
              </tr>
              <tr>
                <td className="py-4 font-bold text-white">耐候抗紫外線</td>
                <td className="py-4 text-brand-accent font-semibold">★ 15-20 年不龜裂、無明顯褪色</td>
                <td className="py-4 text-stone-400">1-2 年高濕即生灰色霉斑、乾裂</td>
                <td className="py-4 text-stone-400">2-5 年表面即脆化粉起、容易斷裂</td>
              </tr>
              <tr>
                <td className="py-4 font-bold text-white">大氣防腐蝕抗白蟻</td>
                <td className="py-4 text-brand-accent font-semibold">★ 100% 免受白蟻危害、高抗腐蝕</td>
                <td className="py-4 text-stone-400">极其易遭受白蟻咬嚙、潮濕泛發黑霉</td>
                <td className="py-4 text-stone-400">抗白蟻效果尚可、但不抗霉菌寄生</td>
              </tr>
              <tr>
                <td className="py-4 font-bold text-white">後續維修成本</td>
                <td className="py-4 text-brand-accent font-semibold">★ 清水沖刷即淨、20年零保養開銷</td>
                <td className="py-4 text-stone-400">每2年需重新刷防腐蠟油及細緻研磨</td>
                <td className="py-4 text-stone-400">無法打磨上油、損壞需整排作廢重灌</td>
              </tr>
              <tr>
                <td className="py-4 font-bold text-white">全生命週期環保度</td>
                <td className="py-4 text-brand-accent font-semibold">★ 100% 可高價回收再冶煉 (環保低碳)</td>
                <td className="py-4 text-stone-400">需要過度砍伐森林、防腐油品污染土地</td>
                <td className="py-4 text-stone-400">含有大量塑膠廢料，完全難以再生</td>
              </tr>
            </tbody>
          </table>

          {/* Building Permit Sample Consultation Callout Banner */}
          <div className="mt-10 pt-8 border-t border-stone-800 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
            <div className="space-y-2 max-w-2xl">
              <span className="text-[10px] uppercase tracking-widest font-mono text-brand-accent font-bold block">
                BUILDING CODE & PERMIT REVIEW SAMPLES
              </span>
              <h4 className="text-base font-bold text-white tracking-tight">
                建照审查送审 · 實體真空木紋色卡與切片樣品免費諮詢索取
              </h4>
              <p className="text-xs text-stone-400 font-sans leading-relaxed">
                本廠深知營造大廠、建築設計所與鐵構工程大廠在大作送審、建照審核極需實體金屬樣板。提供標準鋁擠、鋼板真空木紋板與高耐候 PVDF 烤漆色板。我們提供免費實物打樣或現存色卡，配合提供相應抗紫外線、耐紫外線自潔檢驗數據，敬請隨時聯絡工程技術小組！
              </p>
            </div>
            <button
              onClick={() => {
                const contactEl = document.getElementById('contact');
                if (contactEl) {
                  contactEl.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="lg:self-center w-full lg:w-auto px-6 py-3.5 bg-brand-accent hover:bg-[#b09b81] text-white text-xs font-bold tracking-widest uppercase rounded-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer border border-[#b09b81]/20 flex-shrink-0"
            >
              <FileText className="w-4 h-4 text-white" />
              諮詢建照樣品索取
            </button>
          </div>
        </div>

        {/* Dynamic FAQ Accordion Block */}
        <div id="faq" className="max-w-4xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h3 className="text-2xl md:text-3xl font-light text-brand-dark tracking-tight font-sans">
              常見技術與施作<span className="font-bold">問答 (FAQ)</span>
            </h3>
            <p className="mt-3 text-xs text-stone-500 font-sans leading-relaxed">
              針對防曬耐候、轉印製程與樣品索取等常見的建築工程、室內設計、鋼營大廠常提問題做權威解析。
            </p>
          </div>

          {/* Mini FAQ category selector */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {faqCategories.map(cat => (
              <button
                key={cat}
                id={`faq-cat-${cat}`}
                onClick={() => {
                  setActiveFaqCategory(cat);
                  setOpenFaqIndex(null); // Close active if filter changes
                }}
                className={`px-4 py-2 rounded-sm text-xs font-semibold tracking-wider transition-all cursor-pointer ${
                  activeFaqCategory === cat
                    ? 'bg-brand-dark text-white shadow-sm'
                    : 'bg-white border border-stone-200 text-stone-600 hover:text-brand-accent hover:border-brand-accent'
                }`}
              >
                {cat === 'all' ? '全部問題' : cat}
              </button>
            ))}
          </div>

          {/* Accordion panel */}
          {filteredFaqs.length > 0 ? (
            <div className="space-y-4">
              {filteredFaqs.map((faq, idx) => {
                const isOpen = openFaqIndex === idx;
                return (
                  <div
                    key={idx}
                    className="bg-white rounded-sm border border-stone-200 shadow-sm overflow-hidden"
                  >
                    <button
                      id={`faq-btn-${idx}`}
                      onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                      className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 font-sans hover:bg-stone-50 transition-colors"
                    >
                      <span className="text-sm md:text-base font-bold text-brand-dark leading-snug">
                        {faq.question}
                      </span>
                      <ChevronDown className={`w-4 h-4 text-stone-400 transition-transform flex-shrink-0 ${
                        isOpen ? 'rotate-180 text-brand-dark' : ''
                      }`} />
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0 }}
                          animate={{ height: 'auto' }}
                          exit={{ height: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden border-t border-stone-100 bg-brand-light/40"
                        >
                          <div className="p-5 sm:p-6 text-sm text-stone-600 leading-relaxed font-sans font-normal border-l-4 border-brand-accent">
                            {faq.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="text-center py-10 bg-white border border-stone-200 rounded-sm">
              <p className="text-xs text-stone-500">無此類別的相關問答。</p>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
