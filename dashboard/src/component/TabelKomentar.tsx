import { useState } from "react";
import Table from "./Table";
import PopupDelete from "./PopupDelete";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowsRotate, faFileExcel, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import DeletePopup from "./DeletePopup";
import KomentarPopup from "./KomentarPopup";

const columns = [
  { label: <div className="checkbox-icon"><input type="checkbox"/></div>, key: "icon" },
  { label: "Penulis", key: "writer" },
  { label: "Komentar Untuk Berita", key: "comentarynews" },
  { label: "Tanggal Kirim", key: "date" },
];

export default function TabelKomentar() {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedComentary, setSelectedComentary] = useState("");
  const [showDetailPopup, setShowDetailPopup] = useState(false);
  const [selectedComment, setSelectedComment] = useState(null);

  // Fungsi untuk membuka popup konfirmasi hapus
  const handleDeleteClick = (comentarynews: string) => {
    setSelectedComentary(comentarynews);
    setShowPopup(true);
  };

  // Fungsi untuk menutup popup
  const closePopup = () => {
    setShowPopup(false);
    setSelectedComentary("");
  };

  // Fungsi untuk menghapus komentar (sementara alert dulu)
  const confirmDelete = () => {
    alert(`Komentar "${selectedComentary}" telah dihapus.`);
    closePopup();
  };

  // Fungsi untuk membuka popup detail komentar
  const handleDetailClick = (comment:any) => {
    setSelectedComment(comment);
    setShowDetailPopup(true);
  };

  // Fungsi untuk menutup popup detail
  const closeDetailPopup = () => {
    setShowDetailPopup(false);
    setSelectedComment(null);
  };

  const data = [
    { writer: "Nova", comentarynews: "AKL", date: "02-02-2025 09:00:15", content: "Ini adalah komentar pertama tentang AKL." },
    { writer: "Nova", comentarynews: "Kegiatan Skanida",  date: "02-02-2025 09:00:15", content: "Komentar tentang kegiatan Skanida." },
    { writer: "Nova", comentarynews: "Prestasi",  date: "02-02-2025 09:00:15", content: "Prestasi sekolah yang membanggakan." },
  ].map((item) => ({
    ...item,
    icon: (
      <div className="checkbox-icon">
        <input type="checkbox" />
        <FontAwesomeIcon 
        icon={faTrashCan} 
        style={{ color: "red", cursor: "pointer", marginLeft: "10px" }} 
        onClick={(e) => {
          e.stopPropagation(); // Mencegah event bubbling
          handleDeleteClick(item.writer);
        }} 
      />
      </div>
    ),
  }));

  // Popup/Dialog
  const [showDeletePopup, setShowDeletePopup] = useState(false);

  return (
    <main className="main">
      <div className="content-title">
        <h2>Komentar Berita</h2>
        <div className="icon-table">
          <FontAwesomeIcon icon={faTrashCan} style={{ color: "red", cursor: "pointer" }} onClick={() => setShowDeletePopup(true)} />
          <FontAwesomeIcon icon={faFileExcel} style={{ color: "green", cursor: "pointer" }} />
          <FontAwesomeIcon icon={faArrowsRotate} style={{ color: "blue", cursor: "pointer" }} />
        </div>
      </div>
      <Table columns={columns} data={data} onRowClick={(row) => handleDetailClick(row)} />

      {/* Popup Konfirmasi Hapus */}
      <PopupDelete 
        show={showPopup} 
        label="Komentar" 
        value={selectedComentary} 
        onCancel={closePopup} 
        onConfirm={confirmDelete} 
      />

      {/* Popup Hapus Massal */}
      <DeletePopup 
        isOpen={showDeletePopup} 
        onClose={() => setShowDeletePopup(false)} 
        onConfirm={() => {
          console.log("Data dihapus");
          setShowDeletePopup(false);
        }} 
      />

      {/* Popup Detail Komentar */}
      <KomentarPopup 
        isOpen={showDetailPopup} 
        onClose={closeDetailPopup} 
        komentar={selectedComment} 
      />
    </main>
  );
}
