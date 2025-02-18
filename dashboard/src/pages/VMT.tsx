import Header from "../component/Header";
import Sidebar from "../component/Sidebar";
import VisiMisiTujuan from "../component/Visimisitujuan";

export default function VMT() {
    return(
    <div className="container">
        <div className="side">
            <Sidebar />
        </div>
        <div className="content">
            <Header />
            <VisiMisiTujuan />
        </div>
    </div>
    )
}