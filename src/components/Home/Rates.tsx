import img8 from "../../assets/home/img8.png";
import StarIcon from "../../assets/icons/StartIcon";
import Button from "../Elements/Button";
import { H3, Text } from "../Elements/Text";

export default function Rates() {
  return (
    <div>
      <section className="my-36  h-screen bg-[#fff]">
        <div className="relative">
          <div
            id="video-overlay"
            className="bg-gradient-to-r  from-black-100 from-10% to-black-75  h-full absolute z-10 bottom-0- w-full"
          >
            <div className="mt-10 mx-20  flex items-center justify-between h-full">
              <div className="w-1/2">
                <div className="flex bg-[#FCFCFC12] w-fit p-2 -rotate-12 mb-6">
                  {[...Array(5)].map((i) => (
                    <StarIcon key={i} />
                  ))}
                </div>
                <H3 className="text-white">
                  Ce que
                  <br /> Pensent nos
                  <br /> clients
                </H3>
                <Button
                  name="Prenons contact"
                  color="bg-yellow"
                  className="mt-14"
                />
              </div>
            </div>
          </div>
          <div className="absolute z-40 right-32 -top-24">
            <Card />
            <Card />
            <Card />
          </div>

          <img src={img8} className="w-full h-[90vh] object-cover " />
        </div>
      </section>
    </div>
  );
}

const Card = () => {
  return (
    <div className="p-6 w-96 bg-white mb-5">
      <img src={img8} className="w-10 h-10" />
      <Text
        style={{ fontFamily: "Orbitron", fontSize: "14px", padding: "16px 0" }}
      >
        CLARA DUPONT
      </Text>
      <Text
        className="text-black-100 "
        style={{ fontSize: "16px", lineHeight: "22px" }}
      >
        J'ai fait appel à l'Entreprise Monégasque de Couverture pour une
        réparation de toit et je suis ravi du résultat. Leur équipe est
        compétente, efficace, et l'humour qu'ils apportent à leur travail est un
        vrai plus. Je les recommande vivement !
      </Text>
    </div>
  );
};
