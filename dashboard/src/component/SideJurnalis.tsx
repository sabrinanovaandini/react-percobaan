import { faHome, faAngleDown, faClipboardList, faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function SideJurnalis() {
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
                    <Link to="/dashjurnalis">
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
                            <li><Link to="/allnewsjur">Semua Berita</Link></li>
                            <li><Link to="/addnewsjur">Tambah Berita</Link></li>
                            <li><Link to="/categoryjur">Kategori</Link></li>
                            <li><Link to="/comentaryjur">Komentar</Link></li>
                        </ul>
                    )}
                </li>
            </ul>
        </div>
    );
}
