import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useLocation, } from "react-router-dom";

export default function Navbar(){

    const router= useLocation()

    console.log(location.pathname)
    return (
        <nav className="navbar">
            <div className="navbar-title">
                <div className="navbar-logo">
                <img src="http://smkn2mgl.sch.id/media_library/images/4cf9743116d33ca628f4238601357f7f.png" alt="" />
                <Link to="/home" className="navbar-logo">
                    <h1>SMKN 2 MAGELANG</h1>
                </Link>
                </div>
                

                <div className="search">
                    <div className="logo-search">
                        <FontAwesomeIcon icon={faSearch} />
                    </div>
                    <input className="search-bar" id="search" type="text" placeholder="Pencarian"></input>
                </div>
            </div>

            <div className="navbar-menu">
                <Link to="/home" className="navbar-toggle">Beranda</Link>

                <Link to="/about" className="navbar-toggle">PPDB</Link>

                <Link to="/home" className="navbar-toggle">Berita</Link>

                <div className="navbar-dropdown">
                    <div className="navbar-toggle">Program Keahlian</div>
                    <div className="navbar-dropdown-menu">
                        <Link to="/home" className="">Akuntansi dan Keuangan Lembaga</Link>
                        <Link to="/home" className="">Manajemen Perkantoran dan Layanan Bisnis</Link>
                        <Link to="/home" className="">Pengembangan Perangkat Lunak dan Gim</Link>
                        <Link to="/home" className="">Pemasaran</Link>
                    </div>
                </div>

                <div className="navbar-dropdown">
                    <div className="navbar-toggle">Kesiswaan</div>
                    <div className="navbar-dropdown-menu">
                        <a href="#">Organisasi</a>
                        <a href="#">Sub Organisasi</a>
                        <a href="#">Ekstrakurikuler</a>
                    </div>
                </div>

                <div className="navbar-dropdown">
                    <div className="navbar-toggle">Profil</div>
                    <div className="navbar-dropdown-menu">
                        <a href="#">Identitas Sekolah</a>
                        <a href="#">Tujuan</a>
                        <a href="#">Visi Misi</a>
                        <a href="#">Struktur Organisasi</a>
                    </div>
                </div>

                <Link to="/home" className="navbar-toggle">Hubungi Kami</Link>
            </div>

        </nav>
    )
}