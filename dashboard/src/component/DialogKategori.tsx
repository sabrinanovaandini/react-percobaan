import { useState } from "react";

export default function DialogKategori({ isOpen, onClose, onSubmit }) {
  const [nama, setNama] = useState("");

  if (!isOpen) return null;

  return (
    <div className="popup-overlay">
      <div className="popup-form">
        <h3>Form Kategori Baru</h3>
        <form style={{ marginTop: "20px" }}>
          <div className="form-group">
            <label>Kategori:</label>
              <input type="text" placeholder="Masukan Kategori" value={nama} onChange={(e) => setNama(e.target.value)}/>
          </div>
          {/* <div className="form-group">
            <label>label:</label>
              <select>
                  <option>what???</option>
                  <option>who???</option>
              </select>
          </div>
          <div className="form-group">
            <label>radio:</label>
            <div className="radio-group">
              <label className="radio-label">
                <input type="radio"/>hero
                <input type="radio"/>kero
              </label>
            </div>
          </div>
          <div className="form-group">
            <label>Gambar:</label>
              <input type="file" />
          </div> */}
          <div className="button-col">
            <button type="button" onClick={onClose}>Batal</button>
            <button type="submit" onClick={() => onSubmit(nama)}>Simpan</button>
          </div>
        </form>
      </div>
    </div>
  );
}
