import Image from 'next/image'
import HeroHeader from '../common/HeroHeader'

const GrowthGraph = () => {
    return (
        <div className="container w-full flex flex-col py-5 md:py-10 lg:py-14">
            <HeroHeader title='GROWTH' heading='Our Growth In Marketplace' />
            <div className="w-full grid grid-cols-2 gap-4 md:gap-8 h-fit">
                <div className="w-full h-fit">
                    <Image
                        width={500}
                        height={500}
                        alt="growth-image-1"
                        className="object-contain md:w-full h-full md:aspect-square md:scale-[90%]"
                        src="/assets/Service/Group 104.png"
                    />
                </div>
                <div className="w-full h-fit">
                    <Image
                        width={500}
                        height={500}
                        alt="growth-image-1"
                        className="object-contain md:w-full h-full md:aspect-square md:scale-[90%]"
                        src="/assets/Service/Group 105.png"
                    />
                </div>
            </div>
        </div>
    )
}

export default GrowthGraph
