import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import User from "./User";
import Search from "./Search";
import Notification from "./Notification";

export default function Header() {

    return (
        <header className="header">
            <div className="left-icon">
                <FontAwesomeIcon icon={faChevronLeft} size="lg" style={{ color: "black" }}/>
            </div>
            <div className="right-icon">
                <Search />
                <Notification />
                <User />
            </div>
        </header>
    );
}
