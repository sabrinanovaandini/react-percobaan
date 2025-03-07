import Header from "../component/Header";
import Sidebar from "../component/Sidebar";
import TabelTautan from "../component/TabelTautan";

export default function Tautan(){
    return(
    <>
        <Sidebar />
        <div className="content">
            <Header />
            <TabelTautan />
        </div>
    </>
    )
}