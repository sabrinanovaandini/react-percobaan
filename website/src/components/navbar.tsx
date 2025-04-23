import { faBars, faCaretDown, faSearch, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const toggleDropdown = (menu: string) => {
        setActiveDropdown((prev) => (prev === menu ? null : menu));
    };

    // Tutup dropdown jika user mengklik di luar
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setActiveDropdown(null);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <nav className="navbar">
            <div className="navbar-title">
                <div className="navbar-logo">
                    <img src="/images/logo smea.PNG" alt="logo smkn 2 magelang" />
                    <Link to="/home" className="navbar-logo">
                        <h1>SMKN 2 MAGELANG</h1>
                    </Link>
                </div>

                <div className="search">
                    <div className="logo-search">
                        <FontAwesomeIcon icon={faSearch} />
                    </div>
                    <input className="search-bar" id="search" type="text" placeholder="Pencarian" />
                </div>
            </div>

            <div className="navigation">
                <button className="menu-icon" onClick={toggleMenu}>
                    <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
                </button>

                <div className={`navbar-menu ${menuOpen ? "open" : ""}`} ref={dropdownRef}>
                    <div className="search-nav">
                        <div className="search-1">
                            <div className="logo-search">
                                <FontAwesomeIcon icon={faSearch} />
                            </div>
                            <input className="search-bar" id="search" type="text" placeholder="Pencarian" />
                        </div>
                    </div>
                    <Link to="/" className="navbar-toggle">Beranda</Link>
                    <Link to="/ppdb" className="navbar-toggle">PPDB</Link>
                    <Link to="/berita" className="navbar-toggle">Berita</Link>

                    <div className="navbar-dropdown">
                        <div className="navbar-toggle" onClick={() => toggleDropdown("program")}>
                            Program Keahlian <FontAwesomeIcon icon={faCaretDown} />
                        </div>
                        {activeDropdown === "program" && (
                            <div className="navbar-dropdown-menu">
                                <Link to="/detail-pk/1">Akuntansi dan Keuangan Lembaga</Link>
                                <Link to="/detail-pk/2">Manajemen Perkantoran dan Layanan Bisnis</Link>
                                <Link to="/detail-pk/3">Pengembangan Perangkat Lunak dan Gim</Link>
                                <Link to="/detail-pk/4">Pemasaran</Link>
                            </div>
                        )}
                    </div>

                    <div className="navbar-dropdown">
                        <div className="navbar-toggle" onClick={() => toggleDropdown("kesiswaan")}>
                            Kesiswaan <FontAwesomeIcon icon={faCaretDown} />
                        </div>
                        {activeDropdown === "kesiswaan" && (
                            <div className="navbar-dropdown-menu">
                                <Link to="/organisasi">Organisasi</Link>
                                <Link to="/suborganisasi">Sub Organisasi</Link>
                                <Link to="/ekstrakurikuler">Ekstrakurikuler</Link>
                            </div>
                        )}
                    </div>

                    <div className="navbar-dropdown">
                        <div className="navbar-toggle" onClick={() => toggleDropdown("profil")}>
                            Profil <FontAwesomeIcon icon={faCaretDown} />
                        </div>
                        {activeDropdown === "profil" && (
                            <div className="navbar-dropdown-menu">
                                <Link to="/vimitu">Visi, Misi, Tujuan</Link>
                                <Link to="/strukturorganisasi">Struktur Organisasi</Link>
                            </div>
                        )}
                    </div>

                    <Link to="/contact" className="navbar-toggle">Hubungi Kami</Link>
                </div>
            </div>
        </nav>
    );
}
