import Image from 'next/image'
import HeroHeader from '@/components/common/HeroHeader'

const AboutUsHero = () => {
    return (
        <div className="container w-full flex flex-col justify-center items-center py-5 md:py-10 lg:py-14">
            <HeroHeader title='CONTACT' heading='Contact Us' />
            <div className="flex justify-center items-center">
                <Image
                    width={1000}
                    height={1000}
                    alt="about-us-hero-icon"
                    className="object-contain md:w-2/3"
                    src="/assets/ContactUs/ContactUsHeroImage.png"
                />
            </div>
        </div>
    )
}

export default AboutUsHero
