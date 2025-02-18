import { faEdit, faEye, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Checkboxicon() {
    return(
        <div className="checkbox-icon">
            <input type="checkbox"/>
            <FontAwesomeIcon icon={faEye} style={{ color: "green" }}/>
            <FontAwesomeIcon icon={faTrashCan} style={{ color: "red" }}/>
            <FontAwesomeIcon icon={faEdit} style={{ color: "skyblue" }}/>
        </div> 
    )
}