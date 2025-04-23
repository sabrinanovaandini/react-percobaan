import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

// Define types for the props
interface DialogStrukturOrganisasiProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (nama: string) => void;
}

export default function DialogStrukturOrganisasi({ isOpen, onClose, onSubmit }: DialogStrukturOrganisasiProps) {
  const [nama, setNama] = useState<string>("");

  if (!isOpen) return null;

  return (
    <div className="popup-overlay">
      <div className="popup-form">
        <button onClick={onClose} className="btn-close">
            <FontAwesomeIcon icon={faXmark} size="lg"/>
        </button>
            
        <h3>Form Struktur Organisasi</h3>
        <form style={{ marginTop: "20px" }}>
          <div className="form-group">
            <label>Status:</label>
            <input type="text" placeholder="Masukan Status" value={nama} onChange={(e) => setNama(e.target.value)}/>
          </div>
          <div className="form-group">
            <label>Nama:</label>
            <input type="text" placeholder="Masukan Nama" value={nama} onChange={(e) => setNama(e.target.value)}/>
          </div>
          <div className="form-group">
            <label>Jabatan:</label>
            <input type="text" placeholder="Masukan Jabatan" value={nama} onChange={(e) => setNama(e.target.value)}/>
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
