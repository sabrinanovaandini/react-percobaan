import Header from "../component/Header";
import Sidebar from "../component/Sidebar";
import TabelPPDB from "../component/TabelPpdb";

export default function PPDB(){
    return(
    <div className="container">
        <div className="side">
            <Sidebar />
        </div>
        <div className="content">
            <Header />
            <TabelPPDB />
        </div>
    </div>
    )
}