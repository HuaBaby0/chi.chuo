/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface ColorCard {
  id: string;
  code: string;
  name: string;
  category: 'wood' | 'coating';
  type: string; // e.g., '黃金柚木', '氟碳烤漆', '粉體塗裝'
  hex: string; // Background color approximation
  image: string; // Close-up texture
  gloss: string; // '消光', '半啞光', '亮光', '金屬亮'
  durability: string; // e.g., '15年超耐候', '10年耐候'
  desc: string;
}

export interface ProjectCase {
  id: string;
  title: string;
  location: string;
  category: 'facade' | 'grille' | 'interior' | 'door';
  tag: string;
  image: string;
  materials: string[];
  finishing: string;
  desc: string;
}

export interface FAQ {
  question: string;
  answer: string;
  category: string;
}

export interface ProductInfo {
  id: string;
  title: string;
  enTitle: string;
  subtitle: string;
  desc: string;
  specs: string[];
  features: { icon: string; title: string; text: string }[];
  image: string;
}

export const PRODUCTS: ProductInfo[] = [
  {
    id: 'wood-transfer',
    title: '真空木紋轉印系列',
    enTitle: 'Sublimation Wood Finish',
    subtitle: '天然之美，金屬之軀',
    desc: '引進國外尖端「真空熱滲透轉印技術」，將高解析木紋紋理以高溫高壓融合至經化學前處理之鋁合金或鋼材基底。外觀高仿天然原木，無節疤，觸感寫實，且具備金屬的高剛性、防火與極佳的戶外耐候防腐防白蟻性能。是現代低碳綠建材、格柵遮陽、景觀外牆的頂級首選。',
    specs: [
      '基材規格：高強度 6063-T5 鋁擠型、熱浸鍍鋅鋼板、鋁單板等',
      '膜厚標準：聚酯基粉體塗裝基礎層 > 60μm，防紫外線木紋保護層 > 40μm',
      '測試標準：耐鹽霧測試超過 2000 小時，抗UV光老化檢測達 AAMA 2604 規格',
      '自潔標準：塗層具備極低表面能，大氣髒污不易附著，可透過雨水自潔'
    ],
    features: [
      {
        icon: 'Shield',
        title: '極高物理屏障',
        text: '不開裂、不變形、不退色，完全克服原木在戶外易潮濕、霉變、蟲蛀、日曬開裂的缺陷。'
      },
      {
        icon: 'Leaf',
        title: '百分之百環保',
        text: '無甲醛釋放，全金屬可100%回收，減緩森林砍伐，是通過國家綠建材認證與環境友善材質。'
      },
      {
        icon: 'Wrench',
        title: '超低維護成本',
        text: '表面經特殊抗靜電處置，不易堆積灰塵。清水沖洗即可煥然一新，省去原木長年刷漆保養開銷。'
      },
      {
        icon: 'Sparkles',
        title: '物理防蝕抗刮',
        text: '經精密表面紋路處理，其塗層結合強度高。防霉變、不懼白蟻侵蝕，具備極佳生命週期。'
      }
    ],
    image: 'https://images.unsplash.com/photo-1541123437800-1bb1317badc2?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'fluorocarbon-coating',
    title: '高端氟碳烤漆系列',
    enTitle: 'Fluorocarbon (PVDF) Coating',
    subtitle: '極致耐候，持久如新',
    desc: '採用國際最高規格 PPG / Kynar 500 等級氟碳樹脂（聚偏二氟乙烯，含有高達70%氟碳鍵樹脂），經過高溫熔融固化烘烤。其特殊的化學共價鍵結構能賦予塗層無與倫比的抗紫外線、抗酸雨、防鹽土、抗大氣污染與自潔防污性。是地標級超高層大樓帷幕、沿海防潮建材、橋樑的首選塗裝技術。',
    specs: [
      '標準漆膜：二塗系統（底漆+面漆）> 30μm；三塗系統（底漆+面漆+清漆）> 45μm',
      '表面硬度：中華民國國家標準／美標 AAMA 2605，鉛筆硬度 ≥ H',
      '附著力測試：百格測試達 5B 無剝落、無氣泡',
      '超強耐衝擊：無塗層龜裂及剝離，可承受各種複雜精密的鈑金成型再加工'
    ],
    features: [
      {
        icon: 'Layers',
        title: '20年卓越耐候',
        text: '在極端氣候、烈日、颱風與融雪鹽侵蝕下，可確保20年以上不產生明顯粉化、退色與失去光澤。'
      },
      {
        icon: 'CloudRain',
        title: '極佳超耐自潔',
        text: '塗膜表面能極低，水滴能帶走絕大部分堆積灰塵。不易吸附PM2.5、廚房等油脂污染，維護簡單。'
      },
      {
        icon: 'Sparkles',
        title: '金屬與多重光澤',
        text: '支援各種香檳金、亮銀、古銅金屬色，以及多種消光啞度等質感細緻的視覺表現。'
      },
      {
        icon: 'Droplet',
        title: '防銹耐蝕屏障',
        text: '高度抗酸成份（抗H2SO4、HNO3、HCl），對於沿海高鹽霧氣候具備極強的抗電化學腐蝕作用。'
      }
    ],
    image: 'https://images.unsplash.com/photo-1621905252507-b354bc25edac?auto=format&fit=crop&q=80&w=1200'
  }
];

