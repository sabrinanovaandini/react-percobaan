import Header from "../component/Header";
import Sidebar from "../component/Sidebar";
import TabelStrukturOrganisasi from "../component/TabelStrukturOrganisasi";

export default function StructureOrganization(){
    return(
    <div className="container">
        <div className="side">
            <Sidebar />
        </div>
        <div className="content">
            <Header />
            <TabelStrukturOrganisasi />
        </div>
    </div>
    )
}