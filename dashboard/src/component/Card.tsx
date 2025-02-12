import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faFilePen } from "@fortawesome/free-solid-svg-icons";

export default function Card() {
    return(
        <div className="card">
            <div className="c-0">
                <div className="c-1"><FontAwesomeIcon icon={faFilePen} /></div>
                <div className="c-2"><FontAwesomeIcon icon={faArrowRight} style={{ transform: "rotate(-45deg)" }} /></div>
            </div>
            <div className="cc-0">
                <h3>03</h3>
                <p>Tulisan Berita</p>
            </div>
        </div>
    )
}