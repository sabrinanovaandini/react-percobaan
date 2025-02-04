import newsData from "../data/newsdata";
import { Link } from "react-router-dom";

export default function BtnSelengkapnya ({}) {

    return(
        
        <div className="btn-card">
            <Link to={`/news/${news.id}`} className="btn">Baca Selengkapnya</Link>
        </div>
    )
}