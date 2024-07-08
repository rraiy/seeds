const ABOUT = {
  title: '關於喜茲',
  text: (
    <>
      <p className="mb-4">
        喜茲體能 Seedz Training
        不同於一般健身房或者重訓課程的強烈印象，我們提供「適合全年齡的肌力訓練」的專業課程規劃；並與中華民國越野跑協會合作，發展出最適合越野跑之體能訓練計畫。
      </p>
      <p>
        喜茲體能不只是教你正確的重量訓練動作，課程中會給予適當的體能基礎知識並結合實作能力，讓學員更認識自己的身體並學會運用。將肌力與體能訓練所帶來的效益延伸到健身房之外，打造適合所有人的肌力與體能訓練。
      </p>
    </>
  ),
};

export const ABOUT_CARDS = [
  {
    imgSrc: '/images/about/info.png',
    alt: 'Image 1',
    width: 360,
    height: 440,
    buttonText: '場館資訊',
    buttonColor: 'primary',
    buttonLink: '/location',
  },
  {
    imgSrc: '/images/about/coach.png',
    alt: 'Image 2',
    width: 360,
    height: 440,
    buttonText: '教練介紹',
    buttonColor: 'second',
    buttonLink: '/coach',
  },
  {
    imgSrc: '/images/about/fee.png',
    alt: '費用說明',
    width: 360,
    height: 440,
    buttonText: '費用說明',
    buttonColor: 'second',
    buttonLink: '/fee',
  },
];

export default ABOUT;
