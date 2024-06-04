const LESSON_KEY = ['physical', 'advanced', 'running'] as const;

type LessonKey = (typeof LESSON_KEY)[number];

interface LESSONS_INFO_ITEM {
  name: string;
  description: string;
}

type iLESSONS_INFO = {
  [key in LessonKey]: LESSONS_INFO_ITEM;
};

export default iLESSONS_INFO;
