import Header from "../component/Header";
import Sidebar from "../component/Sidebar";
import TabelBerita from "../component/TabelBerita";

export default function Allnews(){
    return(
    <>
        <Sidebar />
        <div className="content">
            <Header />
            <TabelBerita />
        </div>
    </>
    )
}