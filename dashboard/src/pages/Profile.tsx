import Header from "../component/Header";
import Profil from "../component/Profil";
import Sidebar from "../component/Sidebar";

export default function Profile() {
    return(
    <>
        <Sidebar />
        <div className="content">
            <Header />
            <Profil />
        </div>
    </>
    )
}