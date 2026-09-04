export const homeContent = {
  heroTitle: '在海邊，遇見盼望。',
  heroDescription: '一群在高雄生活的人，和你一起吃飯、提問、認識耶穌。無論你熟悉教會，或只是有點好奇，都歡迎來。',
};

export const siteDetails = {
  name: '灣 Hope',
  address: '高雄市鼓山區哨船街87號',
  mapUrl: 'https://www.google.com/maps/search/?api=1&query=%E9%AB%98%E9%9B%84%E5%B8%82%E9%BC%93%E5%B1%B1%E5%8D%80%E5%93%A8%E8%88%B9%E8%A1%9787%E8%99%9F',
};

export const weeklyGathering = {
  category: '週末聚會',
  name: '崇拜聚會',
  day: '週六',
  time: '14:30–16:00',
  venue: siteDetails.address,
};

export const aboutContent = {
  story: [
    `${siteDetails.name} 從一個很簡單的盼望開始：在高雄的港邊，有一個地方能讓人放心靠近信仰，也放心帶著還沒整理好的自己。`,
    '我們是一群來自校園與城市不同角落的人。透過崇拜聚會、小組、餐桌與日常陪伴，一起學習跟隨耶穌，也學習成為彼此與城市的好鄰舍。',
  ],
  values: [
    { number: '01', title: '真實，比完美重要', description: '你不需要先整理好自己。疑問、疲累與不確定，都可以帶進關係裡。' },
    { number: '02', title: '關係，是信仰的形狀', description: '我們重視一起吃飯、互相傾聽，以及在生活需要裡彼此陪伴。' },
    { number: '03', title: '盼望，要走進城市', description: '信仰不只在聚會中，也在校園、職場與社區裡，成為具體的愛。' },
  ],
};

export const gatherings = [
  {
    category: '週間聚會',
    name: '中山學園團契',
    day: '週三',
    time: '19:00–20:30',
    venue: siteDetails.address,
  },
  {
    category: '週間聚會',
    name: '宣讀聖經',
    day: '週五',
    time: '12:00–13:00',
    venue: siteDetails.address,
  },
  weeklyGathering,
];

export const contactContent = {
  email: 'nsysufmc@gmail.com',
  emailUrl: 'mailto:nsysufmc@gmail.com',
  facebook: {
    label: '灣HOPE',
    url: 'https://www.facebook.com/NSYSUFMC',
  },
  instagram: {
    label: '灣HOPE',
    url: 'https://www.instagram.com/nsysufmc/',
  },
  address: siteDetails.address,
  mapUrl: siteDetails.mapUrl,
};

export const siteNavigation = [
  { href: '/about', label: '教會介紹' },
  { href: '/gatherings', label: '聚會資訊' },
  { href: '/sermons', label: '講道' },
  { href: '/articles', label: '神學文章' },
  { href: '/events', label: '活動' },
  { href: '/contact', label: '聯絡我們' },
];
