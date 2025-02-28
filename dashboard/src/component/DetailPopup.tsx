export default function DetailPopup({ isOpen, onClose, berita }) {
    if (!isOpen || !berita) return null;
  
    return (
      <div className="popup-overlay">
        <div className="popup-box">
            <div className="popup-detail">
                <div className="img-berita">
                    {berita.gambar} 
                </div>
                <div className="title-berita">
                    <h2>{berita.title}</h2>
                    <p>{berita.date}</p>
                </div>
                <p>{berita.content}</p>
            </div>
            <button onClick={onClose}>Tutup</button>
        </div>
      </div>
    );
  }
  