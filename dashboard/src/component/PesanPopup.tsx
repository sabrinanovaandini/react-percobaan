export default function PesanPopup({ isOpen, onClose, pesan }) {
    if (!isOpen || !pesan) return null;
  
    return (
      <div className="popup-overlay">
        <div className="popup-box">
            <div className="popup-komentar">
                {/* <div className="title-berita">
                    <h2>Komentar dari berita "{komentar.comentarynews}"</h2>
                </div> */}
                <div className="info-komentar">
                    <p>Pengirim "{pesan.writer}"</p>
                    <p>{pesan.date}</p>
                </div>
                <p>{pesan.content}</p>
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
  