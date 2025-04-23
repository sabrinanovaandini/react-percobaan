import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

interface DialogOrganisasiProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (organisasi: string) => void;
}

export default function DialogOrganisasi({ isOpen, onClose, onSubmit }: DialogOrganisasiProps) {
  const [nama, setNama] = useState("");

  if (!isOpen) return null;

  return (
    <div className="popup-overlay">
      <div className="popup-form">
        <button onClick={onClose} className="btn-close">
          <FontAwesomeIcon icon={faXmark} size="lg" />
        </button>

        <h3>Form Organisasi</h3>
        <form
          style={{ marginTop: "20px" }}
          onSubmit={(e) => {
            e.preventDefault();
            onSubmit(nama);
          }}
        >
          <div className="form-group">
            <label>Organisasi:</label>
            <input
              type="text"
              placeholder="Masukan Nama Organisasi"
              value={nama}
              onChange={(e) => setNama(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Paragraf 1:</label>
            <textarea />
          </div>
          <div className="form-group">
            <label>Paragraf 2:</label>
            <textarea />
          </div>
          <div className="form-group">
            <label>Gambar:</label>
            <input type="file" />
          </div>
          <div className="button-col">
            <button type="button" onClick={onClose}>Batal</button>
            <button type="submit">Simpan</button>
          </div>
        </form>
      </div>
    </div>
  );
}
