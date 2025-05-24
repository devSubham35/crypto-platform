import LayoutWrapper from "@/components/Wrapper/LayoutWrapper";
import AboutUsBody from "@/components/AboutUs/AboutUsBody";
import AboutUsHero from "@/components/AboutUs/AboutUsHero";
import AboutUsReachOut from "@/components/AboutUs/AboutUsReachOut";
import Image from "next/image";

const AboutUsPage = () => {
  return (
    <div className="z-20 relative w-full h-full overflow-hidden">
      <LayoutWrapper>
        <AboutUsHero />
        <AboutUsBody />
        <AboutUsReachOut />
      </LayoutWrapper>
      <div className="z-[-10] w-full h-full absolute top-0 left-0">
        <Image
          width={1000}
          height={1000}
          alt="header-logo"
          src="/assets/aboutUsBg.png"
          className="object-cover w-full h-full"
        />
      </div>
    </div>
  );
};

export default AboutUsPage;
