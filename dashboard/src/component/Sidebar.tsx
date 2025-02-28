import { faAngleDown, faClipboardList, faChevronLeft, faEnvelope, faLink, faSchool, faPeopleGroup, faNewspaper, faChartSimple, faGraduationCap, faUserGear, faBullhorn } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Sidebar() {
    const [isOpen, setIsOpen] = useState(true);
    const [openDropdown, setOpenDropdown] = useState(null);

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
                    <Link to="/dashboard">
                        <div className="drop-icon">
                            <div className="icon-s">
                                <FontAwesomeIcon icon={faChartSimple} size="lg"/>
                            </div>
                            {isOpen && <span>Dashboard</span>}
                        </div>
                    </Link>
                </li>
                <li>
                    <Link to="/highlight-beranda">
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
                            <li><Link to="/allnews">Semua Berita</Link></li>
                            <li><Link to="/addnews">Tambah Berita</Link></li>
                            <li><Link to="/category">Kategori</Link></li>
                            <li><Link to="/comentary">Komentar</Link></li>
                        </ul>
                    )}
                </li>
                <li>
                    <Link to="/message">
                        <div className="drop-icon">
                            <div className="icon-s">
                                <FontAwesomeIcon icon={faEnvelope} size="lg"/>
                            </div>
                            {isOpen && <span>Pesan</span>}
                        </div>
                    </Link>
                </li>
                <li>
                    <Link to="/tautan">
                        <div className="drop-icon">
                            <div className="icon-s">
                                <FontAwesomeIcon icon={faLink} size="lg"/>
                            </div>
                            {isOpen && <span>Tautan/Link terkait</span>}
                        </div>
                    </Link>
                </li>
                <li>
                    <Link to="/ppdb">
                        <div className="drop-icon">
                            <div className="icon-s">
                                <FontAwesomeIcon icon={faClipboardList} size="lg"/>
                            </div>
                            {isOpen && <span>PPDB</span>}
                        </div>
                    </Link>
                </li>
                <li>
                    <Link to="/program-keahlian">
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
                            <li><Link to="/organization">Organisasi</Link></li>
                            <li><Link to="/sub-organization">Sub Organisasi</Link></li>
                            <li><Link to="/extracurricular">Ekstrakurikuler</Link></li>
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
                            <li><Link to="/profileschool">Profil Sekolah</Link></li>
                            <li><Link to="/vmt">Visi, Misi, Tujuan</Link></li>
                            <li><Link to="/struktur-organisasi">Struktur organisasi</Link></li>
                        </ul>
                    )}
                </li>
                <li>
                    <Link to="/set-pengguna">
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
