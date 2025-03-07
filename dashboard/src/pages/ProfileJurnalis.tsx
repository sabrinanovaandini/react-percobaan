import HeadJurnalis from "../component/HeadJurnalis";
import ProfilJurnalis from "../component/ProfilJurnalis";
import SideJurnalis from "../component/SideJurnalis";

export default function ProfileJurnalis(){
    return(
    <>
        <SideJurnalis />
        <div className="content">
            <HeadJurnalis />
            <ProfilJurnalis />
        </div>
    </>
    )
}