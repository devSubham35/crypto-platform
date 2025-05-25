import Image from "next/image";
import { FaFacebook } from "react-icons/fa";
import { LiaLinkedin } from "react-icons/lia";
import { BsInstagram, BsTwitter } from "react-icons/bs";
import CustomButton from "@/components/common/CustomButton";
import CustomInputField from "@/components/common/CustomInputField";

const SocialLinkData = [
  { icon: <BsTwitter />, link: "#" },
  { icon: <FaFacebook />, link: "#" },
  { icon: <LiaLinkedin className="text-3xl" />, link: "#" },
  { icon: <BsInstagram />, link: "#" },
]

const FooterData = [
  {
    heading: "Product",
    menuItem: [
      { title: "API", link: "#" },
      { title: "Pricing", link: "#" },
      { title: "Features", link: "#" },
      { title: "Integrations", link: "#" },
    ]
  },
  {
    heading: "Company",
    menuItem: [
      { title: "About", link: "#" },
      { title: "Blog", link: "#" },
      { title: "Careers", link: "#" },
      { title: "Contact", link: "#" },
    ]
  },
  {
    heading: "Support",
    menuItem: [
      { title: "Help Center", link: "#" },
      { title: "Documentation", link: "#" },
      { title: "Documentation", link: "#" },
    ]
  }
]


const Footer = () => {
  return (
    <footer className="z-10 relative w-full text-white md:py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-10 gap-10 mb-8">
          <div className="md:col-span-5 flex flex-col gap-6">
            <div className="flex justify-center md:justify-start items-center md:mb-4">
              <Image
                width={1000}
                height={1000}
                alt="header-logo"
                src="/assets/logo.png"
                className="object-contain w-[150px] md:w-[200px]"
              />
            </div>
            <p className="text-gray-400 md:mb-6 text-xs md:text-base max-w-xl text-center md:text-start">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque posuere
              tempor metus sit amet scelerisque. Mauris porta enim et pretium feLorem ipsum dolor sit amet,
              consectetur adipiscing elit. Pellentesque posuere tempor metus sit amet scelerisque.
              Mauris porta enim et pretium feugiat.ugiat.
            </p>
            <div className="flex items-center justify-center md:justify-start space-x-6">
              {
                SocialLinkData?.map((item, index) => (
                  <a key={index} href="#" className="text-gray-400 text-2xl
                 hover:text-white transition-colors">
                    {item?.icon}
                  </a>
                ))
              }
            </div>
          </div>

          <div className="md:col-span-5 text-white">
            <h1 className="font-light text-2xl font-customFont1">Subscribe to our Newsletter</h1>
            <div className="my-4 mb-10 flex flex-col md:flex-row items-center gap-4">
              <CustomInputField placeholder='Enter your email...' />
              <div className="w-full md:w-fit">
                <CustomButton variant="filled" className="w-full flex flex-nowrap px-[40px] md:h-[60px]">SUBCRIBE</CustomButton>
              </div>
            </div>
            <div className="w-full grid grid-cols-3">
              {
                FooterData?.map((item, index) => (
                  <div key={index}>
                    <h3 className="font-semibold mb-4">{item?.heading}</h3>
                    <ul className="space-y-2">
                      {
                        item?.menuItem?.map((menuItem, menuItemIndex) => (
                          <li key={menuItemIndex}>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors">
                              {menuItem?.title}
                            </a>
                          </li>
                        ))
                      }
                    </ul>
                  </div>
                ))
              }
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 RIPTEX. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="whitespace-nowrap text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="whitespace-nowrap text-gray-400 hover:text-white text-sm transition-colors">Terms of Service</a>
              <a href="#" className="whitespace-nowrap text-gray-400 hover:text-white text-sm transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>

      <div className="z-[-10] w-full h-full absolute top-0 left-0">
        <Image
          width={1000}
          height={1000}
          alt="header-logo"
          src="/assets/contactUs.png"
          className="object-cover w-full h-full scale-105"
        />
      </div>
    </footer>
  );
};

export default Footer;
