import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function PesanPopup({ isOpen, onClose, pesan }) {
    if (!isOpen || !pesan) return null;
  
    return (
      <div className="popup-overlay">
        <div className="popup-box">
            <button onClick={onClose} className="btn-close">
                <FontAwesomeIcon icon={faXmark} size="lg"/>
            </button>
            
            <div className="popup-komentar">
                <div className="info-komentar">
                    <p>Pengirim "{pesan.writer}"</p>
                    <p>{pesan.date}</p>
                </div>
                <p>{pesan.content}</p>
            </div>
            <button>
                <FontAwesomeIcon icon={faEnvelope} size="lg" style={{marginRight: "8px"}}/>
                Kirim Balasan
            </button>
        </div>
      </div>
    );
  }
  