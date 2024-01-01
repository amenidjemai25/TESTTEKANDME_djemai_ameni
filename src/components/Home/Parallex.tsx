import TitleLarge from "../Elements/Text/TitleLarge";
import img3 from "../../assets/home/img3.png";
import img4 from "../../assets/home/img4.png";
import img5 from "../../assets/home/img5.png";
import { Text } from "../Elements/Text";
import Button from "../Elements/Button";
import HomeContainer from "./HomeContainer";

const data = [
  {
    title: "Nom de la réalisation",
    image: img3,
    text: "Morbi tristique senectus et netus et malesuada fames ac turpis. Nisl rhoncus mattis rhoncus urna neque viverra. Ac orci phasellus egestas tellus rutrum tellus. Massa sapien faucibus et molestie ac feugiat sed lectus vestibulum. Vitae congue eu consequat ac felis donec. Sodales ut eu sem integer. Urna cursus eget nunc scelerisque. Sagittis nisl rhoncus mattis rhoncus urna.",
    position: "left",
  },
  {
    title: "roca team monaco",
    image: img4,
    text: "Morbi tristique senectus et netus et malesuada fames ac turpis. Nisl rhoncus mattis rhoncus urna neque viverra. Ac orci phasellus egestas tellus rutrum tellus. Massa sapien faucibus et molestie ac feugiat sed lectus vestibulum. Vitae congue eu consequat ac felis donec. Sodales ut eu sem integer. Urna cursus eget nunc scelerisque. Sagittis nisl rhoncus mattis rhoncus urna.",
    position: "middle",
  },
  {
    title: "Carmelha",
    image: img5,
    text: "Morbi tristique senectus et netus et malesuada fames ac turpis. Nisl rhoncus mattis rhoncus urna neque viverra. Ac orci phasellus egestas tellus rutrum tellus. Massa sapien faucibus et molestie ac feugiat sed lectus vestibulum. Vitae congue eu consequat ac felis donec. Sodales ut eu sem integer. Urna cursus eget nunc scelerisque. Sagittis nisl rhoncus mattis rhoncus urna.",
    position: "right",
  },
];

export default function Parallex() {
  return (
    <HomeContainer className="pb-20">
      <div className="sticky top-[40%] -z-50 text-center h-screen pb-20 text-black-100">
        <TitleLarge>
          Maîtrisez l'Art de la Couverture : <br />
          Notre Savoir-faire en Action
        </TitleLarge>
      </div>
      <div className="flex flex-col gap-52">
        {data.map((item, index) => (
          <Card key={index} {...item} />
        ))}
      </div>
      <div className="h-50vh" />
    </HomeContainer>
  );
}

const Card = ({
  position,
  title,
  text,
  image,
}: {
  position?: "left" | "middle" | "right";
  title: string;
  text: string;
  image: string;
}) => {
  let pos = "";
  if (position === "right") pos = "ml-auto";
  if (position === "middle") pos = "mx-auto";
  return (
    <div className={`w-96 p-2 bg-white text-black-100 ${pos}`}>
      <img src={image} />
      <div className="px-4">
        <Text
          style={{ fontFamily: "Orbitron", fontSize: 20 }}
          className="mt-6 mb-4"
        >
          {title}
        </Text>
        <Text
          className="line-clamp-2 "
          style={{ fontSize: "16px", lineHeight: "24px" }}
        >
          {text}
        </Text>
        <Button
          name="Plus d'infos"
          color="bg-transparent"
          className="ml-auto"
        />
      </div>
    </div>
  );
};
