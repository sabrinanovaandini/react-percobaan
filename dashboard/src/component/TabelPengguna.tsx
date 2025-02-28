import Table from "./Table";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowsRotate, faFileExcel} from "@fortawesome/free-solid-svg-icons";
import { faPlusSquare } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";

export default function TabelPengguna() {

  const columns = [
    { label: "Username", key: "username" },
    { label: "Email", key: "email" },
    { label: "Role", key: "role" },
    // { label: "Akses", key: "akses" },
  ];

  const data = [
    { username: "Admin1", email: "admin@gmail.com", role: "admin" },
    { username: "Admin2", email: "admin@gmail.com", role: "admin" },
    { username: "Admin3", email: "admin@gmail.com", role: "admin" },
    { username: "Nova", email: "nova@gmail.com", role: "jurnalis" },
    { username: "Bunga", email: "bunga@gmail.com", role: "jurnalis" },
    // { username: "Erina", email: "erina@gmail.com", role: "jurnalis", akses: <button style={{ background: "red", border: "reed" }}>blokir</button>},
  ];

  return (
    <main className="main">
      <div className="content-title">
        <h2>Pengguna</h2>
        <div className="icon-table">
            <Link to="/signup">
                <FontAwesomeIcon icon={faPlusSquare} style={{ color: "black", cursor: "pointer" }} />
            </Link>
            <FontAwesomeIcon icon={faFileExcel} style={{ color: "green", cursor: "pointer" }} />
            <FontAwesomeIcon icon={faArrowsRotate} style={{ color: "blue", cursor: "pointer" }} />
        </div>
      </div>
      <Table columns={columns} data={data} />
    </main>
  );
}
