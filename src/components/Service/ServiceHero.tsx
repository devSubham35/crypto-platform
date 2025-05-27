import Image from 'next/image'
import HeroHeader from '@/components/common/HeroHeader'

const ServiceHero = () => {
    return (
        <>
            <div className="relative w-full
            min-h-[300px] sm:min-h-[360px] md:min-h-[500px] lg:min-h-[600px] 
            flex flex-col items-center justify-start
            py-2 pb-0 md:py-10 md:pb-0 lg:py-14 lg:pb-0">
                {/* Text Content */}
                <div className="relative z-10">
                    <HeroHeader title="SERVICE" heading="Feel Comfortable with Our Services" />
                </div>

                {/* Background Image behind the text */}
                <div className="absolute z-0 top-0 sm:-top-10 md:-top-10 left-1/2 -translate-x-1/2 
                w-full sm:w-[600px] md:w-[800px] lg:w-[1000px] h-0">
                    <Image
                        width={1000}
                        height={1000}
                        alt="service-hero-icon"
                        className="w-full h-auto"
                        src="/assets/Service/Group 107.png"
                    />
                </div>
            </div>
        </>
    )
}

export default ServiceHero
