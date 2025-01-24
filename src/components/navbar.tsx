import { faAngleDown, faCaretDown, faChevronDown, faSearch } from "@fortawesome/free-solid-svg-icons";
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

                <Link to="/ppdb" className="navbar-toggle">PPDB</Link>

                <Link to="/berita" className="navbar-toggle">Berita</Link>

                <div className="navbar-dropdown">
                    <div className="navbar-toggle">Program Keahlian <FontAwesomeIcon icon={faCaretDown} /></div>
                    <div className="navbar-dropdown-menu">
                        <Link to="/home" className="">Akuntansi dan Keuangan Lembaga</Link>
                        <Link to="/home" className="">Manajemen Perkantoran dan Layanan Bisnis</Link>
                        <Link to="/home" className="">Pengembangan Perangkat Lunak dan Gim</Link>
                        <Link to="/home" className="">Pemasaran</Link>
                    </div>
                </div>

                <div className="navbar-dropdown">
                    <div className="navbar-toggle">Kesiswaan <FontAwesomeIcon icon={faCaretDown} /></div>
                    <div className="navbar-dropdown-menu">
                        <Link to="/organisasi" className="">Organisasi</Link>
                        <Link to="/suborganisasi" className="">Sub Organisasi</Link>
                        <Link to="/ekstrakurikuler" className="">Ekstrakurikuler</Link>
                    </div>
                </div>

                <div className="navbar-dropdown">
                    <div className="navbar-toggle">Profil <FontAwesomeIcon icon={faCaretDown} /></div>
                    <div className="navbar-dropdown-menu">
                        <Link to="/home" className="">Identitas Sekolah</Link>
                        <Link to="/home" className="">Tujuan</Link>
                        <Link to="/home" className="">Visi Misi</Link>
                        <Link to="/home" className="">Struktur Organisasi</Link>
                    </div>
                </div>

                <Link to="/contact" className="navbar-toggle">Hubungi Kami</Link>
            </div>

        </nav>
    )
}