import Card from "./Card";
import { faNewspaper, faComments, faListAlt } from "@fortawesome/free-solid-svg-icons";
import InfoLogJurnalis from "./InfoLogJurnalis";

export default function HomeJurnalis() {
    return (
        <main className="main">
            <div className="first">
                <Card total={20} title="Berita" icon={faNewspaper} link="/allnews" />
                <Card total={15} title="Komentar" icon={faComments} link="/comentary" />
                <Card total={10} title="Kategori Berita" icon={faListAlt} link="/category" />
            </div>
            <div style={{ width: "400px" }}>
                <InfoLogJurnalis />
            </div>
        </main>
    );
}
