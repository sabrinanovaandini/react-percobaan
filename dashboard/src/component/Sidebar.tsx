import { faHome, faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

export default function Sidebar() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

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
                            <FontAwesomeIcon icon={faHome} />
                            <span>Dropdown</span>
                        </div>
                    </button>
                </li>
                <li>
                    <button onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                        <div className="drop-icon">
                            <FontAwesomeIcon icon={faHome} />
                            <span>Dropdown</span>
                        </div>
                        <FontAwesomeIcon icon={faAngleDown} />
                    </button>
                    {isDropdownOpen && (
                        <ul className="dropdown-menu">
                            <li><button>Submenu 1</button></li>
                            <li><button>Submenu 2</button></li>
                            <li><button>Submenu 3</button></li>
                        </ul>
                    )}
                </li>
            </ul>
        </div>
    );
}
