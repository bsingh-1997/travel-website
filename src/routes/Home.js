import Hero from "../components/Hero"
import Navbar from "../components/Navbar"
import Destination from "../components/Destination"
import Trip from "../components/Trip"
import Footer from "../components/Footer"


function Home(){
return(
    <>
    <Navbar/>
    <Hero cName="hero" heroImg="https://images.unsplash.com/photo-1503220317375-aaad61436b1b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80" title="Your Journey Your Story" text="Choose Your Favourite Destination."
    buttonText="Travel Plan" url="/" btnClass="show"
    />
    <Destination/>
    <Trip/>
    <Footer/>
    </>
)
}

export default Home