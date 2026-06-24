/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { 
  Paintbrush, Layers, Wrench, Settings, ChevronRight, 
  Sparkles, CheckCircle2, Cpu, Grid3X3, Hammer
} from 'lucide-react';

interface ScopeItem {
  id: string;
  name: string;
  desc: string;
  tag: string;
}

interface ScopeGroup {
  category: string;
  enCategory: string;
  icon: React.ReactNode;
  items: ScopeItem[];
  bgClass: string;
}

export default function BusinessScope() {
  const groups: ScopeGroup[] = [
    {
      category: "塗裝工法與表面處理",
      enCategory: "Surface Treatment & Artistry",
      icon: <Paintbrush className="w-5 h-5 text-brand-accent" />,
      bgClass: "from-[#FDFBF7] to-[#F5F2EB]",
      items: [
        { id: "s-1", name: "金屬真空木紋烤漆", desc: "融合真空吸附與高溫度熱昇華烤漆，木紋高仿真滲透，極具深層層次與立體感偏折。", tag: "核心工法" },
        { id: "s-2", name: "轉印加工", desc: "精準校對與覆合真空轉印紙印膜，提供極高平整度與高附著性能，支援各類金屬建材。", tag: "專業加工" },
        { id: "s-3", name: "木紋熱轉印", desc: "將逼真木紋微粒微粉高溫氣化昇華為高剛性基底的一體化技術，觸感寫實大氣。", tag: "熱轉工藝" },
        { id: "s-4", name: "表面木紋彩繪塗裝", desc: "多道手工噴飾烤漆打底與層級轉印交會，呈現大師級細節流線與頂級金屬美學。", tag: "客製大作" },
        { id: "s-5", name: "表面紋飾處理", desc: "微多孔及啞度抗逆光防反眩處理，保護面漆持久度，提升現代建築大片遮陽細緻觸感。", tag: "工藝抗刮" },
        { id: "s-6", name: "木紋彩繪", desc: "針對特殊金屬部位，配合數位手作與微噴彩繪，刻畫出富有溫潤質感動人的名木極品層次。", tag: "彩飾技術" },
        { id: "s-7", name: "石紋彩繪", desc: "重塑花崗岩、大理石原石紋路折射。輕量金屬軀體，卻有著磅礴大氣的玉石奢石質感。", tag: "自然美學" },
        { id: "s-8", name: "鋁門窗木紋烤漆處理", desc: "適用於豪華別墅、高端商辦大樓的鋁合金氣密窗框及門體，打造優雅一致的名木風範。", tag: "窗框首選" }
      ]
    },
    {
      category: "主力建材與產品項目",
      enCategory: "Key Architectural Building Materials",
      icon: <Layers className="w-5 h-5 text-brand-accent" />,
      bgClass: "from-white to-[#FDFCF9]",
      items: [
        { id: "s-9", name: "室外木紋格柵", desc: "別墅外牆、大門高防潮遮陽百葉。耐高溫曝曬不彎曲、不開裂，替代易腐爛實木。", tag: "熱門建材" },
        { id: "s-10", name: "室內木紋格柵", desc: "提供大廳天花造型、玄關屏風隔音裝飾，環保無甲醛污染。創造大氣自然景緻。", tag: "健康綠色" },
        { id: "s-11", name: "木紋鋁包板", desc: "超強御風防颱與輕巧高張力，面層高畫質木香呈現，最適用於現代高樓巨柱與屋簷包複。", tag: "結構造型" },
        { id: "s-12", name: "鋁包板", desc: "高品質金屬板經過氟碳噴塗烤漆，呈現出極致自潔、耐酸雨及抗紫外線的優質外觀。", tag: "帷幕防潮" },
        { id: "s-13", name: "不銹鋼金屬建材木紋轉印", desc: "於高抗震防爆之不銹鋼門芯、結構防盜格柵上，賦予溫潤柔美木紋，展現極致大氣。", tag: "異型鋼材" },
        { id: "s-14", name: "真空木紋", desc: "3D立體多角度真空均勻附著包複，確保弧形件、異形管及滿焊折角處皆有完美包覆。", tag: "高仿天然" },
        { id: "s-15", name: "石紋", desc: "天然仿石岩晶色澤，免去沉重石材吊掛風險與碳足跡，是科技與古樸美學的交集結盟。", tag: "超輕美感" }
      ]
    },
    {
      category: "真空機具與熱轉印設備",
      enCategory: "Industrial Vacuum Machinery",
      icon: <Wrench className="w-5 h-5 text-brand-accent" />,
      bgClass: "from-[#FAF9F6] to-[#F3F1ED]",
      items: [
        { id: "s-16", name: "烤漆塗裝設備", desc: "配備大型自動化噴漆設備、高溫硬化熔融固化烘道，確保漆膜硬度、鉛筆防刮性能強悍。", tag: "廠房硬實力" },
        { id: "s-17", name: "熱塑轉印機", desc: "高端熱塑與加壓覆合機械，將色彩與紋理分子細緻昇華至各種高規高形狀不規則曲面。", tag: "精密製造" },
        { id: "s-18", name: "真空熱木紋轉印機", desc: "專屬一體化超長大尺寸轉印核心設備。大烤箱均勻受熱，昇華均色不失真。", tag: "重裝壓製" },
        { id: "s-19", name: "真空轉印", desc: "一鍵抽取極限負壓，轉印膜完美貼合凹槽細處，無死角包覆金屬異型擠型材。", tag: "全面無遮" },
        { id: "s-20", name: "熱轉印", desc: "溫控與數位感壓一體化流程，圖層不易起皺皮或剝落脫層，高效率、性價比極具競爭力。", tag: "卓越速度" }
      ]
    }
  ];

  return (
    <section id="business-scope" className="py-20 md:py-28 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center px-4 py-1.5 rounded-sm bg-brand-accent/15 border border-brand-accent/20 text-brand-dark text-xs font-semibold tracking-wider uppercase mb-4">
            <Cpu className="w-4 h-4 mr-1.5 text-brand-accent" />
            營業項目 · 專業大宗一站式加工
          </div>
          <h2 className="text-3xl md:text-4xl font-light text-brand-dark font-sans tracking-tight">
            東華工業<span className="font-bold">產品與服務範疇</span>
          </h2>
          <p className="mt-4 text-sm text-stone-500 font-sans leading-relaxed">
            從高品質真空熱昇華木紋轉印、氟碳（PVDF）烤漆，到先進的重型轉印機械設備，本廠全線提供極緻抗UV自潔的解決方案。
          </p>
        </div>

        {/* Categories Stack */}
        <div className="space-y-16">
          {groups.map((group, gIdx) => (
            <div key={gIdx} className="space-y-6">
              
              {/* Category Header */}
              <div className="flex items-center gap-3 border-b border-stone-150 pb-4">
                <div className="p-2 bg-stone-100 rounded-sm">
                  {group.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-stone-900 font-sans flex items-center gap-2">
                    {group.category}
                  </h3>
                  <span className="text-[10px] uppercase tracking-widest font-mono text-[#A69177] font-bold block">
                    {group.enCategory}
                  </span>
                </div>
              </div>

              {/* Items Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {group.items.map((item) => (
                  <motion.div
                    key={item.id}
                    id={`scope-item-${item.id}`}
                    whileHover={{ translateY: -3 }}
                    className={`p-6 rounded-sm border border-stone-150 shadow-2xs hover:shadow-sm transition-all bg-gradient-to-b ${group.bgClass} flex flex-col justify-between`}
                  >
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-semibold text-[#A69177] bg-white px-2 py-0.5 rounded-sm border border-stone-200">
                          {item.tag}
                        </span>
                        <ChevronRight className="w-3.5 h-3.5 text-stone-300" />
                      </div>
                      <h4 className="text-base font-bold text-stone-900 tracking-tight">
                        {item.name}
                      </h4>
                      <p className="text-xs text-stone-500 font-sans leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                    
                    <div className="pt-4 mt-4 border-t border-stone-200/50 flex justify-end">
                      <button 
                        onClick={() => {
                          const contactEl = document.getElementById('contact');
                          if (contactEl) {
                            contactEl.scrollIntoView({ behavior: 'smooth' });
                          }
                        }}
                        className="text-[11px] font-bold text-[#A69177] hover:text-brand-dark transition-colors inline-flex items-center gap-0.5 cursor-pointer"
                      >
                        諮詢建照樣品
                        <Sparkles className="w-3 h-3 text-brand-accent animate-pulse" />
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
