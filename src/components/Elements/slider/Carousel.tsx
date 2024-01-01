import React, { HTMLAttributes, ReactNode, useRef } from "react";
import Chevron from "../../../assets/icons/Chevron";
import Slider from "react-slick";
import { carouselSettings } from "../../../libs/carousel.conf";

export default function Carousel({
  children,
  className,
}: {
  children: ReactNode;
  className?: HTMLAttributes<HTMLDivElement>["className"];
}) {
  const sliderRef = useRef<any>();
  const gotoNext = () => {
    sliderRef?.current?.slickNext();
  };
  const gotoPrev = () => {
    sliderRef?.current?.slickPrev();
  };
  const style = "relative w-2/3 mx-auto".concat(className || "");
  return (
    <div className={style}>
      <div
        onClick={gotoPrev}
        className="bg-black-75 w-fit border-2 border-white   absolute -left-5 top-[50%] backdrop-blur-[5px] z-50 cursor-pointer "
      >
        <Chevron />
      </div>
      <Slider {...carouselSettings} ref={sliderRef} className="w-full ">
        {children}
      </Slider>
      <div
        onClick={gotoNext}
        className="bg-black-75 w-fit border-2 border-white   absolute -right-4 top-[50%] backdrop-blur-[5px] z-50 cursor-pointer"
      >
        <Chevron position="right" />
      </div>
    </div>
  );
}
