import HeadJurnalis from "../component/HeadJurnalis";
import SideJurnalis from "../component/SideJurnalis";
import Tambahberita from "../component/Tambahberita";

export default function AddnewsJur() {
    return(
    <>
        <SideJurnalis />
        <div className="content">
            <HeadJurnalis />
            <Tambahberita />
        </div>
    </>
    )
}