export const COLOR_CARDS: ColorCard[] = [
  // Wood Grain Series
  {
    id: 'wd-01',
    code: 'WD-201',
    name: '黃金皇家柚木',
    category: 'wood',
    type: '真空木紋轉印',
    hex: '#D7A15C',
    image: 'https://images.unsplash.com/photo-1541123437800-1bb1317badc2?auto=format&fit=crop&q=80&w=600',
    gloss: '消光 5%',
    durability: '15年級超耐候',
    desc: '最受歡迎的木紋色調。呈現尊貴溫潤的暖黃金棕色澤，木理筆直勻稱，細微黑線交織，最適合用於別墅外牆格柵、門廳迎賓遮陽棚。'
  },
  {
    id: 'wd-02',
    code: 'WD-205',
    name: '雅典紅橡木',
    category: 'wood',
    type: '真空木紋轉印',
    hex: '#B26F40',
    image: 'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&q=80&w=600',
    gloss: '消光 8%',
    durability: '15年級超耐候',
    desc: '呈現溫暖高貴的紅褐色澤。豐富的山形山脈年輪紋理栩栩如生，為生硬的金屬帷幕增添了醇厚的人文大自然氣息。'
  },
  {
    id: 'wd-03',
    code: 'WD-312',
    name: '經典北美胡桃木',
    category: 'wood',
    type: '真空木紋轉印',
    hex: '#5C4436',
    image: 'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&q=80&w=600',
    gloss: '超細啞光 3%',
    durability: '20年旗艦耐候',
    desc: '低調輕奢的深褐色，紋理捲曲並帶有煙燻感。常用於高檔室內商場天花遮擋、屏風格柵、或是私人民宅陽台圍欄，展現內斂奢華感。'
  },
  {
    id: 'wd-04',
    code: 'WD-108',
    name: '北歐灰影白橡木',
    category: 'wood',
    type: '真空木紋轉印',
    hex: '#D6C8B5',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=600',
    gloss: '消光 5%',
    durability: '15年級超耐候',
    desc: '簡約冷調的灰白色。紋路清淡典雅，富含自然線條美，適合無印風、侘寂風、極簡現代風外觀格柵、圍牆大門。'
  },
  {
    id: 'wd-05',
    code: 'WD-401',
    name: '古殿碳燒松木',
    category: 'wood',
    type: '真空木紋轉印',
    hex: '#4A3B32',
    image: 'https://images.unsplash.com/photo-1531685250784-7569952593d2?auto=format&fit=crop&q=80&w=600',
    gloss: '消光 5%',
    durability: '15年級超耐候',
    desc: '復古碳化風格。帶有粗獷的松木大結疤與灰黑相間的火燒感，是日式禪風、溫泉別墅造景、網紅餐廳風格外圍擋的指定材料。'
  },
  {
    id: 'wd-06',
    code: 'WD-620',
    name: '深影黑檀木',
    category: 'wood',
    type: '真空木紋轉印',
    hex: '#2B2421',
    image: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&q=80&w=600',
    gloss: '半啞光 12%',
    durability: '20年旗艦耐候',
    desc: '極深沉接近墨黑的天然黑檀紋理。帶有細長金色木髓射線，低調尊貴，不易顯髒，主要用於高規格商辦大樓外立面和遮陽百葉。'
  },
  // Coatings Series
  {
    id: 'ct-01',
    code: 'RAL-9005_PVDF',
    name: '曜石消光黑',
    category: 'coating',
    type: '氟碳烤漆 (PVDF)',
    hex: '#1D1D1D',
    image: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&q=80&w=600',
    gloss: '超消光 2%',
    durability: '20年超自潔耐候',
    desc: '極致純粹的黑色。採用頂級超微細消光粒子，能極大降低眩光反光，是工業風外牆、高強度鋁合金隔網、大樓結構件頂級御用色。'
  },
  {
    id: 'ct-02',
    code: 'PVDF-8035',
    name: '極地太空銀亮',
    category: 'coating',
    type: '氟碳烤漆 (PVDF)',
    hex: '#C0C4C8',
    image: 'https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?auto=format&fit=crop&q=80&w=600',
    gloss: '金屬漆 35%',
    durability: '20年超耐候',
    desc: '帶有極細微亮銀雲母金屬粉的冷亮銀。陽光下不同角度會產生迷人的金屬偏光折射，展現前衛科技感美學。常施作於捷運站、高級帷幕。'
  },
  {
    id: 'ct-03',
    code: 'PVDF-香檳金',
    name: '皇家古典香檳金',
    category: 'coating',
    type: '氟碳烤漆 (PVDF)',
    hex: '#CFB997',
    image: 'https://images.unsplash.com/photo-1505673542670-a14e0f0f4533?auto=format&fit=crop&q=80&w=600',
    gloss: '金屬漆 25%',
    durability: '20年超耐候',
    desc: '柔和高檔的淡金色。相較於黃金色的艷俗，香檳金更散發出清雅的珠光柔和氣息，多用於頂級豪宅大陽台框線及造型雨遮。'
  },
  {
    id: 'ct-04',
    code: 'RAL-7016_PVDF',
    name: '軍規重裝深灰粉',
    category: 'coating',
    type: '氟碳烤漆 (PVDF)',
    hex: '#3D4147',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=600',
    gloss: '消光啞面 5%',
    durability: '20年級超自潔',
    desc: '歐洲頂尖建築事務所最愛的深色系。耐看大氣、自潔抗汙度極高，非常適合高塵量重劃區建築、外推遮陽格欄及金屬外包板。'
  },
  {
    id: 'ct-05',
    code: 'RAL-1015_POWD',
    name: '簡約純粹暖象牙白',
    category: 'coating',
    type: '高耐候粉體烤漆',
    hex: '#F2E8D7',
    image: 'https://images.unsplash.com/photo-1621905252507-b354bc25edac?auto=format&fit=crop&q=80&w=600',
    gloss: '半啞光 10%',
    durability: '10年級特耐候',
    desc: '帶微黃色澤的舒適暖白色，完全抗刺眼反光。施作於室內鋁框拉門、採光罩架、鋼製防重裝大門，溫馨宜人。'
  },
  {
    id: 'ct-06',
    code: 'RAL-8019_PVDF',
    name: '摩卡極致深古銅',
    category: 'coating',
    type: '氟碳烤漆 (PVDF)',
    hex: '#4A352F',
    image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=600',
    gloss: '消光 5%',
    durability: '20年級超耐候',
    desc: '沉穩內斂的黑夜摩卡古銅色，帶有高貴的重金屬感，其與自然色系混搭性最好，是許多五星級大飯店迎賓迴車道外頂棚的主指定色。'
  }
];

