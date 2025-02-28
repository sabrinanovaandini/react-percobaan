export default function SuborPopup({ isOpen, onClose, subor }) {
    if (!isOpen || !subor) return null;
  
    return (
      <div className="popup-overlay">
        <div className="popup-box">
            <div className="popup-detail">
                <div className="img-berita">
                    {subor.gambar} 
                </div>
                <div className="title-berita">
                    <h2>{subor.suborganisasi}</h2>
                </div>
                <p>{subor.content}</p>
            </div>
            <button onClick={onClose}>Tutup</button>
        </div>
      </div>
    );
  }
  