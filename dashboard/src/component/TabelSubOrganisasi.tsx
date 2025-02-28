import { useState } from "react";
import Table from "./Table";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowsRotate, faEdit, faEye, faFileExcel, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { faPlusSquare } from "@fortawesome/free-regular-svg-icons";
import PopupDelete from "./PopupDelete";
import DialogSubOrganisasi from "./DialogSubOrganisasi";
import DeletePopup from "./DeletePopup";
import SuborPopup from "./SuborPopup";

export default function TabelSubOrganisasi() {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedSubOrg, setSelectedSubOrg] = useState("");

  const [showAddPopup, setShowAddPopup] = useState(false);
  const [showDeletePopup, setShowDeletePopup] = useState(false);
  const [showDetailPopup, setShowDetailPopup] = useState(false);
  const [selectedSubor, setSelectedSubor] = useState(null);

  const handleDeleteClick = (suborganisasi) => {
    setSelectedSubOrg(suborganisasi);
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
    setSelectedSubOrg("");
  };

  const confirmDelete = () => {
    alert(`Sub Organisasi "${selectedSubOrg}" telah dihapus.`);
    closePopup();
  };

  const handleDetailClick = (subor) => {
    if (!subor) return;
    setSelectedSubor(subor);
    setShowDetailPopup(true);
  };

  const closeDetailPopup = () => {
    setShowDetailPopup(false);
    setSelectedSubor(null);
  };

  const columns = [
    { label: <div className="checkbox-icon"><input type="checkbox" /></div>, key: "icon" },
    { label: "Sub Organisasi", key: "suborganisasi" },
  ];

  const rawData = [
    { 
      gambar: <img src={"/sub-organisasi/pmr-3.jpg"} alt="Berita" style={{ objectFit: "cover",  }} />, 
      suborganisasi: "Sub-Organisasi",  
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia assumenda perferendis nemo neque repudiandae consectetur qui facilis, nulla aliquam nesciunt quo ratione nostrum officiis aliquid. Voluptates similique nisi totam omnis?Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia assumenda perferendis nemo neque repudiandae consectetur qui facilis, nulla aliquam nesciunt quo ratione nostrum officiis aliquid. Voluptates similique nisi totam omnis?Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia assumenda perferendis nemo neque repudiandae consectetur qui facilis, nulla aliquam nesciunt quo ratione nostrum officiis aliquid. Voluptates similique nisi totam omnis?Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia assumenda perferendis nemo neque repudiandae consectetur qui facilis, nulla aliquam nesciunt quo ratione nostrum officiis aliquid. Voluptates similique nisi totam omnis?Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia assumenda perferendis nemo neque repudiandae consectetur qui facilis, nulla aliquam nesciunt quo ratione nostrum officiis aliquid. Voluptates similique nisi totam omnis?",  
    },
    { 
      gambar: <img src={"/sub-organisasi/tonti01.jpg"} alt="Berita" style={{ objectFit: "cover",  }} />, 
      suborganisasi: "Tonti",  
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia assumenda perferendis nemo neque repudiandae consectetur qui facilis, nulla aliquam nesciunt quo ratione nostrum officiis aliquid. Voluptates similique nisi totam omnis?Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia assumenda perferendis nemo neque repudiandae consectetur qui facilis, nulla aliquam nesciunt quo ratione nostrum officiis aliquid. Voluptates similique nisi totam omnis?Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia assumenda perferendis nemo neque repudiandae consectetur qui facilis, nulla aliquam nesciunt quo ratione nostrum officiis aliquid. Voluptates similique nisi totam omnis?Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia assumenda perferendis nemo neque repudiandae consectetur qui facilis, nulla aliquam nesciunt quo ratione nostrum officiis aliquid. Voluptates similique nisi totam omnis?Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia assumenda perferendis nemo neque repudiandae consectetur qui facilis, nulla aliquam nesciunt quo ratione nostrum officiis aliquid. Voluptates similique nisi totam omnis?",  
    },
    { 
      gambar: <img src={"/sub-organisasi/pramuka-2.jpg"} alt="Berita" style={{ objectFit: "cover",  }} />, 
      suborganisasi: "Pasopati",  
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia assumenda perferendis nemo neque repudiandae consectetur qui facilis, nulla aliquam nesciunt quo ratione nostrum officiis aliquid. Voluptates similique nisi totam omnis?Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia assumenda perferendis nemo neque repudiandae consectetur qui facilis, nulla aliquam nesciunt quo ratione nostrum officiis aliquid. Voluptates similique nisi totam omnis?Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia assumenda perferendis nemo neque repudiandae consectetur qui facilis, nulla aliquam nesciunt quo ratione nostrum officiis aliquid. Voluptates similique nisi totam omnis?Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia assumenda perferendis nemo neque repudiandae consectetur qui facilis, nulla aliquam nesciunt quo ratione nostrum officiis aliquid. Voluptates similique nisi totam omnis?Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia assumenda perferendis nemo neque repudiandae consectetur qui facilis, nulla aliquam nesciunt quo ratione nostrum officiis aliquid. Voluptates similique nisi totam omnis?",  
    },
    { 
      gambar: <img src={"/sub-organisasi/tonti01.jpg"} alt="Berita" style={{ objectFit: "cover",  }} />, 
      suborganisasi: "I.Y.O.S",  
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia assumenda perferendis nemo neque repudiandae consectetur qui facilis, nulla aliquam nesciunt quo ratione nostrum officiis aliquid. Voluptates similique nisi totam omnis?Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia assumenda perferendis nemo neque repudiandae consectetur qui facilis, nulla aliquam nesciunt quo ratione nostrum officiis aliquid. Voluptates similique nisi totam omnis?Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia assumenda perferendis nemo neque repudiandae consectetur qui facilis, nulla aliquam nesciunt quo ratione nostrum officiis aliquid. Voluptates similique nisi totam omnis?Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia assumenda perferendis nemo neque repudiandae consectetur qui facilis, nulla aliquam nesciunt quo ratione nostrum officiis aliquid. Voluptates similique nisi totam omnis?Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia assumenda perferendis nemo neque repudiandae consectetur qui facilis, nulla aliquam nesciunt quo ratione nostrum officiis aliquid. Voluptates similique nisi totam omnis?",  
    },
    { 
      gambar: <img src={"/sub-organisasi/pmr-1.jpg"} alt="Berita" style={{ objectFit: "cover",  }} />, 
      suborganisasi: "PMR",  
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia assumenda perferendis nemo neque repudiandae consectetur qui facilis, nulla aliquam nesciunt quo ratione nostrum officiis aliquid. Voluptates similique nisi totam omnis?Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia assumenda perferendis nemo neque repudiandae consectetur qui facilis, nulla aliquam nesciunt quo ratione nostrum officiis aliquid. Voluptates similique nisi totam omnis?Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia assumenda perferendis nemo neque repudiandae consectetur qui facilis, nulla aliquam nesciunt quo ratione nostrum officiis aliquid. Voluptates similique nisi totam omnis?Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia assumenda perferendis nemo neque repudiandae consectetur qui facilis, nulla aliquam nesciunt quo ratione nostrum officiis aliquid. Voluptates similique nisi totam omnis?Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia assumenda perferendis nemo neque repudiandae consectetur qui facilis, nulla aliquam nesciunt quo ratione nostrum officiis aliquid. Voluptates similique nisi totam omnis?",  
    },
    { 
      gambar: <img src={"/sub-organisasi/pmr-2.jpg"} alt="Berita" style={{ objectFit: "cover",  }} />, 
      suborganisasi: "Cospala",  
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia assumenda perferendis nemo neque repudiandae consectetur qui facilis, nulla aliquam nesciunt quo ratione nostrum officiis aliquid. Voluptates similique nisi totam omnis?Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia assumenda perferendis nemo neque repudiandae consectetur qui facilis, nulla aliquam nesciunt quo ratione nostrum officiis aliquid. Voluptates similique nisi totam omnis?Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia assumenda perferendis nemo neque repudiandae consectetur qui facilis, nulla aliquam nesciunt quo ratione nostrum officiis aliquid. Voluptates similique nisi totam omnis?Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia assumenda perferendis nemo neque repudiandae consectetur qui facilis, nulla aliquam nesciunt quo ratione nostrum officiis aliquid. Voluptates similique nisi totam omnis?Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia assumenda perferendis nemo neque repudiandae consectetur qui facilis, nulla aliquam nesciunt quo ratione nostrum officiis aliquid. Voluptates similique nisi totam omnis?",  
    }
  ];

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
          onClick={() => handleDeleteClick(item.suborganisasi)}
        />
        <FontAwesomeIcon
          icon={faEdit}
          style={{ color: "skyblue", cursor: "pointer", marginLeft: "10px" }}
          onClick={() => setShowAddPopup(true)}
        />
      </div>
    ),
  }));

  return (
    <main className="main">
      <div className="content-title">
        <h2>Sub Organisasi</h2>
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

          {/* Popup Tambah */}
          <DialogSubOrganisasi
            isOpen={showAddPopup}
            onClose={() => setShowAddPopup(false)}
            onSubmit={(nama) => {
              console.log("Data ditambahkan:", nama);
              setShowAddPopup(false);
            }}
          />

          {/* Popup Hapus */}
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

      {/* Popup Konfirmasi Hapus */}
      <PopupDelete
        show={showPopup}
        label="Sub Organisasi"
        value={selectedSubOrg}
        onCancel={closePopup}
        onConfirm={confirmDelete}
      />

      {/* Popup Detail */}
      <SuborPopup
        isOpen={showDetailPopup}
        onClose={closeDetailPopup}
        subor={selectedSubor}
      />
    </main>
  );
}
