import { H3, Text } from "../Elements/Text";
import Button from "../Elements/Button";

export default function DescriptionCard({
  image,
  title,
  text,
  btnText,
  onClick,
  reverse,
}: {
  image: string;
  title: string;
  text: string;
  btnText: string;
  onClick: () => void;
  reverse?: boolean;
}) {
  return (
    <section
      className={`flex justify-between items-center gap-5 ${
        reverse ? "flex-row-reverse" : ""
      }`}
    >
      <img src={image} />
      <div className="w-2/4">
        <H3>{title}</H3>
        <Text className="mt-6 mb-8 text-black-70">{text}</Text>
        <Button name={btnText} onClick={onClick} color="bg-transparent" />
      </div>
    </section>
  );
}
