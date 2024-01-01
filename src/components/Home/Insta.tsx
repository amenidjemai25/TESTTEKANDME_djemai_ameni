import img9 from "../../assets/home/img9.png";
import { carouselSettings, carouselSettings2 } from "../../libs/carousel.conf";
import Carousel from "../Elements/slider/Carousel";

export default function Insta() {
  return (
    <div className="bg-white pb-96">
      <Carousel {...carouselSettings2}>
        {[...Array(8)].map((item) => (
          <img
            key={item}
            src={img9}
            style={{
              width: "288px",
              height: "289px",
              margin: "0 10px 0 0",
            }}
          />
        ))}
      </Carousel>
    </div>
  );
}
