import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Define types for the props
interface Ekstra {
  gambar: string;          // Type for image URL or content
  ekstrakurikuler: string; // Type for the extra-curricular name
  content: string;         // Type for the content text
}

interface EkstraPopupProps {
  isOpen: boolean;         // Boolean to control if the popup is open
  onClose: () => void;     // Function to handle closing the popup
  ekstra: Ekstra | null;   // The ekstra object or null if not available
}

export default function EkstraPopup({ isOpen, onClose, ekstra }: EkstraPopupProps) {
  if (!isOpen || !ekstra) return null;

  return (
    <div className="popup-overlay">
      <div className="popup-box">
        <button onClick={onClose} className="btn-close">
          <FontAwesomeIcon icon={faXmark} size="lg" />
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
