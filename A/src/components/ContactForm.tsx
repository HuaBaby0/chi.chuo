/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Building, PhoneCall, CalendarRange, QrCode, Copy, Check, ExternalLink, ShieldCheck, Trash2 } from 'lucide-react';
import { ColorCard } from '../data';

interface ContactFormProps {
  selectedSamples?: ColorCard[];
  onRemoveSample?: (card: ColorCard) => void;
}

export default function ContactForm({ selectedSamples = [], onRemoveSample }: ContactFormProps) {
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleCopyLineId = () => {
    navigator.clipboard.writeText('chi.chuo');
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-slate-900 text-white relative overflow-hidden">
      
      {/* Background ambience overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(16,185,129,0.08),transparent_50%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Corporate Profile Details (Lg: 6 cols) */}
          <div className="lg:col-span-6 space-y-8">
            <div>
              <div className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold mb-4">
                <ShieldCheck className="w-3.5 h-3.5 mr-1.5 animate-pulse" />
                官方聯絡與諮詢管道
              </div>
              <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white font-sans">
                東華工業有限公司
              </h2>
              <p className="mt-4 text-base text-slate-400 font-sans leading-relaxed">
                專營高品質真空木紋轉印工法、高端氟碳烤漆與特選表面防蝕技術。誠摯歡迎各大營造廠、鋼構工程大廠、室內裝潢設計所以及建設開發公司不吝來電或加入 LINE 線上諮詢，我們將有技術代表竭誠為您服務。
              </p>
            </div>

            {/* Quick Contact Info cards */}
            <div className="border-t border-slate-800 pt-6 space-y-5">
              <div className="flex items-start gap-4">
                <div className="bg-slate-800 p-3 rounded-xl text-emerald-400 flex-shrink-0 mt-0.5 border border-slate-700/50">
                  <Building className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest">總廠地址</h4>
                  <p className="text-base text-slate-200 mt-1 font-sans">
                    彰化縣和美鎮彰草路三段97號
                  </p>
                  <a 
                    href="https://www.google.com/maps/search/?api=1&query=東華工業有限公司+彰化縣和美鎮彰草路三段97號" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-brand-accent hover:text-white transition-colors mt-1.5 font-semibold"
                  >
                    Google 地圖導航路線
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-slate-800 p-3 rounded-xl text-emerald-400 flex-shrink-0 mt-0.5 border border-slate-700/50">
                  <PhoneCall className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest">電話與傳真專線</h4>
                  <div className="text-base text-slate-200 mt-1 font-sans">
                    <a href="tel:04-7615021" className="hover:text-brand-accent transition-colors">
                      04-7615021
                    </a>
                    <span className="mx-2 text-slate-600">/</span>
                    <a href="tel:04-7625021" className="hover:text-brand-accent transition-colors">
                      04-7625021
                    </a>
                  </div>
                  <p className="text-xs text-slate-500 mt-1">傳真專線：04-7625031</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-slate-800 p-3 rounded-xl text-emerald-400 flex-shrink-0 mt-0.5 border border-slate-700/50">
                  <CalendarRange className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest">技術服務時間</h4>
                  <p className="text-base text-slate-200 mt-1 font-sans">
                    週一到週五 8:00 ~ 17:00 <span className="text-slate-500 text-sm ml-2">(國定假日不營業)</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Selected Samples Basket */}
            {selectedSamples.length > 0 && (
              <div className="bg-slate-850/85 border border-brand-accent/30 rounded-2xl p-5 space-y-4 mt-8">
                <div className="flex items-center justify-between border-b border-slate-700/50 pb-2">
                  <span className="text-xs font-bold text-brand-accent uppercase tracking-wider flex items-center gap-1.5">
                    <Trash2 className="w-4 h-4 text-brand-accent" />
                    已選索取的實體樣品 ({selectedSamples.length})
                  </span>
                  <p className="text-[10px] text-slate-400">點擊 ✕ 可移除</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {selectedSamples.map(sample => (
                    <div key={sample.id} className="inline-flex items-center gap-1.5 bg-slate-900 border border-slate-700/60 px-2.5 py-1.5 rounded text-xs text-slate-200">
                      <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: sample.hex }} />
                      <span className="font-mono text-[10px] font-bold text-brand-accent">{sample.code}</span>
                      <span className="font-medium">{sample.name}</span>
                      {onRemoveSample && (
                        <button 
                          onClick={() => onRemoveSample(sample)}
                          className="hover:text-red-400 ml-1 font-bold text-slate-400 hover:text-white cursor-pointer"
                        >
                          ✕
                        </button>
                      )}
                    </div>
                  ))}
                </div>
                <div className="text-[11px] text-slate-400 font-sans leading-relaxed pt-2 border-t border-slate-800/40">
                  💡 <strong className="text-white">下一步：</strong> 複製 LINE ID 加入後，可直接傳送此樣品清單代碼，或直接致電告知清單代碼，即可快速為您裁切寄送！
                </div>
              </div>
            )}

          </div>

          {/* Right Column: Prominent LINE Integration Panel (Lg: 6 cols) */}
          <div className="lg:col-span-6 bg-white rounded-3xl border border-slate-200/80 shadow-2xl p-8 text-slate-900 relative">
            <div className="text-center space-y-6">
              
              {/* Box Header */}
              <div>
                <span className="text-[10px] uppercase font-mono tracking-widest text-emerald-600 font-bold px-3 py-1 rounded bg-emerald-50 border border-emerald-100">
                  即時加入 LINE 進一步對談
                </span>
                <h3 className="text-2xl font-bold text-slate-900 mt-3 font-sans">線上客服技術小組</h3>
                <p className="mt-1.5 text-xs text-slate-500 font-sans max-w-sm mx-auto leading-relaxed">
                  可隨時透過條碼掃描或複製 ID 將其加入。請提供您的施作材料、圖紙或工法需求，我們隨即安排專人對接。
                </p>
              </div>

              {/* Styled Mock LINE QR Code Canvas */}
              <div className="relative bg-slate-50 border border-slate-100 rounded-2xl p-6 max-w-[240px] mx-auto shadow-inner text-center">
                <svg className="w-40 h-40 mx-auto" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Outer QR box pattern */}
                  <rect x="5" y="5" width="22" height="22" rx="1" stroke="#0F172A" strokeWidth="3" />
                  <rect x="10" y="10" width="12" height="12" fill="#0F172A" />
                  
                  <rect x="73" y="5" width="22" height="22" rx="1" stroke="#0F172A" strokeWidth="3" />
                  <rect x="78" y="10" width="12" height="12" fill="#0F172A" />
                  
                  <rect x="5" y="73" width="22" height="22" rx="1" stroke="#0F172A" strokeWidth="3" />
                  <rect x="10" y="78" width="12" height="12" fill="#0F172A" />
                  
                  {/* Random QR block dots to look authentic */}
                  <rect x="34" y="6" width="6" height="6" fill="#0F172A" />
                  <rect x="44" y="14" width="8" height="4" fill="#0F172A" />
                  <rect x="56" y="8" width="6" height="6" fill="#0F172A" />
                  <rect x="34" y="22" width="8" height="8" fill="#0F172A" opacity="0.9"/>
                  
                  <rect x="73" y="34" width="6" height="8" fill="#0F172A" />
                  <rect x="85" y="44" width="8" height="6" fill="#0F172A" />
                  <rect x="68" y="52" width="10" height="4" fill="#0F172A" />
                  
                  <rect x="12" y="34" width="8" height="6" fill="#0F172A" />
                  <rect x="6" y="44" width="12" height="6" fill="#0F172A" />
                  <rect x="18" y="54" width="6" height="8" fill="#0F172A" />

                  <rect x="34" y="74" width="10" height="6" fill="#0F172A" />
                  <rect x="50" y="82" width="12" height="10" fill="#0F172A" />
                  <rect x="34" y="88" width="8" height="6" fill="#0F172A" />
                  
                  <rect x="74" y="74" width="8" height="8" fill="#0F172A" />
                  <rect x="86" y="84" width="6" height="10" fill="#0F172A" />
                  <rect x="68" y="88" width="12" height="6" fill="#0F172A" />

                  {/* Accent green center LINE placeholder logo circles */}
                  <circle cx="50" cy="50" r="13" fill="#06C755" />
                  {/* Inner speech bubble path */}
                  <path d="M44 49C44 46.5 46.7 44.5 50 44.5C53.3 44.5 56 46.5 56 49C56 51.5 53.3 53.5 50 53.5C49.3 53.5 48.6 53.4 48 53.2L44.5 55L45 52.2C44.4 51.3 44 50.2 44 49Z" fill="white" />
                  {/* Text L inside LINE */}
                  <text x="47.5" y="51" fill="#06C755" fontSize="4" fontWeight="bold" fontFamily="system-ui, sans-serif">LN</text>
                </svg>
                <span className="block text-[10px] text-slate-400 mt-3 font-semibold tracking-wider font-sans">請開啟 LINE 掃描此二維碼</span>
              </div>

              {/* Action buttons list */}
              <div className="space-y-3.5 max-w-sm mx-auto">
                {/* Copy Line ID */}
                <button
                  type="button"
                  onClick={handleCopyLineId}
                  className="w-full py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-xs sm:text-sm font-bold shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  {copied ? (
                    <>
                      <Check className="w-4.5 h-4.5 stroke-[2.5px]" />
                      已成功複製 LINE ID (chi.chuo)
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      複製 LINE ID : <span className="font-mono underline">chi.chuo</span>
                    </>
                  )}
                </button>

                {/* Direct Telephone Call Button */}
                <a
                  href="tel:04-7615021"
                  className="w-full py-3.5 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs sm:text-sm font-bold shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2"
                >
                  <PhoneCall className="w-4 h-4 text-emerald-400" />
                  直接撥打電話諮詢 : 04-7615021
                </a>
              </div>

              <p className="text-[10px] text-slate-400 text-center font-sans max-w-sm mx-auto leading-relaxed border-t border-slate-100 pt-5">
                彰化總廠地址：彰化縣和美鎮彰草路三段97號。我們提供專人線上對接，不需在本網回傳或登錄任何繁瑣資料。
              </p>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
