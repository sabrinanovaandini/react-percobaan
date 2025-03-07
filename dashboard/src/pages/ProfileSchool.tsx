import Header from "../component/Header";
import ProfilSekolah from "../component/ProfilSekolah";
import Sidebar from "../component/Sidebar";

export default function ProfileSchool() {
    return(
    <>
        <Sidebar />
        <div className="content">
            <Header />
            <ProfilSekolah />
        </div>
    </>
    )
}