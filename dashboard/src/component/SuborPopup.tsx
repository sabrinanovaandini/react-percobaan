import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface SuborProps {
  isOpen: boolean;
  onClose: () => void;
  subor: {
    gambar: string;
    suborganisasi: string;
    content: string;
  } | null; // bisa null jika tidak ada data
}

export default function SuborPopup({ isOpen, onClose, subor }: SuborProps) {
  if (!isOpen || !subor) return null;

  return (
    <div className="popup-overlay">
      <div className="popup-box">
        <button onClick={onClose} className="btn-close">
          <FontAwesomeIcon icon={faXmark} size="lg" />
        </button>

        <div className="popup-detail">
          <div className="img-berita">
            {subor.gambar}
          </div>
          <div className="title-berita">
            <h2>{subor.suborganisasi}</h2>
          </div>
          <p>{subor.content}</p>
        </div>
      </div>
    </div>
  );
}
