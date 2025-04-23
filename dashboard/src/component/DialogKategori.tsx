import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

interface DialogKategoriProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (nama: string) => void;
}

export default function DialogKategori({
  isOpen,
  onClose,
  onSubmit,
}: DialogKategoriProps) {
  const [nama, setNama] = useState("");

  if (!isOpen) return null;

  return (
    <div className="popup-overlay">
      <div className="popup-form">
        <button onClick={onClose} className="btn-close">
          <FontAwesomeIcon icon={faXmark} size="lg" />
        </button>

        <h3>Form Kategori Baru</h3>
        <form
          style={{ marginTop: "20px" }}
          onSubmit={(e) => {
            e.preventDefault(); // untuk mencegah reload halaman
            onSubmit(nama);
          }}
        >
          <div className="form-group">
            <label>Kategori:</label>
            <input
              type="text"
              placeholder="Masukan Kategori"
              value={nama}
              onChange={(e) => setNama(e.target.value)}
            />
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
