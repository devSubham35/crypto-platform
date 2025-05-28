import Image from 'next/image'
import ServiceHero from './ServiceHero'
import WhatWeProvide from './WhatWeProvide'
import LayoutWrapper from '../Wrapper/LayoutWrapper'
import GrowthGraph from './GrowthGraph'
import CurrencyExchangeCalculator from './CurrencyExchangeCalculator'

const ServicePage = () => {
    return (
        <div className="relative w-full">
            <LayoutWrapper>
                 <div className='w-full min-h-screen'>
                    <ServiceHero />
                    <WhatWeProvide />
                    <GrowthGraph />
                    <CurrencyExchangeCalculator />
                </div>
            </LayoutWrapper>
            <div className="z-[-10] w-full h-full absolute top-0 left-0">
                <Image
                    width={1000}
                    height={1000}
                    alt="header-logo"
                    src="/assets/Service/Service_bg.png"
                    className="object-cover w-full h-full"
                />
                 
            </div>
        </div>
    )
}

export default ServicePage
