import Header from "../component/Header";
import ProfilSekolah from "../component/ProfilSekolah";
import Sidebar from "../component/Sidebar";

export default function ProfileSchool() {
    return(
    <div className="container">
        <div className="side">
            <Sidebar />
        </div>
        <div className="content">
            <Header />
            <ProfilSekolah />
        </div>
    </div>
    )
}