import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowsRotate, faEdit, faEye, faFileExcel, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Table from "./Table";
import PopupDelete from "./PopupDelete";
import { faPlusSquare } from "@fortawesome/free-regular-svg-icons";
import DialogTautan from "./DialogTautan";
import DeletePopup from "./DeletePopup";

export default function TabelTautan() {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedKeterangan, setSelectedKeterangan] = useState("");

  const handleDeleteClick = (keterangan) => {
    setSelectedKeterangan(keterangan);
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
    setSelectedKeterangan("");
  };

  const confirmDelete = () => {
    alert(`Tautan "${selectedKeterangan}" telah dihapus.`);
    closePopup();
  };

  const columns = [
    { label: <div className="checkbox-icon"><input type="checkbox"/></div>, key: "icon" },
    { label: "URL", key: "url" },
    { label: "Keterangan", key: "keterangan" },
  ];

  const rawData = [
    { url: "/bkk", keterangan: "BKK" },
    { url: "/lsp1", keterangan: "LSP P1" },
    { url: "/prestasi", keterangan: "Prestasi" },
    { url: "/kegiatan-skanida", keterangan: "Kegiatan Skanida" },
    { url: "/kurikulum", keterangan: "Kurikulum" },
    { url: "/ppdb", keterangan: "PPDB SMK" },
    { url: "/https://magelangekspres.disway.id/kategori/1039/news", keterangan: "Magelang Express" },
  ];

  const data = rawData.map((item) => ({
    ...item,
    icon: (
      <div className="checkbox-icon">
        <input type="checkbox" />
        <FontAwesomeIcon 
          icon={faTrashCan} 
          style={{ color: "red", cursor: "pointer", marginLeft: "10px" }} 
          onClick={() => handleDeleteClick(item.keterangan)}
        />
        <FontAwesomeIcon icon={faEdit} style={{ color: "skyblue", marginLeft: "10px", cursor: "pointer" }} onClick={() => setShowAddPopup(true)} />
      </div>
    ),
  }));

  // Popup/Dialog
  const [showAddPopup, setShowAddPopup] = useState(false);
  const [showDeletePopup, setShowDeletePopup] = useState(false);

  return (
    <main className="main">
      <div className="content-title">
        <h2>Tautan</h2>
        <div className="icon-table">
          <FontAwesomeIcon icon={faPlusSquare} style={{ color: "black", cursor: "pointer" }} onClick={() => setShowAddPopup(true)} />
          <FontAwesomeIcon icon={faTrashCan} style={{ color: "red", cursor: "pointer" }} onClick={() => setShowDeletePopup(true)} />
          <FontAwesomeIcon icon={faFileExcel} style={{ color: "green", cursor: "pointer" }} />
          <FontAwesomeIcon icon={faArrowsRotate} style={{ color: "blue", cursor: "pointer" }} />
          {/* Popup Tambah "icon-table" */}
          <DialogTautan
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

      <PopupDelete 
        show={showPopup} 
        label="Tautan untuk" 
        value={selectedKeterangan} 
        onCancel={closePopup} 
        onConfirm={confirmDelete} 
      />
    </main>
  );
}
