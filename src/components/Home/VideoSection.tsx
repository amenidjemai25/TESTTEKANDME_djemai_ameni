import teaser from "../../assets/home/teas.mp4";
import castor from "../../assets/home/castor.png";
import { H3, Text } from "../Elements/Text";
import Button from "../Elements/Button";
import PlayIcon from "../../assets/icons/PlayIcon";
import { useRef, useState } from "react";
import YoutubeIcon from "../../assets/icons/YoutubeIcon";

export default function VideoSection() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<any>();
  function handlePlay() {
    if (videoRef.current && videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      // Video is already playing
      setIsPlaying(false);
    }
  }
  return (
    <div className="py-36 flex flex-col justify-center items-center">
      <H3>Une construction unique au monde</H3>
      <div className="flex gap-6 items-center mb-24">
        <Text>Découvrez la villa Carmelha à Monaco 🇲🇨</Text>
        <Button name="voir le projet" color="bg-black-100" size="sm" />
      </div>
      <div className="h-3/4 w-2/4 relative">
        <video
          className="  object-cover -z-50"
          ref={videoRef}
          controls={isPlaying}
          muted={false}
        >
          <source type="video/mp4" src={teaser} />
        </video>
        <img
          src={castor}
          className="absolute right-0 top-0 rotate-[40deg] translate-x-52 -z-50"
        />
        {!isPlaying && (
          <div className="absolute right-0 top-0 bg-black-75 w-full justify-center items-center flex h-full ">
            <PlayIcon className="cursor-pointer" onClick={handlePlay} />
          </div>
        )}
      </div>
      <div className="flex gap-2 items-center mt-28 border-[1px] border-black-12  border-b-[3px] px-4 py-3">
        <YoutubeIcon />
        <Text style={{ fontFamily: "Orbitron", fontSize: "14px" }}>
          VOIRE NOTRE CHAINE YOUTUBE
        </Text>
      </div>
    </div>
  );
}
