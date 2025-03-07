import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function DetailPopup({ isOpen, onClose, berita }) {
    if (!isOpen || !berita) return null;
  
    return (
      <div className="popup-overlay">
        <div className="popup-box">
            <button onClick={onClose} className="btn-close">
                <FontAwesomeIcon icon={faXmark} size="lg"/>
            </button>

            <div className="popup-detail">
                <div className="img-berita">
                    {berita.gambar} 
                </div>
                <div className="title-berita">
                    <h2>{berita.title}</h2>
                    <p>{berita.date}</p>
                </div>
                <p>{berita.content}</p>
            </div>
        </div>
      </div>
    );
  }
  