import Editberita from "../component/Editberita";
import Header from "../component/Header";
import Sidebar from "../component/Sidebar";

export default function Editnews() {
    return(
    <div className="container">
        <div className="side">
            <Sidebar />
        </div>
        <div className="content">
            <Header />
            <Editberita />
        </div>
    </div>
    )
}