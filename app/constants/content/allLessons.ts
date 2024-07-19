interface Item {
  imgPath: string;
  imgPosition: 'right' | 'left';
  alt: string;
  iconPath: string;
  title: string;
  level: string;
  knowledgeLevel: number;
  introduction: string;
  sub: string[];
}

/**
 * 課程名稱對照
 * 肌力與體能 fitnessAndStrength fitness-and-strength
 */

const ALL_LESSONS: Item[] = [
  {
    imgPath: '/images/lessons/yellow_lesson.png',
    imgPosition: 'left',
    alt: '肌力與體能訓練課程',
    iconPath: '/images/universe/yellow_planet.png',
    title: '肌力與體能訓練課程',
    level: '低 - 高',
    knowledgeLevel: 3,
    introduction:
      '此系列課程的目標是通過專業的指導與系統化的訓練，讓你能夠有效且安全地達成目標。私人教練課程是專為希望獲得一對一專業指導的學員設計；而喜茲最受歡迎的肌力體能團體課程，適合那些喜歡與他人一起運動和分享成就的人，在擁有豐富團課經驗的教練引導下，安全且有效率地提升身體素質，還能享受與夥伴共同進步的樂趣。',

    sub: ['(1) 私人教練課', '(2) 團體課(每班4~9人)'],
  },
  {
    imgPath: '/images/lessons/orange_lesson.png',
    imgPosition: 'right',
    alt: '越野跑訓練與備賽課程',
    iconPath: '/images/universe/orange_planet.png',
    title: '越野跑訓練與備賽課程',
    level: '低 - 高',
    knowledgeLevel: 1,
    introduction:
      '此系列課程將帶領你了解台灣越野跑的精髓，結合專業的肌力訓練技巧，目的在提升你的跑步效能和耐力。在訓練營中，你將學習到如何在不同地形中進行有效的跑步技巧，同時增強肌力和核心穩定性，以應對充滿挑戰的山林越野路線。無論您是新手還是有經驗的越野跑者，本課程都將為您提供寶貴的越野跑知識與練習技巧，幫助您在越野跑領域中取得更大的進步和成積。',
    sub: [
      '(1) Sky Hunter 越野跑與肌力訓練營 ft.越野王者 周青',
      '(2) 士林越野官方訓練營 ft.中華民國越野跑協會',
      '(3) 給越野跑者的肌力體能研習(四週共6小時課程)',
      '(4) 101登高賽肌力訓練營',
    ],
  },
  {
    imgPath: '/images/lessons/blue_lesson.png',
    imgPosition: 'left',
    alt: '喜茲體能研習/教練培訓課程',
    iconPath: '/images/universe/blue_planet.png',
    title: '喜茲體能研習/教練培訓課程',
    level: '低 - 高',
    knowledgeLevel: 1,
    introduction:
      '此系列課程旨在提升學員對於肌力體能訓練及身體力學的理解與應用能力；無論您是希望提升運動員表現、提升個人教學技能，或是深入研究運動科學的專業人士，本系列課程將為您提供寶貴的知識與教學技巧，豐富您在體能訓練領域中的學養。',
    sub: [
      '(1) 回到肌礎：肌力訓練基礎課程(四週共8小時課程)',
      '(2) 回到肌礎：硬舉與髖絞鏈篇(單日共3小時課程)',
      '(3) 強韌力：解剖肌動學力量復原課程',
    ],
  },
];

export default ALL_LESSONS;
