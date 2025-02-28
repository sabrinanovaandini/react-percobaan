export default function ProkePopup({ isOpen, onClose, proke }) {
    if (!isOpen || !proke) return null;
  
    return (
      <div className="popup-overlay">
        <div className="popup-box">
            <div className="popup-detail">
                <div className="img-berita">
                    {proke.gambar} 
                </div>
                <div className="title-berita">
                    <h2>{proke.programkeahlian}</h2>
                </div>
                <p>{proke.content}</p>
            </div>
            <button onClick={onClose}>Tutup</button>
        </div>
      </div>
    );
  }
  