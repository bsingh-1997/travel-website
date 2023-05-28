import Hero from "../components/Hero"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Trip from "../components/Trip"

function Service() {
    return (
        <>
            <Navbar />
            <Hero cName="hero-mid" heroImg="https://i.pinimg.com/originals/5f/a2/5c/5fa25cfa467e64681fd7b9ddb74f06a6.jpg" title="Service" text=""
                buttonText="" url="/" btnClass="hide" />
                <Trip/>
            <Footer />
        </>
    )
}

export default Service