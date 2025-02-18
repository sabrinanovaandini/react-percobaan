import Header from "../component/Header";
import Profil from "../component/Profil";
import Sidebar from "../component/Sidebar";

export default function Profile() {
    return(
    <div className="container">
        <div className="side">
            <Sidebar />
        </div>
        <div className="content">
            <Header />
            <Profil />
        </div>
    </div>
    )
}