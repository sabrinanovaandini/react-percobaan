import User from "./User";
import Search from "./Search";
import Notification from "./Notification";

export default function Header() {

    return (
        <header className="header">
            <Search />
            <Notification />
            <User />
        </header>
    );
}
