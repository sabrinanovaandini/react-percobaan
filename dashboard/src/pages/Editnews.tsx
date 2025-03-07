import Editberita from "../component/Editberita";
import Header from "../component/Header";
import Sidebar from "../component/Sidebar";

export default function Editnews() {
    return(
    <>
        <Sidebar />
        <div className="content">
            <Header />
            <Editberita />
        </div>
    </>
    )
}