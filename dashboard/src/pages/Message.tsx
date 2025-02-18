import Header from "../component/Header";
import Sidebar from "../component/Sidebar";
import TabelPesan from "../component/TabelPesan";

export default function Message(){
    return(
    <div className="container">
        <div className="side">
            <Sidebar />
        </div>
        <div className="content">
            <Header />
            <TabelPesan />
        </div>
    </div>
    )
}