import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

// Definisikan tipe data untuk organisasi
interface OrganisasiType {
  gambar: React.ReactNode; // atau string jika gambar berupa URL string
  organisasi: string;
  content: string;
}

// Tipe props untuk komponen
interface OrganisasiPopupProps {
  isOpen: boolean;
  onClose: () => void;
  organisasi: OrganisasiType | null;
}

export default function OrganisasiPopup({
  isOpen,
  onClose,
  organisasi,
}: OrganisasiPopupProps) {
  if (!isOpen || !organisasi) return null;

  return (
    <div className="popup-overlay">
      <div className="popup-box">
        <button onClick={onClose} className="btn-close">
          <FontAwesomeIcon icon={faXmark} size="lg" />
        </button>

        <div className="popup-detail">
          <div className="img-berita">
            {organisasi.gambar}
          </div>
          <div className="title-berita">
            <h2>{organisasi.organisasi}</h2>
          </div>
          <p>{organisasi.content}</p>
        </div>
      </div>
    </div>
  );
}
