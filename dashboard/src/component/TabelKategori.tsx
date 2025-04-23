import { useState } from "react";
import Table from "./Table";
import PopupDelete from "./PopupDelete";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowsRotate, faEdit, faFileExcel, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { faPlusSquare } from "@fortawesome/free-regular-svg-icons";
import DialogKategori from "./DialogKategori";
import DeletePopup from "./DeletePopup";

const columns = [
  { label: <div className="checkbox-icon"><input type="checkbox"/></div>, key: "icon" },
  { label: "Kategori", key: "category" },
];

export default function TabelKategori() {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");

  // Fungsi untuk membuka popup konfirmasi hapus
  const handleDeleteClick = (category: string) => {
    setSelectedCategory(category);
    setShowPopup(true);
  };

  // Fungsi untuk menutup popup
  const closePopup = () => {
    setShowPopup(false);
    setSelectedCategory("");
  };

  // Fungsi untuk menghapus kategori (sementara alert dulu)
  const confirmDelete = () => {
    alert(`Kategori "${selectedCategory}" telah dihapus.`);
    closePopup();
  };

  const rawData = [
    { category: "AKL" },
    { category: "Kegiatan Skanida" },
    { category: "Prestasi" },
    { category: "PPLG" },
    { category: "MPLB" },
    { category: "PM" },
  ];

  const data = rawData.map((item) => ({
    ...item,
    icon: (
      <div className="checkbox-icon">
        <input type="checkbox" />
        <FontAwesomeIcon 
          icon={faTrashCan} 
          style={{ color: "red", cursor: "pointer" ,marginLeft: "10px" }} 
          onClick={() => handleDeleteClick(item.category)}
        />
        <FontAwesomeIcon icon={faEdit} style={{ color: "skyblue", marginLeft: "10px", cursor: "pointer"  }} onClick={() => setShowAddPopup(true)} />
      </div>
    ),
  }));

  // Popup/Dialog
  const [showAddPopup, setShowAddPopup] = useState(false);
  const [showDeletePopup, setShowDeletePopup] = useState(false);

  return (
    <main className="main">
      <div className="content-title">
        <h2>Kategori Berita</h2>
        <div className="icon-table">
          <FontAwesomeIcon icon={faPlusSquare} style={{ color: "black", cursor: "pointer" }} onClick={() => setShowAddPopup(true)} />
          <FontAwesomeIcon icon={faTrashCan} style={{ color: "red", cursor: "pointer" }} onClick={() => setShowDeletePopup(true)} />
          <FontAwesomeIcon icon={faFileExcel} style={{ color: "green", cursor: "pointer" }} />
          <FontAwesomeIcon icon={faArrowsRotate} style={{ color: "blue", cursor: "pointer" }} />
          {/* Popup Tambah "icon-table" */}
          <DialogKategori 
            isOpen={showAddPopup} 
            onClose={() => setShowAddPopup(false)} 
            onSubmit={(nama) => {
              console.log("Data ditambahkan:", nama);
              setShowAddPopup(false);
            }} 
          />
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

      {/* PopupDelete untuk konfirmasi penghapusan */}
      <PopupDelete
        show={showPopup}
        label="Kategori"
        value={selectedCategory}
        onCancel={closePopup}
        onConfirm={confirmDelete}
      />
    </main>
  );
}
