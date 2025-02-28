import HeadJurnalis from "../component/HeadJurnalis";
import ProfilJurnalis from "../component/ProfilJurnalis";
import SideJurnalis from "../component/SideJurnalis";

export default function ProfileJurnalis(){
    return(
    <div className="container">
        <div className="side">
            <SideJurnalis />
        </div>
        <div className="content">
            <HeadJurnalis />
            <ProfilJurnalis />
        </div>
    </div>
    )
}