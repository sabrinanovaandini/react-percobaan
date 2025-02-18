import Header from "../component/Header";
import Sidebar from "../component/Sidebar";
import TabelKategori from "../component/TabelKategori";

export default function Category(){
    return(
    <div className="container">
        <div className="side">
            <Sidebar />
        </div>
        <div className="content">
            <Header />
            <TabelKategori />
        </div>
    </div>
    )
}