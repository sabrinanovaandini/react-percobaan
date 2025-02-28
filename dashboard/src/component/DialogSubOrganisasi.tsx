import { useState } from "react";

export default function DialogSubOrganisasi({ isOpen, onClose, onSubmit }) {
  const [nama, setNama] = useState("");

  if (!isOpen) return null;

  return (
    <div className="popup-overlay">
      <div className="popup-form">
        <h3>Form Sub Organisasi</h3>
        <form style={{ marginTop: "20px" }}>
          <div className="form-group">
            <label>Sub Organisasi:</label>
            <input type="text" placeholder="Masukan Nama Sub Organisasi" value={nama} onChange={(e) => setNama(e.target.value)}/>
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
