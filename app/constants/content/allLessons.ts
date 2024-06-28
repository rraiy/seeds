interface Item {
  imgPath: string;
  imgPosition: 'right' | 'left';
  alt: string;
  iconPath: string;
  title: string;
  level: string;
  knowledgeLevel: number;
  introduce: string;
}

const ALL_LESSONS: Item[] = [
  {
    imgPath: '/images/lessons/green_lesson.png',
    imgPosition: 'left',
    alt: '肌力與體能課程',
    iconPath: '/images/universe/green_planet.png',
    title: '肌力與體能課程',
    level: '低 - 高',
    knowledgeLevel: 3,
    introduce: '由企業或私人自組的自由重量團體課程，最少四人一班，一期八堂、每堂一小時。課程規範同自由重量團體課程。',
  },
  {
    imgPath: '/images/lessons/red_lesson.png',
    imgPosition: 'right',
    alt: '肌力與體能課程',
    iconPath: '/images/universe/red_planet.png',
    title: '回到肌礎',
    level: '低 - 高',
    knowledgeLevel: 1,
    introduce: '由企業或私人自組的自由重量團體課程，最少四人一班，一期八堂、每堂一小時。課程規範同自由重量團體課程。',
  },
  {
    imgPath: '/images/lessons/green_lesson.png',
    imgPosition: 'left',
    alt: '肌力與體能課程',
    iconPath: '/images/universe/orange_planet.png',
    title: '回到肌礎',
    level: '低 - 高',
    knowledgeLevel: 1,
    introduce: '由企業或私人自組的自由重量團體課程，最少四人一班，一期八堂、每堂一小時。課程規範同自由重量團體課程。',
  },
  {
    imgPath: '/images/lessons/red_lesson.png',
    imgPosition: 'right',
    alt: '肌力與體能課程',
    iconPath: '/images/universe/blue_planet.png',
    title: '回到肌礎',
    level: '低 - 高',
    knowledgeLevel: 1,
    introduce: '由企業或私人自組的自由重量團體課程，最少四人一班，一期八堂、每堂一小時。課程規範同自由重量團體課程。',
  },
];

export default ALL_LESSONS;
