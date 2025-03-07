import Header from "../component/Header";
import Sidebar from "../component/Sidebar";
import Tambahberita from "../component/Tambahberita";

export default function Addnews() {
    return(
    <>
        <Sidebar />
        <div className="content">
            <Header />
            <Tambahberita />
        </div>
    </>
    )
}