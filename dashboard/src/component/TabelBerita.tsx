import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Table from "./Table";
import { faArrowsRotate, faEdit, faEye, faFileExcel, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useState } from "react";
import PopupDelete from "./PopupDelete";
import { faPlusSquare } from "@fortawesome/free-regular-svg-icons";
import DeletePopup from "./DeletePopup";
import DetailPopup from "./DetailPopup";

export default function TabelBerita() {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedTitle, setSelectedTitle] = useState("");

  // Fungsi untuk membuka popup dengan judul berita yang akan dihapus
  const handleDeleteClick = (title) => {
    setSelectedTitle(title);
    setShowPopup(true);
  };

  // Fungsi untuk menutup popup
  const closePopup = () => {
    setShowPopup(false);
    setSelectedTitle("");
  };

  // Fungsi untuk menghapus berita (sementara alert dulu)
  const confirmDelete = () => {
    alert(`Berita "${selectedTitle}" telah dihapus.`);
    closePopup();
  };

  // Kolom tabel tetap menggunakan input checkbox sebagai label
  const columns = [
    { label: <div className="checkbox-icon"><input type="checkbox" /></div>, key: "icon" },
    { label: "Judul", key: "title" },
    { label: "Kategori", key: "category" },
    { label: "Tanggal Upload", key: "date" },
    { label: "Status", key: "status" },
    { label: "Akses", key: "access" },
    { label: "Komentar", key: "comment" },
  ];

  // Data berita
  const rawData = [
    { 
      title: "Hemm.. Walls Everywhere", 
      category: "Kegiatan Skanida", 
      date: "Senin, 17 Januari 2025",
      status: "Diterbitkan", 
      access: "Public", 
      comment: "0",  
      gambar: <img src={"/parenting.jpg"} alt="Berita" style={{ objectFit: "cover",  }} />,  
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia assumenda perferendis nemo neque repudiandae consectetur qui facilis, nulla aliquam nesciunt quo ratione nostrum officiis aliquid. Voluptates similique nisi totam omnis?Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia assumenda perferendis nemo neque repudiandae consectetur qui facilis, nulla aliquam nesciunt quo ratione nostrum officiis aliquid. Voluptates similique nisi totam omnis?Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia assumenda perferendis nemo neque repudiandae consectetur qui facilis, nulla aliquam nesciunt quo ratione nostrum officiis aliquid. Voluptates similique nisi totam omnis?Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia assumenda perferendis nemo neque repudiandae consectetur qui facilis, nulla aliquam nesciunt quo ratione nostrum officiis aliquid. Voluptates similique nisi totam omnis?Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia assumenda perferendis nemo neque repudiandae consectetur qui facilis, nulla aliquam nesciunt quo ratione nostrum officiis aliquid. Voluptates similique nisi totam omnis?",  
    },
    { 
      title: "Acara Pensi Sekolah", 
      category: "Event Sekolah", 
      date: "Jumat, 20 Januari 2025",
      status: "Draf", 
      access: "Private", 
      comment: "5",  
      gambar: <img src={"/hutsmea.jpg"} alt="Berita" style={{ objectFit: "cover",  }} />,  
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia assumenda perferendis nemo neque repudiandae consectetur qui facilis, nulla aliquam nesciunt quo ratione nostrum officiis aliquid. Voluptates similique nisi totam omnis?Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia assumenda perferendis nemo neque repudiandae consectetur qui facilis, nulla aliquam nesciunt quo ratione nostrum officiis aliquid. Voluptates similique nisi totam omnis?Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia assumenda perferendis nemo neque repudiandae consectetur qui facilis, nulla aliquam nesciunt quo ratione nostrum officiis aliquid. Voluptates similique nisi totam omnis?Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia assumenda perferendis nemo neque repudiandae consectetur qui facilis, nulla aliquam nesciunt quo ratione nostrum officiis aliquid. Voluptates similique nisi totam omnis?Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia assumenda perferendis nemo neque repudiandae consectetur qui facilis, nulla aliquam nesciunt quo ratione nostrum officiis aliquid. Voluptates similique nisi totam omnis?",  
    }
  ];

  // Tambahkan checkbox dan ikon dalam satu kolom
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
            handleDeleteClick(item.title);
          }} 
        />
        <Link to="/editnews" onClick={(e) => e.stopPropagation()}>
          <FontAwesomeIcon icon={faEdit} style={{ color: "skyblue", marginLeft: "10px" }} />
        </Link>
      </div>
    ),
  }));

  //  popup untuk delete beberapa data sekaligus dari icon di "icon-table"
  const [showDeletePopup, setShowDeletePopup] = useState(false);

  // Fungsi untuk menutup popup detail
  const closeDetailPopup = () => {
    setShowDetailPopup(false);
    setSelectedNews(null);
  };

  // Fungsi untuk membuka popup detail berita
  const handleDetailClick = (news) => {
    setSelectedNews(news);
    setShowDetailPopup(true);
  };

  // State untuk PopupDetail
  const [showDetailPopup, setShowDetailPopup] = useState(false);
  const [selectedNews, setSelectedNews] = useState(null);

  return (
    <main className="main">
      <div className="content-title">
        <h2>Tulisan Berita</h2>
        <div className="icon-table">
          <Link to="/addnews">
            <FontAwesomeIcon icon={faPlusSquare} style={{cursor: "pointer" }} />
          </Link>
          <FontAwesomeIcon icon={faTrashCan} style={{ color: "red", cursor: "pointer" }} onClick={() => setShowDeletePopup(true)}/>
          <FontAwesomeIcon icon={faFileExcel} style={{ color: "green", cursor: "pointer" }} />
          <Link to="/allnews">
            <FontAwesomeIcon icon={faArrowsRotate} style={{ color: "blue", cursor: "pointer" }}/>
          </Link>
        </div>
      </div>
      <Table columns={columns} data={data} rowClick={(row) => handleDetailClick(row)} />

      {/* Gunakan PopupDelete (berita tertentu) untuk modal konfirmasi */}
      <PopupDelete 
        show={showPopup} 
        label="Berita" 
        value={selectedTitle} 
        onCancel={closePopup} 
        onConfirm={confirmDelete} 
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

      {/* Popup Detail untuk berita */}
      <DetailPopup 
        isOpen={showDetailPopup} 
        onClose={closeDetailPopup} 
        berita={selectedNews} 
      />
    </main>
  );
}
