import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useLocation, } from "react-router-dom";

export default function Card(){
    const router= useLocation()

    console.log(location.pathname)
    return (
        <div className="card-news">
            <div className="card">
                <div className="card-title">
                    <h1>Berita Terbaru</h1>
                </div>
                <div className="card-filter">
                    Semua
                    Kegiatan Skanida 
                    Prestasi 
                    AKL 
                    MPLB 
                    PPLG 
                    PM 
                    BKK 
                    LSP P1
                </div>
                <div className="card-content">
                    <div className="card-img"><img src="public/images1.jpeg" alt=""/></div>
                    <div className="card-caption">
                        <h3>Judul Berita</h3>
                        <div className="card-info">
                            <p>Senin, 13 Januari 2025</p>
                            <p>12.01</p>
                            <p>|</p>
                            <p>Oleh jurnalis</p>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus placeat amet sequi inventore modi eos, debitis provident earum, illo at, laudantium non? Fugit iste excepturi quae, veniam voluptatum reprehenderit enim.</p>
                        <div className="btn-card"><Link to="/about" className="btn">Baca Selengkapnya</Link></div>
                    </div>
                </div>
            </div>
        </div>
    )
}