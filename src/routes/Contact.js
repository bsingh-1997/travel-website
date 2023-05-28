import Hero from "../components/Hero"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import ContactForm from "../components/ContactForm"


function Contact() {
    return (
        <>
            <Navbar />
            <Hero cName="hero-mid" heroImg="https://images.unsplash.com/photo-1600356033695-a003690a6351?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGFuZ29uZyUyMGxha2V8ZW58MHx8MHx8&w=1000&q=80" title="Contact" text=""buttonText="" url="/" btnClass="hide"/>
            <ContactForm/>
            <Footer />
        </>
    )
}


export default Contact