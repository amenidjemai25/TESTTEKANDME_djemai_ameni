import img6 from "../../assets/home/img6.png";
import img7 from "../../assets/home/img7.png";

import DescriptionCard from "./DescriptionCard";

export default function Brief() {
  return (
    <div className="bg-gradient-to-t from-[#fff] from-75%  to-100% to-transparent pt-80 pb-64 -translate-y-72 min-h-screen">
      <div className="w-2/3 mx-auto ">
        <DescriptionCard
          image={img6}
          title={"Un bureau d’études innovant"}
          text="Derrière chaque toit exceptionnel se cache une équipe de cerveaux brillants. Notre bureau d'études est l'endroit où l'innovation et la précision se marient pour créer des toits qui défient les conventions. Nous faisons des calculs pour que vous n'ayez pas à le faire !"
          onClick={() => null}
          btnText="EN SAVOIR PLUS"
          reverse
        />
        <div className="mt-40" />
        <DescriptionCard
          image={img7}
          title={"Inline sécurité"}
          text="Massa eget egestas purus viverra. Nisi scelerisque eu ultrices vitae. Orci eu lobortis elementum nibh tellus molestie nunc non. Ultrices in iaculis nunc sed augue lacus viverra. Consequat semper viverra nam libero justo laoreet sit. Nibh praesent tristique magna sit amet. Vulputate enim nulla aliquet porttitor. Dui nunc mattis enim ut tellus elementum sagittis."
          onClick={() => null}
          btnText="Voir sur facebook"
        />
      </div>
    </div>
  );
}
