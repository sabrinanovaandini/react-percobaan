import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

interface DialogHighlightProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: string) => void;
}

export default function DialogHighlight({
  isOpen,
  onClose,
  onSubmit,
}: DialogHighlightProps) {
  const [nama, setNama] = useState("");

  if (!isOpen) return null;

  return (
    <div className="popup-overlay">
      <div className="popup-form">
        <button onClick={onClose} className="btn-close">
          <FontAwesomeIcon icon={faXmark} size="lg" />
        </button>

        <h3>Form Highlight/Slider Beranda</h3>
        <form
          style={{ marginTop: "20px" }}
          onSubmit={(e) => {
            e.preventDefault();
            onSubmit(nama);
          }}
        >
          <div className="form-group">
            <label>h2:</label>
            <input
              type="text"
              placeholder="Masukan Nama Judul"
              value={nama}
              onChange={(e) => setNama(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>h1:</label>
            <input
              type="text"
              placeholder="Masukan Nama Sekolah dengan Huruf Kapital Semua"
              value={nama}
              onChange={(e) => setNama(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>p:</label>
            <textarea />
          </div>
          <div className="form-group">
            <label>Link:</label>
            <input
              type="text"
              placeholder="Masukan Nama Link"
              value={nama}
              onChange={(e) => setNama(e.target.value)}
            />
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
