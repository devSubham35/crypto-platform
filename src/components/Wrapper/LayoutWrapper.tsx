import Header from '../Header/Header'
import Footer from '../Footer/Footer'

interface LayoutWrapperprops {
    children: React.ReactNode
}

const LayoutWrapper = ({ children }: LayoutWrapperprops) => {
    return (
        <div className='w-full relative'>
            <Header />
            {children}
            <Footer />
        </div>
    )
}

export default LayoutWrapper
