import { useState } from "react";
import Table from "./Table";
import PopupDelete from "./PopupDelete";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowsRotate, faEdit, faFileExcel, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { faPlusSquare } from "@fortawesome/free-regular-svg-icons";
import DialogStrukturOrganisasi from "./DialogStrukturOrganisasi";
import DeletePopup from "./DeletePopup";

const columns = [
  { label: <div className="checkbox-icon"><input type="checkbox"/></div>, key: "icon" },
  { label: "Gambar", key: "gambar" },
  { label: "Status", key: "status" },
  { label: "Nama", key: "nama" },
  { label: "Jabatan", key: "jabatan" },
];

const rawData = [
  {
    gambar: <img src={"/kepala sekolah.jpeg"} alt="kepala sekolah" style={{ objectFit: "cover", width: "120px", height: "140px", borderRadius: "10px" }} />, 
    status: "Pimpinan Sekolah", 
    nama: "Kurniawan Basuki, S.Pd.,M.T", 
    jabatan: "Kepala Sekolah SMK Negeri 2 Magelang", 
  },
  {
    gambar: <img src={"/kepala sekolah.jpeg"} alt="kepala sekolah" style={{ objectFit: "cover", width: "120px", height: "140px", borderRadius: "10px" }} />, 
    status: "Wakil Kepala Sekolah", 
    nama: "Kurniawan Basuki, S.Pd.,M.T", 
    jabatan: "Waka Bidang Kurikulum", 
  },
  {
    gambar: <img src={"/kepala sekolah.jpeg"} alt="kepala sekolah" style={{ objectFit: "cover", width: "120px", height: "140px", borderRadius: "10px" }} />,  
    status: "Wakil Kepala Sekolah", 
    nama: "Kurniawan Basuki, S.Pd.,M.T", 
    jabatan: "Waka Bidang Kesiswaan", 
  },
  {
    gambar: <img src={"/kepala sekolah.jpeg"} alt="kepala sekolah" style={{ objectFit: "cover", width: "120px", height: "140px", borderRadius: "10px" }} />, 
    status: "Wakil Kepala Sekolah", 
    nama: "Kurniawan Basuki, S.Pd.,M.T", 
    jabatan: "Waka Bidang Sarpras", 
  },
  {
    gambar: <img src={"/kepala sekolah.jpeg"} alt="kepala sekolah" style={{ objectFit: "cover", width: "120px", height: "140px", borderRadius: "10px" }} />, 
    status: "Wakil Kepala Sekolah", 
    nama: "Kurniawan Basuki, S.Pd.,M.T", 
    jabatan: "Waka Bidang Humas dan Industri", 
  },
  {
    gambar: <img src={"/kepala sekolah.jpeg"} alt="kepala sekolah" style={{ objectFit: "cover", width: "120px", height: "140px", borderRadius: "10px" }} />, 
    status: "Ketua Program Studi Sekolah", 
    nama: "Kurniawan Basuki, S.Pd.,M.T", 
    jabatan: "Ketua Program Studi Akuntansi dan Keuangan Lembaga", 
  },
  {
    gambar: <img src={"/kepala sekolah.jpeg"} alt="kepala sekolah" style={{ objectFit: "cover", width: "120px", height: "140px", borderRadius: "10px" }} />,  
    status: "Ketua Program Studi Sekolah", 
    nama: "Kurniawan Basuki, S.Pd.,M.T", 
    jabatan: "Ketua Program Studi Manajemen Perkantoran dan Keuangan Lembaga", 
  },
  {
    gambar: <img src={"/kepala sekolah.jpeg"} alt="kepala sekolah" style={{ objectFit: "cover", width: "120px", height: "140px", borderRadius: "10px" }} />, 
    status: "Ketua Program Studi Sekolah", 
    nama: "Kurniawan Basuki, S.Pd.,M.T", 
    jabatan: "Ketua Program Studi Pengembangan Perangkat Lunak dan Gim", 
  },
  {
    gambar: <img src={"/kepala sekolah.jpeg"} alt="kepala sekolah" style={{ objectFit: "cover", width: "120px", height: "140px", borderRadius: "10px" }} />, 
    status: "Ketua Program Studi Sekolah", 
    nama: "Kurniawan Basuki, S.Pd.,M.T", 
    jabatan: "Ketua Program Studi Pemasaran", 
  },
];

export default function TabelStrukturOrganisasi() {
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
    alert(`Data ${selectedItem?.nama} telah dihapus.`);
    closePopup();
  };

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
        <h2>Struktur Organisasi</h2>
        <div className="icon-table">
          <FontAwesomeIcon icon={faPlusSquare} style={{ color: "black", cursor: "pointer" }} onClick={() => setShowAddPopup(true)} />
          <FontAwesomeIcon icon={faTrashCan} style={{ color: "red", cursor: "pointer" }} onClick={() => setShowDeletePopup(true)} />
          <FontAwesomeIcon icon={faFileExcel} style={{ color: "green", cursor: "pointer" }} />
          <FontAwesomeIcon icon={faArrowsRotate} style={{ color: "blue", cursor: "pointer" }} />
          {/* Popup Tambah "icon-table" */}
          <DialogStrukturOrganisasi
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
      <Table columns={columns} data={data} rowClick={(row) => handleDetailClick(row)} />

      <PopupDelete
        show={showPopup}
        label="Struktur Organisasi"
        value={selectedItem?.nama}
        onCancel={closePopup}
        onConfirm={confirmDelete}
      />
    </main>
  );
}
