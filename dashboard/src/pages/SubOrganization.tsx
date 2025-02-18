import Header from "../component/Header";
import Sidebar from "../component/Sidebar";
import TabelSubOrganisasi from "../component/TabelSubOrganisasi";

export default function SubOrganization(){
    return(
    <div className="container">
        <div className="side">
            <Sidebar />
        </div>
        <div className="content">
            <Header />
            <TabelSubOrganisasi />
        </div>
    </div>
    )
}