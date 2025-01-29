import PkDetail from '../components/pkDetail';
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import ScrollTop from "../components/scrolltop";

export default function DetailPK() {
    return(
        <>
            <Navbar />
            {(() => {
                try {
                    return <PkDetail />;
                } catch (error) {
                    console.error("Error in PkDetail:", error);
                    return <p>Error loading content.</p>;
                }
            })()}
            <Footer />
            <ScrollTop/>
        </>
    )
}