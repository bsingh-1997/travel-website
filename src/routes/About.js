import Hero from "../components/Hero"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import AboutUs from "../components/AboutUs"


function About() {
    return (
        <>
            <Navbar />
            <Hero cName="hero-mid" heroImg="https://images.unsplash.com/photo-1570692111688-be3d16f59c1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE1fHx8ZW58MHx8fHx8&w=1000&q=80" title="About" text="" buttonText="" url="/" btnClass="hide" />
            <AboutUs/>
            <Footer />
        </>
    )
}

export default About