import { useState } from "react";
import { faSearch, faXmark} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Search() {
    const [searchValue, setSearchValue] = useState("");

    return(
        <div className="group-search">
                <FontAwesomeIcon icon={faSearch} className="icon" />
                <input
                    className="search"
                    type="search"
                    placeholder="Search"
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                />
                {searchValue && (
                    <FontAwesomeIcon
                        icon={faXmark}
                        className="icon-x"
                        onClick={() => setSearchValue("")}
                    />
                )}
        </div>
    )
}