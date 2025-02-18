import Header from "../component/Header";
import Sidebar from "../component/Sidebar";
import Tambahberita from "../component/Tambahberita";

export default function Addnews() {
    return(
    <div className="container">
        <div className="side">
            <Sidebar />
        </div>
        <div className="content">
            <Header />
            <Tambahberita />
        </div>
    </div>
    )
}