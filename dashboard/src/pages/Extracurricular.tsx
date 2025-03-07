import Header from "../component/Header";
import Sidebar from "../component/Sidebar";
import TabelEkstrakurikuler from "../component/TabelEkstrakurikuler";

export default function Extracurricular(){
    return(
    <>
        <Sidebar />
        <div className="content">
            <Header />
            <TabelEkstrakurikuler />
        </div>
    </>
    )
}