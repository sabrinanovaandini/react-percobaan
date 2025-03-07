import Header from "../component/Header";
import Sidebar from "../component/Sidebar";
import TabelKomentar from "../component/TabelKomentar";

export default function Comentary(){
    return(
    <>
        <Sidebar />
        <div className="content">
            <Header />
            <TabelKomentar />
        </div>
    </>
    )
}