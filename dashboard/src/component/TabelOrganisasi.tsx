import { useState } from "react";
import Table from "./Table";
import PopupDelete from "./PopupDelete";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowsRotate, faEdit, faFileExcel, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { faPlusSquare } from "@fortawesome/free-regular-svg-icons";
import DialogOrganisasi from "./DialogOrganisasi";
import DeletePopup from "./DeletePopup";
import OrganisasiPopup from "./OrganisasiPopup";

// Define the type for each item in rawData
interface OrganisasiType {
  organisasi: string;
  gambar: JSX.Element;
  content: string;
}

// Add 'icon' for the table row actions
interface OrganisasiWithIcon extends OrganisasiType {
  icon: JSX.Element;
}

const columns = [
  { label: <div className="checkbox-icon"><input type="checkbox" /></div>, key: "icon" },
  { label: "Organisasi", key: "organisasi" },
];

const rawData: OrganisasiType[] = [
  {
    organisasi: "OSIS (OSKAMA)",
    gambar: <img src={"/osis.jpg"} alt="organisasi" style={{ objectFit: "cover" }} />,
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit...",
  }
];

export default function TabelOrganisasi() {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedOrganisasi, setSelectedOrganisasi] = useState<OrganisasiType | null>(null);
  const [showAddPopup, setShowAddPopup] = useState(false);
  const [showDeletePopup, setShowDeletePopup] = useState(false);
  const [showDetailPopup, setShowDetailPopup] = useState(false);

  const handleDeleteClick = (organisasi: OrganisasiType) => {
    setSelectedOrganisasi(organisasi);
    setShowPopup(true);
  };

  
  const closePopup = () => {
    setShowPopup(false);
    setSelectedOrganisasi(null);
  };


  const confirmDelete = () => {
    alert(`Organisasi "${selectedOrganisasi?.organisasi}" telah dihapus.`);
    closePopup();
  };

  const handleDetailClick = (organisasi: OrganisasiType) => {
    setSelectedOrganisasi(organisasi);
    setShowDetailPopup(true);
  };


  const closeDetailPopup = () => {
    setShowDetailPopup(false);
    setSelectedOrganisasi(null);
  };

  // Prepare data for table with icon actions
  const data: OrganisasiWithIcon[] = rawData.map((item) => ({
    ...item,
    icon: (
      <div className="checkbox-icon">
        <input type="checkbox" />
        <FontAwesomeIcon
          icon={faTrashCan}
          style={{ color: "red", cursor: "pointer", marginLeft: "10px" }}
          onClick={(e) => {
            e.stopPropagation();
            handleDeleteClick(item);
          }}
        />
        <FontAwesomeIcon
          icon={faEdit}
          style={{ color: "skyblue", marginLeft: "10px", cursor: "pointer" }}
          onClick={(e) => {
            e.stopPropagation();
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

      <Table<OrganisasiWithIcon>
        columns={columns}
        data={data}
        onRowClick={(row) => handleDetailClick(row)}
      />

      <PopupDelete
        show={showPopup}
        label="Organisasi"
        value={selectedOrganisasi?.organisasi || ""}
        onCancel={closePopup}
        onConfirm={confirmDelete}
      />

      {selectedOrganisasi && (
        <OrganisasiPopup
          isOpen={showDetailPopup}
          onClose={closeDetailPopup}
          organisasi={selectedOrganisasi}
        />
      )}
    </main>
  );
}
