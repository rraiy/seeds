interface SubLesson {
  name: string;
  introduction: string;
  baggage: string[];
  user: string;
  caveat: string[];
  imgPath: string[];
}

interface LessonDetail {
  title: string;
  iconPath: string;
  subLessons: SubLesson[];
}

interface iLessonsDetail {
  'fitness-and-strength': LessonDetail;
  // 'trail-running'?: LessonDetail;
}

export type lessonType = keyof iLessonsDetail;

const LessonsDetail: iLessonsDetail = {
  'fitness-and-strength': {
    title: '肌力與體能',
    iconPath: '/images/universe/green_planet.png',
    subLessons: [
      {
        name: '肌力與體能',
        introduction:
          '為每堂一小時的實作訓練課程，由喜茲體能的專業肌力體能教練帶領熱身、主動作及補強練習。練習動作包含：下肢蹲、硬舉系列、上肢垂直推拉、上肢水平推拉等系列動作。',
        baggage: ['水壺', '室內專用訓練鞋', '毛巾'],
        user: '所有人',
        caveat: [
          '續報優惠價格需為連續月份，隔月報名需重新累計。',
          '重量訓練團體課，四人開班，採月費制，每堂一小時。如當月份有五週，第五堂照常上課且不加收費用。',
          '為維持上課品質，團體課選定班別無法調課或調時段，學員遲到、請假、缺課恕不補課。',
          '每月第三週為舊生續報週，舊生享有優先續課權利，之後開放新生報名，並以完成報名手續(填寫報名表並匯款)之先後順序為依據。',
          '課程開課後，恕不退費。',
          '因特殊的健康狀況改變，經醫師診斷證明無法訓練而需退費者，請保留原發票，如無發票恕無法辦理退費。',
          '如因意外或特殊的健康狀況變化需暫停課程，可憑醫師診斷證明，儘速通知小編協助辦理。',
          '唯復課時亦須憑醫師證明始得復課。',
        ],
        imgPath: [
          '/images/lessons/detail/lesson-fitness-1.jpg',
          '/images/lessons/detail/lesson-fitness-1.jpg',
          '/images/lessons/detail/lesson-fitness-1.jpg',
        ],
      },
      {
        name: '肌力與體能',
        introduction:
          '為每堂一小時的實作訓練課程，由喜茲體能的專業肌力體能教練帶領熱身、主動作及補強練習。練習動作包含：下肢蹲、硬舉系列、上肢垂直推拉、上肢水平推拉等系列動作。',
        baggage: ['水壺', '室內專用訓練鞋', '毛巾'],
        user: '所有人',
        caveat: [
          '續報優惠價格需為連續月份，隔月報名需重新累計。',
          '重量訓練團體課，四人開班，採月費制，每堂一小時。如當月份有五週，第五堂照常上課且不加收費用。',
          '為維持上課品質，團體課選定班別無法調課或調時段，學員遲到、請假、缺課恕不補課。',
          '每月第三週為舊生續報週，舊生享有優先續課權利，之後開放新生報名，並以完成報名手續(填寫報名表並匯款)之先後順序為依據。',
          '課程開課後，恕不退費。',
          '因特殊的健康狀況改變，經醫師診斷證明無法訓練而需退費者，請保留原發票，如無發票恕無法辦理退費。',
          '如因意外或特殊的健康狀況變化需暫停課程，可憑醫師診斷證明，儘速通知小編協助辦理。',
          '唯復課時亦須憑醫師證明始得復課。',
        ],
        imgPath: [
          '/images/lessons/detail/lesson-fitness-1.jpg',
          '/images/lessons/detail/lesson-fitness-1.jpg',
          '/images/lessons/detail/lesson-fitness-1.jpg',
        ],
      },
    ],
  },
};

export default LessonsDetail;
