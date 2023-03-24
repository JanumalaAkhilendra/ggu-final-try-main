import {About2} from "../src/components/About";
import Collection from "../src/components/Collection";
import Contact from "../src/components/Contact";
import FunFacts from "../src/components/FunFacts";
import HeroSlider from "../src/components/HeroSlider";
import News from "../src/components/News";
import RoadMapSlider from "../src/components/RoadMapStep";
import SectionDivider from "../src/components/SectionDivider";
import Layout from "../src/layout/Layout";
import dynamic from "next/dynamic";
import StudentCordinators from "../src/components/StudentCordinators";
import Faq from "../src/components/Faq";
import HeroSection from "../src/components/HeroSection";

const WaterHero = dynamic(() => import("../src/components/WaterHero"), {
  ssr: false,
});
const Index = () => {
  return (
    /*  eslint-disable @next/next/no-img-element */
    <Layout pageTitle={"Home"}>
      <HeroSection></HeroSection>
      {/* Landing Section Here */}
      <HeroSlider />
      {/* !Landing Section Here */}
      {/* Our Stats */}
      <FunFacts />
      {/* !Our Stats */}
      {/* About Us Section */}
      <WaterHero />
      {/* !About Us Section */}
      {/* From the Desk */}
      <About2 />
      {/* !From the Desk */}
      {/* Section Divider */}
      <SectionDivider />
      {/* !Section Divider */}
      {/* Photo Gallery */}
      <Collection />
      {/* !Photo Gallery */}
      {/* Section Divider */}
      <SectionDivider />
      {/* !Section Divider */}
      {/* Student Coordinators */}
      <StudentCordinators></StudentCordinators>
      {/* !Student Coordinators */}
      <SectionDivider />
      {/* Section EventTimeline */}
      <RoadMapSlider />
      {/* !Section EventTimeline */}
      {/* Section Divider */}
      <SectionDivider />
      {/* !Section Divider */}
      {/* Section Faq */}
      <Faq />
      {/* !Section Faq */}
      {/* Section Divider */}
      <SectionDivider />
      {/* !Section Divider */}
      {/* Section */}
      <Contact />
    </Layout>
  );
};
export default Index;
