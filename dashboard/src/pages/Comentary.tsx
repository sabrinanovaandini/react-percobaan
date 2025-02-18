import Header from "../component/Header";
import Sidebar from "../component/Sidebar";
import TabelKomentar from "../component/TabelKomentar";

export default function Comentary(){
    return(
    <div className="container">
        <div className="side">
            <Sidebar />
        </div>
        <div className="content">
            <Header />
            <TabelKomentar />
        </div>
    </div>
    )
}