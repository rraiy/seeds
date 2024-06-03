const LESSON_KEY = ['physical', 'advanced', 'running'] as const;

type LessonKey = (typeof LESSON_KEY)[number];

interface LESSONS_INFO_ITEM {
  name: string;
  description: string;
}

type LESSONS_INFO = {
  [key in LessonKey]: LESSONS_INFO_ITEM;
};

export default LESSONS_INFO;
