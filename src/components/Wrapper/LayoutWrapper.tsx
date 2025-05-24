import Header from '../Header/Header'
import Footer from '../Footer/Footer'

interface LayoutWrapperprops {
    children: React.ReactNode
}

const LayoutWrapper = ({ children }: LayoutWrapperprops) => {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    )
}

export default LayoutWrapper
