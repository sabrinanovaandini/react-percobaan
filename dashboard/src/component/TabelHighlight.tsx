import { useState } from "react";
import Table from "./Table";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowsRotate, faEye, faFileExcel, faTrashCan  } from "@fortawesome/free-solid-svg-icons";
import PopupDelete from "./PopupDelete";
import DeletePopup from "./DeletePopup";
import HighlightPopup from "./HighlightPopup";
import { faEdit, faPlusSquare } from "@fortawesome/free-regular-svg-icons";
import DialogHighlight from "./DialogHighlight";

export default function TabelHighlight() {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedItem, setSelectedItem] = useState({ label: "", value: "" });
  const [showDetailPopup, setShowDetailPopup] = useState(false);
  const [selectedHighlight, setSelectedHighlight] = useState(null);
  const [showAddPopup, setShowAddPopup] = useState(false);
  const [showDeletePopup, setShowDeletePopup] = useState(false);

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
  const handleDetailClick = (slide) => {
    setSelectedHighlight(slide);
    setShowDetailPopup(true);
  };

  // Fungsi untuk menutup popup detail
  const closeDetailPopup = () => {
    setShowDetailPopup(false);
    setSelectedHighlight(null);
  };

  const columns = [
    { label: <div className="checkbox-icon"><input type="checkbox"/></div>, key: "icon" },
    { label: "Slide", key: "idslide" },
    { label: "Judul", key: "title" },
    { label: "Subjudul", key: "subtitle" },
    { label: "Teks", key: "text" },
    { label: "Link/Button", key: "target" },
    { label: "Tipe Target Link/Button", key: "type" },
  ];

  // Data asli tanpa elemen JSX langsung
  const rawData = [
    { 
        idslide: 1,
        title: "Selamat Datang",
        subtitle: "SMK Negeri 2 Magelang",
        text: "Unggul dan Juara",
        type: "scroll",
        target: "#berita-smk",
        img: "/backgroundcover.jpg",
    },
    { 
        idslide: 2,
        title: "Eksplorasi Program Keahlian",
        subtitle: "SMK Negeri 2 Magelang",
        text: "Cari Minat Program Keahlianmu",
        type: "scroll",
        target: "#program-keahlian",
        img: "/images1.jpg",
    },
    { 
        idslide: 3,
        title: "Bergabung Bersama Kami",
        subtitle: "SMK Negeri 2 Magelang",
        text: "Informasi Pendaftaran",
        type: "navigate",
        target: "/ppdb",
        img: "/cover1.jpg",
    },
  ];

  // Tambahkan checkbox, ikon, dan tombol hapus ke setiap baris
  const data = rawData.map((item) => ({
    ...item,
    icon: (
      <div className="checkbox-icon">
        <input type="checkbox" key={item.idslide} />
        <FontAwesomeIcon 
          icon={faTrashCan} 
          style={{ color: "red", cursor: "pointer", marginLeft: "10px" }} 
          onClick={(e) => {
            e.stopPropagation(); // Mencegah event bubbling
            handleDeleteClick("Slide", item.idslide);
          }} 
        />
        <FontAwesomeIcon 
          icon={faEdit} 
          style={{ color: "skyblue", marginLeft: "10px", cursor: "pointer"  }} 
          onClick={(e) => {
            e.stopPropagation(); // Mencegah event bubbling
            setShowAddPopup(true);
          }}
        />
      </div>
    ),
    onClick: () => handleDetailClick(item), // Tambahkan event klik di setiap baris
  }));

  return (
    <main className="main">
      <div className="content-title">
        <h2>Hightlight Beranda</h2>
        <div className="icon-table">
          <FontAwesomeIcon icon={faPlusSquare} style={{ color: "black", cursor: "pointer" }} onClick={() => setShowAddPopup(true)} />
          <FontAwesomeIcon icon={faTrashCan} style={{ color: "red", cursor: "pointer" }} onClick={() => setShowDeletePopup(true)} />
          <FontAwesomeIcon icon={faFileExcel} style={{ color: "green", cursor: "pointer" }} />
          <FontAwesomeIcon icon={faArrowsRotate} style={{ color: "blue", cursor: "pointer" }} />

          {/* Popup Tambah "icon-table" */}
          <DialogHighlight
            isOpen={showAddPopup} 
            onClose={() => setShowAddPopup(false)} 
            onSubmit={(slide) => {
              console.log("Data ditambahkan:", slide);
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
      <Table columns={columns} data={data} rowClick={(row) => handleDetailClick(row)} />

      {/* Gunakan PopupDelete dengan label dinamis */}
      <PopupDelete 
        show={showPopup} 
        label={selectedItem.label} 
        value={selectedItem.value} 
        onCancel={closePopup} 
        onConfirm={confirmDelete} 
      />

      {/* Popup Detail Komentar */}
      <HighlightPopup 
        isOpen={showDetailPopup} 
        onClose={closeDetailPopup} 
        slide={selectedHighlight} 
      />
    </main>
  );
}
