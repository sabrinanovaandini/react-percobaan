import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Table from "./Table";
import { faEdit, faEye, faTrashCan } from "@fortawesome/free-solid-svg-icons";

const columns = [
  { label: "", key: "icon" },
  { label: "Judul", key: "title" },
  { label: "kategori", key: "category" },
  { label: "Tanggal Upload", key: "date" },
  { label: "Tanggal Upload", key: "date" },
  { label: "Tanggal Upload", key: "date" },
  { label: "ID", key: "id" },
  { label: "Tanggal Upload", key: "date" },
  { label: "kategori", key: "category" },
  { label: "kategori", key: "category" },
  { label: "kategori", key: "category" },
  { label: "kategori", key: "category" },
  { label: "kategori", key: "category" },
];

const data = [
  { icon: 
  <div className="table-icon">
    <input type="checkbox"/>
    <FontAwesomeIcon icon={faEye} style={{ color: "green" }}/>
    <FontAwesomeIcon icon={faTrashCan} style={{ color: "red" }}/>
    <FontAwesomeIcon icon={faEdit} style={{ color: "skyblue" }}/>
  </div> ,
    title: "I Got This..", 
    category: "AKL", 
    date: "Jakarta" 
  },
  { icon: 
    <div className="table-icon">
      <input type="checkbox"/>
      <FontAwesomeIcon icon={faEye} style={{ color: "green" }}/>
      <FontAwesomeIcon icon={faTrashCan} style={{ color: "red" }}/>
      <FontAwesomeIcon icon={faEdit} style={{ color: "skyblue" }}/>
    </div> ,
      title: "Hemm.. Walls Everywhere", 
      category: "Kegiatan Skanida", 
      date: "Jakarta" 
  },
  { icon: 
    <div className="table-icon">
        <input type="checkbox"/>
        <FontAwesomeIcon icon={faEye} style={{ color: "green" }}/>
        <FontAwesomeIcon icon={faTrashCan} style={{ color: "red" }}/>
        <FontAwesomeIcon icon={faEdit} style={{ color: "skyblue" }}/>
      </div> ,
        title: "Pegel", 
        category: "PPLG", 
        date: "Jakarta" 
  },
  { icon: 
  <div className="table-icon">
    <input type="checkbox"/>
    <FontAwesomeIcon icon={faEye} style={{ color: "green" }}/>
    <FontAwesomeIcon icon={faTrashCan} style={{ color: "red" }}/>
    <FontAwesomeIcon icon={faEdit} style={{ color: "skyblue" }}/>
  </div> ,
    title: "Hit by Reality", 
    category: "prestasi", 
    date: "Jakarta" 
  },
  { icon: 
  <div className="table-icon">
    <input type="checkbox"/>
    <FontAwesomeIcon icon={faEye} style={{ color: "green" }}/>
    <FontAwesomeIcon icon={faTrashCan} style={{ color: "red" }}/>
    <FontAwesomeIcon icon={faEdit} style={{ color: "skyblue" }}/>
  </div> ,
    title: "I Got This..", 
    category: "AKL", 
    date: "Jakarta" 
  },
  { icon: 
  <div className="table-icon">
    <input type="checkbox"/>
    <FontAwesomeIcon icon={faEye} style={{ color: "green" }}/>
    <FontAwesomeIcon icon={faTrashCan} style={{ color: "red" }}/>
    <FontAwesomeIcon icon={faEdit} style={{ color: "skyblue" }}/>
  </div> ,
    title: "I Got This..", 
    category: "AKL", 
    date: "Jakarta" 
  },
  { icon: 
  <div className="table-icon">
    <input type="checkbox"/>
    <FontAwesomeIcon icon={faEye} style={{ color: "green" }}/>
    <FontAwesomeIcon icon={faTrashCan} style={{ color: "red" }}/>
    <FontAwesomeIcon icon={faEdit} style={{ color: "skyblue" }}/>
  </div> ,
    title: "I Got This..", 
    category: "AKL", 
    date: "Jakarta" 
  },
];

export default function TabelBerita() {
  return (
    <div>
      <h2 className="text-xl font-bold">Tabel 1: Data Pengguna</h2>
      <Table columns={columns} data={data} />
    </div>
  );
}
