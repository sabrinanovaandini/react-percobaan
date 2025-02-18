import Header from "../component/Header";
import Sidebar from "../component/Sidebar";
import TabelOrganisasi from "../component/TabelOrganisasi";

export default function Organization(){
    return(
    <div className="container">
        <div className="side">
            <Sidebar />
        </div>
        <div className="content">
            <Header />
            <TabelOrganisasi />
        </div>
    </div>
    )
}