import Header from "../component/Header";
import Sidebar from "../component/Sidebar";
import TabelProKe from "../component/TabelProKe";

export default function ProgramKeahlian(){
    return(
    <>
        <Sidebar />
        <div className="content">
            <Header />
            <TabelProKe />
        </div>
    </>
    )
}