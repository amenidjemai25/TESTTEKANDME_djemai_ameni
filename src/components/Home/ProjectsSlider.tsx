import charpente from "../../assets/home/charpente.png";
import zinguerie from "../../assets/home/zinguerie.png";
import façades from "../../assets/home/Façades.png";

import HomeIcon from "../../assets/icons/HomeIcon";
import HomeIcon2 from "../../assets/icons/HomeIcon2";
import BuildingIcon from "../../assets/icons/BuildingIcon";

import { H3, Text } from "../Elements/Text";

import Carousel from "../Elements/slider/Carousel";
import Button from "../Elements/Button";

const data: any = [
  {
    type: 1,
    title: "charpente",
    text: "Morbi tristique senectus et netus et malesuada fames ac turpis. Nisl rhoncus mattis rhoncus urna neque viverra. Ac orci phasellus egestas tellus rutrum tellus. Massa sapien faucibus et molestie ac feugiat sed lectus vestibulum. Vitae congue eu consequat ac felis donec. Sodales ut eu sem integer. Urna cursus eget nunc scelerisque. Sagittis nisl rhoncus mattis rhoncus urna.",
    img: charpente,
    Icon: HomeIcon,
  },
  {
    type: 2,
    title: "zinguerie",
    text: "Morbi tristique senectus et netus et malesuada fames ac turpis. Nisl rhoncus mattis rhoncus urna neque viverra. Ac orci phasellus egestas tellus rutrum tellus. Massa sapien faucibus et molestie ac feugiat sed lectus vestibulum. Vitae congue eu consequat ac felis donec. Sodales ut eu sem integer. Urna cursus eget nunc scelerisque. Sagittis nisl rhoncus mattis rhoncus urna.",
    img: zinguerie,
    Icon: HomeIcon2,
  },
  {
    type: 3,
    title: "façades",
    text: "Morbi tristique senectus et netus et malesuada fames ac turpis. Nisl rhoncus mattis rhoncus urna neque viverra. Ac orci phasellus egestas tellus rutrum tellus. Massa sapien faucibus et molestie ac feugiat sed lectus vestibulum. Vitae congue eu consequat ac felis donec. Sodales ut eu sem integer. Urna cursus eget nunc scelerisque. Sagittis nisl rhoncus mattis rhoncus urna.",
    img: façades,
    Icon: BuildingIcon,
  },
  {
    type: 4,
    title: "charpente",
    text: "Morbi tristique senectus et netus et malesuada fames ac turpis. Nisl rhoncus mattis rhoncus urna neque viverra. Ac orci phasellus egestas tellus rutrum tellus. Massa sapien faucibus et molestie ac feugiat sed lectus vestibulum. Vitae congue eu consequat ac felis donec. Sodales ut eu sem integer. Urna cursus eget nunc scelerisque. Sagittis nisl rhoncus mattis rhoncus urna.",
    img: charpente,
    Icon: HomeIcon,
  },
  {
    type: 5,
    title: "zinguerie",
    text: "Morbi tristique senectus et netus et malesuada fames ac turpis. Nisl rhoncus mattis rhoncus urna neque viverra. Ac orci phasellus egestas tellus rutrum tellus. Massa sapien faucibus et molestie ac feugiat sed lectus vestibulum. Vitae congue eu consequat ac felis donec. Sodales ut eu sem integer. Urna cursus eget nunc scelerisque. Sagittis nisl rhoncus mattis rhoncus urna.",
    img: zinguerie,
    Icon: HomeIcon2,
  },
  {
    type: 6,
    title: "façades",
    text: "Morbi tristique senectus et netus et malesuada fames ac turpis. Nisl rhoncus mattis rhoncus urna neque viverra. Ac orci phasellus egestas tellus rutrum tellus. Massa sapien faucibus et molestie ac feugiat sed lectus vestibulum. Vitae congue eu consequat ac felis donec. Sodales ut eu sem integer. Urna cursus eget nunc scelerisque. Sagittis nisl rhoncus mattis rhoncus urna.",
    img: façades,
    Icon: BuildingIcon,
  },
];

export default function ProjectsSlider() {
  return (
    <div className="min-h-screen bg-white pt-24">
      <div className="text-center mb-24">
        <H3>
          Des Toits Qui Font la pluie et <br /> le beau temps
        </H3>
      </div>
      <Carousel>
        {data.map((d: any) => {
          return <ProjectCard {...d} key={d.type} />;
        })}
      </Carousel>
      <div className="flex justify-center mt-28">
        <Button
          onClick={() => null}
          name="voir tous nos services"
          color="bg-black-100"
        />
      </div>
    </div>
  );
}

const ProjectCard = ({ title, text, img, Icon }: any) => {
  return (
    <div
      style={{
        backgroundImage: `URL(${img})`,
        objectFit: "cover",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        margin: "0 10px 0 0",
        height: "472px",
        position: "relative",
      }}
    >
      <div className="bg-gradient-to-t from-black-100  to-black-50 h-full w-full absolute top-0 left-0 p-7 flex flex-col justify-between">
        <div className="bg-[#FCFCFC1F] w-fit p-1">
          <Icon />
        </div>
        <div>
          <H3 className="text-white">{title}</H3>
          <Text className="line-clamp-3 text-white">{text}</Text>
        </div>
      </div>
    </div>
  );
};
