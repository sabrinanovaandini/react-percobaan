interface DeletePopupProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

export default function DeletePopup({ isOpen, onClose, onConfirm }: DeletePopupProps) {
  if (!isOpen) return null;

  return (
    <div className="popup-overlay">
      <div className="popup-del">
        <h3>Konfirmasi Hapus</h3>
        <p>Apakah Anda yakin ingin menghapus data ini?</p>
        <div className="popup-buttons">
          <button className="btn-cancel" onClick={onClose}>Batal</button>
          <button className="btn-delete" onClick={onConfirm}>Hapus</button>
        </div>
      </div>
    </div>
  );
}
