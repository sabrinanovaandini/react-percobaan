import Header from "../component/Header";
import Sidebar from "../component/Sidebar";
import VisiMisiTujuan from "../component/Visimisitujuan";

export default function VMT() {
    return(
    <>
        <Sidebar />
        <div className="content">
            <Header />
            <VisiMisiTujuan />
        </div>
    </>
    )
}