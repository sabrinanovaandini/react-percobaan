import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faBell, faCircleUser, faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function Notification() {
    return(
        <div className="profile">
                <label className="popup">
                    <input type="checkbox" />
                    <div tabIndex={0} className="burger">
                        <FontAwesomeIcon icon={faBell} size="lg"/>
                    </div>
                    <nav className="popup-window">
                        <legend>Notifikasi</legend>
                        <ul>
                            <li>
                                <button>
                                    <FontAwesomeIcon icon={faCircleUser} />
                                    <span>Profile</span>
                                </button>
                                <Link to="/profile">
                                    <FontAwesomeIcon icon={faCircleUser} />
                                    <span>Profile</span>
                                </Link>
                            </li>
                            <li>
                                <button>
                                    <FontAwesomeIcon icon={faRightFromBracket} />
                                    <span>Log out</span>
                                </button>
                            </li>
                        </ul>
                    </nav>
                </label>
        </div>
    )
}