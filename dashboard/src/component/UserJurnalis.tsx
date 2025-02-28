import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faCircleUser, faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function UserJurnalis() {
    return(
        <div className="profile">
                <label className="popup">
                    <input type="checkbox" />
                    <div tabIndex={0} className="burger">
                        <FontAwesomeIcon icon={faUser} size="lg"/>
                    </div>
                    <nav className="popup-window">
                        <legend>Quick Start</legend>
                        <ul>
                            <li>
                                <Link to="/profilejurnalis">
                                    <FontAwesomeIcon icon={faCircleUser} />
                                    <span>Profile</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/login">
                                    <FontAwesomeIcon icon={faRightFromBracket} />
                                    <span>Log out</span>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </label>
        </div>
    )
}