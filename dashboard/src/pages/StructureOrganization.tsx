import Header from "../component/Header";
import Sidebar from "../component/Sidebar";
import TabelStrukturOrganisasi from "../component/TabelStrukturOrganisasi";

export default function StructureOrganization(){
    return(
    <>
        <Sidebar />
        <div className="content">
            <Header />
            <TabelStrukturOrganisasi />
        </div>
    </>
    )
}