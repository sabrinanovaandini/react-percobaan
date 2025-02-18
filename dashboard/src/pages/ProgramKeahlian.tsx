import Header from "../component/Header";
import Sidebar from "../component/Sidebar";
import TabelProKe from "../component/TabelProKe";

export default function ProgramKeahlian(){
    return(
    <div className="container">
        <div className="side">
            <Sidebar />
        </div>
        <div className="content">
            <Header />
            <TabelProKe />
        </div>
    </div>
    )
}