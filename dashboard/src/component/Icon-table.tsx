import { faPlusSquare } from "@fortawesome/free-regular-svg-icons";
import { faArrowsRotate, faFileExcel, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Icontable() {
    return(
        <div className="icon-table">
            <FontAwesomeIcon icon={faPlusSquare} />
            <FontAwesomeIcon icon={faTrashCan} style={{ color: "red" }} />
            <FontAwesomeIcon icon={faFileExcel} style={{ color: "green" }} />
            <FontAwesomeIcon icon={faArrowsRotate} style={{ color: "blue" }}/>
        </div>
    )
}