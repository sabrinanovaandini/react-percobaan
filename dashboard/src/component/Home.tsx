import Card from "./Card";
import { faNewspaper, faComments, faEnvelope, faListAlt, faBullhorn, faPeopleGroup, faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import InfoLogin from "./InfoLogin";
import Diagram from "./Diagram";

export default function Home() {
    return (
        <main className="main">
            <div className="first">
                <Card total={3} title="Highlight Beranda" icon={faBullhorn} link="/highlight" />
                <Card total={20} title="Berita" icon={faNewspaper} link="/allnews" />
                <Card total={15} title="Komentar" icon={faComments} link="/comentary" />
                <Card total={10} title="Kategori Berita" icon={faListAlt} link="/category" />
                <Card total={30} title="Pesan" icon={faEnvelope} link="/message" />
                <Card total={5} title="Sub Organisasi" icon={faPeopleGroup} link="/sub-organization" />
                <Card total={25} title="Ekstrakurikuler" icon={faPeopleGroup} link="/extracurricular" />
                <Card total={4} title="Program Keahlian" icon={faGraduationCap} link="/program-keahlian" />
            </div>
            <Diagram />
            <div style={{ width: "400px" }}>
                <InfoLogin />
            </div>
        </main>
    );
}
