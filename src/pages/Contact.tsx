import ContactUs from "../components/contact-us";
import Footer from "../components/footer";
import Maps from "../components/maps";
import Navbar from "../components/navbar";
import ScrollTop from "../components/scrolltop";

export default function Contact(){
    return(
        <>
            <Navbar />
            <ContactUs/>
            <Maps/>
            <Footer />
            <ScrollTop/>
        </>
    )
}