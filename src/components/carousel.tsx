import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useLocation } from "react-router-dom";

export default function Carousel(){
    const router= useLocation()

    console.log(location.pathname)
    return (
        <div className="carousel">
            <div className="carousel-slide">
                <div className="carousel-item">
                    <img src="" alt="" />
                    <div className="carousel-content">
                        <h2>Selamat Datang</h2>
                        <h1>SMK Negeri 2 Magelang</h1>
                        <p>Unggul dan Juara</p>
                        <Link to="/home" className="btn">Visi Misi</Link>
                    </div>
                </div>

                <div className="carousel-item">
                    <img src="" alt="" />
                    <div className="carousel-content">
                        <h1>Selamat Datang</h1>
                        <h2>SMK Negeri 2 Magelang</h2>
                        <p>Unggul dan Juara</p>
                        <Link to="/home" className="">Visi Misi</Link>
                    </div>
                </div>

                <ol className="carousel-indicators">
                    <li data-bs-target="#hero-carousel" data-bs-slide-to="0" className=""></li>
                    <li data-bs-target="#hero-carousel" data-bs-slide-to="1" className=""></li>
                    <li data-bs-target="#hero-carousel" data-bs-slide-to="2" className="active" aria-current="true"></li>
                </ol>

                <FontAwesomeIcon icon="window-minimize" />


            </div>
        </div>
    )
}