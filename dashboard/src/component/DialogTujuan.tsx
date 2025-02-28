import { useState } from "react";

export default function DialogTujuan({ isOpen, onClose, onSubmit }) {
  const [nama, setNama] = useState("");

  if (!isOpen) return null;

  return (
    <div className="popup-overlay">
      <div className="popup-form">
        <h3>Form Tujuan</h3>
        <form style={{ marginTop: "20px" }}>
          <div className="form-group">
            <label>Tujuan:</label>
            <input type="text" placeholder="Masukan Tujuan" value={nama} onChange={(e) => setNama(e.target.value)}/>
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
