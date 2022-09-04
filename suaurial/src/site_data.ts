import { Image } from "./components/gallery/gallery";

// Mexico City + Oaxaca
import oaxaca from "./images/mexico-city-oaxaca/oaxaca.jpg";
import cocineras from "./images/mexico-city-oaxaca/cocineras.jpg";
import weaving from "./images/mexico-city-oaxaca/weaving.jpg";
import brujas from "./images/mexico-city-oaxaca/brujas.jpg";
import museo from "./images/mexico-city-oaxaca/museo.jpg";
import golden from "./images/mexico-city-oaxaca/golden-hour.jpg";

// Still Life
import grapes from "./images/still-life/grapes.jpg";
import hand from "./images/still-life/hand.jpg";
import candle from "./images/still-life/candle.jpg";
import necklace from "./images/still-life/necklace.jpg";
import window from "./images/still-life/window.jpg";

// Elsewhere
import cafe from "./images/elsewhere/cafe.jpg";
import em from "./images/elsewhere/em.jpg";
import market from "./images/elsewhere/market.jpg";
import uganda from "./images/elsewhere/uganda.jpg";
import tam from "./images/elsewhere/mt-tam.jpg";
import eno from "./images/elsewhere/eno.jpg";

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
        url: oaxaca,
        alt: "Rush Hour",
      },
      {
        url: cocineras,
        alt: "Cocineras Tradicionales de Oaxaca",
      },
      {
        url: weaving,
        alt: "Weaving",
      },
      {
        url: brujas,
        alt: "Las Brujas",
      },
      {
        url: museo,
        alt: "Museo Nacional de Antropología",
      },
      {
        url: golden,
        alt: "Streets of Oaxaca",
      },
    ],
  },
  {
    name: "Still Life",
    url: "/still-life",
    images: [
      {
        url: grapes,
        alt: "Grapes",
      },
      {
        url: hand,
        alt: "Hand holding match",
      },
      {
        url: candle,
        alt: "Candle",
      },
      {
        url: necklace,
        alt: "Necklace",
      },
      {
        url: window,
        alt: "Window",
      },
    ],
  },
  {
    name: "Elsewhere",
    url: "/elsewhere",
    images: [
      {
        url: cafe,
        alt: "Cafe",
      },
      {
        url: em,
        alt: "Em",
      },
      {
        url: market,
        alt: "Jean Talon Market",
      },
      {
        url: uganda,
        alt: "Uganda",
      },
      {
        url: tam,
        alt: "Mt Tam",
      },
      {
        url: eno,
        alt: "Eno",
      },
    ],
  },
];
