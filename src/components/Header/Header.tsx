import Image from 'next/image';
import { useState } from 'react';
import { BiMenu } from 'react-icons/bi';
import { CgClose } from 'react-icons/cg';
import CustomButton from '@/components/common/CustomButton';

const navData = [
  { title: "HOME", link: "/" },
  { title: "TRADE", link: "" },
  { title: "SERVICES", link: "/service" },
  { title: "ABOUT", link: "/about-us" },
  { title: "CONTACT", link: "/contact-us" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full sticky top-0 text-white z-50">
      <div className="backdrop-blur-lg transition-all duration-300">
        <div className="container w-full py-3 md:py-6 px-4 flex justify-between items-center mx-auto relative">
          {/* Logo */}
          <div className="flex items-center">
            <Image
              width={1000}
              height={1000}
              alt="header-logo"
              src="/assets/logo.png"
              className="object-contain w-[120px] md:w-[170px]"
            />
          </div>

          {/* Desktop Nav */}
          <div className="pl-14 hidden lg:flex justify-center items-center gap-10 font-regular">
            {navData.map((item, index) => (
              <a
                key={index}
                href={item.link}
                className="text-[14px] cursor-pointer hover:text-white/80"
              >
                {item.title}
              </a>
            ))}
          </div>

          {/* Desktop Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <CustomButton className="md:w-[120px] py-[14px] text-[0.9rem] font-normal">Sign In</CustomButton>
            <CustomButton className="md:w-[120px] py-[14px] text-[0.9rem] font-normal" variant="filled">Login</CustomButton>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <CgClose size={28} /> : <BiMenu size={28} />}
            </button>
          </div>
        </div>

      </div>

      {/* Absolute Dropdown Mobile Menu - positioned outside to prevent layout shift */}
      {isOpen && (
        <div className="z-50 absolute top-full left-0 w-full backdrop-blur-lg
        px-4 py-6 border-t border-white/10 lg:hidden">
          <div className="space-y-5">
            {navData.map((item, index) => (
              <a
                key={index}
                href={item.link}
                className="block text-[15px] text-white hover:text-white/80"
              >
                {item.title}
              </a>
            ))}
            <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
              <CustomButton className="w-full text-[0.9rem] font-normal">Sign In</CustomButton>
              <CustomButton className="w-full text-[0.9rem] font-normal" variant="filled">Login</CustomButton>
            </div>
          </div>
        </div>
      )}
      </nav>
  );
};

export default Header;