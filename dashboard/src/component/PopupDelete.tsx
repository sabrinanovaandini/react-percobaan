export default function PopupDelete({ show, label, value, onCancel, onConfirm }) {
    if (!show) return null;
  
    return (
      <div className="popup-overlay">
        <div className="popup-box">
          <h3>Konfirmasi Hapus</h3>
          <p>Apakah Anda yakin ingin menghapus {label} "{value}"?</p>
          <div className="popup-buttons">
            <button className="btn-cancel" onClick={onCancel}>Batal</button>
            <button className="btn-delete" onClick={onConfirm}>Hapus</button>
          </div>
        </div>
      </div>
    );
  }
  