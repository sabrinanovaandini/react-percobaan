import Header from "../component/Header";
import Sidebar from "../component/Sidebar";
import TabelPesan from "../component/TabelPesan";

export default function Message(){
    return(
    <>
        <Sidebar />
        <div className="content">
            <Header />
            <TabelPesan />
        </div>
    </>
    )
}