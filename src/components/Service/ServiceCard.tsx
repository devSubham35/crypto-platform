import React from 'react'
import Image from 'next/image'

interface ServiceCardProps {
  image: string
  counterImage: string
  title: string
  description: string
  reverse?: boolean
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  image,
  counterImage,
  title,
  description,
  reverse = false,
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
      {/* Image Section */}
      <div className={`w-full h-full flex justify-center items-center ${reverse ? 'md:order-2' : 'md:order-1'}`}>
        <Image
          width={500}
          height={500}
          alt={title}
          className="object-contain h-[200px] md:h-[400px]"
          src={image}
        />
      </div>

      {/* Text Section */}
      <div className={`w-full h-full flex flex-col
         text-white font-secondary space-y-4 md:space-y-6 ${reverse ? 'md:order-1' : 'md:order-2'}`}>
        <Image
          width={500}
          height={500}
          alt={`${title}-counter`}
          className="w-[50px] md:w-fit object-contain"
          src={counterImage}
        />
        <h1 className="text-xl md:text-3xl lg:text-4xl font-bold">{title}</h1>
        <p className="text-white/80 text-sm w-full md:max-w-xl text-justify">
          {description}
        </p>
      </div>
    </div>
  )
}

export default ServiceCard
