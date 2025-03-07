import { useState } from "react";
import Table from "./Table";
import PopupDelete from "./PopupDelete";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowsRotate, faEdit, faEye, faFileExcel, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { faPlusSquare } from "@fortawesome/free-regular-svg-icons";
import DialogEkstrakurikuler from "./DialogEkstrakurikuler";
import DeletePopup from "./DeletePopup";
import EkstraPopup from "./EkstraPopup";

const columns = [
  { label: <div className="checkbox-icon"><input type="checkbox"/></div>, key: "icon" },
  { label: "Ekstrakurikuler", key: "ekstrakurikuler" },
];

export default function TabelEkstrakurikuler() {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedEkskul, setSelectedEkskul] = useState("");

  // Fungsi untuk membuka popup konfirmasi hapus
  const handleDeleteClick = (ekstrakurikuler) => {
    setSelectedEkskul(ekstrakurikuler);
    setShowPopup(true);
  };

  // Fungsi untuk menutup popup
  const closePopup = () => {
    setShowPopup(false);
    setSelectedEkskul("");
  };

  // Fungsi untuk menghapus data (sementara alert dulu)
  const confirmDelete = () => {
    alert(`Ekstrakurikuler "${selectedEkskul}" telah dihapus.`);
    closePopup();
  };

  const rawData = [
    { 
      ekstrakurikuler: "Sub-Organisasi",  
      gambar: <img src={"/pplg.jpg"} alt="Berita" style={{ objectFit: "cover",  }} />,  
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia assumenda perferendis nemo neque repudiandae consectetur qui facilis, nulla aliquam nesciunt quo ratione nostrum officiis aliquid. Voluptates similique nisi totam omnis?Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia assumenda perferendis nemo neque repudiandae consectetur qui facilis, nulla aliquam nesciunt quo ratione nostrum officiis aliquid. Voluptates similique nisi totam omnis?Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia assumenda perferendis nemo neque repudiandae consectetur qui facilis, nulla aliquam nesciunt quo ratione nostrum officiis aliquid. Voluptates similique nisi totam omnis?Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia assumenda perferendis nemo neque repudiandae consectetur qui facilis, nulla aliquam nesciunt quo ratione nostrum officiis aliquid. Voluptates similique nisi totam omnis?Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia assumenda perferendis nemo neque repudiandae consectetur qui facilis, nulla aliquam nesciunt quo ratione nostrum officiis aliquid. Voluptates similique nisi totam omnis?",  
    },
    { 
      ekstrakurikuler: "Futsal",  
      gambar: <img src={"/pplg.jpg"} alt="Berita" style={{ objectFit: "cover",  }} />,  
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia assumenda perferendis nemo neque repudiandae consectetur qui facilis, nulla aliquam nesciunt quo ratione nostrum officiis aliquid. Voluptates similique nisi totam omnis?Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia assumenda perferendis nemo neque repudiandae consectetur qui facilis, nulla aliquam nesciunt quo ratione nostrum officiis aliquid. Voluptates similique nisi totam omnis?Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia assumenda perferendis nemo neque repudiandae consectetur qui facilis, nulla aliquam nesciunt quo ratione nostrum officiis aliquid. Voluptates similique nisi totam omnis?Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia assumenda perferendis nemo neque repudiandae consectetur qui facilis, nulla aliquam nesciunt quo ratione nostrum officiis aliquid. Voluptates similique nisi totam omnis?Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia assumenda perferendis nemo neque repudiandae consectetur qui facilis, nulla aliquam nesciunt quo ratione nostrum officiis aliquid. Voluptates similique nisi totam omnis?",  
    },
    { 
      ekstrakurikuler: "Paduan Suara",  
      gambar: <img src={"/pplg.jpg"} alt="Berita" style={{ objectFit: "cover",  }} />,  
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia assumenda perferendis nemo neque repudiandae consectetur qui facilis, nulla aliquam nesciunt quo ratione nostrum officiis aliquid. Voluptates similique nisi totam omnis?Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia assumenda perferendis nemo neque repudiandae consectetur qui facilis, nulla aliquam nesciunt quo ratione nostrum officiis aliquid. Voluptates similique nisi totam omnis?Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia assumenda perferendis nemo neque repudiandae consectetur qui facilis, nulla aliquam nesciunt quo ratione nostrum officiis aliquid. Voluptates similique nisi totam omnis?Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia assumenda perferendis nemo neque repudiandae consectetur qui facilis, nulla aliquam nesciunt quo ratione nostrum officiis aliquid. Voluptates similique nisi totam omnis?Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia assumenda perferendis nemo neque repudiandae consectetur qui facilis, nulla aliquam nesciunt quo ratione nostrum officiis aliquid. Voluptates similique nisi totam omnis?",  
    },
    { 
      ekstrakurikuler: "Bahasa Inggris",  
      gambar: <img src={"/pplg.jpg"} alt="Berita" style={{ objectFit: "cover",  }} />,  
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia assumenda perferendis nemo neque repudiandae consectetur qui facilis, nulla aliquam nesciunt quo ratione nostrum officiis aliquid. Voluptates similique nisi totam omnis?Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia assumenda perferendis nemo neque repudiandae consectetur qui facilis, nulla aliquam nesciunt quo ratione nostrum officiis aliquid. Voluptates similique nisi totam omnis?Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia assumenda perferendis nemo neque repudiandae consectetur qui facilis, nulla aliquam nesciunt quo ratione nostrum officiis aliquid. Voluptates similique nisi totam omnis?Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia assumenda perferendis nemo neque repudiandae consectetur qui facilis, nulla aliquam nesciunt quo ratione nostrum officiis aliquid. Voluptates similique nisi totam omnis?Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia assumenda perferendis nemo neque repudiandae consectetur qui facilis, nulla aliquam nesciunt quo ratione nostrum officiis aliquid. Voluptates similique nisi totam omnis?",  
    },
    { 
      ekstrakurikuler: "Voli",  
      gambar: <img src={"/pplg.jpg"} alt="Berita" style={{ objectFit: "cover",  }} />,  
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia assumenda perferendis nemo neque repudiandae consectetur qui facilis, nulla aliquam nesciunt quo ratione nostrum officiis aliquid. Voluptates similique nisi totam omnis?Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia assumenda perferendis nemo neque repudiandae consectetur qui facilis, nulla aliquam nesciunt quo ratione nostrum officiis aliquid. Voluptates similique nisi totam omnis?Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia assumenda perferendis nemo neque repudiandae consectetur qui facilis, nulla aliquam nesciunt quo ratione nostrum officiis aliquid. Voluptates similique nisi totam omnis?Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia assumenda perferendis nemo neque repudiandae consectetur qui facilis, nulla aliquam nesciunt quo ratione nostrum officiis aliquid. Voluptates similique nisi totam omnis?Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia assumenda perferendis nemo neque repudiandae consectetur qui facilis, nulla aliquam nesciunt quo ratione nostrum officiis aliquid. Voluptates similique nisi totam omnis?",  
    },
    { 
      ekstrakurikuler: "Silat",  
      gambar: <img src={"/pplg.jpg"} alt="Berita" style={{ objectFit: "cover",  }} />,  
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia assumenda perferendis nemo neque repudiandae consectetur qui facilis, nulla aliquam nesciunt quo ratione nostrum officiis aliquid. Voluptates similique nisi totam omnis?Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia assumenda perferendis nemo neque repudiandae consectetur qui facilis, nulla aliquam nesciunt quo ratione nostrum officiis aliquid. Voluptates similique nisi totam omnis?Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia assumenda perferendis nemo neque repudiandae consectetur qui facilis, nulla aliquam nesciunt quo ratione nostrum officiis aliquid. Voluptates similique nisi totam omnis?Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia assumenda perferendis nemo neque repudiandae consectetur qui facilis, nulla aliquam nesciunt quo ratione nostrum officiis aliquid. Voluptates similique nisi totam omnis?Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia assumenda perferendis nemo neque repudiandae consectetur qui facilis, nulla aliquam nesciunt quo ratione nostrum officiis aliquid. Voluptates similique nisi totam omnis?",  
    },
    { 
      ekstrakurikuler: "PIK-R",  
      gambar: <img src={"/pplg.jpg"} alt="Berita" style={{ objectFit: "cover",  }} />,  
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia assumenda perferendis nemo neque repudiandae consectetur qui facilis, nulla aliquam nesciunt quo ratione nostrum officiis aliquid. Voluptates similique nisi totam omnis?Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia assumenda perferendis nemo neque repudiandae consectetur qui facilis, nulla aliquam nesciunt quo ratione nostrum officiis aliquid. Voluptates similique nisi totam omnis?Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia assumenda perferendis nemo neque repudiandae consectetur qui facilis, nulla aliquam nesciunt quo ratione nostrum officiis aliquid. Voluptates similique nisi totam omnis?Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia assumenda perferendis nemo neque repudiandae consectetur qui facilis, nulla aliquam nesciunt quo ratione nostrum officiis aliquid. Voluptates similique nisi totam omnis?Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia assumenda perferendis nemo neque repudiandae consectetur qui facilis, nulla aliquam nesciunt quo ratione nostrum officiis aliquid. Voluptates similique nisi totam omnis?",  
    },
    { 
      ekstrakurikuler: "Screen",  
      gambar: <img src={"/pplg.jpg"} alt="Berita" style={{ objectFit: "cover",  }} />,  
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia assumenda perferendis nemo neque repudiandae consectetur qui facilis, nulla aliquam nesciunt quo ratione nostrum officiis aliquid. Voluptates similique nisi totam omnis?Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia assumenda perferendis nemo neque repudiandae consectetur qui facilis, nulla aliquam nesciunt quo ratione nostrum officiis aliquid. Voluptates similique nisi totam omnis?Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia assumenda perferendis nemo neque repudiandae consectetur qui facilis, nulla aliquam nesciunt quo ratione nostrum officiis aliquid. Voluptates similique nisi totam omnis?Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia assumenda perferendis nemo neque repudiandae consectetur qui facilis, nulla aliquam nesciunt quo ratione nostrum officiis aliquid. Voluptates similique nisi totam omnis?Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia assumenda perferendis nemo neque repudiandae consectetur qui facilis, nulla aliquam nesciunt quo ratione nostrum officiis aliquid. Voluptates similique nisi totam omnis?",  
    },
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
            handleDeleteClick(item.ekstrakurikuler);
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

  // Popup/Dialog
  const [showAddPopup, setShowAddPopup] = useState(false);
  const [showDeletePopup, setShowDeletePopup] = useState(false);

  // Fungsi untuk menutup popup detail
  const closeDetailPopup = () => {
    setShowDetailPopup(false);
    setSelectedEkstra(null);
  };

  // Fungsi untuk membuka popup detail berita
  const handleDetailClick = (ekstra) => {
    setSelectedEkstra(ekstra);
    setShowDetailPopup(true);
  };

  // State untuk PopupDetail
  const [showDetailPopup, setShowDetailPopup] = useState(false);
  const [selectedEkstra, setSelectedEkstra] = useState(null);

  return (
    <main className="main">
      <div className="content-title">
        <h2>Ekstrakurikuler</h2>
        <div className="icon-table">
          <FontAwesomeIcon icon={faPlusSquare} style={{ color: "black", cursor: "pointer" }} onClick={() => setShowAddPopup(true)} />
          <FontAwesomeIcon icon={faTrashCan} style={{ color: "red", cursor: "pointer" }} onClick={() => setShowDeletePopup(true)} />
          <FontAwesomeIcon icon={faFileExcel} style={{ color: "green", cursor: "pointer" }} />
          <FontAwesomeIcon icon={faArrowsRotate} style={{ color: "blue", cursor: "pointer" }} />
          {/* Popup Tambah "icon-table" */}
          <DialogEkstrakurikuler
            isOpen={showAddPopup} 
            onClose={() => setShowAddPopup(false)} 
            onSubmit={(ekstra) => {
              console.log("Data ditambahkan:", ekstra);
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

      {/* PopupDelete untuk konfirmasi penghapusan */}
      <PopupDelete
        show={showPopup}
        label="Ekstrakurikuler"
        value={selectedEkskul}
        onCancel={closePopup}
        onConfirm={confirmDelete}
      />

      {/* Popup Detail untuk berita */}
      <EkstraPopup 
        isOpen={showDetailPopup} 
        onClose={closeDetailPopup} 
        ekstra={selectedEkstra} 
      />
    </main>
  );
}
