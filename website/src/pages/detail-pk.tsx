import PkDetail from '../components/pkDetail';
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import ScrollTop from "../components/scrolltop";
import { useParams } from 'react-router-dom';
import pkData from '../data/pkdata'
import { useEffect } from 'react';

export default function DetailPK() {
    const { id } = useParams(); // Ambil parameter dari URL
    const selectedPK = pkData.find((pk) => pk.id === Number(id, 10));

    // Scroll ke atas setiap kali halaman ini dimuat
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
  
    if (!selectedPK) {
        return <h2>Data tidak ditemukan</h2>;
    }
    
    // console.log("ID dari URL:", id);
    // console.log("Data pkData:", pkData);

    return(
        <>
            <Navbar />
            <PkDetail pk={selectedPK} />
            <Footer />
            <ScrollTop/>
        </>
    )
}