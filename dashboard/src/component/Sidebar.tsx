import { faHome, faAngleDown, faClipboardList } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

export default function Sidebar() {
    const [openDropdown, setOpenDropdown] = useState(null);

    // Fungsi toggle dropdown
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
                    <button>
                        <div className="drop-icon">
                            <div className="icon-s">
                                <FontAwesomeIcon icon={faClipboardList} />
                            </div>
                            <span>Dashboard</span>
                        </div>
                    </button>
                </li>
                <li>
                    <button onClick={() => toggleDropdown("berita")}>
                        <div className="drop-icon">
                            <div className="icon-s">
                                <FontAwesomeIcon icon={faHome} />
                            </div>
                            <span>Berita Tulisan</span>
                        </div>
                        <div className="icon-s">
                            <FontAwesomeIcon icon={faAngleDown} />
                        </div>
                    </button>
                    {openDropdown === "berita" && (
                        <ul className="dropdown-menu">
                            <li><button>Semua Berita</button></li>
                            <li><button>Tambah Berita</button></li>
                            <li><button>Kategori</button></li>
                            <li><button>Komentar</button></li>
                        </ul>
                    )}
                </li>
                <li>
                    <button>
                        <div className="drop-icon">
                            <div className="icon-s">
                                <FontAwesomeIcon icon={faClipboardList} />
                            </div>
                            <span>PPDB</span>
                        </div>
                    </button>
                </li>
                <li>
                    <button>
                        <div className="drop-icon">
                            <div className="icon-s">
                                <FontAwesomeIcon icon={faClipboardList} />
                            </div>
                            <span>Program Keahlian</span>
                        </div>
                    </button>
                </li>
                <li>
                    <button>
                        <div className="drop-icon">
                            <div className="icon-s">
                                <FontAwesomeIcon icon={faClipboardList} />
                            </div>
                            <span>Guru</span>
                        </div>
                    </button>
                </li>
                <li>
                    <button onClick={() => toggleDropdown("kesiswaan")}>
                        <div className="drop-icon">
                            <div className="icon-s">
                                <FontAwesomeIcon icon={faHome} />
                            </div>
                            <span>Kesiswaan</span>
                        </div>
                        <div className="icon-s">
                            <FontAwesomeIcon icon={faAngleDown} />
                        </div>
                    </button>
                    {openDropdown === "kesiswaan" && (
                        <ul className="dropdown-menu">
                            <li><button>Organisasi</button></li>
                            <li><button>Sub Organisasi</button></li>
                            <li><button>Ekstrakurikuler</button></li>
                        </ul>
                    )}
                </li>
            </ul>
        </div>
    );
}
