import Carousel from "react-multi-carousel";

const responsive = {
  desktop: {
    breakpoint: { max: 4000, min: 576 },
    items: 6,
  },
  mobile: {
    breakpoint: { max: 576, min: 0 },
    items: 4,
  },
};

interface IScrollableBar {
  children: React.ReactNode;
}

function ScrollableBar({ children }: IScrollableBar) {
  return (
    <Carousel containerClass="w-full flex gap-2" responsive={responsive}>
      {children}
    </Carousel>
  );
}

export default ScrollableBar;
