import { faHome, faAngleDown, faClipboardList } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Sidebar() {
    const [openDropdown, setOpenDropdown] = useState(null);

    const toggleDropdown = (menu) => {
        setOpenDropdown(openDropdown === menu ? null : menu);
    };

    return (
        <div className="sidebar">
            <div className="logo">
                <img src="public/logo smea.PNG" alt="logo smkn2mgl" />
                <p>SMKN 2 MAGELANG</p>
            </div>
            <ul>
                <li>
                    <Link to="/dashboard">
                        <div className="drop-icon">
                            <div className="icon-s">
                                <FontAwesomeIcon icon={faClipboardList} />
                            </div>
                            <span>Dashboard</span>
                        </div>
                    </Link>
                </li>
                <li>
                    <Link onClick={() => toggleDropdown("berita")}>
                        <div className="drop-icon">
                            <div className="icon-s">
                                <FontAwesomeIcon icon={faHome} />
                            </div>
                            <span>Berita Tulisan</span>
                        </div>
                        <div className="icon-s">
                            <FontAwesomeIcon icon={faAngleDown} />
                        </div>
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
                                <FontAwesomeIcon icon={faClipboardList} />
                            </div>
                            <span>Pesan</span>
                        </div>
                    </Link>
                </li>
                <li>
                    <Link to="/tautan">
                        <div className="drop-icon">
                            <div className="icon-s">
                                <FontAwesomeIcon icon={faClipboardList} />
                            </div>
                            <span>Tautan/Link terkait</span>
                        </div>
                    </Link>
                </li>
                <li>
                    <Link to="/ppdb">
                        <div className="drop-icon">
                            <div className="icon-s">
                                <FontAwesomeIcon icon={faClipboardList} />
                            </div>
                            <span>PPDB</span>
                        </div>
                    </Link>
                </li>
                <li>
                    <Link to="/program-keahlian">
                        <div className="drop-icon">
                            <div className="icon-s">
                                <FontAwesomeIcon icon={faClipboardList} />
                            </div>
                            <span>Program Keahlian</span>
                        </div>
                    </Link>
                </li>
                <li>
                    <Link onClick={() => toggleDropdown("kesiswaan")}>
                        <div className="drop-icon">
                            <div className="icon-s">
                                <FontAwesomeIcon icon={faHome} />
                            </div>
                            <span>Kesiswaan</span>
                        </div>
                        <div className="icon-s">
                            <FontAwesomeIcon icon={faAngleDown} />
                        </div>
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
                                <FontAwesomeIcon icon={faHome} />
                            </div>
                            <span>Info Sekolah</span>
                        </div>
                        <div className="icon-s">
                            <FontAwesomeIcon icon={faAngleDown} />
                        </div>
                    </Link>
                    {openDropdown === "info-sekolah" && (
                        <ul className="dropdown-menu">
                        <li><Link to="/profileschool">Profil Sekolah</Link></li>
                            <li><Link to="/vmt">Visi, Misi, Tujuan</Link></li>
                            <li><Link to="/struktur-organisasi">Struktur organisasi</Link></li>
                        </ul>
                    )}
                </li>
            </ul>
        </div>
    );
}
