import HeadJurnalis from "../component/HeadJurnalis";
import SideJurnalis from "../component/SideJurnalis";
import TabelBerita from "../component/TabelBerita";

export default function AllnewsJur(){
    return(
    <div className="container">
        <div className="side">
            <SideJurnalis />
        </div>
        <div className="content">
            <HeadJurnalis />
            <TabelBerita />
        </div>
    </div>
    )
}