import Navbar from "../components/navbar";
import Carousel from "../components/carousel";
import Footer from "../components/footer";
import CardPK from "../components/cardpk";
import NewsCard from "../components/newscard";
import ScrollTop from "../components/scrolltop";

export default function Home(){
    return (
        <>
            <Navbar/>
            <Carousel/>
            <NewsCard/>
            <CardPK/>
            <Footer/>
            <ScrollTop/>
        </>
    )
}