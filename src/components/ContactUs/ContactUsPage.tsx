import Image from "next/image";
import ContactUsBody from "./ContactUsBody";
import ContactUsHero from "./ContactUsHero";
import ContactUsReachOut from "./ContactUsReachOut";
import LayoutWrapper from "../Wrapper/LayoutWrapper";

const ContactUsPage = () => {
  return (
    <div className="z-20 relative w-full min-h-screen">
      <LayoutWrapper>
        <ContactUsHero />
        <ContactUsBody />
        <ContactUsReachOut />
      </LayoutWrapper>
      <div className="z-[-10] w-full h-full absolute top-0 left-0">
        <Image
          width={1000}
          height={1000}
          alt="header-logo"
          src="/assets/ContactUs/ContactUsBg.png"
          className="object-cover w-full h-full"
        />
      </div>
    </div>
  );
};

export default ContactUsPage;
