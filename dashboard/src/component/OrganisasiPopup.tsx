import React from "react";

export default function OrganisasiPopup({ isOpen, onClose, organisasi }) {
  if (!isOpen || !organisasi) return null;

  return (
    <div className="popup-overlay">
      <div className="popup-box">
        <h2>Detail Organisasi</h2>
        <div className="popup-content">
          <img 
            src={organisasi.gambar} 
            alt={organisasi.organisasi} 
            className="popup-image"
          />
          <p><strong>Nama:</strong> {organisasi}</p>
          <p><strong>Deskripsi:</strong> {organisasi.content || "ga muncul??"}</p>
        </div>
        <div className="popup-footer">
          <button className="close-button" onClick={onClose}>Tutup</button>
        </div>
      </div>
    </div>
  );
}