export const PROJECT_CASES: ProjectCase[] = [
  {
    id: 'case-01',
    title: '台北信義御邸豪宅建案',
    location: '台北市信義區',
    category: 'grille',
    tag: '格柵遮陽柱',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200',
    materials: ['6063-T5高剛性鋁擠型管', 'WD-201 黃金柚木真空轉印膜'],
    finishing: '真空高壓熱滲透消光木紋轉印',
    desc: '配合極簡與植物植生牆概念，於豪宅主建築面施作近1,200支木紋格柵遮陽翼。轉印木紋的仿真木理折射與原木完全相同，但在強烈西曬下經久不變色。'
  },
  {
    id: 'case-02',
    title: '科技巨擘南港總部研發大樓',
    location: '台北市南港區',
    category: 'facade',
    tag: '外牆金屬帷幕',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200',
    materials: ['3.0mm防颱鋁單板單元', 'RAL-7016 軍規深灰氟碳烤漆'],
    finishing: 'PPG三塗高溫定型消光氟碳烤漆（PVDF）',
    desc: '大面積金屬防風板採用高階消光氟碳重灰。由於大樓位於極端污染、酸雨較重的都會樞紐區域，PVDF的高耐候防腐及抗紫外線鍵為總部提供了完美的自潔和色彩長久維護。'
  },
  {
    id: 'case-03',
    title: '竹北高鐵新創產業孵化器園區',
    location: '新竹縣竹北市',
    category: 'grille',
    tag: '景觀穿透遮陽傘',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=1200',
    materials: ['多規格焊接鋼構大尺寸方管格柵', 'WD-312 北美胡桃木真空轉印膜'],
    finishing: '真空防撞強韌聚酯基層＋胡桃木紋熱昇華轉印',
    desc: '於半戶外大屋頂下採用流線形穿透鋁木鋼架，木理帶有幽靜的復古感，為園區的高科技冰冷感注入了柔美的大自然綠化氣氛。'
  },
  {
    id: 'case-04',
    title: '台中七期頂級商業辦公門廳',
    location: '台中市西屯區',
    category: 'interior',
    tag: '室內美化造型天花',
    image: 'https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?auto=format&fit=crop&q=80&w=1200',
    materials: ['金屬微孔吸音天花鋁板', 'WD-108 北歐灰影白橡木真空轉印膜'],
    finishing: '無甲醛綠建材白橡木紋烤漆轉印系統',
    desc: '大廳頂部採用微孔吸音金屬板並結合白橡木轉印。完美達成大空間的吸音聲學規範，又實現了北歐純淨質白木理，通過一級防火不燃與零甲醛安全測試。'
  },
  {
    id: 'case-05',
    title: '高雄港灣灣區遊艇碼頭別墅',
    location: '高雄市前鎮區',
    category: 'door',
    tag: '金屬防颱抗氣密防尊防重裝大門',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1200',
    materials: ['鍍鋅防震高強度鋼製主體', 'RAL-8019 摩卡極緻深古銅氟碳底面漆'],
    finishing: '重度防潮二塗摩卡古銅氟碳烤漆（PVDF）',
    desc: '近海第一排豪宅，鹽霧與水氣腐蝕性極強。大門及別墅氣密框架採用頂級二塗氟碳古銅，能有效隔離潮濕海風，長效維持典雅的金屬珍珠光澤。'
  }
];

