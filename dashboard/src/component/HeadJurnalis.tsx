import Search from "./Search";
import Notification from "./Notification";
import UserJurnalis from "./UserJurnalis";

export default function HeadJurnalis() {

    return (
        <header className="header">
            <Search />
            <Notification />
            <UserJurnalis />
        </header>
    );
}
