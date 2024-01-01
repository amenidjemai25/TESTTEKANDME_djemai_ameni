import image1 from "../../assets/home/img1.png";
import image2 from "../../assets/home/img2.png";
import france from "../../assets/home/FR.png";
import monaco from "../../assets/home/monaco.png";
import castor from "../../assets/home/castor.png";

import Button from "../Elements/Button";
import { H2, H3, Text } from "../Elements/Text";
import DescriptionCard from "./DescriptionCard";
import HomeContainer from "./HomeContainer";

export default function GeneralInfo() {
  function handleClick() {}
  return (
    <HomeContainer className="my-36 ">
      {/* Start section 1 */}
      <DescriptionCard
        image={image1}
        title={"Notre Histoire en Quelques Tuiles"}
        text=" Depuis 30 ans, EM Couverture s'est taillé une réputation impeccable
            dans le monde des toits à Monaco. Nous avons réinventé la
            couverture, tout en gardant nos pieds (et nos tuiles) sur terre.
            Découvrez notre parcours unique et notre engagement envers
            l'excellence."
        onClick={handleClick}
        btnText="EN SAVOIR PLUS"
      />
      {/* Start section 1 */}
      <section className="my-36 bg-yellow h-full">
        <div className="relative">
          <div
            id="video-overlay"
            className="bg-gradient-to-r  from-black-100 from-60% to-black-75  h-[600px] absolute z-10 bottom-0- w-full"
          >
            <div className="mt-10 mx-20  flex items-center justify-between h-full">
              <div className="w-1/2">
                {/* flag container */}
                <div className="flex gap-4 mb-8">
                  <img src={monaco} className="h-8" />
                  <img src={france} className="h-8" />
                </div>
                {/* text container */}
                <div className="text-white">
                  <H3>
                    Numéro 1 à <H3 className="text-yellow">monaco</H3> et en
                    région <H3 className="text-yellow">PACA</H3>
                  </H3>
                  <Text className="mt-6">
                    Notre engagement envers l'excellence, la précision et la
                    qualité nous a hissés au sommet de l'industrie de la
                    couverture à Monaco. Nous sommes fiers de notre statut de
                    numéro 1, acquis grâce à un travail acharné, un savoir-faire
                    inégalé et un sens de l'innovation constant. Lorsque vous
                    choisissez notre entreprise, vous choisissez une tradition
                    de qualité et une réputation qui ont résisté à l'épreuve du
                    temps.
                  </Text>
                  <Button
                    name="Prenons contact"
                    onClick={handleClick}
                    color="bg-yellow"
                    className="mt-8"
                  />
                </div>
              </div>
              <img
                src={castor}
                className="translate-y-16 	"
                style={{
                  filter: "drop-shadow(3px 34px 32px #2B2B2B)",
                }}
              />
            </div>
          </div>

          <img src={image2} className="w-full h-[600px] object-cover " />
        </div>
      </section>
      {/* Start section 1 */}
      <section className="flex justify-evenly mt-2">
        <StatCard value="+300" label="Ans d’activité" />
        <StatCard value="+100" label="Projets terminés" />
        <StatCard value="32" label="Experts pour vous accompagner" />
      </section>
    </HomeContainer>
  );
}

const StatCard = ({ value, label }: { value: string; label: string }) => {
  return (
    <div className="text-center ">
      <H2 className="text-black-100">{value}</H2>
      <Text className="text-black-70 mt-6">{label}</Text>
    </div>
  );
};
