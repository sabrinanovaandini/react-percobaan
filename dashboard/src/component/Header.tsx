import { useState } from "react";
import { faSearch, faXmark, faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import User from "./User";
import Search from "./Search";

export default function Header() {

    return (
        <header className="header">
            <div className="left-icon">
                <FontAwesomeIcon icon={faChevronLeft} size="lg" />
            </div>
            <div className="right-icon">
                <Search />
                <User />
            </div>
        </header>
    );
}