export const FAQS: FAQ[] = [
  {
    category: '技術與耐候性',
    question: '木紋轉印金屬跟真正木材、木塑板（WPC）有什麼差別？',
    answer: '木紋轉印採用的是鋁合金或鍍鋅鋼等金屬，物理強度大、不開裂、不變形、且高抗震防風，能長效抗白蟻危害。一般原木在台灣潮濕氣候長年紫外線西曬下極易霉變腐朽、日曬龜裂，每隔兩年就需全面打磨、刷油漆保養，維護成本極高；而木塑板（塑木）在烈日曬久了有脆化、軟化、高溫起拱不平變形等缺點。木紋轉印完全兼備「實木逼真紋理」與「金屬的堅不可摧與零保養成本」。'
  },
  {
    category: '技術與耐候性',
    question: '「真空熱滲透木紋轉印」的色彩會在烈日曝曬下輕易褪色或剝落嗎？',
    answer: '不會的。我們的木紋轉印採用的是「熱昇華滲透原理」。先會在鋁材表面打底塗佈一層耐磨的高純度聚酯粉體，隨後包覆密封高解析度的防抗UV木紋墨膜紙，在200℃以上的高溫熔融爐內抽真空並高壓固化烤製。木紋油墨並非浮在表面，而是「滲透融合」入底層塗佈層中。因此即使長年日曬雨淋或被外物輕微刮磨，都不會產生像貼皮木膜或一般低階刷漆一樣的起泡粉化脫層，抗UV測試符合 AAMA 2604 國際耐天候規範。'
  },
  {
    category: '漆膜塗料選擇',
    question: '我們應該選擇「氟碳烤漆 (PVDF)」還是「粉體烤漆 (Powder Coating)」？',
    answer: '氟碳烤漆（PVDF）樹脂含有極高鍵能的 C-F 鍵（氟碳共價分子鏈），具備極端的強酸強鹼抗蝕與超強日曬耐候力，保證 15 - 20 年在戶外絕不產生明顯退色粉化。最適合用於沿海的高濕鹽腐蝕案場、別墅外牆、超高層外罩格柵帷幕；而粉體烤漆（Powder Coating）則因不含任何揮發性有機化合物（VOCs），對環境環保，且塗層硬度高、抗刮耐磨力強、色彩選擇極廣泛、性價比極高，非常適合施作於中層大樓景觀、室內天花、鋁窗大門、鐵件格柵隔屏。'
  },
  {
    category: '施工與採購',
    question: '你們可以為我們提供樣品、色紙卡或是客製化打樣服務嗎？',
    answer: '可以！您可以直接在我們的網頁色卡專區，點選您所喜歡的木紋紋路（黃金柚木、北美胡桃木、北歐白オーク等）或烤漆代號。將它們一鍵加入「樣品詢價車」並提交聯絡詳情，我們服務工程人員便會主動寄送「實體金屬色卡樣品」予建築設計師、業主或工程營造廠現場對色比擬。若是大型標案或特殊造型鋁造件，亦提供完整客製精準打樣流程。'
  },
  {
    category: '施工與採購',
    question: '產品加工長度與焊接施作限制如何？',
    answer: '目前我們最大規格的高溫轉印固化烤爐可容納「單支鋁料長度達 6.5 米（6500mm）」的大尺寸基材。對於長度特殊之格柵、金屬拉折鈑、異型板，我們的結構工程部可在出廠前為您完成精密的滿焊補強、轉折組裝前置作業。氟碳及木紋塗料在鋁鈑經裁剪折折彎鈑金加工後均能維持極高附著力，不受微幅折折龜裂影響。'
  }
];
