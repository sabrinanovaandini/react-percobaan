// import { faSearch } from "@fortawesome/free-solid-svg-icons"
import { faInstagram, faYoutube, faTwitter, faFacebook, faTiktok } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link, useLocation } from "react-router-dom"

export default function Footer(){
    const router= useLocation()
    
    console.log(location.pathname)
    return (
        <footer>
            <div className="footer-container">
                <div className="footer-content1">
                    <Link to="/home" className="footer-title">SMKN 2 MAGELANG</Link>
                    <div className="footer-contact">
                        <p>Jalan Jend. Ahmad Yani 135 A, Kramat Selatan, Magelang Utara, 56115 Magelang, Jawa Tengah, (0293) 362577</p>
                        <p>
                            <strong>Telp : </strong>
                            <span>(0293) 362577</span>
                        </p>
                        <p>
                            <strong>Fax : </strong>
                            <span>(0293) 313172</span>
                        </p>
                        <p>
                            <strong>Email : </strong>
                            <span>smkn2magelang@yahoo.com</span>
                        </p>
                    </div>
                </div>

                <div className="footer-content2">
                    <Link to="/home" className="footer-sub-title">Link Terkait</Link>
                    <div className="footer-ct">
                        <Link to="/home" className="medsos">BKK</Link>
                        <Link to="/home" className="medsos">LSP P1</Link>
                        <Link to="/home" className="medsos">Prestasi</Link>
                        <Link to="/home" className="medsos">Kegiatan Skanida</Link>
                        <Link to="/home" className="medsos">Kurikulum</Link>
                    </div>
                </div>

                <div className="footer-content2">
                    <Link to="/home" className="footer-sub-title">Link Terkait</Link>
                    <div className="footer-ct">
                        <Link to="/home" className="medsos">Kelas Industri</Link>
                        <Link to="/home" className="medsos">Kegiatan Adiwiyata</Link>
                        <Link to="/home" className="medsos">Organisasi</Link>
                        <Link to="/home" className="medsos">Ekstrakurikuler</Link>
                        <Link to="/home" className="medsos">PPDB SMK</Link>
                    </div>
                </div>

                <div className="footer-content2">
                    <Link to="/home" className="footer-sub-title">Sosial Media</Link>
                    <div>
                        <Link to="/home" className="medsos">
                            <div className="icon-medsos"><FontAwesomeIcon icon={faInstagram}/></div>
                            Instagram
                        </Link>
                        <Link to="/home" className="medsos">
                            <div className="icon-medsos"><FontAwesomeIcon icon={faYoutube}/></div>
                            Youtube
                        </Link>
                        <Link to="/home" className="medsos">
                            <div className="icon-medsos"><FontAwesomeIcon icon={faTwitter}/></div>
                            Twitter
                        </Link>
                        <Link to="/home" className="medsos">
                            <div className="icon-medsos"><FontAwesomeIcon icon={faFacebook}/></div>
                            Facebook
                        </Link>
                        <Link to="/home" className="medsos">
                            <div className="icon-medsos"><FontAwesomeIcon icon={faTiktok}/></div>
                            Tiktok
                        </Link>
                    </div>
                </div>
                
            </div>

            <div className="copyright">
                <p>&copy; Copyright 2025 SMKN 2 Magelang</p>
            </div>
        </footer>
    )
}