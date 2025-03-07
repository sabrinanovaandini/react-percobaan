import Header from "../component/Header";
import Sidebar from "../component/Sidebar";
import TabelPPDB from "../component/TabelPpdb";

export default function PPDB(){
    return(
    <>
        <Sidebar />
        <div className="content">
            <Header />
            <TabelPPDB />
        </div>
    </>
    )
}