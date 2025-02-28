import Header from "../component/Header";
import Sidebar from "../component/Sidebar";
import TabelHighlight from "../component/TabelHighlight";

export default function HightlightBeranda(){
    return(
    <>
        <Sidebar />
        <div className="content">
            <Header />
            <TabelHighlight />
        </div>
    </>
    )
}