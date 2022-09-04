import { Image } from "./components/gallery/gallery";

// Mexico City + Oaxaca
import _DSF2214 from "./images/mexico-city-oaxaca/_DSF2214.jpg";
import _DSF2907 from "./images/mexico-city-oaxaca/_DSF2907.jpg";
import _DSF1692 from "./images/mexico-city-oaxaca/_DSF1692.jpg";
import _DSF1081 from "./images/mexico-city-oaxaca/_DSF1081.jpg";
import _DSF0509 from "./images/mexico-city-oaxaca/_DSF0509.jpg";

// Still Life
import _DSF6389 from "./images/still-life/_DSF6389.jpg";
import _DSF6440 from "./images/still-life/_DSF6440.jpg";

type GalleryData = {
  name: string;
  url: string;
  images: Image[];
};

export const galleries: GalleryData[] = [
  {
    name: "Mexico City + Oaxaca",
    url: "/mexico-city-oaxaca",
    images: [
      {
        url: _DSF2214,
        alt: "Rush Hour",
      },
      {
        url: _DSF2907,
        alt: "Cocineras Tradicionales de Oaxaca",
      },
      {
        url: _DSF1692,
        alt: "Weaving",
      },
      {
        url: _DSF1081,
        alt: "Las Brujas",
      },
      {
        url: _DSF0509,
        alt: "Museo Nacional de Antropología",
      },
    ],
  },
  {
    name: "Still Life",
    url: "/still-life",
    images: [
      {
        url: _DSF6389,
        alt: "Hand holding match",
      },
      {
        url: _DSF6440,
        alt: "Candle",
      },
    ],
  },
];
