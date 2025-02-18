import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Table from "./Table";
import { faEdit, faEye, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import Icontable from "./Icon-table";
import Checkboxicon from "./checkbox-icon";

const columns = [
  { label: <div className="checkbox-icon"><input type="checkbox"/></div>, key: "icon" },
  { label: "Judul", key: "title" },
  { label: "kategori", key: "category" },
  { label: "Tanggal Upload", key: "date" },
  { label: "Status", key: "status" },
  { label: "Akses", key: "access" },
  { label: "Komentar", key: "comment" },
];

const data = [
  { icon: 
  <div className="checkbox-icon">
    <input type="checkbox"/>
    <FontAwesomeIcon icon={faEye} style={{ color: "green" }}/>
    <FontAwesomeIcon icon={faTrashCan} style={{ color: "red" }}/>
    <FontAwesomeIcon icon={faEdit} style={{ color: "skyblue" }}/>
  </div> ,
    title: "I Got This..", 
    category: "AKL", 
    date: "Senin, 17 Januari 2025" 
  },
  { icon: 
    <div className="checkbox-icon">
      <input type="checkbox"/>
      <FontAwesomeIcon icon={faEye} style={{ color: "green" }}/>
      <FontAwesomeIcon icon={faTrashCan} style={{ color: "red" }}/>
      <FontAwesomeIcon icon={faEdit} style={{ color: "skyblue" }}/>
    </div> ,
      title: "Hemm.. Walls Everywhere", 
      category: "Kegiatan Skanida", 
      date: "Senin, 17 Januari 2025" 
  },
  { icon: <Checkboxicon />,
        title: "Pegel", 
        category: "PPLG", 
        date: "Senin, 17 Januari 2025" 
  },
  { icon: <Checkboxicon />,
    title: "Hit by Reality", 
    category: "prestasi", 
    date: "Senin, 17 Januari 2025" 
  },
  { icon: <Checkboxicon />,
    title: "I Got This..", 
    category: "AKL", 
    date: "Senin, 17 Januari 2025" 
  },
  { icon: <Checkboxicon />,
    title: "I Got This..", 
    category: "AKL", 
    date: "Senin, 17 Januari 2025" 
  },
  { icon: <Checkboxicon />,
    title: "I Got This..", 
    category: "AKL", 
    date: "Senin, 17 Januari 2025" 
  },
];

export default function TabelBerita() {
  return (
    <main className="main">
      <div className="content-title">
        <h2>Tulisan Berita</h2>
        <Icontable />
      </div>
      <Table columns={columns} data={data} />
    </main>
  );
}
