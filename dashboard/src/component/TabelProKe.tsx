import { useState } from "react";
import Table from "./Table";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowsRotate, faEdit, faEye, faFileExcel, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import PopupDelete from "./PopupDelete";
import { faPlusSquare } from "@fortawesome/free-regular-svg-icons";
import DialogProKe from "./DialogProKe";
import DeletePopup from "./DeletePopup";
import ProkePopup from "./ProkePopup";

export default function TabelProKe() {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedProgram, setSelectedProgram] = useState("");

  // Fungsi untuk membuka popup dengan program yang akan dihapus
  const handleDeleteClick = (program) => {
    setSelectedProgram(program);
    setShowPopup(true);
  };

  // Fungsi untuk menutup popup
  const closePopup = () => {
    setShowPopup(false);
    setSelectedProgram("");
  };

  // Fungsi untuk menghapus program (sementara alert dulu)
  const confirmDelete = () => {
    alert(`Program Keahlian "${selectedProgram}" telah dihapus.`);
    closePopup();
  };

  const columns = [
    { label: <div className="checkbox-icon"><input type="checkbox"/></div>, key: "icon" },
    { label: "Program Keahlian", key: "programkeahlian" },
  ];

  const rawData = [
    { 
      programkeahlian: "Akuntansi dan Keuangan Lembaga",  
      gambar: <img src={"/mplb.jpg"} alt="Berita" style={{ objectFit: "cover",  }} />,  
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia assumenda perferendis nemo neque repudiandae consectetur qui facilis, nulla aliquam nesciunt quo ratione nostrum officiis aliquid. Voluptates similique nisi totam omnis?Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia assumenda perferendis nemo neque repudiandae consectetur qui facilis, nulla aliquam nesciunt quo ratione nostrum officiis aliquid. Voluptates similique nisi totam omnis?Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia assumenda perferendis nemo neque repudiandae consectetur qui facilis, nulla aliquam nesciunt quo ratione nostrum officiis aliquid. Voluptates similique nisi totam omnis?Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia assumenda perferendis nemo neque repudiandae consectetur qui facilis, nulla aliquam nesciunt quo ratione nostrum officiis aliquid. Voluptates similique nisi totam omnis?Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia assumenda perferendis nemo neque repudiandae consectetur qui facilis, nulla aliquam nesciunt quo ratione nostrum officiis aliquid. Voluptates similique nisi totam omnis?",  
    },
    { 
      programkeahlian: "Manajemen Perkantoran dan Layanan Bisnis",  
      gambar: <img src={"/mplb.jpg"} alt="Berita" style={{ objectFit: "cover",  }} />,  
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia assumenda perferendis nemo neque repudiandae consectetur qui facilis, nulla aliquam nesciunt quo ratione nostrum officiis aliquid. Voluptates similique nisi totam omnis?Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia assumenda perferendis nemo neque repudiandae consectetur qui facilis, nulla aliquam nesciunt quo ratione nostrum officiis aliquid. Voluptates similique nisi totam omnis?Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia assumenda perferendis nemo neque repudiandae consectetur qui facilis, nulla aliquam nesciunt quo ratione nostrum officiis aliquid. Voluptates similique nisi totam omnis?Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia assumenda perferendis nemo neque repudiandae consectetur qui facilis, nulla aliquam nesciunt quo ratione nostrum officiis aliquid. Voluptates similique nisi totam omnis?Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia assumenda perferendis nemo neque repudiandae consectetur qui facilis, nulla aliquam nesciunt quo ratione nostrum officiis aliquid. Voluptates similique nisi totam omnis?",  
    },
    { 
      programkeahlian: "Pengembangan Perangkat Lunak dan Gim",  
      gambar: <img src={"/pplg.jpg"} alt="Berita" style={{ objectFit: "cover",  }} />,  
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia assumenda perferendis nemo neque repudiandae consectetur qui facilis, nulla aliquam nesciunt quo ratione nostrum officiis aliquid. Voluptates similique nisi totam omnis?Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia assumenda perferendis nemo neque repudiandae consectetur qui facilis, nulla aliquam nesciunt quo ratione nostrum officiis aliquid. Voluptates similique nisi totam omnis?Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia assumenda perferendis nemo neque repudiandae consectetur qui facilis, nulla aliquam nesciunt quo ratione nostrum officiis aliquid. Voluptates similique nisi totam omnis?Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia assumenda perferendis nemo neque repudiandae consectetur qui facilis, nulla aliquam nesciunt quo ratione nostrum officiis aliquid. Voluptates similique nisi totam omnis?Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia assumenda perferendis nemo neque repudiandae consectetur qui facilis, nulla aliquam nesciunt quo ratione nostrum officiis aliquid. Voluptates similique nisi totam omnis?",  
    },
    { 
      programkeahlian: "Pemasaran",  
      gambar: <img src={"/pplg.jpg"} alt="Berita" style={{ objectFit: "cover",  }} />,  
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
          onClick={() => handleDetailClick(item)} // Tambahkan event untuk popup detail
        />
        <FontAwesomeIcon 
          icon={faTrashCan} 
          style={{ color: "red", cursor: "pointer", marginLeft: "10px" }} 
          onClick={() => handleDeleteClick(item.programkeahlian)}
        />
        <FontAwesomeIcon icon={faEdit} style={{ color: "skyblue", marginLeft: "10px", cursor: "pointer"  }} onClick={() => setShowAddPopup(true)} />
      </div>
    ),
  }));

  // Popup/Dialog
  const [showAddPopup, setShowAddPopup] = useState(false);
  const [showDeletePopup, setShowDeletePopup] = useState(false);

  // Fungsi untuk menutup popup detail
  const closeDetailPopup = () => {
    setShowDetailPopup(false);
    setSelectedProke(null);
  };

  // Fungsi untuk membuka popup detail berita
  const handleDetailClick = (proke) => {
    setSelectedProke(proke);
    setShowDetailPopup(true);
  };

  // State untuk PopupDetail
  const [showDetailPopup, setShowDetailPopup] = useState(false);
  const [selectedProke, setSelectedProke] = useState(null);

  return (
    <main className="main">
      <div className="content-title">
        <h2>Program Keahlian</h2>
        <div className="icon-table">
          <FontAwesomeIcon icon={faPlusSquare} style={{ color: "black", cursor: "pointer" }} onClick={() => setShowAddPopup(true)} />
          <FontAwesomeIcon icon={faTrashCan} style={{ color: "red", cursor: "pointer" }} onClick={() => setShowDeletePopup(true)} />
          <FontAwesomeIcon icon={faFileExcel} style={{ color: "green", cursor: "pointer" }} />
          <FontAwesomeIcon icon={faArrowsRotate} style={{ color: "blue", cursor: "pointer" }} />
          {/* Popup Tambah "icon-table" */}
          <DialogProKe 
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

      {/* Gunakan PopupDelete untuk modal konfirmasi */}
      <PopupDelete 
        show={showPopup} 
        label="Program Keahlian" 
        value={selectedProgram} 
        onCancel={closePopup} 
        onConfirm={confirmDelete} 
      />

      {/* Popup Detail untuk berita */}
      <ProkePopup 
        isOpen={showDetailPopup} 
        onClose={closeDetailPopup} 
        proke={selectedProke} 
      />
    </main>
  );
}
