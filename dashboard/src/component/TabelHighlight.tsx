import { useState } from "react";
import Table from "./Table";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowsRotate, faEye, faFileExcel, faTrashCan  } from "@fortawesome/free-solid-svg-icons";
import PopupDelete from "./PopupDelete";
import DeletePopup from "./DeletePopup";
import PesanPopup from "./PesanPopup";

export default function TabelHighlight() {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedItem, setSelectedItem] = useState({ label: "", value: "" });
  const [showDetailPopup, setShowDetailPopup] = useState(false);
  const [selectedMessage, setSelectedMessage] = useState(null);

  // Fungsi untuk membuka popup berdasarkan data yang diklik
  const handleDeleteClick = (label, value) => {
    setSelectedItem({ label, value });
    setShowPopup(true);
  };

  // Fungsi untuk menutup popup
  const closePopup = () => {
    setShowPopup(false);
    setSelectedItem({ label: "", value: "" });
  };

  // Fungsi untuk menghapus item (sementara alert dulu)
  const confirmDelete = () => {
    alert(`${selectedItem.label} "${selectedItem.value}" telah dihapus.`);
    closePopup();
  };

  // Fungsi untuk membuka popup detail komentar
  const handleDetailClick = (message) => {
    setSelectedMessage(message);
    setShowDetailPopup(true);
  };

  // Fungsi untuk menutup popup detail
  const closeDetailPopup = () => {
    setShowDetailPopup(false);
    setSelectedMessage(null);
  };

  const columns = [
    { label: <div className="checkbox-icon"><input type="checkbox"/></div>, key: "icon" },
    { label: "Kalimat Pertama", key: "first" },
    { label: "Kalimat Kedua", key: "second" },
    { label: "Kalimat Ketiga", key: "third" },
    { label: "Link/Button", key: "link" },
  ];

  // Data asli tanpa elemen JSX langsung
  const rawData = [
    { 
        first: "Selamat Datang", 
        second: "SMK Negeri 2 Magelang", 
        third: "Unggul dan Juara", 
        link: "/home" 
    },
    { 
        first: "Eksplorasi Program Keahlian", 
        second: "SMK Negeri 2 Magelang", 
        third: "Cari Minat Program Keahlianmu", 
        link: "/home" 
    },
    { 
        first: "Bergabung Bersama Kami", 
        second: "SMK Negeri 2 Magelang", 
        third: "Informasi Pendaftaran", 
        link: "/home" 
    },
  ];

  // Tambahkan checkbox, ikon, dan tombol hapus ke setiap baris
  const data = rawData.map((item) => ({
    ...item,
    icon: (
      <div className="checkbox-icon">
        <input type="checkbox" />
        <FontAwesomeIcon 
          icon={faEye} 
          style={{ color: "green", cursor: "pointer", marginLeft: "10px" }}
          onClick={() => handleDetailClick(item)}
        />
        <FontAwesomeIcon 
          icon={faTrashCan} 
          style={{ color: "red", cursor: "pointer", marginLeft: "10px" }} 
          onClick={() => handleDeleteClick("Pesan dari", item.writer)} 
        />
      </div>
    ),
  }));

  // Popup/Dialog
  const [showDeletePopup, setShowDeletePopup] = useState(false);

  return (
    <main className="main">
      <div className="content-title">
        <h2>Hightlight Beranda</h2>
        <div className="icon-table">
          <FontAwesomeIcon icon={faTrashCan} style={{ color: "red", cursor: "pointer" }} onClick={() => setShowDeletePopup(true)} />
          <FontAwesomeIcon icon={faFileExcel} style={{ color: "green", cursor: "pointer" }} />
          <FontAwesomeIcon icon={faArrowsRotate} style={{ color: "blue", cursor: "pointer" }} />
          {/* Popup Hapus "icon-table" */}
          <DeletePopup 
            isOpen={showDeletePopup} 
            onClose={() => setShowDeletePopup(false)} 
            onConfirm={() => {
              console.log("Data dihapus");
              setShowDeletePopup(false);
            }} 
          />
        </div>
      </div>
      <Table columns={columns} data={data} />

      {/* Gunakan PopupDelete dengan label dinamis */}
      <PopupDelete 
        show={showPopup} 
        label={selectedItem.label} 
        value={selectedItem.value} 
        onCancel={closePopup} 
        onConfirm={confirmDelete} 
      />

      {/* Popup Detail Komentar */}
      <PesanPopup 
        isOpen={showDetailPopup} 
        onClose={closeDetailPopup} 
        pesan={selectedMessage} 
      />
    </main>
  );
}
