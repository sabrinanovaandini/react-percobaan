import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function EkstraPopup({ isOpen, onClose, ekstra }) {
    if (!isOpen || !ekstra) return null;
  
    return (
      <div className="popup-overlay">
        <div className="popup-box">
            <button onClick={onClose} className="btn-close">
                <FontAwesomeIcon icon={faXmark} size="lg"/>
            </button>
            
            <div className="popup-detail">
                <div className="img-berita">
                    {ekstra.gambar} 
                </div>
                <div className="title-berita">
                    <h2>{ekstra.ekstrakurikuler}</h2>
                </div>
                <p>{ekstra.content}</p>
            </div>
        </div>
      </div>
    );
  }
  