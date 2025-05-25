import Image from "next/image";
import AboutUsHero from "./AboutUsHero";
import LayoutWrapper from "../Wrapper/LayoutWrapper";
import WhyChooseUs from "./WhyChooseUs";
import TeamLead from "./TeamLead";

const AboutUsPage = () => {
  return (
    <div className="z-20 relative w-full min-h-screen">
      <LayoutWrapper>
        <AboutUsHero />
        <WhyChooseUs />
        <TeamLead />
      </LayoutWrapper>
      <div className="z-[-10] w-full h-full absolute top-0 left-0">
        <Image
          width={1000}
          height={1000}
          alt="header-logo"
          src="/assets/AboutUs/AboutUsBackground.png"
          className="object-cover w-full h-full"
        />
      </div>
    </div>
  );
};

export default AboutUsPage;
