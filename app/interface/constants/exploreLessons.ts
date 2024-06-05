// TODO: remove
// const LESSON_KEY = ['physical', 'advanced', 'running'] as const;

// type LessonKey = (typeof LESSON_KEY)[number];

export interface PopupContent {
  name: string;
  description: string;
  subItem: string[];
}

interface Planet {
  className: string;
  src: string;
  width: number;
  height: number;
  alt: string;
}

interface PlanetInfo {
  popup: PopupContent;
  planet: Planet;
}

export default PlanetInfo;
