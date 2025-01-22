import { Link, useLocation, } from "react-router-dom";
import pkData from "../data/pkdata";

export default function CardPK(){
    const router= useLocation()
    // Misalnya, ambil data pertama dari pkData untuk ditampilkan
    const pk = pkData[0]; // Ganti logika ini jika ingin menggunakan ID atau parameter lain


    console.log(location.pathname)
    return (
        <div className="card-news">
            <div className="card">
                <div className="card-title">
                    <h1>Program Keahlian</h1>
                </div>

                <div className="card-pk">
                    {pkData.map((pk) => (
                        <div className="card-content-row">
                            <div className="card-img-pk"><img src={pk.image} alt={pk.title}/></div>
                            <div className="card-caption-pk">
                                <h3>{pk.title}</h3>
                                <p>{pk.content}</p>
                                <div className="btn-card"><Link to={`/pk/${pk.id}`} className="btn">Baca Selengkapnya</Link></div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    )
}