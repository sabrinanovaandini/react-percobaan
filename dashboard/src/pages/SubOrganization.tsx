import Header from "../component/Header";
import Sidebar from "../component/Sidebar";
import TabelSubOrganisasi from "../component/TabelSubOrganisasi";

export default function SubOrganization(){
    return(
    <>
        <Sidebar />
        <div className="content">
            <Header />
            <TabelSubOrganisasi />
        </div>
    </>
    )
}