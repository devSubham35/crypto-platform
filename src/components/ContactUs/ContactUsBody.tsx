import { BiSupport } from "react-icons/bi";
import { HiLocationMarker } from "react-icons/hi";
import { BiSolidPhoneCall } from "react-icons/bi";
import HeroHeader from "@/components/common/HeroHeader"
import CustomButton from "@/components/common/CustomButton"


const CardHeading = "font-secondary text-md md:text-[1.2rem] font-semibold"
const CardDescription = "font-secondary text-[12px] lg:text-[0.9rem] xl:max-w-[80%] 2xl:max-w-[70%] text-white/60"
const CardContainer = "w-full h-full p-[1.5rem] text-white space-y-3 md:space-y-[0.9rem] flex flex-col justify-center rounded-3xl"

const ContactUsBody = () => {
  return (
    <div className="container w-full py-10">
      <HeroHeader title='GET IN TOUCH' heading='Get In Touch With Us' />
      <div className="md:mt-[3rem] grid md:grid-cols-2 grid-rows-2 gap-[1rem] md:gap-[2.5rem]">

        <div className="md:row-span-2 flex justify-center items-center">
          <div className="w-full md:h-[60%]">
            <div className={`${CardContainer} bg-gradient-to-t md:bg-gradient-to-b from-[#0B2850] to-[#01051C]`}>
              <BiSupport className="text-3xl" />
              <h1 className={CardHeading}>Chat To Support</h1>
              <p className={CardDescription}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                facilisis tellus quis enim tincidunt gravida. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <CustomButton className="w-fit text-[10px] md:text-[13px] font-normal py-[10px]">Get Directions</CustomButton>
            </div>
          </div>
        </div>

        <div className={`${CardContainer} bg-gradient-to-b from-[#01051C] to-[#231A4C]`}>
          <HiLocationMarker className="text-3xl" />
          <h1 className={CardHeading}>Visit us</h1>
          <p className={CardDescription}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
            facilisis tellus quis enim tincidunt gravida. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <CustomButton className="w-fit text-[10px] md:text-[13px] font-normal py-[10px]">Get Directions</CustomButton>
        </div>

        <div className={`${CardContainer} bg-gradient-to-b from-[#01051C] to-[#01455B]`}>
          <BiSolidPhoneCall className="text-3xl" />
          <h1 className={CardHeading}>Call Our Team</h1>
          <p className={CardDescription}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
            facilisis tellus quis enim tincidunt gravida. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <CustomButton className="w-fit text-[10px] md:text-[13px] font-normal py-[10px]">Get Directions</CustomButton>
        </div>

      </div>
    </div>
  )
}

export default ContactUsBody
