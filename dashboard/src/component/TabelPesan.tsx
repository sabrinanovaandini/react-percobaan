import { useState } from "react";
import Table from "./Table";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowsRotate, faFileExcel, faTrashCan  } from "@fortawesome/free-solid-svg-icons";
import PopupDelete from "./PopupDelete";
import DeletePopup from "./DeletePopup";
import PesanPopup from "./PesanPopup";

export default function TabelPesan() {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedItem, setSelectedItem] = useState({ label: "", value: "" });
  const [showDetailPopup, setShowDetailPopup] = useState(false);
  const [selectedMessage, setSelectedMessage] = useState(null);

  // Fungsi untuk membuka popup berdasarkan data yang diklik
  const handleDeleteClick = (label: string, value: string) => {
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
  const handleDetailClick = (message: any) => {
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
    { label: "Penulis", key: "writer" },
    { label: "Email", key: "email" },
    { label: "Tanggal Kirim", key: "date" },
  ];

  // Data asli tanpa elemen JSX langsung
  const rawData = [
    { writer: "Nova", email: "nova@gmail.com", date: "02-02-2025 09:00:15", content: "Halo, kamu siapa??" },
    { writer: "Bunga", email: "bunga@gmail.com", date: "02-02-2025 10:15:30", content: "Pesan ini dari seseorang" },
    { writer: "Erina", email: "erina@gmail.com", date: "02-02-2025 11:20:45", content: "annyeonghaseyo yorobun" },
  ];

  // Tambahkan checkbox, ikon, dan tombol hapus ke setiap baris
  const data = rawData.map((item) => ({
    ...item,
    icon: (
      <div className="checkbox-icon">
        <input type="checkbox" />
        <FontAwesomeIcon 
          icon={faTrashCan} 
          style={{ color: "red", cursor: "pointer", marginLeft: "10px" }} 
          onClick={(e) => {
            e.stopPropagation(); // Mencegah event bubbling
            handleDeleteClick("Pesan dari", item.writer);
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
        <h2>Pesan</h2>
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
      <Table columns={columns} data={data} onRowClick={(row) => handleDetailClick(row)} />

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
