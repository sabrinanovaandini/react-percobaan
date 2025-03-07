import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ProkePopup({ isOpen, onClose, proke }) {
    if (!isOpen || !proke) return null;
  
    return (
      <div className="popup-overlay">
        <div className="popup-box">
            <button onClick={onClose} className="btn-close">
                <FontAwesomeIcon icon={faXmark} size="lg"/>
            </button>
            
            <div className="popup-detail">
                <div className="img-berita">
                    {proke.gambar} 
                </div>
                <div className="title-berita">
                    <h2>{proke.programkeahlian}</h2>
                </div>
                <p>{proke.content}</p>
            </div>
        </div>
      </div>
    );
  }
  