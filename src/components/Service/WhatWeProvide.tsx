import React from 'react'
import HeroHeader from '../common/HeroHeader'
import ServiceCard from './ServiceCard'

const WhatWeProvide = () => {

const features = [
    {
        image: "/assets/Service/Group 102.png",
        counterImage: "/assets/Service/Counter_01.png",
        title: "Portfolio Tools",
        description:
            "Gain a bird’s-eye view of your entire investment portfolio with robust analysis tools. Easily track your holdings across multiple asset classes, monitor daily changes, and set performance benchmarks. Custom dashboards, intuitive charts, and advanced filters help you identify growth opportunities, minimize risks, and make data-driven decisions with confidence."
    },
    {
        image: "/assets/Service/Group 75.png",
        counterImage: "/assets/Service/Counter_02.png",
        title: "Live Market Data",
        description:
            "Stay connected to global financial markets with real-time updates on stocks, crypto, commodities, and more. Our live data feeds offer high-speed charting, historical comparisons, and predictive trends. Whether you're a trader, investor, or analyst, get instant access to the information you need to act swiftly and strategically."
    },
    {
        image: "/assets/Service/Group 103.png",
        counterImage: "/assets/Service/Counter_03.png",
        title: "Secure Transfer",
        description:
            "Experience the highest level of security while transferring funds or assets. With bank-grade encryption, biometric authentication, and end-to-end transparency, your transactions are protected at every step. Track every move in real time, receive instant confirmations, and maintain a complete transaction history for compliance and personal records."
    },
    {
        image: "/assets/Service/Image.png",
        counterImage: "/assets/Service/Counter_04.png",
        title: "Crypto Education",
        description:
            "Navigate the world of digital assets with our expertly crafted crypto education platform. Access step-by-step guides, video tutorials, market insights, and real-world case studies. Whether you're a newcomer trying to understand blockchain basics or a seasoned investor looking to refine your strategy, our resources cater to all levels of experience."
    }
];

    return (
        <div className="container w-full flex flex-col justify-center items-center py-5 md:py-10 lg:py-14">
            <HeroHeader title='OUR FEATURE' heading='What We Provide' />
            <div className='max-w-6xl md:mt-20 space-y-10'>
                {features.map((feature, idx) => (
                    <ServiceCard
                        key={idx}
                        image={feature.image}
                        counterImage={feature.counterImage}
                        title={feature.title}
                        description={feature.description}
                        reverse={idx % 2 !== 0}
                    />
                ))}
            </div>
        </div>
    )
}

export default WhatWeProvide
