import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function KomentarPopup({ isOpen, onClose, komentar }) {
    if (!isOpen || !komentar) return null;
  
    return (
      <div className="popup-overlay">
        <div className="popup-box">
            <button onClick={onClose} className="btn-close">
                <FontAwesomeIcon icon={faXmark} size="lg"/>
            </button>
            
            <div className="popup-komentar">
                <div className="title-berita">
                    <h2>Komentar dari berita "{komentar.comentarynews}"</h2>
                </div>
                <div className="info-komentar">
                    <p>Pengirim "{komentar.writer}"</p>
                    <p>{komentar.date}</p>
                </div>
                <p>{komentar.content}</p>
                <div className="balas-komentar">
                    <b>Kirim balasan</b>
                    <textarea />
                    <button>Kirim</button>
                </div>
            </div>
        </div>
      </div>
    );
  }
  