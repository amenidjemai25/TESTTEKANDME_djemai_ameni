import { ReactNode } from "react";
import logo from "../assets/brand/EMC_sm.png";
import Button from "./Elements/Button";

export default function Navbar() {
  const handleContact = () => console.log("Contact");
  return (
    <div className="flex justify-center items-center gap-10  p-5 h-[72px] fixed w-full bg-white z-50">
      <img src={logo} className="h-8" />
      <div>
        <ul className="flex justify-between items-center gap-8">
          <NavbarItem>Accueil</NavbarItem>
          <NavbarItem>a propos</NavbarItem>
          <NavbarItem>Bureau d’études</NavbarItem>
          <NavbarItem>Sécurisation</NavbarItem>
          <NavbarItem>Services</NavbarItem>
          <NavbarItem>Réalisations</NavbarItem>
          <NavbarItem>Actualités</NavbarItem>
        </ul>
      </div>
      <Button
        name="Contact"
        onClick={handleContact}
        color="bg-yellow"
        size="sm"
      />
    </div>
  );
}

const NavbarItem = ({ children }: { children: ReactNode }) => (
  <li className=" text-black-50 font-extrabold text-sm hover:text-black-100 transition-colors cursor-pointer">
    {children}
  </li>
);
