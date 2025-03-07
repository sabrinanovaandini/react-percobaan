import HeadJurnalis from "../component/HeadJurnalis";
import HomeJurnalis from "../component/HomeJurnalis";
import SideJurnalis from "../component/SideJurnalis";

export default function DashJurnalis(){
    return(
    <>
        <SideJurnalis />
        <div className="content">
            <HeadJurnalis />
            <HomeJurnalis />
        </div>
    </>
    )
}