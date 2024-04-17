import Footer from "../components/Footer"
import Header from "../components/Header"
function LayotDefault({ children }) {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    )
    
}

export default LayotDefault;