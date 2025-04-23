import { faAngleDown, faClipboardList, faChevronLeft, faEnvelope, faLink, faSchool, faPeopleGroup, faNewspaper, faChartSimple, faGraduationCap, faUserGear, faBullhorn, faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect, useRef } from "react";
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

    // bikin ref global buat item yang aktif
    const activeItemRef = useRef<HTMLLIElement | null>(null);

    useEffect(() => {
        if (activeItemRef.current) {
        activeItemRef.current.scrollIntoView({
            behavior: "smooth",
            block: "center", // bisa "nearest", "center", atau "start"
        });
        }
    }, [location.pathname]); // trigger saat pindah halaman

    const toggleDropdown = (menu: string) => {
        setOpenDropdown(openDropdown === menu ? null : menu);
    };

    // Responsiveness handler
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 768) {
                setIsOpen(false); // Close sidebar if screen is small
            } else {
                setIsOpen(true);  // Open sidebar if screen is big
            }
            };

        handleResize(); // Set initial state
        window.addEventListener("resize", handleResize);
        
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
    <>
        <div className={`sidebar ${isOpen ? "open" : "closed"}`}>
            <div className="logo">
                {isOpen && <img src="public/logo smea.PNG" alt="logo smkn2mgl" />}
                {isOpen && <p>SMKN 2 MAGELANG</p>}
                <div className="close-icon" onClick={() => setIsOpen(!isOpen)}>
                    <FontAwesomeIcon icon={isOpen ? faChevronLeft : faBars} />
                </div>
            </div>
            <ul>
                <li className={location.pathname === "/dashboard" ? "active" : ""} ref={location.pathname === "/dashboard" ? activeItemRef : null}>
                    {isOpen ? (
                        <Link to="/dashboard">
                            <div className="drop-icon">
                                <div className="icon-s">
                                    <FontAwesomeIcon icon={faChartSimple} size="lg"/>
                                </div>
                                <span>Dashboard</span>
                            </div>
                        </Link>
                    ) : (
                        <div className="menu-disabled">
                            <div className="drop-icon">
                                <div className="icon-s">
                                    <FontAwesomeIcon icon={faChartSimple} size="lg"/>
                                </div>
                            </div>
                        </div>
                    )}
                </li>
                <li className={location.pathname === "/highlight-beranda" ? "active" : ""} ref={location.pathname === "/highlight-beranda" ? activeItemRef : null}>
                    {isOpen ? (
                        <Link to="/highlight-beranda">
                            <div className="drop-icon">
                                <div className="icon-s">
                                    <FontAwesomeIcon icon={faBullhorn} size="lg"/>
                                </div>
                                <span>Highlight Beranda</span>
                            </div>
                        </Link>
                    ) : (
                        <div className="menu-disabled">
                            <div className="drop-icon">
                                <div className="icon-s">
                                    <FontAwesomeIcon icon={faBullhorn} size="lg"/>
                                </div>
                            </div>
                        </div>
                    )}
                </li>
                <li>
                    <Link
                        to="#"
                        onClick={() => toggleDropdown("berita")} 
                        className={`dropdown-toggle ${
                            !isOpen ? "disabled" : ""
                        } ${(
                            location.pathname.includes("/allnews") || 
                            location.pathname.includes("/addnews") || 
                            location.pathname.includes("/category") || 
                            location.pathname.includes("/comentary")
                        ) ? "active" : ""}`}
                    >
                        <div className="drop-icon">
                            <div className="icon-s">
                                <FontAwesomeIcon icon={faNewspaper} size="lg"/>
                            </div>
                            {isOpen && <span>Berita Tulisan</span>}
                        </div>
                        {isOpen &&
                            <div className={`icon-s ${openDropdown === "berita" ? "rotate" : ""}`}>
                                <FontAwesomeIcon icon={faAngleDown} size="lg"/>
                            </div>
                        }
                    </Link>
                    {openDropdown === "berita" && isOpen && (
                        <ul className="dropdown-menu">
                            <li className={location.pathname === "/allnews" ? "active" : ""} ref={location.pathname === "/allnews" ? activeItemRef : null}><Link to="/allnews">Semua Berita</Link></li>
                            <li className={location.pathname === "/addnews" ? "active" : ""} ref={location.pathname === "/addnews" ? activeItemRef : null}><Link to="/addnews">Tambah Berita</Link></li>
                            <li className={location.pathname === "/category" ? "active" : ""} ref={location.pathname === "/category" ? activeItemRef : null}><Link to="/category">Kategori</Link></li>
                            <li className={location.pathname === "/comentary" ? "active" : ""} ref={location.pathname === "/comentary" ? activeItemRef : null}><Link to="/comentary">Komentar</Link></li>
                        </ul>
                    )}
                </li>
                <li className={location.pathname === "/message" ? "active" : ""} ref={location.pathname === "/message" ? activeItemRef : null}>
                    {isOpen ? (
                        <Link to="/message">
                            <div className="drop-icon">
                                <div className="icon-s">
                                    <FontAwesomeIcon icon={faEnvelope} size="lg"/>
                                </div>
                                <span>Pesan</span>
                            </div>
                        </Link>
                    ) : (
                        <div className="menu-disabled">
                            <div className="drop-icon">
                                <div className="icon-s">
                                    <FontAwesomeIcon icon={faEnvelope} size="lg"/>
                                </div>
                            </div>
                        </div>
                    )}
                </li>
                <li className={location.pathname === "/tautan" ? "active" : ""} ref={location.pathname === "/tautan" ? activeItemRef : null}>
                    {isOpen ? (
                        <Link to="/tautan">
                            <div className="drop-icon">
                                <div className="icon-s">
                                    <FontAwesomeIcon icon={faLink} size="lg"/>
                                </div>
                                {isOpen && <span>Tautan/Link terkait</span>}
                            </div>
                        </Link>
                    ) : (
                        <div className="menu-disabled">
                            <div className="drop-icon">
                                <div className="icon-s">
                                    <FontAwesomeIcon icon={faLink} size="lg"/>
                                </div>
                            </div>
                        </div>
                    )}
                </li>
                <li className={location.pathname === "/ppdb" ? "active" : ""} ref={location.pathname === "/ppdb" ? activeItemRef : null}>
                    {isOpen ? (
                        <Link to="/ppdb">
                            <div className="drop-icon">
                                <div className="icon-s">
                                    <FontAwesomeIcon icon={faClipboardList} size="lg"/>
                                </div>
                                {isOpen && <span>PPDB</span>}
                            </div>
                        </Link>
                    ) : (
                        <div className="menu-disabled">
                            <div className="drop-icon">
                                <div className="icon-s">
                                    <FontAwesomeIcon icon={faClipboardList} size="lg"/>
                                </div>
                            </div>
                        </div>
                    )}
                </li>
                <li className={location.pathname === "/program-keahlian" ? "active" : ""} ref={location.pathname === "/program-keahlian" ? activeItemRef : null}>
                    {isOpen ? (
                        <Link to="/program-keahlian">
                            <div className="drop-icon">
                                <div className="icon-s">
                                    <FontAwesomeIcon icon={faGraduationCap} size="lg"/>
                                </div>
                                {isOpen && <span>Program Keahlian</span>}
                            </div>
                        </Link>
                    ) : (
                        <div className="menu-disabled">
                            <div className="drop-icon">
                                <div className="icon-s">
                                    <FontAwesomeIcon icon={faGraduationCap} size="lg"/>
                                </div>
                            </div>
                        </div>
                    )}
                </li>
                <li>
                    <Link
                        to="#"
                        onClick={() => toggleDropdown("kesiswaan")} 
                        className={`dropdown-toggle ${
                            !isOpen ? "disabled" : ""
                        } ${(
                            location.pathname.includes("/organization") || 
                            location.pathname.includes("/sub-organization") || 
                            location.pathname.includes("/extracurricular")
                        ) ? "active" : ""}`}
                    >
                        <div className="drop-icon">
                            <div className="icon-s">
                                <FontAwesomeIcon icon={faPeopleGroup} size="lg"/>
                            </div>
                            {isOpen && <span>Kesiswaan</span>}
                        </div>
                        {isOpen && 
                            <div className={`icon-s ${openDropdown === "kesiswaan" ? "rotate" : ""}`}>
                                <FontAwesomeIcon icon={faAngleDown} size="lg"/>
                            </div>
                        }
                    </Link>
                    {openDropdown === "kesiswaan" && (
                        <ul className="dropdown-menu">
                            <li className={location.pathname === "/organization" ? "active" : ""} ref={location.pathname === "/organization" ? activeItemRef : null}><Link to="/organization">Organisasi</Link></li>
                            <li className={location.pathname === "/sub-organization" ? "active" : ""} ref={location.pathname === "/sub-organization" ? activeItemRef : null}><Link to="/sub-organization">Sub Organisasi</Link></li>
                            <li className={location.pathname === "/extracurricular" ? "active" : ""} ref={location.pathname === "/extracurricular" ? activeItemRef : null}><Link to="/extracurricular">Ekstrakurikuler</Link></li>
                        </ul>
                    )}
                </li>
                <li>
                    <Link
                        to="#"
                        onClick={() => toggleDropdown("info-sekolah")} 
                        className={`dropdown-toggle ${
                            !isOpen ? "disabled" : ""
                        } ${(
                            location.pathname.includes("/profileschool") || 
                            location.pathname.includes("/vmt") || 
                            location.pathname.includes("/struktur-organisasi")
                        ) ? "active" : ""}`}
                    >
                        <div className="drop-icon">
                            <div className="icon-s">
                                <FontAwesomeIcon icon={faSchool} size="lg"/>
                            </div>
                            {isOpen && <span>Info Sekolah</span>}
                        </div>
                        {isOpen && 
                        <div className={`icon-s ${openDropdown === "info-sekolah" ? "rotate" : ""}`}>
                            <FontAwesomeIcon icon={faAngleDown} size="lg"/>
                        </div>
                        }
                    </Link>
                    {openDropdown === "info-sekolah" && (
                        <ul className="dropdown-menu">
                            <li className={location.pathname === "/profileschool" ? "active" : ""} ref={location.pathname === "/profileschool" ? activeItemRef : null}><Link to="/profileschool">Profil Sekolah</Link></li>
                            <li className={location.pathname === "/vmt" ? "active" : ""} ref={location.pathname === "/vmt" ? activeItemRef : null}><Link to="/vmt">Visi, Misi, Tujuan</Link></li>
                            <li className={location.pathname === "/struktur-organisasi" ? "active" : ""} ref={location.pathname === "/struktur-organisasi" ? activeItemRef : null}><Link to="/struktur-organisasi">Struktur organisasi</Link></li>
                        </ul>
                    )}
                </li>
                <li className={location.pathname === "/set-pengguna" ? "active" : ""} ref={location.pathname === "/set-pengguna" ? activeItemRef : null}>
                    {isOpen ? (
                        <Link to="/set-pengguna">
                            <div className="drop-icon">
                                <div className="icon-s">
                                    <FontAwesomeIcon icon={faUserGear} size="lg"/>
                                </div>
                                {isOpen && <span>Pengaturan Pengguna</span>}
                            </div>
                        </Link>
                    ) : (
                        <div className="menu-disabled">
                            <div className="drop-icon">
                                <div className="icon-s">
                                    <FontAwesomeIcon icon={faUserGear} size="lg"/>
                                </div>
                            </div>
                        </div>
                    )}
                </li>
            </ul>
        </div>
    </>
    );
}
