export default function EkstraPopup({ isOpen, onClose, ekstra }) {
    if (!isOpen || !ekstra) return null;
  
    return (
      <div className="popup-overlay">
        <div className="popup-box">
            <div className="popup-detail">
                <div className="img-berita">
                    {ekstra.gambar} 
                </div>
                <div className="title-berita">
                    <h2>{ekstra.ekstrakurikuler}</h2>
                </div>
                <p>{ekstra.content}</p>
            </div>
            <button onClick={onClose}>Tutup</button>
        </div>
      </div>
    );
  }
  