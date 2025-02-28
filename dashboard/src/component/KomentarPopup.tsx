export default function KomentarPopup({ isOpen, onClose, komentar }) {
    if (!isOpen || !komentar) return null;
  
    return (
      <div className="popup-overlay">
        <div className="popup-box">
            <div className="popup-komentar">
                <div className="title-berita">
                    <h2>Komentar dari berita "{komentar.comentarynews}"</h2>
                </div>
                <div className="info-komentar">
                    <p>Pengirim "{komentar.writer}"</p>
                    <p>{komentar.date}</p>
                </div>
                <p>{komentar.content}</p>
                <div className="balas-komentar">
                    <b>Kirim balasan</b>
                    <textarea />
                    <button>Kirim</button>
                </div>
            </div>
            <button onClick={onClose}>Tutup</button>
        </div>
      </div>
    );
  }
  