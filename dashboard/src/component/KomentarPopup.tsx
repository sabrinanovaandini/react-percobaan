import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Definisikan tipe data komentar
interface KomentarType {
  commentarynews: string;
  writer: string;
  date: string;
  content: string;
}

// Definisikan props untuk komponen ini
interface KomentarPopupProps {
  isOpen: boolean;
  onClose: () => void;
  komentar: KomentarType | null;
}

export default function KomentarPopup({
  isOpen,
  onClose,
  komentar,
}: KomentarPopupProps) {
  if (!isOpen || !komentar) return null;

  return (
    <div className="popup-overlay">
      <div className="popup-box">
        <button onClick={onClose} className="btn-close">
          <FontAwesomeIcon icon={faXmark} size="lg" />
        </button>

        <div className="popup-komentar">
          <div className="title-berita">
            <h2>Komentar dari berita "{komentar.commentarynews}"</h2>
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
