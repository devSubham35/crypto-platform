import Image from 'next/image'
import HeroHeader from '@/components/common/HeroHeader'

const AboutUsHero = () => {
    return (
        <div className="container w-full flex flex-col justify-center items-center 
        py-2 pb-0 md:py-10 md:pb-0 lg:py-14 lg:pb-0">
            <HeroHeader title='ABOUT' heading='About Us' />
            <div className="w-full h-full flex justify-center items-center">
                <Image
                    width={1000}
                    height={1000}
                    alt="about-us-hero-icon"
                    src="/assets/AboutUs/AboutUsHeroImage.png"
                    className="object-contain w-[60%] md:w-2/3 h-auto md:!h-[400px]"
                />
            </div>
        </div>
    )
}

export default AboutUsHero
