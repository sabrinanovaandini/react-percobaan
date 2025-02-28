import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faCircleUser, faComments, faEnvelope, faMessage, faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function Notification() {
    return(
        <div className="profile">
                <label className="popup">
                    <input type="checkbox" />
                    <span className="notif-count">3</span>
                    <div tabIndex={0} className="burger">
                        <FontAwesomeIcon icon={faBell} size="lg"/>
                    </div>
                    <nav className="popup-window">
                        <div className="notifikasi">
                            <legend>Notifikasi</legend>
                            <ul>
                                <li>
                                    <Link to="/message" className="notif">
                                        <div className="head-notif">
                                            <div className="icon-notif">
                                                <FontAwesomeIcon icon={faEnvelope} style={{ marginRight: "10px" }} />
                                                <span>Pesan</span>
                                            </div>
                                            <p>2m yang lalu</p>
                                        </div>
                                        <div className="body-notif">
                                            <b>Nova</b>
                                            <p>Halo, kamu siapa??</p>
                                        </div>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/comentary" className="notif">
                                        <div className="head-notif">
                                            <div className="icon-notif">
                                                <FontAwesomeIcon icon={faComments} style={{ marginRight: "10px" }} />
                                                <span>Komentar "Bunga Menang Lomba Mancing"</span>
                                            </div>
                                            <p>Kemarin, 09.30</p>
                                        </div>
                                        <div className="body-notif">
                                            <b>Seseorang</b>
                                            <p>Emang bunga suka mancing??</p>
                                        </div>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/comentary" className="notif">
                                        <div className="head-notif">
                                            <div className="icon-notif">
                                                <FontAwesomeIcon icon={faComments} style={{ marginRight: "10px" }} />
                                                <span>Komentar "Bunga Menang Lomba Mancing"</span>
                                            </div>
                                            <p>Kemarin, 09.28</p>
                                        </div>
                                        <div className="body-notif">
                                            <b>Seseorang</b>
                                            <p>Bunga mancing dapet apa?</p>
                                        </div>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </label>
        </div>
    )
}