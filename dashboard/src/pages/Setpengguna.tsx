import Header from "../component/Header";
import Sidebar from "../component/Sidebar";
import TabelPengguna from "../component/TabelPengguna";

export default function Setpengguna(){
    return(
    <>
        <Sidebar />
        <div className="content">
            <Header />
            <TabelPengguna />
        </div>
    </>
    )
}