import Card from "./Card";
import { faNewspaper, faComments, faEnvelope, faListAlt } from "@fortawesome/free-solid-svg-icons";
import InfoLogin from "./InfoLogin";

export default function Home() {
    return (
        <main className="main">
            <div className="first">
                <Card total={20} title="Berita" icon={faNewspaper} link="/allnews" />
                <Card total={15} title="Komentar" icon={faComments} link="/comentary" />
                <Card total={30} title="Pesan" icon={faEnvelope} link="/message" />
                <Card total={10} title="Kategori Berita" icon={faListAlt} link="/category" />
            </div>
            <div style={{ width: "400px" }}>
                <InfoLogin />
            </div>
        </main>
    );
}
