import Header from "../component/Header";
import Sidebar from "../component/Sidebar";
import TabelTautan from "../component/TabelTautan";

export default function Tautan(){
    return(
    <div className="container">
        <div className="side">
            <Sidebar />
        </div>
        <div className="content">
            <Header />
            <TabelTautan />
        </div>
    </div>
    )
}