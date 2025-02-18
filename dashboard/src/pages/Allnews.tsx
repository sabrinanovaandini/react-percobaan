import Header from "../component/Header";
import Sidebar from "../component/Sidebar";
import TabelBerita from "../component/TabelBerita";

export default function Allnews(){
    return(
    <div className="container">
        <div className="side">
            <Sidebar />
        </div>
        <div className="content">
            <Header />
            <TabelBerita />
        </div>
    </div>
    )
}