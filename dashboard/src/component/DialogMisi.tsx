import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

export default function DialogMisi({ isOpen, onClose, onSubmit }) {
  const [nama, setNama] = useState("");

  if (!isOpen) return null;

  return (
    <div className="popup-overlay">
      <div className="popup-form">
        <button onClick={onClose} className="btn-close">
            <FontAwesomeIcon icon={faXmark} size="lg"/>
        </button>
            
        <h3>Form Misi</h3>
        <form style={{ marginTop: "20px" }}>
          <div className="form-group">
            <label>Misi:</label>
            <input type="text" placeholder="Masukan Misi" />
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
