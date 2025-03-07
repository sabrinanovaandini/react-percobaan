import HeadJurnalis from "../component/HeadJurnalis";
import SideJurnalis from "../component/SideJurnalis";
import TabelKomentar from "../component/TabelKomentar";

export default function ComentaryJur(){
    return(
    <>
        <SideJurnalis />
        <div className="content">
            <HeadJurnalis />
            <TabelKomentar />
        </div>
    </>
    )
}