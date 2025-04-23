type PopupDeleteProps = {
  show: boolean;
  label: string;
  value?: string;
  onCancel: () => void;
  onConfirm: () => void;
};

export default function PopupDelete({ show, label, value, onCancel, onConfirm }: PopupDeleteProps) {
  if (!show) return null;

  return (
    <div className="popup-overlay">
      <div className="popup-del">
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
