import { useState } from "react";
import Table from "./Table";
import PopupDelete from "./PopupDelete";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowsRotate, faEdit, faFileExcel, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { faPlusSquare } from "@fortawesome/free-regular-svg-icons";
import DialogStrukturOrganisasi from "./DialogStrukturOrganisasi";
import DeletePopup from "./DeletePopup";

// Define the type for each item in rawData
interface StrukturOrganisasiItem {
  gambar: JSX.Element;
  status: string;
  nama: string;
  jabatan: string;
}

// Extend StrukturOrganisasiItem to include 'icon' for the table row actions
interface StrukturOrganisasiItemWithIcon extends StrukturOrganisasiItem {
  icon: JSX.Element;
}

const columns = [
  { label: <div className="checkbox-icon"><input type="checkbox" /></div>, key: "icon" },
  { label: "Gambar", key: "gambar" },
  { label: "Status", key: "status" },
  { label: "Nama", key: "nama" },
  { label: "Jabatan", key: "jabatan" },
];

const rawData: StrukturOrganisasiItem[] = [
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
  // Add other items here...
];

export default function TabelStrukturOrganisasi() {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedItem, setSelectedItem] = useState<StrukturOrganisasiItem | null>(null); // Type selectedItem

  const handleDeleteClick = (item: StrukturOrganisasiItem) => {
    setSelectedItem(item);
    setShowPopup(true);
  };

  const handleDetailClick = (row: StrukturOrganisasiItem) => {
    console.log("Detail clicked", row);
    // Handle detail click logic here
  };

  const closePopup = () => {
    setShowPopup(false);
    setSelectedItem(null);
  };

  const confirmDelete = () => {
    alert(`Data ${selectedItem?.nama ?? "Unknown"} telah dihapus.`);
    closePopup();
  };

  // Map rawData and include the 'icon' property
  const data: StrukturOrganisasiItemWithIcon[] = rawData.map((item) => ({
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
      <Table<StrukturOrganisasiItemWithIcon>
        columns={columns}
        data={data}
        onRowClick={(row) => handleDetailClick(row)}
      />

      <PopupDelete
        show={showPopup}
        label="Struktur Organisasi"
        value={selectedItem?.nama ?? "Unknown"}  // Use a default value if undefined
        onCancel={closePopup}
        onConfirm={confirmDelete}
      />
    </main>
  );
}
