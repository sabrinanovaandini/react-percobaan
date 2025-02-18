import Header from "../component/Header";
import Sidebar from "../component/Sidebar";
import TabelEkstrakurikuler from "../component/TabelEkstrakurikuler";

export default function Extracurricular(){
    return(
    <div className="container">
        <div className="side">
            <Sidebar />
        </div>
        <div className="content">
            <Header />
            <TabelEkstrakurikuler />
        </div>
    </div>
    )
}