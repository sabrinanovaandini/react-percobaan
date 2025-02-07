import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";

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
                                    <FontAwesomeIcon icon={faUser} />
                                    <span>Log In</span>
                                </button>
                            </li>
                            <li>
                                <button>
                                    <svg width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1} strokeLinecap="round" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2.598 9h-1.055c1.482-4.638 5.83-8 10.957-8 6.347 0 11.5 5.153 11.5 11.5s-5.153 11.5-11.5 11.5c-5.127 0-9.475-3.362-10.957-8h1.055c1.443 4.076 5.334 7 9.902 7 5.795 0 10.5-4.705 10.5-10.5s-4.705-10.5-10.5-10.5c-4.568 0-8.459 2.923-9.902 7zm12.228 3l-4.604-3.747.666-.753 6.112 5-6.101 5-.679-.737 4.608-3.763h-14.828v-1h14.826z" />
                                    </svg>
                                    <span>Sign Up</span>
                                </button>
                            </li>
                        </ul>
                    </nav>
                </label>
        </div>
    )
}