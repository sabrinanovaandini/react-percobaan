import Header from "../component/Header";
import Home from "../component/Home";
import Sidebar from "../component/Sidebar";

export default function Dashboard(){
    return(
    <>
        <Sidebar />
        <div className="content">
            <Header />
            <Home />
        </div>
    </>
    )
}