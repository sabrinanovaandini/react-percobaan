import { faAngleDown, faClipboardList, faChevronLeft, faEnvelope, faLink, faSchool, faPeopleGroup, faNewspaper, faChartSimple, faGraduationCap, faUserGear, faBullhorn } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Sidebar() {
    const [isOpen, setIsOpen] = useState(true);
    const location = useLocation(); // Untuk mendapatkan path saat ini
    const [openDropdown, setOpenDropdown] = useState(() => {
        // Saat pertama kali dibuka, tentukan dropdown mana yang harus terbuka
        const path = location.pathname;
        if (path.includes("/allnews") || path.includes("/addnews") || path.includes("/category") || path.includes("/comentary")) return "berita";
        if (path.includes("/organization") || path.includes("/sub-organization") || path.includes("/extracurricular")) return "kesiswaan";
        if (path.includes("/profileschool") || path.includes("/vmt") || path.includes("/struktur-organisasi")) return "info-sekolah";
        return null;
    });

    const toggleDropdown = (menu) => {
        setOpenDropdown(openDropdown === menu ? null : menu);
    };

    return (
        <div className={`sidebar ${isOpen ? "open" : "closed"}`}>
            <div className="logo">
                <img src="public/logo smea.PNG" alt="logo smkn2mgl" />
                {isOpen && <p>SMKN 2 MAGELANG</p>}
                <div className="close-icon" onClick={() => setIsOpen(!isOpen)}>
                    <FontAwesomeIcon icon={faChevronLeft} size="lg" style={{ color: "white" }}/>
                </div>
            </div>
            <ul>
                <li>
                    <Link to="/dashboard" className={location.pathname === "/dashboard" ? "active" : ""}>
                        <div className="drop-icon">
                            <div className="icon-s">
                                <FontAwesomeIcon icon={faChartSimple} size="lg"/>
                            </div>
                            {isOpen && <span>Dashboard</span>}
                        </div>
                    </Link>
                </li>
                <li>
                    <Link to="/highlight-beranda" className={location.pathname === "/highlight-beranda" ? "active" : ""}>
                        <div className="drop-icon">
                            <div className="icon-s">
                                <FontAwesomeIcon icon={faBullhorn} size="lg"/>
                            </div>
                            {isOpen && <span>Highlight Beranda</span>}
                        </div>
                    </Link>
                </li>
                <li>
                    <Link onClick={() => toggleDropdown("berita")}>
                        <div className="drop-icon">
                            <div className="icon-s">
                                <FontAwesomeIcon icon={faNewspaper} size="lg"/>
                            </div>
                            {isOpen && <span>Berita Tulisan</span>}
                        </div>
                        {isOpen && 
                        <div className="icon-s">
                            <FontAwesomeIcon icon={faAngleDown} size="lg"/>
                        </div>
                        }
                    </Link>
                    {openDropdown === "berita" && (
                        <ul className="dropdown-menu">
                            <li><Link to="/allnews" className={location.pathname === "/allnews" ? "active" : ""}>Semua Berita</Link></li>
                            <li><Link to="/addnews" className={location.pathname === "/addnews" ? "active" : ""}>Tambah Berita</Link></li>
                            <li><Link to="/category" className={location.pathname === "/category" ? "active" : ""}>Kategori</Link></li>
                            <li><Link to="/comentary" className={location.pathname === "/comentary" ? "active" : ""}>Komentar</Link></li>
                        </ul>
                    )}
                </li>
                <li>
                    <Link to="/message" className={location.pathname === "/message" ? "active" : ""}>
                        <div className="drop-icon">
                            <div className="icon-s">
                                <FontAwesomeIcon icon={faEnvelope} size="lg"/>
                            </div>
                            {isOpen && <span>Pesan</span>}
                        </div>
                    </Link>
                </li>
                <li>
                    <Link to="/tautan"  className={location.pathname === "/tautan" ? "active" : ""}>
                        <div className="drop-icon">
                            <div className="icon-s">
                                <FontAwesomeIcon icon={faLink} size="lg"/>
                            </div>
                            {isOpen && <span>Tautan/Link terkait</span>}
                        </div>
                    </Link>
                </li>
                <li>
                    <Link to="/ppdb"  className={location.pathname === "/ppdb" ? "active" : ""}>
                        <div className="drop-icon">
                            <div className="icon-s">
                                <FontAwesomeIcon icon={faClipboardList} size="lg"/>
                            </div>
                            {isOpen && <span>PPDB</span>}
                        </div>
                    </Link>
                </li>
                <li>
                    <Link to="/program-keahlian"  className={location.pathname === "/program-keahlian" ? "active" : ""}>
                        <div className="drop-icon">
                            <div className="icon-s">
                                <FontAwesomeIcon icon={faGraduationCap} size="lg"/>
                            </div>
                            {isOpen && <span>Program Keahlian</span>}
                        </div>
                    </Link>
                </li>
                <li>
                    <Link onClick={() => toggleDropdown("kesiswaan")}>
                        <div className="drop-icon">
                            <div className="icon-s">
                                <FontAwesomeIcon icon={faPeopleGroup} size="lg"/>
                            </div>
                            {isOpen && <span>Kesiswaan</span>}
                        </div>
                        {isOpen && 
                        <div className="icon-s">
                            <FontAwesomeIcon icon={faAngleDown} size="lg"/>
                        </div>
                        }
                    </Link>
                    {openDropdown === "kesiswaan" && (
                        <ul className="dropdown-menu">
                            <li><Link to="/organization"  className={location.pathname === "/organization" ? "active" : ""}>Organisasi</Link></li>
                            <li><Link to="/sub-organization" className={location.pathname === "/sub-organization" ? "active" : ""}>Sub Organisasi</Link></li>
                            <li><Link to="/extracurricular" className={location.pathname === "/extracurricular" ? "active" : ""}>Ekstrakurikuler</Link></li>
                        </ul>
                    )}
                </li>
                <li>
                    <Link onClick={() => toggleDropdown("info-sekolah")}>
                        <div className="drop-icon">
                            <div className="icon-s">
                                <FontAwesomeIcon icon={faSchool} size="lg"/>
                            </div>
                            {isOpen && <span>Info Sekolah</span>}
                        </div>
                        {isOpen && 
                        <div className="icon-s">
                            <FontAwesomeIcon icon={faAngleDown} size="lg"/>
                        </div>
                        }
                    </Link>
                    {openDropdown === "info-sekolah" && (
                        <ul className="dropdown-menu">
                            <li><Link to="/profileschool" className={location.pathname === "/profileschool" ? "active" : ""}>Profil Sekolah</Link></li>
                            <li><Link to="/vmt" className={location.pathname === "/vmt" ? "active" : ""}>Visi, Misi, Tujuan</Link></li>
                            <li><Link to="/struktur-organisasi" className={location.pathname === "/struktur-organisasi" ? "active" : ""}>Struktur organisasi</Link></li>
                        </ul>
                    )}
                </li>
                <li>
                    <Link to="/set-pengguna" className={location.pathname === "/set-pengguna" ? "active" : ""}>
                        <div className="drop-icon">
                            <div className="icon-s">
                                <FontAwesomeIcon icon={faUserGear} size="lg"/>
                            </div>
                            {isOpen && <span>Pengaturan Pengguna</span>}
                        </div>
                    </Link>
                </li>
            </ul>
        </div>
    );
}
