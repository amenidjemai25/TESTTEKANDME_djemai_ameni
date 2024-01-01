import { Fragment } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Home/Hero";
import GeneralInfo from "../components/Home/GeneralInfo";
import ProjectsSlider from "../components/Home/ProjectsSlider";
import VideoSection from "../components/Home/VideoSection";
import Parallex from "../components/Home/Parallex";
import Brief from "../components/Home/Brief";
import Rates from "../components/Home/Rates";
import Insta from "../components/Home/Insta";

export default function Home() {
  return (
    <Fragment>
      <Navbar />
      <Hero />
      <GeneralInfo />

      <ProjectsSlider />
      <VideoSection />
      <Parallex />
      <div className="bg-white">
        <Brief />
        <Rates />
        <Insta />
      </div>
    </Fragment>
  );
}
