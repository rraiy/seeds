export interface PopupContent {
  name: string;
  description: string;
  subItem: string[];
  link?: string;
}

interface Planet {
  className: string;
  src: string;
  width: number;
  height: number;
  alt: string;
  link?: string;
}

interface PlanetInfo {
  popup: PopupContent;
  planet: Planet;
}

export type tExploreInfo = {
  title: string;
};

export default PlanetInfo;
