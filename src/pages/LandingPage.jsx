import About from "../components/About";
import Banner from "../components/Banner";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import OfferSection from "../components/OfferSection";
import PopularSection from "../components/PopularSection";
import Testimonial from "../components/Testimonial";

const LandingPage = () => {
    return (
        <>
            <Banner  />
            <OfferSection />
            <PopularSection />
            <Testimonial />
            <About />
            <Contact />
            <Footer />
        </>
    )
}

export default LandingPage;