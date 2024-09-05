import type { NextPage } from "next";
import NavHEADER from "../components/nav-h-e-a-d-e-r";
import HeroSection from "../components/hero-section";
import Services from "../components/services";
import NavigationFooter from "../components/navigation-footer";

const PortalPge: NextPage = () => {
  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-center justify-start leading-[normal] tracking-[normal]">
      <NavHEADER />
      <HeroSection />
      <Services />
      <NavigationFooter />
    </div>
  );
};

export default PortalPge;
