import HeadJurnalis from "../component/HeadJurnalis";
import SideJurnalis from "../component/SideJurnalis";
import TabelKategori from "../component/TabelKategori";

export default function CategoryJur(){
    return(
    <div className="container">
        <div className="side">
            <SideJurnalis />
        </div>
        <div className="content">
            <HeadJurnalis />
            <TabelKategori />
        </div>
    </div>
    )
}