import teaser from "../../assets/home/teas.mp4";
import { H3, H4, Text } from "../Elements/Text";
import HomeContainer from "./HomeContainer";

export default function Hero() {
  return (
    <div className="h-[calc(100vh-72px)] pt-[72px] ">
      <div className="relative">
        <div
          id="video-overlay"
          className="bg-black-75 h-[calc(100vh-72px)]  absolute z-10 bottom-0- w-full"
        >
          <div className=" pb-24 flex flex-col  h-full justify-end">
            <HomeContainer>
              <div>
                <H4 className="text-yellow flex gap-4">
                  <p>&#9632;</p>30 ans d’activité à monaco
                </H4>
              </div>
              <H3 className="text-white">
                L'Art de la Couverture : Notre <br /> Monde en toiture
              </H3>
              <Text className="text-white my-4">
                Aenean sed adipiscing diam donec adipiscing. Aenean euismod
                <br />
                elementum nisi quis eleifend quam. Lacus suspendisse faucibus
                <br />
                interdum posuere lorem.
              </Text>
            </HomeContainer>
          </div>
        </div>
        <video
          autoPlay
          muted
          loop
          className="h-[calc(100vh-72px)] w-full object-cover -z-10 "
        >
          <source type="video/mp4" src={teaser} />
        </video>
      </div>
    </div>
  );
}
