import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

interface DialogEkstrakurikulerProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (nama: string) => void;
}

export default function DialogEkstrakurikuler({
  isOpen,
  onClose,
  onSubmit,
}: DialogEkstrakurikulerProps) {
  const [nama, setNama] = useState("");

  if (!isOpen) return null;

  return (
    <div className="popup-overlay">
      <div className="popup-form">
        <button onClick={onClose} className="btn-close">
          <FontAwesomeIcon icon={faXmark} size="lg" />
        </button>

        <h3>Form Ekstrakurikuler</h3>
        <form
          style={{ marginTop: "20px" }}
          onSubmit={(e) => {
            e.preventDefault();
            onSubmit(nama);
          }}
        >
          <div className="form-group">
            <label>Ekstrakurikuler:</label>
            <input
              type="text"
              placeholder="Masukan Nama Ekstrakurikuler"
              value={nama}
              onChange={(e) => setNama(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Paragraf 1:</label>
            <textarea />
          </div>
          <div className="form-group">
            <label>Gambar:</label>
            <input type="file" />
          </div>
          <div className="button-col">
            <button type="button" onClick={onClose}>
              Batal
            </button>
            <button type="submit">Simpan</button>
          </div>
        </form>
      </div>
    </div>
  );
}
