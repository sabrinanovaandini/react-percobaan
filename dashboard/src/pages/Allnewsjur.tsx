import HeadJurnalis from "../component/HeadJurnalis";
import SideJurnalis from "../component/SideJurnalis";
import TabelBerita from "../component/TabelBerita";

export default function AllnewsJur(){
    return(
    <>
        <SideJurnalis />
        <div className="content">
            <HeadJurnalis />
            <TabelBerita />
        </div>
    </>
    )
}