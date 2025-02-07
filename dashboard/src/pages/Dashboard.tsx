import Header from "../component/Header";
import Home from "../component/Home";
import Sidebar from "../component/Sidebar";

export default function Dashboard(){
    return(
    <div className="container">
        <div className="side">
            <Sidebar />
        </div>
        <div className="content">
            <Header />
            <Home />
        </div>
    </div>
    )
}