import Image from 'next/image'
import HeroHeader from '../common/HeroHeader'
const Data = [
    "/assets/AboutUs/AboutUs_Charecter_03.png",
    "/assets/AboutUs/AboutUs_Charecter_04.png",
    "/assets/AboutUs/AboutUs_Charecter_03.png",
    "/assets/AboutUs/AboutUs_Charecter_04.png",
]

const TeamLead = () => {
    return (
        <div className="container w-full flex flex-col justify-center items-center py-5 md:py-10 lg:py-14">
            <HeroHeader title='MEMBERS' heading='Meet Our Team Leaders' />
            <div className='mx-auto md:my-14'>
                <div className="w-full h-full flex justify-center items-center">
                    <Image
                        width={1000}
                        height={1000}
                        alt="about-us-hero-icon"
                        src="/assets/AboutUs/AboutUs_Charecter_01.png"
                        className="object-contain w-1/3 aspect-square"
                    />
                </div>
                <div className="pt-0 p-[30px] text-white relative z-20 
                font-secondary mt-10 flex flex-col justify-center items-center">
                    <h1 className="text-md md:text-5xl font-bold mb-2">Jack Rowdiee</h1>
                    <h3 className="text-sm md:text-lg font-normal text-white/60 mb-5">Head Of Creptex, Member</h3>
                    <p className="text-[10px] md:text-[15px] text-white/60 md:max-w-4xl text-justify md:text-center">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut facilisis
                        tellus quis enim tincidunt gravida. Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit. Ut facilisis tellus quis enim tincidunt gravida. Lorem ipsum
                        dolor sit amet, consectetur adipiscing elit. Ut facilisis tellus quis enim
                        tincidunt gravida. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Ut facilisis tellus quis enim tincidunt gravida. Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit. Ut facilisis tellus quis enim tincidunt gravida.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut facilisis tellus
                        quis enim tincidunt gravida.
                    </p>
                </div>
            </div>

            <div className='w-full flex justify-between items-center gap-5 mb-10'>
                {
                    Data?.map((item, index) => (
                        <div key={index} className='rounded-xl overflow-hidden'>
                            <Image
                                src={item}
                                width={1000}
                                height={1000}
                                alt="aboutus-charecter-img"
                                className="object-cover w-full h-full aspect-square "
                            />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default TeamLead
