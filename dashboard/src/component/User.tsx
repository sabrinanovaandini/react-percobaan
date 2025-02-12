import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faCircleUser, faRightFromBracket } from "@fortawesome/free-solid-svg-icons";

export default function User() {
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
                                <button>
                                    <FontAwesomeIcon icon={faCircleUser} />
                                    <span>Profile</span>
                                </button>
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