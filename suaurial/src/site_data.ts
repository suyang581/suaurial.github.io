import { Image } from "./components/gallery/gallery";

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
        url: "https://live.staticflickr.com/65535/52332186991_9aa9cccf21_o.jpg",
        alt: "Rush Hour",
      },
      {
        url: "https://live.staticflickr.com/65535/52332481359_cbee3524d9_o.jpg",
        alt: "Cocineras Tradicionales de Oaxaca",
      },
      {
        url: "https://live.staticflickr.com/65535/52331224637_c5470520fe_o.jpg",
        alt: "Weaving",
      },
      {
        url: "https://live.staticflickr.com/65535/52332423913_030ab43ee9_o.jpg",
        alt: "Las Brujas",
      },
      {
        url: "https://live.staticflickr.com/65535/52332485494_34a4c762f7_c.jpg",
        alt: "Museo Nacional de Antropología",
      },
    ],
  },
  {
    name: "Still Life",
    url: "/still-life",
    images: [
      {
        url: "https://live.staticflickr.com/65535/52331217492_9b92710458_o.jpg",
        alt: "Hand holding match",
      },
      {
        url: "https://live.staticflickr.com/65535/52332475669_65d0b97973_o.jpg",
        alt: "Candle",
      },
    ],
  },
];
