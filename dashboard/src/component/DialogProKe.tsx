import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

// Define types for the props
interface DialogProKeProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (nama: string) => void;
}

export default function DialogProKe({ isOpen, onClose, onSubmit }: DialogProKeProps) {
  const [nama, setNama] = useState<string>("");

  if (!isOpen) return null;

  return (
    <div className="popup-overlay">
      <div className="popup-form">
        <button onClick={onClose} className="btn-close">
            <FontAwesomeIcon icon={faXmark} size="lg"/>
        </button>
        
        <h3>Form Program Keahlian Baru</h3>
        <form style={{ marginTop: "20px" }}>
          <div className="form-group">
            <label>Program Keahlian:</label>
            <input type="text" placeholder="Masukan Nama Program Keahlian" value={nama} onChange={(e) => setNama(e.target.value)}/>
          </div>
          <div className="form-group">
            <label>Paragraf 1:</label>
            <textarea/>
          </div>
          <div className="form-group">
            <label>Paragraf 2:</label>
            <textarea/>
          </div>
          <div className="form-group">
            <label>Gambar:</label>
              <input type="file" />
          </div>
          <div className="button-col">
            <button type="button" onClick={onClose}>Batal</button>
            <button type="submit" onClick={() => onSubmit(nama)}>Simpan</button>
          </div>
        </form>
      </div>
    </div>
  );
}
