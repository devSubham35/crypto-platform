import React from 'react'
import HeroHeader from '../common/HeroHeader'
import Image from 'next/image'

const Data = [
  {
    image: "/assets/AboutUs/AboutUsImage_04.png",
    title: "8 Years+ Experience In This Market",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut facilisis tellus quis enim tincidunt gravida. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut facilisis tellus quis enim tincidunt gravida. Lorem ipsum dolor ",
  },
  {
    image: "/assets/AboutUs/AboutUsImage_03.png",
    title: "15,000+ Real Clients Trust Us",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut facilisis tellus quis enim tincidunt gravida. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut facilisis tellus quis enim tincidunt gravida. Lorem ipsum dolor ",
  },
  {
    image: "/assets/AboutUs/AboutUsImage_02.png",
    title: "Easy Process To Exchange",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut facilisis tellus quis enim tincidunt gravida. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut facilisis tellus quis enim tincidunt gravida. Lorem ipsum dolor ",
  },
  {
    image: "/assets/AboutUs/AboutUsImage_01.png",
    title: "24/7 Customer Care Support",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut facilisis tellus quis enim tincidunt gravida. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut facilisis tellus quis enim tincidunt gravida. Lorem ipsum dolor ",
  }
]

interface InfoCardProps {
  title: string;
  image: string;
  description: string;
  imageHeight?: string;
  className?: string;
}

const InfoCard = ({ image, title, description, imageHeight, className }: InfoCardProps) => {
  return (
    <div className={`w-full h-full text-white space-y-3 md:space-y-[0.9rem] flex flex-col justify-center 
    relative overflow-hidden rounded-xl ${className}`}>
      <div className={`${imageHeight ? imageHeight : "h-[150px] md:h-full lg:h-[350px]"} 
        relative w-full rounded-2xl rounded-b-none overflow-hidden`}>
        <Image
          width={1000}
          height={1000}
          alt="why-choose-us-image"
          className="object-cover w-full h-full"
          src={image}
        />
      </div>

      {/* Text Content */}
      <div className="pt-0 p-[15px] md:p-[30px] relative z-20">
        <h1 className="font-secondary text-md md:text-xl lg:text-2xl font-semibold mb-2">{title}</h1>
        <p className="font-secondary text-[12px] lg:text-sm text-white/60">{description}</p>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-full 
              bg-gradient-to-b from-transparent via-[#01051C] to-[#01455B]/60 z-10 pointer-events-none" />
    </div>
  )
}


const WhyChooseUs = () => {
  return (
    <div className="container w-full pb-10 md:py-10">
      <HeroHeader title='CHOOSE US' heading='Why Choose Us' />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 md:py-10">

        <div className='w-full grid md:grid-rows-4 lg:grid-rows-7 gap-6 md:gap-10 md:py-10'>
          <div className='md:row-span-2 lg:row-span-4 w-full h-full flex items-end'>
            <InfoCard
              title={Data[0]?.title}
              image={Data[0]?.image}
              className='md:row-span-4 h-fit'
              description={Data[0]?.description}
            />
          </div>
          <div className='md:row-span-2 lg:row-span-3 w-full h-full'>
            <InfoCard
              title={Data[1]?.title}
              image={Data[1]?.image}
              className='md:row-span-4 h-fit'
              description={Data[1]?.description}
              imageHeight='h-[150px] md:h-[200px] lg:h-[200px]'
            />
          </div>
        </div>

        <div className='w-full grid gap-6 md:gap-10'>
          <InfoCard
            title={Data[2]?.title}
            image={Data[2]?.image}
            className='sm:h-full lg:h-auto'
            description={Data[2]?.description}
          />
          <InfoCard
            className='h-full'
            title={Data[3]?.title}
            image={Data[3]?.image}
            description={Data[3]?.description}
          />
        </div>

      </div>
    </div>
  )
}

export default WhyChooseUs


