import { useState } from "react";
import Table from "./Table";
import PopupDelete from "./PopupDelete";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowsRotate, faEdit, faEye, faFileExcel, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { faPlusSquare } from "@fortawesome/free-regular-svg-icons";
import DialogOrganisasi from "./DialogOrganisasi";
import DeletePopup from "./DeletePopup";
import OrganisasiPopup from "./OrganisasiPopup";

const columns = [
  { label: <div className="checkbox-icon"><input type="checkbox"/></div>, key: "icon" },
  { label: "Organisasi", key: "organisasi" },
];

export default function TabelOrganisasi() {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedOrganisasi, setSelectedOrganisasi] = useState(null);

  const [showAddPopup, setShowAddPopup] = useState(false);
  const [showDeletePopup, setShowDeletePopup] = useState(false);
  const [showDetailPopup, setShowDetailPopup] = useState(false);
  // const [selectedOrganisasi, setSelectedOrganisasi] = useState(null);

  // Fungsi untuk membuka popup konfirmasi hapus
  const handleDeleteClick = (organisasi) => {
    setSelectedOrganisasi(organisasi);
    setShowPopup(true);
  };

  // Fungsi untuk menutup popup hapus
  const closePopup = () => {
    setShowPopup(false);
    setSelectedOrganisasi(null);
  };

  // Fungsi untuk menghapus data (sementara alert dulu)
  const confirmDelete = () => {
    alert(`Organisasi "${selectedOrganisasi}" telah dihapus.`);
    closePopup();
  };

  // Fungsi untuk membuka popup detail organisasi
  const handleDetailClick = (organisasi) => {
    setSelectedOrganisasi(organisasi);
    setShowDetailPopup(true);
  };

  // Fungsi untuk menutup popup detail
  const closeDetailPopup = () => {
    setShowDetailPopup(false);
    setSelectedOrganisasi(null);
  };

  const rawData = [
    {
      organisasi: "OSIS (OSKAMA)",
      gambar: <img src={"/osis.jpg"} alt="organisasi" style={{ objectFit: "cover" }} />, 
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur sit molestiae blanditiis iste voluptates mollitia nesciunt repellat soluta ipsum eos hic sapiente nobis, voluptatem voluptas eius officia quidem, harum vitae!Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur sit molestiae blanditiis iste voluptates mollitia nesciunt repellat soluta ipsum eos hic sapiente nobis, voluptatem voluptas eius officia quidem, harum vitae!Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur sit molestiae blanditiis iste voluptates mollitia nesciunt repellat soluta ipsum eos hic sapiente nobis, voluptatem voluptas eius officia quidem, harum vitae!",
    }
  ];

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
            handleDeleteClick(item.organisasi);
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
  }));

  return (
    <main className="main">
      <div className="content-title">
        <h2>Organisasi</h2>
        <div className="icon-table">
          <FontAwesomeIcon 
            icon={faPlusSquare} 
            style={{ color: "black", cursor: "pointer" }} 
            onClick={() => setShowAddPopup(true)} 
          />
          <FontAwesomeIcon 
            icon={faTrashCan} 
            style={{ color: "red", cursor: "pointer" }} 
            onClick={() => setShowDeletePopup(true)} 
          />
          <FontAwesomeIcon icon={faFileExcel} style={{ color: "green", cursor: "pointer" }} />
          <FontAwesomeIcon icon={faArrowsRotate} style={{ color: "blue", cursor: "pointer" }} />
          
          {/* Popup Tambah Organisasi */}
          <DialogOrganisasi
            isOpen={showAddPopup} 
            onClose={() => setShowAddPopup(false)} 
            onSubmit={(nama) => {
              console.log("Data ditambahkan:", nama);
              setShowAddPopup(false);
            }} 
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
        </div>
      </div>
      <Table columns={columns} data={data} rowClick={(row) => handleDetailClick(row)} />

      {/* Popup Konfirmasi Hapus */}
      <PopupDelete
        show={showPopup}
        label="Organisasi"
        value={selectedOrganisasi}
        onCancel={closePopup}
        onConfirm={confirmDelete}
      />

      {/* Popup Detail Organisasi */}
      <OrganisasiPopup 
        isOpen={showDetailPopup} 
        onClose={closeDetailPopup} 
        organisasi={selectedOrganisasi} 
      />
    </main>
  );
}
