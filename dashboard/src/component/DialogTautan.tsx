import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

// Define types for the props
interface DialogTautanProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (nama: string) => void;
}

export default function DialogTautan({ isOpen, onClose, onSubmit }: DialogTautanProps) {
  const [nama, setNama] = useState<string>("");

  if (!isOpen) return null;

  return (
    <div className="popup-overlay">
      <div className="popup-form">
        <button onClick={onClose} className="btn-close">
            <FontAwesomeIcon icon={faXmark} size="lg"/>
        </button>
            
        <h3>Tambah Tautan Baru</h3>
        <form style={{ marginTop: "20px" }}>
          <div className="form-group">
            <label>Tautan/URL:</label>
              <input type="text" placeholder="Masukan URL" value={nama} onChange={(e) => setNama(e.target.value)}/>
          </div>
          <div className="form-group">
            <label>Keterangan:</label>
              <input type="text" placeholder="Masukan Keterangan" value={nama} onChange={(e) => setNama(e.target.value)}/>
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
