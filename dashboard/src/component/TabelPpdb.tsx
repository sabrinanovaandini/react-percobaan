import { useState } from "react";
import Table from "./Table";
import PopupDelete from "./PopupDelete";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowsRotate, faEdit, faFileExcel, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import DialogPpdb from "./DialogPpdb";
import DeletePopup from "./DeletePopup";
import { faPlusSquare } from "@fortawesome/free-regular-svg-icons";

const columns = [
  { label: <div className="checkbox-icon"><input type="checkbox"/></div>, key: "icon" },
  { label: "URL", key: "url" },
  { label: "Keterangan", key: "keterangan" },
];

export default function TabelPPDB() {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleDeleteClick = (item) => {
    setSelectedItem(item);
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
    setSelectedItem(null);
  };

  const confirmDelete = () => {
    alert(`Data dengan URL \"${selectedItem?.keterangan}\" telah dihapus.`);
    closePopup();
  };

  const rawData = [
    { url: "https://linktr.ee/smkn2mgl", keterangan: "Informasi PPDB 2024 SMKN 2 Magelang" },
    { url: "https://drive.google.com/drive/folders/1S8E0JEPyp1BvaxZkP4WQ0TsXKf_oLCTs?usp=drive_link", keterangan: "Download Dokumen Pendukung PPDB 2024" },
    { url: "https://jateng.siap-ppdb.com/#/", keterangan: "Website PPDB Online Prov Jateng 2024" },
  ];

  const data = rawData.map((item) => ({
    ...item,
    icon: (
      <div className="checkbox-icon">
        <input type="checkbox" />
        <FontAwesomeIcon
          icon={faTrashCan}
          style={{ color: "red", cursor: "pointer", marginLeft: "10px" }}
          onClick={() => handleDeleteClick(item)}
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
        <h2>PPDB</h2>
        <div className="icon-table">
          <FontAwesomeIcon icon={faPlusSquare} style={{ color: "black", cursor: "pointer" }} onClick={() => setShowAddPopup(true)} />
          <FontAwesomeIcon icon={faTrashCan} style={{ color: "red", cursor: "pointer" }} onClick={() => setShowDeletePopup(true)} />
          <FontAwesomeIcon icon={faFileExcel} style={{ color: "green", cursor: "pointer" }} />
          <FontAwesomeIcon icon={faArrowsRotate} style={{ color: "blue", cursor: "pointer" }} />
          {/* Popup Tambah "icon-table" */}
          <DialogPpdb
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
        label="Link Informasi PPDB"
        value={selectedItem?.keterangan}
        onCancel={closePopup}
        onConfirm={confirmDelete}
      />
    </main>
  );
}
