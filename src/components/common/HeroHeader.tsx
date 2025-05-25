interface HeroHeaderProps {
    title: string;
    heading: string;
}

const HeroHeader = ({ title, heading }: HeroHeaderProps) => {
    return (
        <div className="text-center">
            <h1 className="text-[8px] md:text-xs tracking-[6px] md:tracking-[20px] font-inter font-medium text-white/50 mb-2 md:mb-4">
                {title}
            </h1>
            <h1 className="text-2xl md:text-5xl lg:text-6xl leading-tight font-secondary font-bold text-white mb-5">
                {heading}
            </h1>
        </div>
    )
}

export default HeroHeader
