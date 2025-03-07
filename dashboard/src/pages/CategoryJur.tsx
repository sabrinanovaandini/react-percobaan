import HeadJurnalis from "../component/HeadJurnalis";
import SideJurnalis from "../component/SideJurnalis";
import TabelKategori from "../component/TabelKategori";

export default function CategoryJur(){
    return(
    <>
        <SideJurnalis />
        <div className="content">
            <HeadJurnalis />
            <TabelKategori />
        </div>
    </>
    )
}