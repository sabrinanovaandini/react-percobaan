import HeadJurnalis from "../component/HeadJurnalis";
import SideJurnalis from "../component/SideJurnalis";
import Tambahberita from "../component/Tambahberita";

export default function AddnewsJur() {
    return(
    <div className="container">
        <div className="side">
            <SideJurnalis />
        </div>
        <div className="content">
            <HeadJurnalis />
            <Tambahberita />
        </div>
    </div>
    )
}