/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export const standaloneHtmlTemplate = `<!DOCTYPE html>
<html lang="zh-TW" class="scroll-smooth">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>東華工業有限公司 | 專業真空木紋烤漆與高階烤漆塗裝</title>
    <!-- Tailwind CSS CDN -->
    <script src="https://cdn.tailwindcss.com"></script>
    <!-- Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Space+Grotesk:wght@300;400;500;600;700&family=Noto+Sans+TC:wght@300;400;500;700;900&display=swap" rel="stylesheet font-display">
    
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        brand: {
                            dark: '#1C1917',     // 深石墨
                            gold: '#A69177',     // 東華金
                            accent: '#C5A880',   // 高光香檳
                            light: '#FAF9F6',    // 暖白
                        }
                    },
                    fontFamily: {
                        sans: ['Inter', 'Noto Sans TC', 'sans-serif'],
                        mono: ['Space Grotesk', 'Courier New', 'monospace'],
                    }
                }
            }
        }
    </script>
    <style>
        body {
            font-family: 'Inter', 'Noto Sans TC', sans-serif;
        }
        /* Custom scrollbar */
        ::-webkit-scrollbar {
            width: 6px;
            height: 6px;
        }
        ::-webkit-scrollbar-track {
            background: #FAF9F6;
        }
        ::-webkit-scrollbar-thumb {
            background: #C5A880;
            border-radius: 3px;
        }
        ::-webkit-scrollbar-thumb:hover {
            background: #A69177;
        }
    </style>
</head>
<body class="bg-stone-50 text-stone-900 selection:bg-brand-accent/20 overflow-x-hidden">

    <!-- Top Banner Utility -->
    <div class="bg-brand-dark py-2.5 px-4 text-center border-b border-stone-800 text-[11px] text-stone-400 tracking-wider">
        <div class="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
            <span class="inline-flex items-center gap-1.5">
                <span class="inline-block w-2 h-2 rounded-full bg-brand-accent animate-pulse"></span>
                東華工業專業級真空高壓木紋轉印與氟碳自潔烤漆 · 營業大宗工程配合
            </span>
            <span class="hidden md:inline-block font-medium">彰化總廠：彰化縣和美鎮彰草路三段97號 | 產品熱線：04-7615021</span>
        </div>
    </div>

    <!-- Sticky Navigation Block -->
    <header class="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-stone-200">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex items-center justify-between h-20">
                <!-- LOGO Frame -->
                <div class="flex items-center gap-3 cursor-pointer" onclick="window.scrollTo({top: 0, behavior: 'smooth'})">
                    <div class="bg-brand-accent text-white p-2.5 rounded-sm shadow-sm flex items-center justify-center">
                        <!-- Inline SVG representing factory/metallurgy -->
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-factory"><path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H2z"/><path d="M17 18h1"/><path d="M12 18h1"/><path d="M7 18h1"/></svg>
                    </div>
                    <div class="leading-tight">
                        <span class="text-lg font-bold tracking-tight uppercase text-brand-dark">東華工業 <span class="text-brand-accent font-light">Tung Hua</span></span>
                        <p class="text-[9px] text-stone-500 font-bold uppercase tracking-widest mt-0.5">Tung Hua Industrial Co., Ltd</p>
                    </div>
                </div>

                <!-- Desktop Nav -->
                <nav class="hidden lg:flex items-center gap-7 text-xs font-semibold tracking-wider text-stone-600 uppercase">
                    <a href="#about" class="hover:text-brand-accent transition-colors">關於介紹</a>
                    <a href="#duel" class="hover:text-brand-accent transition-colors">材料大對決</a>
                    <a href="#scope" class="hover:text-brand-accent transition-colors">營業項目</a>
                    <a href="#visualizer" class="hover:text-brand-accent transition-colors">實境模擬</a>
                    <a href="#colors" class="hover:text-brand-accent transition-colors">型錄色卡</a>
                    <a href="#cases" class="hover:text-brand-accent transition-colors">完工實績</a>
                    <a href="#contact" class="hover:text-brand-accent transition-colors">聯絡資訊</a>
                </nav>

                <!-- Action Button -->
                <div class="hidden lg:flex items-center gap-4">
                    <a href="#contact" class="px-5 py-3 bg-brand-dark text-white rounded-none hover:bg-brand-accent transition-colors text-xs font-bold tracking-wider uppercase">
                        諮詢與索取樣品
                    </a>
                </div>

                <!-- Mobile Menu Button -->
                <button id="mobileMenuBtn" class="lg:hidden p-2 text-stone-750 hover:text-brand-accent focus:outline-none">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-menu"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
                </button>
            </div>
        </div>

        <!-- Mobile Dropout Menu -->
        <div id="mobileMenu" class="hidden lg:hidden bg-stone-50 border-t border-stone-200 p-4 space-y-2 absolute w-full left-0 shadow-lg">
            <a href="#about" class="block py-2.5 px-3 text-xs font-bold uppercase tracking-wider text-stone-700 hover:bg-white rounded">關於介紹</a>
            <a href="#duel" class="block py-2.5 px-3 text-xs font-bold uppercase tracking-wider text-stone-700 hover:bg-white rounded">材料大對決</a>
            <a href="#scope" class="block py-2.5 px-3 text-xs font-bold uppercase tracking-wider text-stone-700 hover:bg-white rounded">營業項目</a>
            <a href="#visualizer" class="block py-2.5 px-3 text-xs font-bold uppercase tracking-wider text-stone-700 hover:bg-white rounded">實境模擬</a>
            <a href="#colors" class="block py-2.5 px-3 text-xs font-bold uppercase tracking-wider text-stone-700 hover:bg-white rounded">型錄色卡</a>
            <a href="#cases" class="block py-2.5 px-3 text-xs font-bold uppercase tracking-wider text-stone-700 hover:bg-white rounded">完工實績</a>
            <a href="#contact" class="block py-2.5 px-3 text-xs font-bold uppercase tracking-wider text-stone-700 hover:bg-white rounded">聯絡資訊</a>
            <a href="#contact" class="block text-center py-3 bg-brand-dark text-white text-xs font-bold uppercase rounded mt-3">諮詢建照樣品</a>
        </div>
    </header>

    <!-- SECTION 1: HERO / ABOUT -->
    <section id="about" class="relative py-24 md:py-32 bg-brand-dark text-white overflow-hidden">
        <!-- Background Accents -->
        <div class="absolute inset-0 bg-[linear-gradient(rgba(166,145,119,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(166,145,119,0.03)_1px,transparent_1px)] bg-[size:32px_32px]"></div>
        <div class="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(166,145,119,0.15),transparent_50%)] pointer-events-none"></div>

        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center flex flex-col items-center">
            <div class="max-w-4xl space-y-6">
                <!-- Sub Title -->
                <div class="inline-flex items-center gap-2 px-3.5 py-1.5 bg-brand-accent/10 border border-brand-accent/25 text-brand-accent text-xs font-semibold rounded-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-hard-hat"><path d="M10 2h4"/><path d="M12 2v4"/><path d="M19 14a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2H3v3a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-3z"/><path d="M14 22v-4"/><path d="M10 22v-4"/><path d="M16 18a4 4 0 0 0-8 0"/></svg>
                    專業大宗表面處理 · 鋼構結構與外牆塗膜表面處理
                </div>

                <div class="space-y-3">
                    <span class="text-brand-gold font-serif italic text-lg sm:text-xl block">Premium Surface Treatment Spec</span>
                    <h1 class="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight leading-tight text-white">
                        極致工藝的<br><span class="font-bold text-brand-accent">木紋轉印</span>與高階烤漆
                    </h1>
                </div>

                <p class="text-sm sm:text-base text-stone-300 max-w-2xl mx-auto leading-relaxed font-light">
                    東華工業專營高品質建築鋁材與鋼板表面烤漆處理，融合精密「真空熱滲透」及「高溫熔融塗裝」。為您的建築表面注入自然與科技的和諧美學，提供高耐候、高品質耐腐與絕佳防霉防蟲表面特性。
                </p>

                <!-- CTAs -->
                <div class="flex flex-col sm:flex-row gap-3 pt-4 justify-center items-center">
                    <a href="#colors" class="w-full sm:w-auto bg-brand-accent hover:bg-[#b09b81] text-white font-bold text-xs tracking-widest uppercase px-8 py-4 rounded-sm shadow-md transition-all flex items-center justify-center gap-1.5">
                        探索色卡型錄 
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right"><path d="m9 18 6-6-6-6"/></svg>
                    </a>
                    <a href="#contact" class="w-full sm:w-auto bg-transparent hover:bg-stone-50/5 text-stone-200 hover:text-white font-bold text-xs tracking-widest uppercase px-8 py-4 rounded-sm border border-stone-600 hover:border-brand-accent transition-all text-center">
                        聯絡我們與 LINE 諮詢
                    </a>
                </div>

                <!-- Taiwan Local Metrics -->
                <div class="grid grid-cols-3 gap-8 pt-12 border-t border-stone-800 max-w-xl mx-auto text-center">
                    <div>
                        <span class="block text-xl sm:text-2xl font-bold text-white">專業廠區</span>
                        <span class="text-[10px] text-brand-gold font-bold uppercase tracking-wider block mt-0.5">金屬加工與塗裝</span>
                    </div>
                    <div>
                        <span class="block text-xl sm:text-2xl font-bold text-brand-accent">15年+</span>
                        <span class="text-[10px] text-brand-gold font-bold uppercase tracking-wider block mt-0.5">極緻耐候防蟲蛀</span>
                    </div>
                    <div>
                        <span class="block text-xl sm:text-2xl font-bold text-white">全台</span>
                        <span class="text-[10px] text-brand-gold font-bold uppercase tracking-wider block mt-0.5">案場配送配合</span>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- SECTION 2: 常見建築材料特色交叉大對決 -->
    <section id="duel" class="py-20 md:py-28 bg-brand-dark text-white border-b border-stone-800">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div class="text-center max-w-3xl mx-auto mb-16">
                <div class="inline-flex items-center px-3.5 py-1 bg-brand-accent/10 border border-brand-accent/20 text-brand-accent text-[11px] font-bold tracking-widest uppercase rounded-sm mb-4">
                    MATERIAL BATTLEFIELD · 關鍵對決
                </div>
                <h2 class="text-3xl md:text-4xl font-light text-white tracking-tight">
                    常見建築材料特色<span class="font-bold">交叉大對決</span>
                </h2>
                <p class="text-xs text-stone-400 mt-2">
                    依據耐候性、健康環保安全性、表面保養維度等全面對比，為您的別墅及建案做出最明智的材料選配。
                </p>
            </div>

            <!-- Table Matrix -->
            <div class="overflow-x-auto border border-stone-800 bg-stone-900/30 rounded-none shadow-2xl">
                <table class="w-full text-left border-collapse min-w-[700px]">
                    <thead>
                        <tr class="bg-brand-dark border-b border-stone-800 text-[10px] text-stone-400 tracking-wider">
                            <th class="py-5 px-6 font-bold uppercase">特色項目</th>
                            <th class="py-5 px-6 font-bold uppercase text-brand-accent">東華真空木紋轉印金屬</th>
                            <th class="py-5 px-6 font-bold uppercase whitespace-nowrap">傳統戶外防腐實木</th>
                            <th class="py-5 px-6 font-bold uppercase whitespace-nowrap">常見木塑板 (WPC/塑木)</th>
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-stone-800/50 text-stone-300 text-sm">
                        <tr>
                            <td class="py-4 px-6 font-bold text-white">健康環保安全性</td>
                            <td class="py-4 px-6 text-brand-accent font-semibold flex items-center gap-1.5">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="text-brand-accent"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                                100% 零甲醛與超低揮發標準
                            </td>
                            <td class="py-4 px-6 text-stone-400">常施加防腐化學防蟻藥劑、具溶劑殘留</td>
                            <td class="py-4 px-6 text-stone-400">部分低階塑膠原料可能日曬緩釋異味</td>
                        </tr>
                        <tr>
                            <td class="py-4 px-6 font-bold text-white">耐候抗紫外線</td>
                            <td class="py-4 px-6 text-brand-accent font-semibold flex items-center gap-1.5">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="text-brand-accent"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                                極強，PVDF 氟碳高抗紫外線不褪色
                            </td>
                            <td class="py-4 px-6 text-stone-400">極差，極易日曬乾裂霉變開裂</td>
                            <td class="py-4 px-6 text-stone-400">中等，烈日下易加速粉化脆化</td>
                        </tr>
                        <tr>
                            <td class="py-4 px-6 font-bold text-white">防霉變防白蟻</td>
                            <td class="py-4 px-6 text-brand-accent font-semibold flex items-center gap-1.5">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="text-brand-accent"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                                100% 物理屏障，杜絕一切害蟲蛀蝕
                            </td>
                            <td class="py-4 px-6 text-stone-400">極易受潮霉爛、是白蟻主要侵蝕溫床</td>
                            <td class="py-4 px-6 text-stone-400">防水抗蛀，但潮濕積水處易附著青苔</td>
                        </tr>
                        <tr>
                            <td class="py-4 px-6 font-bold text-white">產品結構強度</td>
                            <td class="py-4 px-6 text-brand-accent font-semibold flex items-center gap-1.5">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="text-brand-accent"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                                不撓度大、風剪負荷高，高樓帷幕唯一選
                            </td>
                            <td class="py-4 px-6 text-stone-400">中等，遇颱風或外力重擊極易斷裂</td>
                            <td class="py-4 px-6 text-stone-400">極差，無金屬骨架支撐日久起拱彎曲</td>
                        </tr>
                        <tr>
                            <td class="py-4 px-6 font-bold text-white">表面保養維度</td>
                            <td class="py-4 px-6 text-brand-accent font-semibold flex items-center gap-1.5">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="text-brand-accent"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                                免維護，低表面能，大氣雨水自潔沖洗
                            </td>
                            <td class="py-4 px-6 text-stone-400">2-3年需重新刨光打磨噴漆、維護費用昂貴</td>
                            <td class="py-4 px-6 text-stone-400">不變形，但因毛孔粗糙吸附沙塵、難清水刷淨</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <!-- Standalone Consultation Box -->
            <div id="duel-permit-box" class="mt-12 pt-8 border-t border-stone-800 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
                <div class="space-y-2 max-w-2xl">
                    <span class="text-[10px] uppercase tracking-widest font-mono text-brand-accent font-bold block">
                        BUILDING CODE & PERMIT REVIEW SAMPLES
                    </span>
                    <h4 class="text-base font-bold text-white tracking-tight">
                        建照送審送樣 · 實體真空木紋色卡與切片樣品免費諮詢索取
                    </h4>
                    <p class="text-xs text-stone-400 leading-relaxed font-light">
                        本廠深知營造大廠、建築設計所與鐵構工程大廠在大作送審、建照審核極需實體金屬樣板。提供標準鋁擠、鋼板真空木紋板與高耐候 PVDF 烤漆色板。我們提供免費實物打樣或現存色卡，配合提供相應抗紫外線、耐紫外線自潔檢驗數據，敬請隨時聯絡工程技術小組！
                    </p>
                </div>
                <a href="#contact" class="lg:self-center text-center w-full lg:w-auto px-6 py-3.5 bg-brand-accent hover:bg-[#b09b81] text-white text-xs font-bold tracking-widest uppercase rounded-sm shadow-md transition-all flex items-center justify-center gap-2 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-file-text"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/></svg>
                    諮詢建照樣品索取
                </a>
            </div>

        </div>
    </section>

    <!-- SECTION 3: 營業項目 -->
    <section id="scope" class="py-20 md:py-28 bg-white border-b border-stone-200">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center max-w-3xl mx-auto mb-16">
                <div class="inline-flex items-center px-4 py-1.5 rounded-sm bg-brand-accent/15 border border-brand-accent/20 text-brand-dark text-xs font-semibold tracking-wider uppercase mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-cpu mr-1 text-brand-accent"><rect width="16" height="16" x="4" y="4" rx="2"/><rect width="6" height="6" x="9" y="9" rx="1"/><path d="M9 1v3"/><path d="M15 1v3"/><path d="M9 20v3"/><path d="M15 20v3"/><path d="M20 9h3"/><path d="M20 15h3"/><path d="M1 9h3"/><path d="M1 15h3"/></svg>
                    營業項目 · 專業大宗一站式加工
                </div>
                <h2 class="text-3xl md:text-4xl font-light text-brand-dark tracking-tight">
                    東華工業<span class="font-bold">產品與服務範疇</span>
                </h2>
                <p class="mt-4 text-sm text-stone-500 leading-relaxed">
                    從高品質真空熱昇華木紋轉印、氟碳（PVDF）烤漆，到先進的重型轉印機械設備，本廠全線提供極緻抗UV自潔的解決方案。
                </p>
            </div>

            <!-- Categories Loop -->
            <div class="space-y-16">
                <!-- Group 1 -->
                <div>
                    <div class="flex items-center gap-3 border-b border-stone-200 pb-4 mb-6">
                        <div class="p-2.5 bg-stone-100 rounded-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-paintbrush text-brand-accent"><path d="m14 6-6 6-4 4 3 3 4-4 6-6Z"/><path d="m18 10 4-4a2 2 0 0 0-3-3l-4 4"/><path d="m11 9 1.5 1.5"/><path d="M3 21h18"/></svg>
                        </div>
                        <div>
                            <h3 class="text-lg font-bold text-stone-900 font-sans">塗裝工法與表面處理</h3>
                            <span class="text-[10px] uppercase tracking-widest font-mono text-brand-gold font-bold block">Surface Treatment & Artistry</span>
                        </div>
                    </div>
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div class="p-6 rounded-sm border border-stone-200 shadow-sm bg-gradient-to-b from-[#FDFBF7] to-[#F5F2EB] flex flex-col justify-between hover:-translate-y-1 transition-all duration-300">
                            <div class="space-y-2">
                                <span class="text-[10px] font-bold text-brand-gold bg-white px-2 py-0.5 rounded border border-stone-200/60">核心工法</span>
                                <h4 class="text-base font-bold text-stone-900 mt-1">金屬真空木紋烤漆</h4>
                                <p class="text-xs text-stone-500 leading-relaxed font-sans">融合真空吸附與高溫度熱昇華烤漆，木紋高仿真滲透，極具深層層次與立體感偏折。</p>
                            </div>
                            <div class="pt-4 mt-4 border-t border-stone-200/50 flex justify-end">
                                <a href="#contact" class="text-[11px] font-bold text-brand-gold flex items-center gap-0.5">諮詢建照樣品 <span class="text-brand-accent animate-pulse">★</span></a>
                            </div>
                        </div>
                        <div class="p-6 rounded-sm border border-stone-200 shadow-sm bg-gradient-to-b from-[#FDFBF7] to-[#F5F2EB] flex flex-col justify-between hover:-translate-y-1 transition-all duration-300">
                            <div class="space-y-2">
                                <span class="text-[10px] font-bold text-brand-gold bg-white px-2 py-0.5 rounded border border-stone-200/60">專業加工</span>
                                <h4 class="text-base font-bold text-stone-900 mt-1">轉印加工</h4>
                                <p class="text-xs text-stone-500 leading-relaxed font-sans">精準校對與覆合真空轉印紙印膜，提供極高平整度與高附著性能，支援各類金屬建材。</p>
                            </div>
                            <div class="pt-4 mt-4 border-t border-stone-200/50 flex justify-end">
                                <a href="#contact" class="text-[11px] font-bold text-brand-gold flex items-center gap-0.5">諮詢建照樣品 <span class="text-brand-accent animate-pulse">★</span></a>
                            </div>
                        </div>
                        <div class="p-6 rounded-sm border border-stone-200 shadow-sm bg-gradient-to-b from-[#FDFBF7] to-[#F5F2EB] flex flex-col justify-between hover:-translate-y-1 transition-all duration-300 font-sans">
                            <div class="space-y-2">
                                <span class="text-[10px] font-bold text-brand-gold bg-white px-2 py-0.5 rounded border border-stone-200/60">熱轉工藝</span>
                                <h4 class="text-base font-bold text-stone-900 mt-1">木紋熱轉印</h4>
                                <p class="text-xs text-stone-500 leading-relaxed font-sans">將逼真木紋微粒微粉高溫氣化昇華為高剛性基底的一體化技術，觸感寫實大氣。</p>
                            </div>
                            <div class="pt-4 mt-4 border-t border-stone-200/50 flex justify-end">
                                <a href="#contact" class="text-[11px] font-bold text-brand-gold flex items-center gap-0.5">諮詢建照樣品 <span class="text-brand-accent animate-pulse">★</span></a>
                            </div>
                        </div>
                        <div class="p-6 rounded-sm border border-stone-200 shadow-sm bg-gradient-to-b from-[#FDFBF7] to-[#F5F2EB] flex flex-col justify-between hover:-translate-y-1 transition-all duration-300 font-sans">
                            <div class="space-y-2">
                                <span class="text-[10px] font-bold text-brand-gold bg-white px-2 py-0.5 rounded border border-stone-200/60">客製工藝</span>
                                <h4 class="text-base font-bold text-stone-900 mt-1">表面木紋彩繪塗裝</h4>
                                <p class="text-xs text-stone-500 leading-relaxed font-sans">針對特殊金屬部位，配合數位手作與微噴彩繪，刻畫出富有溫潤質感動人的名木極品層次。</p>
                            </div>
                            <div class="pt-4 mt-4 border-t border-stone-200/50 flex justify-end">
                                <a href="#contact" class="text-[11px] font-bold text-brand-gold flex items-center gap-0.5">諮詢建照樣品 <span class="text-brand-accent animate-pulse">★</span></a>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Group 2 -->
                <div>
                    <div class="flex items-center gap-3 border-b border-stone-200 pb-4 mb-6">
                        <div class="p-2.5 bg-stone-100 rounded-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-layers text-brand-accent"><path d="m12 3-10 5L12 13l10-5-10-5Z"/><path d="m2 17 10 5 10-5"/><path d="m2 12 10 5 10-5"/></svg>
                        </div>
                        <div>
                            <h3 class="text-lg font-bold text-stone-900 font-sans">主力建材與產品項目</h3>
                            <span class="text-[10px] uppercase tracking-widest font-mono text-brand-gold font-bold block">Key Architectural Building Materials</span>
                        </div>
                    </div>
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div class="p-6 rounded-sm border border-stone-200 shadow-sm bg-gradient-to-b from-white to-stone-50 flex flex-col justify-between hover:-translate-y-1 transition-all duration-300 font-sans">
                            <div class="space-y-2">
                                <span class="text-[10px] font-bold text-brand-gold bg-white px-2 py-0.5 rounded border border-stone-200/60">戶外景觀</span>
                                <h4 class="text-base font-bold text-stone-900 mt-1">室外木紋格柵</h4>
                                <p class="text-xs text-stone-500 leading-relaxed">別墅外牆、大門高防潮遮陽百葉。耐高溫曝曬不彎曲、不開裂，替代易腐爛實木。</p>
                            </div>
                            <div class="pt-4 mt-4 border-t border-stone-200/50 flex justify-end">
                                <a href="#contact" class="text-[11px] font-bold text-brand-gold flex items-center gap-0.5">諮詢建照樣品 <span class="text-brand-accent">★</span></a>
                            </div>
                        </div>
                        <div class="p-6 rounded-sm border border-stone-200 shadow-sm bg-gradient-to-b from-white to-stone-50 flex flex-col justify-between hover:-translate-y-1 transition-all duration-300 font-sans">
                            <div class="space-y-2">
                                <span class="text-[10px] font-bold text-brand-gold bg-white px-2 py-0.5 rounded border border-stone-200/60">綠色防火</span>
                                <h4 class="text-base font-bold text-stone-900 mt-1">室內木紋格柵</h4>
                                <p class="text-xs text-stone-500 leading-relaxed">提供大廳天花造型、玄關屏風隔音裝飾，環保無甲醛污染。一級防火安全。</p>
                            </div>
                            <div class="pt-4 mt-4 border-t border-stone-200/50 flex justify-end">
                                <a href="#contact" class="text-[11px] font-bold text-brand-gold flex items-center gap-0.5">諮詢建照樣品 <span class="text-brand-accent">★</span></a>
                            </div>
                        </div>
                        <div class="p-6 rounded-sm border border-stone-200 shadow-sm bg-gradient-to-b from-white to-stone-50 flex flex-col justify-between hover:-translate-y-1 transition-all duration-300 font-sans">
                            <div class="space-y-2">
                                <span class="text-[10px] font-bold text-brand-gold bg-white px-2 py-0.5 rounded border border-stone-200/60">結構造型</span>
                                <h4 class="text-base font-bold text-stone-900 mt-1">木紋鋁包板</h4>
                                <p class="text-xs text-stone-500 leading-relaxed">超強御風防颱與輕巧高張力，面層高畫質木香呈現，最適用於大樓柱子與屋簷包複。</p>
                            </div>
                            <div class="pt-4 mt-4 border-t border-stone-200/50 flex justify-end">
                                <a href="#contact" class="text-[11px] font-bold text-brand-gold flex items-center gap-0.5">諮詢建照樣品 <span class="text-brand-accent">★</span></a>
                            </div>
                        </div>
                        <div class="p-6 rounded-sm border border-stone-200 shadow-sm bg-gradient-to-b from-white to-stone-50 flex flex-col justify-between hover:-translate-y-1 transition-all duration-300 font-sans">
                            <div class="space-y-2">
                                <span class="text-[10px] font-bold text-brand-gold bg-white px-2 py-0.5 rounded border border-stone-200/60">高階耐候</span>
                                <h4 class="text-base font-bold text-stone-900 mt-1">PVDF 氟碳鋁包板</h4>
                                <p class="text-xs text-stone-500 leading-relaxed">高品質金屬板經過氟碳噴塗烤漆，呈現出極致自潔、耐酸雨及抗紫外線的優質外觀。</p>
                            </div>
                            <div class="pt-4 mt-4 border-t border-stone-200/50 flex justify-end">
                                <a href="#contact" class="text-[11px] font-bold text-brand-gold flex items-center gap-0.5">諮詢建照樣品 <span class="text-brand-accent">★</span></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- SECTION 4: REAL-TIME SWATCH VISUALIZER (NEW INTERACTIVE EXPERIENCE FOR GITHUB PAGES) -->
    <section id="visualizer" class="py-20 md:py-28 bg-[#FAF9F6] border-b border-stone-200">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <!-- Section Header -->
            <div class="text-center max-w-3xl mx-auto mb-16">
                <div class="inline-flex items-center px-4 py-1.5 rounded-sm bg-brand-accent/15 border border-brand-accent/20 text-brand-dark text-xs font-semibold tracking-wider uppercase mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-paintbrush mr-1 text-brand-accent"><path d="m14 6-6 6-4 4 3 3 4-4 6-6Z"/><path d="m18 10 4-4a2 2 0 0 0-3-3l-4 4"/><path d="m11 9 1.5 1.5"/><path d="M3 21h18"/></svg>
                    實境建材互動體驗
                </div>
                <h2 class="text-3xl md:text-4xl font-light text-brand-dark tracking-tight">
                    實境色彩、<span class="font-bold text-brand-dark">材質模擬展示</span>
                </h2>
                <p class="mt-4 text-xs sm:text-sm text-stone-500 max-w-2xl mx-auto leading-relaxed">
                    選擇不同的建築案場情境，一鍵套用本廠精製的「木紋轉印」樣樣款式與「氟碳烤漆」高規色卡，即可提前預覽金屬材料的真實立體層次。
                </p>
            </div>

            <!-- Interaction Box -->
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
                <!-- Left: Render Canvas -->
                <div class="lg:col-span-7 flex flex-col justify-between bg-white rounded-sm border border-stone-200 p-5 shadow-sm min-h-[480px]">
                    <div>
                        <!-- Scenario buttons -->
                        <div class="flex flex-wrap gap-2 mb-4">
                            <button id="sc-btn-facade" class="px-3.5 py-2 text-xs font-bold rounded-sm transition-all bg-brand-dark text-white cursor-pointer shadow-xs" onclick="setScenario('facade')">別墅外牆立面格柵</button>
                            <button id="sc-btn-ceiling" class="px-3.5 py-2 text-xs font-bold rounded-sm transition-all bg-stone-100 hover:bg-stone-200 text-stone-600 cursor-pointer" onclick="setScenario('ceiling')">室內大廳造型天花</button>
                            <button id="sc-btn-door" class="px-3.5 py-2 text-xs font-bold rounded-sm transition-all bg-stone-100 hover:bg-stone-200 text-stone-600 cursor-pointer" onclick="setScenario('door')">重裝防颱抗腐大門</button>
                        </div>

                        <!-- Canvas Image Frame -->
                        <div class="relative aspect-[4/3] rounded-sm overflow-hidden bg-stone-100 border border-stone-200 shadow-inner group">
                            <!-- Base Photo -->
                            <img id="visualizer-bg" src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1000" alt="Scenario Preview" class="w-full h-full object-cover transition-transform duration-500" referrerPolicy="no-referrer">
                            
                            <!-- Texture Overlay Layer -->
                            <div id="visualizer-overlay" class="absolute border border-white/10 transition-all duration-300 ease-in-out pointer-events-none" style="top: 35%; left: 45%; width: 40%; height: 55%; opacity: 0.85; mix-blend-mode: multiply; background-size: cover; background-blend-mode: multiply; box-shadow: inset 0 4px 12px rgba(0,0,0,0.4);"></div>

                            <!-- Custom Louvers mimic grids -->
                            <div id="visualizer-grids" class="absolute transition-all duration-300 pointer-events-none grid grid-cols-12 gap-1" style="top: 35%; left: 45%; width: 40%; height: 55%;">
                                <!-- JS inserts grid bars here -->
                            </div>

                            <!-- Watermark HUD -->
                            <div class="absolute bottom-3 left-3 right-3 bg-brand-dark/95 backdrop-blur-md p-3 text-white flex items-center justify-between border-l-4 border-brand-accent">
                                <div class="flex items-center gap-2">
                                    <span id="swatch-indicator" class="w-3.5 h-3.5 rounded-full border border-white/20 block" style="background-color: #D7A15C;"></span>
                                    <div>
                                        <p class="text-[9px] font-bold text-stone-400">當前模擬材質套用：</p>
                                        <h4 id="hud-material-title" class="text-xs font-semibold tracking-wide text-white">WD-201 - 黃金皇家柚木</h4>
                                    </div>
                                </div>
                                <span class="text-[9px] uppercase font-mono tracking-widest px-2 py-0.5 rounded-sm bg-brand-accent/20 text-brand-accent border border-brand-accent/30 font-bold">
                                    即時預覽
                                </span>
                            </div>
                        </div>
                    </div>

                    <div class="mt-4 pt-4 border-t border-stone-150 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                        <p id="scenario-desc" class="text-xs text-stone-500 leading-relaxed max-w-md font-sans">
                            大面側向直立格柵，高溫日照強、氣流流通。常規原木在此處極易扭曲崩裂，而我們的轉印鋁格柵能維持20年紋理常新。
                        </p>
                        <span class="text-xs text-brand-dark bg-brand-accent/15 rounded-sm px-3 py-1.5 border border-brand-accent/20 font-semibold flex items-center gap-1 flex-shrink-0">
                            🛡️ 經 AAMA 2604 規格認證
                        </span>
                    </div>
                </div>

                <!-- Right: Swatches selection -->
                <div class="lg:col-span-5 flex flex-col justify-between bg-white rounded-sm border border-stone-200 p-6 shadow-sm">
                    <div>
                        <h3 class="text-lg font-bold text-brand-dark mb-1 font-sans">即時數位色樣庫</h3>
                        <p class="text-xs text-stone-400 mb-5 font-sans leading-relaxed">
                            點選以下任一款材料結構進行搭配。套用即時渲染，您亦可免費申請對應實體樣品。
                        </p>

                        <!-- Sub category tabs inside swatches -->
                        <div class="grid grid-cols-2 gap-2 p-1 bg-stone-100 rounded-sm mb-5 border border-stone-200">
                            <button id="swatch-tab-wood" class="py-2 text-xs font-bold rounded-sm transition-all bg-white text-brand-dark shadow-xs border border-stone-200 cursor-pointer flex items-center justify-center gap-1" onclick="setSwatchCategory('wood')">
                                <span class="w-2 h-2 rounded-full bg-brand-accent"></span>
                                真空木紋轉印
                            </button>
                            <button id="swatch-tab-coating" class="py-2 text-xs font-bold rounded-sm transition-all text-stone-500 hover:text-brand-dark cursor-pointer flex items-center justify-center gap-1" onclick="setSwatchCategory('coating')">
                                <span class="w-2 h-2 rounded-full bg-stone-400"></span>
                                高階氟碳烤漆
                            </button>
                        </div>

                        <!-- Swatches circle list -->
                        <div id="swatch-list-grid" class="grid grid-cols-3 gap-3 mb-5">
                            <!-- Swatches rendered by JS -->
                        </div>

                        <!-- Active card description -->
                        <div id="active-card-detail" class="bg-brand-light rounded-sm border border-stone-200 p-4 space-y-2 font-sans text-xs">
                            <div class="flex items-center justify-between border-b border-stone-200/60 pb-2">
                                <h4 id="detail-card-name" class="font-bold text-brand-dark">黃金皇家柚木</h4>
                                <span id="detail-card-code" class="font-mono font-bold text-brand-accent bg-white border px-1.5 py-0.5">WD-201</span>
                            </div>
                            <div class="grid grid-cols-2 gap-2 mt-2 leading-relaxed">
                                <div>
                                    <span class="text-stone-400 text-[10px] block">光澤亮度</span>
                                    <span id="detail-card-gloss" class="font-medium text-stone-700">消光 5%</span>
                                </div>
                                <div>
                                    <span class="text-stone-400 text-[10px] block">耐候極限</span>
                                    <span id="detail-card-durability" class="font-bold text-brand-accent">15年級超耐候</span>
                                </div>
                                <div class="col-span-2">
                                    <span class="text-stone-400 text-[10px] block">工法材質描述</span>
                                    <p id="detail-card-desc" class="text-stone-500 leading-relaxed text-[11px] mt-0.5">最受歡迎的木紋色調。呈現尊貴溫潤的暖黃金棕色澤，木理筆直勻稱，細微黑線交織，最適合用於別墅外牆格柵、門廳迎賓遮陽棚。</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Dynamic Cart Action -->
                    <div class="mt-6 pt-4 border-t border-stone-150">
                        <button id="swatch-cart-btn" class="w-full py-3.5 bg-brand-dark hover:bg-stone-800 text-white font-bold text-xs tracking-widest uppercase flex items-center justify-center gap-2 rounded-sm transition-all cursor-pointer" onclick="toggleActiveSample()">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shopping-cart"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>
                            <span>將該色卡加入免費樣品寄送單</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- SECTION 5: 型錄色卡目錄 -->
    <section id="colors" class="py-20 md:py-28 bg-white border-b border-stone-200">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
                <div>
                    <div class="inline-flex items-center gap-1.5 px-3 py-1 bg-[#A69177]/10 border border-[#A69177]/25 text-[#A69177] text-[10px] tracking-widest uppercase font-mono font-bold mb-3 rounded-sm">
                        DIGITAL CERTIFIED SPEC SAMPLES
                    </div>
                    <h2 class="text-3xl md:text-4xl font-light text-brand-dark tracking-tight">
                        全系列精選<span class="font-bold text-brand-dark">表面塗膜型錄</span>
                    </h2>
                    <p class="mt-3 text-xs text-stone-500 leading-relaxed max-w-xl">
                        本廠嚴格參照 AAMA 2605 等級氟碳自潔耐久配方，以下列舉十二款經典高端木紋轉印與氟碳色板，點選即可免費申請切片實物樣板。
                    </p>
                </div>

                <!-- Tabs Filter -->
                <div class="flex gap-2 overflow-x-auto pb-1 flex-wrap">
                    <button id="catalog-tab-all" class="px-4 py-2 bg-brand-dark text-white text-xs font-bold uppercase transition-colors tracking-wider rounded-sm cursor-pointer" onclick="filterCatalog('all')">顯示全部</button>
                    <button id="catalog-tab-wood" class="px-4 py-2 bg-stone-100 hover:bg-stone-200 text-stone-600 text-xs font-bold uppercase transition-colors border border-stone-200/60 tracking-wider rounded-sm cursor-pointer" onclick="filterCatalog('wood')">木紋轉印</button>
                    <button id="catalog-tab-coating" class="px-4 py-2 bg-stone-100 hover:bg-stone-200 text-stone-600 text-xs font-bold uppercase transition-colors border border-stone-200/60 tracking-wider rounded-sm cursor-pointer" onclick="filterCatalog('coating')">高階烤漆</button>
                </div>
            </div>

            <!-- Color Cards Catalog Grid -->
            <div id="catalogGrid" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <!-- RENDERED BY JS DYNAMICALLY -->
            </div>
        </div>
    </section>

    <!-- SECTION 6: 完工實績 CASE GALLERY -->
    <section id="cases" class="py-20 md:py-28 bg-[#FAF9F6] border-b border-stone-200">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center max-w-3xl mx-auto mb-16">
                <div class="inline-flex items-center px-4 py-1.5 rounded-sm bg-brand-accent/15 border border-brand-accent/20 text-brand-dark text-xs font-semibold tracking-wider uppercase mb-4">
                    🛠️ 完工案場實績 · 精品工藝
                </div>
                <h2 class="text-3xl md:text-4xl font-light text-brand-dark tracking-tight">
                    全台案場<span class="font-bold text-brand-dark">工藝典範</span>
                </h2>
                <p class="mt-4 text-xs sm:text-sm text-stone-500 leading-relaxed">
                    精選北中南指標建案與豪宅裝修施作案例。極致抗UV、免保養耐久性，深受大型營造與設計師認可推薦。
                </p>
            </div>

            <!-- Cases Grid -->
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <!-- Case 1 -->
                <div class="bg-white border border-stone-200 shadow-xs rounded-sm overflow-hidden flex flex-col justify-between">
                    <div>
                        <div class="h-56 overflow-hidden relative">
                            <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=600" alt="Case 1" class="w-full h-full object-cover transition-transform duration-500 hover:scale-105" referrerPolicy="no-referrer">
                            <span class="absolute top-4 right-4 bg-brand-dark/90 backdrop-blur-md text-white text-[10px] font-bold px-3 py-1 uppercase tracking-wider rounded-sm">格柵遮陽柱</span>
                        </div>
                        <div class="p-6">
                            <span class="text-brand-accent text-[10px] font-mono tracking-widest font-bold block mb-1">TAIPEI CITY · 台北市信義區</span>
                            <h4 class="text-base font-bold text-stone-900 tracking-tight">台北信義御邸豪宅建案</h4>
                            <p class="text-xs text-stone-500 mt-2 font-sans leading-relaxed">配合極簡與植物植生牆概念，於豪宅主建築面施作近1,200支木紋格柵遮陽翼。轉印木紋的仿真木理折射與原木完全相同，但在強烈西曬下經久不變色。</p>
                        </div>
                    </div>
                    <div class="p-6 pt-0 border-t border-stone-100 mt-4 text-xs text-stone-400 bg-stone-50/50">
                        <p class="truncate"><strong class="text-stone-600">使用建材：</strong>6063-T5高剛性鋁擠型管</p>
                        <p class="truncate mt-1"><strong class="text-stone-600">外觀工藝：</strong>WD-201 黃金柚木真空轉印</p>
                    </div>
                </div>

                <!-- Case 2 -->
                <div class="bg-white border border-stone-200 shadow-xs rounded-sm overflow-hidden flex flex-col justify-between">
                    <div>
                        <div class="h-56 overflow-hidden relative">
                            <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=600" alt="Case 2" class="w-full h-full object-cover transition-transform duration-500 hover:scale-105" referrerPolicy="no-referrer">
                            <span class="absolute top-4 right-4 bg-brand-dark/90 backdrop-blur-md text-white text-[10px] font-bold px-3 py-1 uppercase tracking-wider rounded-sm">外牆金屬帷幕</span>
                        </div>
                        <div class="p-6">
                            <span class="text-brand-accent text-[10px] font-mono tracking-widest font-bold block mb-1">TAIPEI CITY · 台北市南港區</span>
                            <h4 class="text-base font-bold text-stone-900 tracking-tight">科技巨擘南港總部研發大樓</h4>
                            <p class="text-xs text-stone-500 mt-2 font-sans leading-relaxed">大面積金屬防風板採用高階消光氟碳重灰。由於大樓位於極端污染、酸雨較重的都會樞紐區域，PVDF的高耐候防腐及抗紫外線鍵為總部提供了完美的自潔和色彩長久維護。</p>
                        </div>
                    </div>
                    <div class="p-6 pt-0 border-t border-stone-100 mt-4 text-xs text-stone-400 bg-stone-50/50">
                        <p class="truncate"><strong class="text-stone-600">使用建材：</strong>3.0mm防颱鋁單板單元</p>
                        <p class="truncate mt-1"><strong class="text-stone-600">外觀工藝：</strong>RAL-7016 軍規深灰氟碳烤漆</p>
                    </div>
                </div>

                <!-- Case 3 -->
                <div class="bg-white border border-stone-200 shadow-xs rounded-sm overflow-hidden flex flex-col justify-between">
                    <div>
                        <div class="h-56 overflow-hidden relative">
                            <img src="https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?auto=format&fit=crop&q=80&w=600" alt="Case 3" class="w-full h-full object-cover transition-transform duration-500 hover:scale-105" referrerPolicy="no-referrer">
                            <span class="absolute top-4 right-4 bg-brand-dark/90 backdrop-blur-md text-white text-[10px] font-bold px-3 py-1 uppercase tracking-wider rounded-sm">室內造型天花</span>
                        </div>
                        <div class="p-6">
                            <span class="text-brand-accent text-[10px] font-mono tracking-widest font-bold block mb-1">TAICHUNG · 台中七期商業大廳</span>
                            <h4 class="text-base font-bold text-stone-900 tracking-tight">七期頂級商辦大樓大廳天花</h4>
                            <p class="text-xs text-stone-500 mt-2 font-sans leading-relaxed">大廳頂部採用微孔吸音金屬板並結合白橡木轉印。完美達成大空間的吸音聲學規範，又實現了北歐純淨質白木理，通過一級防火不燃與零甲醛安全測試。</p>
                        </div>
                    </div>
                    <div class="p-6 pt-0 border-t border-stone-100 mt-4 text-xs text-stone-400 bg-stone-50/50">
                        <p class="truncate"><strong class="text-stone-600">使用建材：</strong>金屬微孔吸音天花鋁板</p>
                        <p class="truncate mt-1"><strong class="text-stone-600">外觀工藝：</strong>WD-108 北歐灰影白橡木轉印</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- SECTION 7: CONTACT & ESTIMATE -->
    <section id="contact" class="py-20 md:py-28 bg-brand-dark text-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
                
                <!-- Left Hand Details (Lg: 5 cols) -->
                <div class="lg:col-span-5 space-y-8 font-sans">
                    <div>
                        <span class="text-[10px] uppercase tracking-widest font-mono text-brand-accent font-bold block mb-2">OFFICE CONTACT INFO</span>
                        <h2 class="text-3xl md:text-4xl font-light text-white tracking-tight leading-tight">
                            諮詢建照樣品與<span class="font-bold text-brand-accent">廠房業務配合</span>
                        </h2>
                        <p class="mt-3 text-xs text-stone-400 leading-relaxed">
                            東華工業總廠設於彰化和美鎮，備有全自動高壓真空熔融轉印固化生產線。竭誠與全台營造廠、建案裝修設計公司、鐵結構大廠攜手，提供一站式加工配送。
                        </p>
                    </div>

                    <div class="space-y-6">
                        <div class="flex items-start gap-4">
                            <div class="w-10 h-10 bg-stone-800 rounded-sm flex items-center justify-center border border-stone-700 flex-shrink-0 text-brand-accent">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-phone"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                            </div>
                            <div>
                                <span class="text-[9px] text-stone-500 font-bold uppercase block">專線/電話洽詢</span>
                                <a href="tel:04-7615021" class="text-base font-bold text-white hover:text-brand-accent transition-colors">04-7615021 / 04-7625021</a>
                                <p class="text-[10px] text-stone-500 font-medium font-mono">傳真業務專線：04-7625031</p>
                            </div>
                        </div>

                        <div class="flex items-start gap-4">
                            <div class="w-10 h-10 bg-stone-800 rounded-sm flex items-center justify-center border border-stone-700 flex-shrink-0 text-brand-accent">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-map-pin"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                            </div>
                            <div>
                                <span class="text-[9px] text-stone-500 font-bold uppercase block">本廠彰化總部</span>
                                <span class="text-sm font-semibold text-white">彰化縣和美鎮彰草路三段97號</span>
                            </div>
                        </div>

                        <div class="flex items-start gap-4">
                            <div class="w-10 h-10 bg-green-950/50 rounded-sm flex items-center justify-center border border-green-900/30 flex-shrink-0 text-green-400">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-message-square"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
                            </div>
                            <div>
                                <span class="text-[9px] text-green-400 font-bold uppercase block">LINE 即時客服諮詢</span>
                                <span class="text-sm font-semibold text-white">搜尋客服 ID: <a href="https://line.me/ti/p/~chi.chuo" target="_blank" class="text-green-400 font-bold underline hover:text-green-300">chi.chuo</a></span>
                            </div>
                        </div>
                    </div>

                    <div class="p-6 bg-stone-900/50 rounded-sm border border-stone-800/80">
                        <h4 class="text-sm font-bold text-white mb-2 flex items-center gap-2">
                             🛡️ 廠房品質宗旨
                        </h4>
                        <p class="text-xs text-stone-400 leading-relaxed font-sans">
                            我們以誠信經營，秉持對表面烤漆轉印的究極堅持，每一批產品皆通過國家與國際全套檢測，為您的工程品質保駕護航。
                        </p>
                    </div>
                </div>

                <!-- Right Hand Form (Lg: 7 cols) -->
                <div class="lg:col-span-7 bg-stone-900 border border-stone-800 p-8 rounded-none shadow-2xl relative">
                    <span class="absolute top-4 right-4 text-[10px] font-mono text-stone-500 font-bold">TUNG HUA FACTORY SERVICE</span>
                    
                    <h3 class="text-lg font-bold text-white mb-6 flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-file-text text-brand-accent"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/></svg>
                        索取實體樣品 / 估價業務洽詢單
                    </h3>

                    <!-- Color Sample Basket Inside Form -->
                    <div id="contact-cart-panel" class="hidden bg-stone-950 border border-stone-800 p-4 mb-6 rounded-sm font-sans">
                        <div class="flex items-center justify-between border-b border-stone-800 pb-2 mb-3">
                            <span class="text-xs font-bold text-brand-accent flex items-center gap-1.5">
                                🛒 已選定送審樣品車：
                            </span>
                            <span class="text-[10px] text-stone-500">將與下方諮詢一併送件</span>
                        </div>
                        <div id="contact-cart-list" class="flex flex-wrap gap-2.5">
                            <!-- Dynamic items rendered by JS -->
                        </div>
                    </div>

                    <!-- Contact Form HTML -->
                    <form id="standaloneContactForm" class="space-y-5" onsubmit="handleFormSubmit(event)">
                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                                <label class="block text-[10px] font-bold text-stone-400 uppercase tracking-wider mb-2">貴司工程單位名稱 / 公司大名 *</label>
                                <input type="text" id="form-company" required class="w-full bg-stone-950 border border-stone-800 px-4 py-3 text-sm text-white rounded-none focus:outline-none focus:border-brand-accent placeholder-stone-600 font-sans" placeholder="例：東華營造工程處">
                            </div>
                            <div>
                                <label class="block text-[10px] font-bold text-stone-400 uppercase tracking-wider mb-2">聯絡人姓名 / 職稱 *</label>
                                <input type="text" id="form-name" required class="w-full bg-stone-950 border border-stone-800 px-4 py-3 text-sm text-white rounded-none focus:outline-none focus:border-brand-accent placeholder-stone-600 font-sans" placeholder="例：陳主任 / 採購副理">
                            </div>
                        </div>

                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                                <label class="block text-[10px] font-bold text-stone-400 uppercase tracking-wider mb-2">聯絡電話 / 廠辦手持 *</label>
                                <input type="tel" id="form-phone" required class="w-full bg-stone-950 border border-stone-800 px-4 py-3 text-sm text-white rounded-none focus:outline-none focus:border-brand-accent placeholder-stone-600 font-sans" placeholder="例：0912-345678 font-mono">
                            </div>
                            <div>
                                <label class="block text-[10px] font-bold text-stone-400 uppercase tracking-wider mb-2">常用 Email</label>
                                <input type="email" id="form-email" class="w-full bg-stone-950 border border-stone-800 px-4 py-3 text-sm text-white rounded-none focus:outline-none focus:border-brand-accent placeholder-stone-600 font-sans" placeholder="例：engineer@tunghua.com.tw">
                            </div>
                        </div>

                        <div>
                            <label class="block text-[10px] font-bold text-stone-400 uppercase tracking-wider mb-2">您所需要的加工基質與建材類別 (可複選)</label>
                            <div class="grid grid-cols-2 sm:grid-cols-3 gap-3 bg-stone-950 p-4 border border-stone-800 font-sans text-xs">
                                <label class="flex items-center gap-2 text-stone-300 cursor-pointer"><input type="checkbox" name="material" value="木紋轉印" class="accent-brand-accent text-brand-dark">真空木紋轉印</label>
                                <label class="flex items-center gap-2 text-stone-300 cursor-pointer"><input type="checkbox" name="material" value="格柵百葉" class="accent-brand-accent text-brand-dark">室外/室內格柵</label>
                                <label class="flex items-center gap-2 text-stone-300 cursor-pointer"><input type="checkbox" name="material" value="鋁包板" class="accent-brand-accent text-brand-dark">鋁包板/幕牆板</label>
                                <label class="flex items-center gap-2 text-stone-300 cursor-pointer"><input type="checkbox" name="material" value="不銹鋼轉印" class="accent-brand-accent text-brand-dark">不銹鋼建材</label>
                                <label class="flex items-center gap-2 text-stone-300 cursor-pointer"><input type="checkbox" name="material" value="塗裝烤漆" class="accent-brand-accent text-brand-dark">氟碳烤漆加工</label>
                                <label class="flex items-center gap-2 text-stone-300 cursor-pointer"><input type="checkbox" name="material" value="索取色片樣板" class="accent-brand-accent text-brand-dark" checked>索取建照色片樣品</label>
                            </div>
                        </div>

                        <div>
                            <label class="block text-[10px] font-bold text-stone-400 uppercase tracking-wider mb-2">工程預定米數 / 基板規格 / 諮詢補充說明 *</label>
                            <textarea id="form-desc" required rows="4" class="w-full bg-stone-950 border border-stone-800 px-4 py-3 text-sm text-white rounded-none focus:outline-none focus:border-brand-accent placeholder-stone-600 font-sans" placeholder="請填寫所需色卡、長度裁切以及任何工程送審要求。若您有已選樣品，系統將為您自動併入送樣。"></textarea>
                        </div>

                        <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-2">
                            <span class="text-[10px] text-stone-500 block">我們將於工作日 2-4 小時內儘速完成電話審核並迅速安排寄送樣品。</span>
                            <button type="submit" class="w-full sm:w-auto px-8 py-4 bg-brand-accent hover:bg-[#b09b81] text-white font-bold text-xs tracking-widest uppercase transition-colors rounded-none shadow-md cursor-pointer flex-shrink-0">
                                提交送交工廠審核
                            </button>
                        </div>
                    </form>

                    <!-- Success State (Hidden by default) -->
                    <div id="contactSuccessState" class="hidden absolute inset-0 bg-stone-900 border border-stone-800 p-8 flex flex-col justify-center items-center text-center space-y-4">
                        <div class="w-16 h-16 bg-brand-accent/20 rounded-full flex items-center justify-center border border-brand-accent/30 text-brand-accent">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check-circle"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                        </div>
                        <h4 class="text-xl font-bold text-white font-sans">樣品索取單已成功送交！</h4>
                        <p class="text-xs text-stone-400 max-w-sm leading-relaxed font-sans">
                            感謝您的來單。本廠工程專才將立即安排建照樣板切片與最新 AAMA 2605 氟碳耐候色樣，並撥冗致件與您核對快遞送達地址。
                        </p>
                        <button onclick="resetContactForm();" class="px-6 py-2 border border-stone-750 text-stone-300 hover:text-white hover:border-brand-accent text-xs font-bold uppercase transition-colors font-sans">
                            再次填寫
                        </button>
                    </div>
                </div>

            </div>
        </div>
    </section>

    <!-- FOOTER -->
    <footer class="bg-stone-950 py-16 text-stone-400 border-t border-stone-900">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12 font-sans">
                <!-- Branding grid -->
                <div class="md:col-span-2 space-y-4">
                    <div class="flex items-center gap-3">
                        <div class="w-8 h-8 bg-brand-accent flex items-center justify-center text-white font-bold rounded-sm text-sm">
                            T
                        </div>
                        <span class="text-base font-bold text-white uppercase tracking-wider">東華工業 <span class="font-light text-brand-accent">Tung Hua</span></span>
                    </div>
                    <p class="text-xs text-stone-500 max-w-sm leading-relaxed font-sans">
                        東華工業有限公司自創立十五年來，秉持誠信用心，專營大尺寸吊頂、鋼構表面處理、真空高壓熱木紋轉印及氟碳噴漆塗裝工藝。
                    </p>
                </div>

                <!-- Fastlinks grid -->
                <div>
                    <h3 class="font-bold text-white text-xs mb-4 uppercase tracking-widest text-brand-gold">工法與解決方案</h3>
                    <ul class="space-y-2 text-xs">
                        <li><a href="#about" class="hover:text-brand-accent transition-colors">真空氟碳木紋轉印</a></li>
                        <li><a href="#scope" class="hover:text-brand-accent transition-colors">高溫高階塗裝烤漆</a></li>
                        <li><a href="#duel" class="hover:text-brand-accent transition-colors">耐候PVDF表面防蝕</a></li>
                        <li><a href="#scope" class="hover:text-brand-accent transition-colors">免甲醛綠色環保材</a></li>
                    </ul>
                </div>

                <!-- Standard grid -->
                <div>
                    <h3 class="font-bold text-white text-xs mb-4 uppercase tracking-widest text-brand-gold">技術品質標準</h3>
                    <ul class="space-y-2 text-xs font-sans">
                        <li>2000小時抗鹽霧耐久耐濕</li>
                        <li>美國 AAMA 2605 規格超耐候</li>
                        <li>氟碳與粉體精密一壓固化</li>
                        <li class="text-brand-accent font-semibold">100% 免甲醛綠色環保</li>
                    </ul>
                </div>
            </div>

            <div class="border-t border-stone-900 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-stone-600 font-sans">
                <p>專業真空木紋轉印工法 · 東華工業有限公司 © 2026 版權所有.</p>
                <div class="flex gap-4">
                    <a href="#about" class="hover:underline">隱私保護</a>
                    <a href="#contact" class="hover:underline">聯絡資訊</a>
                    <a href="#colors" class="hover:underline">型錄色卡</a>
                </div>
            </div>
        </div>
    </footer>

    <!-- INTERACTIVE FLOATING SAMPLE BASKET WITH SHOPPING CART INTEGRATION -->
    <div id="floating-widget-panel" class="fixed bottom-6 right-6 z-45 flex flex-col gap-3 items-end">
        <!-- Floating Sample Basket Badge -->
        <button id="floating-cart-badge" class="hidden bg-brand-accent hover:bg-[#b09b81] text-white px-4 py-3 rounded-full shadow-2xl transition-all border-2 border-white flex items-center gap-2 cursor-pointer text-xs font-bold animate-pulse font-sans" onclick="document.getElementById('contact').scrollIntoView({behavior: 'smooth'})">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shopping-cart"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>
            <span>已選樣品 (<span id="floating-cart-count">0</span>)</span>
        </button>

        <!-- LINE Floating Icon -->
        <a href="https://line.me/ti/p/~chi.chuo" target="_blank" class="bg-emerald-600 hover:bg-emerald-500 text-white p-4 rounded-full shadow-2xl transition-all hover:scale-105 inline-flex items-center justify-center border-2 border-white cursor-pointer" title="LINE 線上客服諮詢 chi.chuo">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-message-square"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
        </a>
    </div>

    <!-- DYNAMIC DATA & VANILLA JS INTERACTIVE ENGINE -->
    <script>
        // 12 HIGH-END CERTIFIED SPEC COLOR CARDS MATCHING REACT DATABASE
        const COLOR_CARDS = [
            { id: 'wd-01', code: 'WD-201', name: '黃金皇家柚木', category: 'wood', type: '真空木紋轉印', hex: '#D7A15C', image: 'https://images.unsplash.com/photo-1541123437800-1bb1317badc2?auto=format&fit=crop&q=80&w=600', gloss: '消光 5%', durability: '15年級超耐候', desc: '最受歡迎的木紋色調。呈現尊貴溫潤的暖黃金棕色澤，木理筆直勻稱，細微黑線交織，最適合用於別墅外牆格柵、門廳迎賓遮陽棚。' },
            { id: 'wd-02', code: 'WD-205', name: '雅典紅橡木', category: 'wood', type: '真空木紋轉印', hex: '#B26F40', image: 'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&q=80&w=600', gloss: '消光 8%', durability: '15年級超耐候', desc: '呈現溫暖高貴的紅褐色澤。豐富的山形山脈年輪紋理栩栩如生，為生硬的金屬帷幕增添了醇厚的人文大自然氣息。' },
            { id: 'wd-03', code: 'WD-312', name: '經典北美胡桃木', category: 'wood', type: '真空木紋轉印', hex: '#5C4436', image: 'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&q=80&w=600', gloss: '超細啞光 3%', durability: '20年旗艦耐候', desc: '低調輕奢的深裝黑色，紋理捲曲帶有煙燻感。常用於高級屏風格柵、別墅陽台圍欄。' },
            { id: 'wd-04', code: 'WD-108', name: '北歐灰影白橡木', category: 'wood', type: '真空木紋轉印', hex: '#D6C8B5', image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=600', gloss: '消光 5%', durability: '15年級超耐候', desc: '簡約冷調的灰白色。紋路清淡典雅，富含自然線條美，適合無印風、侘寂風、極簡現代風外觀。' },
            { id: 'wd-05', code: 'WD-401', name: '古殿碳燒松木', category: 'wood', type: '真空木紋轉印', hex: '#4A3B32', image: 'https://images.unsplash.com/photo-1531685250784-7569952593d2?auto=format&fit=crop&q=80&w=600', gloss: '消光 5%', durability: '15年級超耐候', desc: '復古碳化風格。帶有粗獷的松木大結疤與灰黑相間的火燒感，是日式禪風、網紅設計與度假別墅首選。' },
            { id: 'wd-06', code: 'WD-620', name: '深影黑檀木', category: 'wood', type: '真空木紋轉印', hex: '#2B2421', image: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&q=80&w=600', gloss: '半啞光 12%', durability: '20年旗艦耐候', desc: '極深沉接近墨黑的天然黑檀紋理。低調尊貴，不易顯髒，主要用於高規格迎賓大堂。' },
            { id: 'ct-01', code: 'RAL-9005_PVDF', name: '曜石消光黑', category: 'coating', type: '氟碳烤漆 (PVDF)', hex: '#1D1D1D', image: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&q=80&w=600', gloss: '超消光 2%', durability: '20年超自潔耐候', desc: '極致純粹的消光黑。超細磨砂表面，無光澤反光，為現代高強度帷幕外牆注入內斂極簡張力。' },
            { id: 'ct-02', code: 'PVDF-8035', name: '極地太空銀亮', category: 'coating', type: '氟碳烤漆 (PVDF)', hex: '#C0C4C8', image: 'https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?auto=format&fit=crop&q=80&w=600', gloss: '金屬漆 35%', durability: '20年超耐候', desc: '帶有細微亮銀雲母金屬粉的太空銀。陽光下不同角度會產生亮眼反射，常施作於捷運站、地標帷幕。' },
            { id: 'ct-03', code: 'PVDF-香檳金', name: '皇家古典香檳金', category: 'coating', type: '氟碳烤漆 (PVDF)', hex: '#CFB997', image: 'https://images.unsplash.com/photo-1505673542670-a14e0f0f4533?auto=format&fit=crop&q=80&w=600', gloss: '金屬漆 25%', durability: '20年超耐候', desc: '柔和高貴的淡金色。淡雅奢華，多用於高端民宅陽台框、造型大雨遮及豪華門扇。' },
            { id: 'ct-04', code: 'RAL-7016_PVDF', name: '軍規重裝深灰粉', category: 'coating', type: '氟碳烤漆 (PVDF)', hex: '#3D4147', image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=600', gloss: '消光啞面 5%', durability: '20年級超自潔', desc: '極致大氣且自潔性極高。大都市高污染或重塵重劃區指定外牆色，極耐髒且視覺沉著。' },
            { id: 'ct-05', code: 'RAL-1015_POWD', name: '簡約純粹暖象牙白', category: 'coating', type: '高耐候粉體烤漆', hex: '#F2E8D7', image: 'https://images.unsplash.com/photo-1621905252507-b354bc25edac?auto=format&fit=crop&q=80&w=600', gloss: '半啞光 10%', durability: '10年級特耐候', desc: '帶有微偏黃的暖洋白，防刺眼光澤。常用於室內門框、屏風格隔及精裝玄關拉門。' },
            { id: 'ct-06', code: 'RAL-8019_PVDF', name: '摩卡極致深古銅', category: 'coating', type: '氟碳烤漆 (PVDF)', hex: '#4A352F', image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=600', gloss: '消光 5%', durability: '20年級超耐候', desc: '沉穩厚重帶有深色光澤的頂級古銅色。與大自然景木混搭效果極佳，是五星級飯店指定尊享色。' }
        ];

        // 3 SCENARIOS FOR VISUALIZER
        const SCENARIOS = {
            facade: {
                name: '別墅外牆立面格柵',
                image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1000',
                overlayStyle: { top: '35%', left: '45%', width: '40%', height: '55%' },
                type: 'grille',
                desc: '大面側向直立格柵，高溫日照強、氣流流通。常規原木在此處極易扭曲崩裂，而我們的轉印鋁格柵能維持20年紋理常新。'
            },
            ceiling: {
                name: '室內大廳造型挑高天花',
                image: 'https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?auto=format&fit=crop&q=80&w=1000',
                overlayStyle: { top: '0%', left: '15%', width: '70%', height: '32%' },
                type: 'interior',
                desc: '公共大樓、商業門廳天花吊掛吸音複合格柵。我們施作的一級防火木紋轉印，符合都市高安全法規。'
            },
            door: {
                name: '豪宅重裝防颱抗腐大門',
                image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1000',
                overlayStyle: { top: '50%', left: '30%', width: '22%', height: '40%' },
                type: 'door',
                desc: '迎風面海腐蝕性強，對大門之防鏽、防曬極端嚴酷。氟碳烤漆大面積施作，質地緻密、完美防鹽潮。'
            }
        };

        // GLOBAL APP STATE
        let activeScenarioKey = 'facade';
        let activeCardId = 'wd-01';
        let activeSwatchCategory = 'wood';
        let selectedSamplesList = [];

        // INITIALIZATION
        window.addEventListener('DOMContentLoaded', () => {
            renderSwatchesGrid();
            renderCatalogGrid();
            updateVisualizer();
            updateSampleCartUI();
        });

        // MOBILE NAVIGATION CONTROL
        const mobileMenuBtn = document.getElementById('mobileMenuBtn');
        const mobileMenu = document.getElementById('mobileMenu');
        if (mobileMenuBtn && mobileMenu) {
            mobileMenuBtn.addEventListener('click', () => {
                mobileMenu.classList.toggle('hidden');
            });
        }
        const mobileLinks = mobileMenu ? mobileMenu.querySelectorAll('a') : [];
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (mobileMenu) mobileMenu.classList.add('hidden');
            });
        });

        // INTERACTIVE VISUALIZER SCENARIO TOGGLES
        function setScenario(key) {
            activeScenarioKey = key;
            const sc = SCENARIOS[key];
            
            // Toggle active classes on buttons
            ['facade', 'ceiling', 'door'].forEach(k => {
                const btn = document.getElementById('sc-btn-' + k);
                if (btn) {
                    if (k === key) {
                        btn.className = "px-3.5 py-2 text-xs font-bold rounded-sm transition-all bg-brand-dark text-white cursor-pointer shadow-xs";
                    } else {
                        btn.className = "px-3.5 py-2 text-xs font-bold rounded-sm transition-all bg-stone-100 hover:bg-stone-200 text-stone-600 cursor-pointer";
                    }
                }
            });

            // Update Image Base
            document.getElementById('visualizer-bg').src = sc.image;
            document.getElementById('scenario-desc').innerText = sc.desc;

            // Trigger overlay updates
            updateVisualizer();
        }

        // SWATCH CATEGORY SELECTOR IN VISUALIZER
        function setSwatchCategory(cat) {
            activeSwatchCategory = cat;
            
            // Update tabs UI
            const tabWood = document.getElementById('swatch-tab-wood');
            const tabCoating = document.getElementById('swatch-tab-coating');
            if (cat === 'wood') {
                tabWood.className = "py-2 text-xs font-bold rounded-sm transition-all bg-white text-brand-dark shadow-xs border border-stone-200 cursor-pointer flex items-center justify-center gap-1";
                tabCoating.className = "py-2 text-xs font-bold rounded-sm transition-all text-stone-500 hover:text-brand-dark cursor-pointer flex items-center justify-center gap-1";
            } else {
                tabWood.className = "py-2 text-xs font-bold rounded-sm transition-all text-stone-500 hover:text-brand-dark cursor-pointer flex items-center justify-center gap-1";
                tabCoating.className = "py-2 text-xs font-bold rounded-sm transition-all bg-white text-brand-dark shadow-xs border border-stone-200 cursor-pointer flex items-center justify-center gap-1";
            }

            renderSwatchesGrid();
            
            // Set first item in category as selected
            const filtered = COLOR_CARDS.filter(c => c.category === cat);
            if (filtered.length > 0) {
                selectCard(filtered[0].id);
            }
        }

        // RENDER SWATCH GRID
        function renderSwatchesGrid() {
            const grid = document.getElementById('swatch-list-grid');
            if (!grid) return;
            
            const filtered = COLOR_CARDS.filter(c => c.category === activeSwatchCategory);
            grid.innerHTML = filtered.map(card => {
                const isSelected = card.id === activeCardId;
                const ringClass = isSelected ? 'ring-2 ring-brand-accent ring-offset-2 scale-95 shadow' : 'ring-1 ring-stone-200 hover:scale-95 shadow-sm';
                return \`
                    <button class="relative aspect-square rounded-sm overflow-hidden transition-all text-left flex flex-col justify-between group cursor-pointer \${ringClass}" onclick="selectCard('\${card.id}')">
                        <div class="w-full h-2/3 relative" style="background-color: \${card.hex}; background-image: url('\${card.image}'); background-size: cover;">
                            \${isSelected ? '<div class="absolute top-1 right-1 bg-brand-accent text-white rounded-full p-0.5 shadow-xs"><svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check"><polyline points="20 6 9 17 4 12"/></svg></div>' : ''}
                        </div>
                        <div class="bg-stone-50 p-1.5 h-1/3 leading-tight flex flex-col justify-center">
                            <span class="text-[9px] font-mono font-bold text-stone-400 truncate">\${card.code}</span>
                            <span class="text-[10px] text-stone-700 font-medium truncate">\${card.name}</span>
                        </div>
                    </button>
                \`;
            }).join('');
        }

        // SELECT DYNAMIC SWATCH
        function selectCard(id) {
            activeCardId = id;
            const card = COLOR_CARDS.find(c => c.id === id);
            if (!card) return;

            // Re-render Swatches
            renderSwatchesGrid();

            // Update details HUD
            document.getElementById('hud-material-title').innerText = card.code + " - " + card.name;
            document.getElementById('swatch-indicator').style.backgroundColor = card.hex;

            // Update active details box
            document.getElementById('detail-card-name').innerText = card.name;
            document.getElementById('detail-card-code').innerText = card.code;
            document.getElementById('detail-card-gloss').innerText = card.gloss;
            document.getElementById('detail-card-durability').innerText = card.durability;
            document.getElementById('detail-card-desc').innerText = card.desc;

            // Update dynamic overlay simulation
            updateVisualizer();
            updateCartButtonState();
        }

        // UPDATE RENDERED VISUALIZER LAYERS
        function updateVisualizer() {
            const sc = SCENARIOS[activeScenarioKey];
            const card = COLOR_CARDS.find(c => c.id === activeCardId);
            if (!sc || !card) return;

            const overlay = document.getElementById('visualizer-overlay');
            const grids = document.getElementById('visualizer-grids');

            // Reset styles
            overlay.style.top = sc.overlayStyle.top;
            overlay.style.left = sc.overlayStyle.left;
            overlay.style.width = sc.overlayStyle.width;
            overlay.style.height = sc.overlayStyle.height;
            overlay.style.backgroundColor = card.hex;
            overlay.style.backgroundImage = \`url('\${card.image}')\`;
            overlay.style.backgroundBlendMode = card.category === 'wood' ? 'multiply' : 'normal';

            grids.style.top = sc.overlayStyle.top;
            grids.style.left = sc.overlayStyle.left;
            grids.style.width = sc.overlayStyle.width;
            grids.style.height = sc.overlayStyle.height;

            // Handle grid structures for grille/interior
            if (sc.type === 'grille') {
                grids.classList.remove('hidden');
                grids.className = "absolute transition-all duration-300 pointer-events-none grid grid-cols-12 gap-1.5";
                grids.innerHTML = Array.from({ length: 12 }).map(() => \`
                    <div class="h-full border-x border-stone-950/20 shadow-sm" style="background-color: \${card.hex}; background-image: url('\${card.image}'); background-size: cover; opacity: 0.9;"></div>
                \`).join('');
                overlay.style.opacity = '0.15'; // Low opacity for base overlay
            } else if (sc.type === 'interior') {
                grids.classList.remove('hidden');
                grids.className = "absolute transition-all duration-300 pointer-events-none flex flex-col justify-between";
                grids.innerHTML = Array.from({ length: 8 }).map(() => \`
                    <div class="w-full h-2 border-y border-black/30 shadow-md" style="background-color: \${card.hex}; background-image: url('\${card.image}'); background-size: cover; opacity: 0.95;"></div>
                \`).join('');
                overlay.style.opacity = '0.15';
            } else {
                grids.innerHTML = '';
                grids.classList.add('hidden');
                overlay.style.opacity = '0.85'; // Solid plate opacity for doors
            }
        }

        // SWATCH SAMPLE CART CONTROLLERS
        function updateCartButtonState() {
            const btn = document.getElementById('swatch-cart-btn');
            if (!btn) return;

            const isInCart = selectedSamplesList.some(id => id === activeCardId);
            if (isInCart) {
                btn.className = "w-full py-3.5 bg-brand-accent/20 border border-brand-accent text-brand-dark font-bold text-xs tracking-widest uppercase flex items-center justify-center gap-2 rounded-sm transition-all cursor-pointer";
                btn.innerHTML = \`
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="text-brand-accent"><polyline points="20 6 9 17 4 12"/></svg>
                    <span>已加入樣品索取清單 (\${selectedSamplesList.length})</span>
                \`;
            } else {
                btn.className = "w-full py-3.5 bg-brand-dark hover:bg-stone-800 text-white font-bold text-xs tracking-widest uppercase flex items-center justify-center gap-2 rounded-sm transition-all cursor-pointer";
                btn.innerHTML = \`
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shopping-cart"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>
                    <span>將該色卡加入免費樣品寄送單</span>
                \`;
            }
        }

        function toggleActiveSample() {
            const index = selectedSamplesList.indexOf(activeCardId);
            if (index > -1) {
                selectedSamplesList.splice(index, 1);
            } else {
                selectedSamplesList.push(activeCardId);
            }

            updateCartButtonState();
            updateSampleCartUI();
            renderCatalogGrid(); // Update catalog button badges as well
        }

        function removeSample(id) {
            selectedSamplesList = selectedSamplesList.filter(item => item !== id);
            updateCartButtonState();
            updateSampleCartUI();
            renderCatalogGrid();
        }

        // RE-RENDER ALL FLOATING CART AND BOTTOM BASKET WIDGETS
        function updateSampleCartUI() {
            const count = selectedSamplesList.length;
            
            // 1. Update floating badge
            const badge = document.getElementById('floating-cart-badge');
            const bCount = document.getElementById('floating-cart-count');
            if (badge && bCount) {
                bCount.innerText = count;
                if (count > 0) {
                    badge.classList.remove('hidden');
                } else {
                    badge.classList.add('hidden');
                }
            }

            // 2. Update form basket
            const panel = document.getElementById('contact-cart-panel');
            const list = document.getElementById('contact-cart-list');
            if (panel && list) {
                if (count > 0) {
                    panel.classList.remove('hidden');
                    list.innerHTML = selectedSamplesList.map(id => {
                        const card = COLOR_CARDS.find(c => c.id === id);
                        if (!card) return '';
                        return \`
                            <span class="inline-flex items-center gap-1.5 bg-stone-900 border border-stone-800 text-stone-200 px-3 py-1.5 text-xs rounded-sm">
                                <span class="w-2.5 h-2.5 rounded-full" style="background-color: \${card.hex}"></span>
                                <strong>\${card.code}</strong> - \${card.name}
                                <button type="button" class="text-stone-500 hover:text-red-400 font-bold ml-1 cursor-pointer focus:outline-none" onclick="removeSample('\${card.id}')">✕</button>
                            </span>
                        \`;
                    }).join('');
                } else {
                    panel.classList.add('hidden');
                    list.innerHTML = '';
                }
            }
        }

        // RENDER CATALOG GRID SECTION
        let catalogFilter = 'all';
        function renderCatalogGrid() {
            const grid = document.getElementById('catalogGrid');
            if (!grid) return;

            const filtered = catalogFilter === 'all' 
                ? COLOR_CARDS 
                : COLOR_CARDS.filter(c => c.category === catalogFilter);

            grid.innerHTML = filtered.map(card => {
                const isSelected = selectedSamplesList.includes(card.id);
                const btnClass = isSelected 
                    ? 'bg-brand-accent/25 border border-brand-accent/40 text-brand-dark'
                    : 'bg-brand-dark hover:bg-stone-800 text-white';
                const btnText = isSelected ? '✓ 已加樣品車' : '+ 加入樣品送交';

                return \`
                    <div class="bg-white border border-stone-200 rounded-sm p-5 shadow-xs hover:shadow-md transition-all flex flex-col justify-between">
                        <div>
                            <div class="h-44 rounded-sm overflow-hidden border border-stone-100 relative mb-4">
                                <div class="absolute inset-0 bg-cover bg-center" style="background-image: url('\${card.image}');"></div>
                                <span class="absolute top-3 left-3 text-[9px] uppercase tracking-widest font-mono font-bold bg-[#A69177]/90 text-white px-2 py-0.5 rounded-xs">\${card.type}</span>
                                <span class="absolute top-3 right-3 text-xs font-mono text-white bg-black/60 font-bold px-2 py-0.5 rounded-xs">\${card.code}</span>
                            </div>
                            <h4 class="text-base font-bold text-stone-900 tracking-tight">\${card.name}</h4>
                            <p class="text-xs text-stone-500 mt-1.5 font-sans leading-relaxed min-h-[48px]">\${card.desc}</p>
                        </div>
                        
                        <div>
                            <div class="grid grid-cols-2 gap-4 bg-[#FAF9F6] rounded-sm p-3 border border-stone-150 mt-4 text-[10px] font-sans">
                                <div>
                                    <span class="text-stone-400 block text-[9px] font-bold">預期亮澤</span>
                                    <span class="text-stone-700 font-semibold">\${card.gloss}</span>
                                </div>
                                <div>
                                    <span class="text-stone-400 block text-[9px] font-bold">品質保證</span>
                                    <span class="text-brand-accent font-bold">\${card.durability}</span>
                                </div>
                            </div>
                            
                            <!-- Select toggle button -->
                            <button class="w-full mt-4 py-3 text-xs font-bold uppercase tracking-wider rounded-sm transition-all cursor-pointer \${btnClass}" onclick="toggleCatalogSample('\${card.id}')">
                                \${btnText}
                            </button>
                        </div>
                    </div>
                \`;
            }).join('');
        }

        function filterCatalog(category) {
            catalogFilter = category;
            
            // Update tabs CSS
            ['all', 'wood', 'coating'].forEach(cat => {
                const tab = document.getElementById('catalog-tab-' + cat);
                if (tab) {
                    if (cat === category) {
                        tab.className = "px-4 py-2 bg-brand-dark text-white text-xs font-bold uppercase transition-colors tracking-wider rounded-sm cursor-pointer";
                    } else {
                        tab.className = "px-4 py-2 bg-stone-100 hover:bg-stone-200 text-stone-600 text-xs font-bold uppercase transition-colors border border-stone-200/60 tracking-wider rounded-sm cursor-pointer";
                    }
                }
            });

            renderCatalogGrid();
        }

        function toggleCatalogSample(id) {
            const index = selectedSamplesList.indexOf(id);
            if (index > -1) {
                selectedSamplesList.splice(index, 1);
            } else {
                selectedSamplesList.push(id);
            }
            updateCartButtonState();
            updateSampleCartUI();
            renderCatalogGrid();
        }

        // FORM SUBMISSION HANDLER
        function handleFormSubmit(event) {
            event.preventDefault();

            // Compile samples string
            let selectedCodes = [];
            selectedSamplesList.forEach(id => {
                const c = COLOR_CARDS.find(card => card.id === id);
                if (c) selectedCodes.push(c.code + " (" + c.name + ")");
            });

            const company = document.getElementById('form-company').value;
            const name = document.getElementById('form-name').value;
            const phone = document.getElementById('form-phone').value;
            const email = document.getElementById('form-email').value;
            const desc = document.getElementById('form-desc').value;

            // Generate feedback text in the success window
            console.log("=== SUBMISSION SUCCESS ===");
            console.log("公司: " + company);
            console.log("聯絡人: " + name);
            console.log("電話: " + phone);
            console.log("Email: " + email);
            console.log("說明: " + desc);
            console.log("申請樣品: ", selectedCodes);

            // Display success window
            const successState = document.getElementById('contactSuccessState');
            if (successState) {
                successState.classList.remove('hidden');
            }
        }

        // RESET CONTACT FORM
        function resetContactForm() {
            const successState = document.getElementById('contactSuccessState');
            const contactForm = document.getElementById('standaloneContactForm');
            if (successState) {
                successState.classList.add('hidden');
            }
            if (contactForm) {
                contactForm.reset();
            }
            selectedSamplesList = [];
            updateCartButtonState();
            updateSampleCartUI();
            renderCatalogGrid();
        }
    </script>
</body>
</html>`;
