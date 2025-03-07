import Header from "../component/Header";
import Sidebar from "../component/Sidebar";
import TabelKategori from "../component/TabelKategori";

export default function Category(){
    return(
    <>
        <Sidebar />
        <div className="content">
            <Header />
            <TabelKategori />
        </div>
    </>
    )
}