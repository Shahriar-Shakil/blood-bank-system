import NextArrow from "@components/elements/carousel/NextArrow";
import PrevArrow from "@components/elements/carousel/PrevArrow";

export const carouselFullwidth = {
  dots: false,
  infinite: true,
  speed: 750,
  slidesToShow: 3,
  slidesToScroll: 3,
  arrows: true,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  lazyload: true,
  responsive: [
    {
      breakpoint: 1750,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        dots: true,
        arrows: false,
        infinite: false,
      },
    },

    {
      breakpoint: 1366,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 2,
        infinite: false,
        dots: true,
        arrows: false,
      },
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: false,
        dots: true,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: false,
        dots: true,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        dots: true,
        arrows: false,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        dots: true,
        arrows: false,
      },
    },
  ],
};
