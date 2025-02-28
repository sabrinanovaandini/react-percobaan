import HeadJurnalis from "../component/HeadJurnalis";
import HomeJurnalis from "../component/HomeJurnalis";
import SideJurnalis from "../component/SideJurnalis";

export default function DashJurnalis(){
    return(
    <div className="container">
        <div className="side">
            <SideJurnalis />
        </div>
        <div className="content">
            <HeadJurnalis />
            <HomeJurnalis />
        </div>
    </div>
    )
}