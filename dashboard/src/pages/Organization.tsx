import Header from "../component/Header";
import Sidebar from "../component/Sidebar";
import TabelOrganisasi from "../component/TabelOrganisasi";

export default function Organization(){
    return(
    <>
        <Sidebar />
        <div className="content">
            <Header />
            <TabelOrganisasi />
        </div>
    </>
    )
}