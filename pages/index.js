import {About2} from "../src/components/About";
import Collection from "../src/components/Collection";
import Contact from "../src/components/Contact";
import FunFacts from "../src/components/FunFacts";
import HeroSlider from "../src/components/HeroSlider";
import RoadMapSlider from "../src/components/RoadMapStep";
import SectionDivider from "../src/components/SectionDivider";
import Layout from "../src/layout/Layout";
import dynamic from "next/dynamic";
import StudentCordinators from "../src/components/StudentCordinators";
import Faq from "../src/components/Faq";
import HeroSection from "../src/components/HeroSection";

import Head from 'next/head'
import { lazy, Suspense } from "react"
import { Canvas, useLoader } from "@react-three/fiber"
import { Environment, OrbitControls } from "@react-three/drei"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"

 /*  eslint-disable @next/next/no-img-element */

const WaterHero = dynamic(() => import("../src/components/WaterHero"), {
  ssr: false,
});
const Index = () => {

  const Model = () => {
    const gltf = useLoader(GLTFLoader, "/scene.gltf");
    return (
      <>
        <primitive object={gltf.scene} scale={0.3} />
      </>
    );
  };

  return (
    <Layout pageTitle={"Home"}>
      <div className="globe something">
        <div className="heading"><img src="/img/presenting_solasta.png" alt="" /></div>
        <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 0, 4], fov: 50 }}>
          <ambientLight intensity={0.7} />
          <spotLight intensity={0.5} angle={0.1} penumbra={1} position={[10, 15, 10]} castShadow />
          <Suspense fallback={null}>
            <Model />
            <Environment preset="city" />
          </Suspense>
          <OrbitControls autoRotate />
        </Canvas>
      </div>
      
      {/* Landing Section Here */}
      {/* <HeroSlider /> */}
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
