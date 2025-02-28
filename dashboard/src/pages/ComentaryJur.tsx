import HeadJurnalis from "../component/HeadJurnalis";
import SideJurnalis from "../component/SideJurnalis";
import TabelKomentar from "../component/TabelKomentar";

export default function ComentaryJur(){
    return(
    <div className="container">
        <div className="side">
            <SideJurnalis />
        </div>
        <div className="content">
            <HeadJurnalis />
            <TabelKomentar />
        </div>
    </div>
    )
}