import Table from "./Table";
import Icontable from "./Icon-table";
import Checkboxicon from "./checkbox-icon";

const columns = [
  { label: <div className="checkbox-icon"><input type="checkbox"/></div>, key: "icon" },
  { label: "Gambar", key: "gambar" },
  { label: "Program Keahlian", key: "programkeahlian" },
];

const data = [
  { icon: <Checkboxicon />,
    gambar: "/",
    programkeahlian: "Akuntansi dan Keuangan Lembaga", 
  },
  { icon: <Checkboxicon />,
    gambar: "/",
    programkeahlian: "Manajemen Perkantoran dan Layanan Bisnis", 
  },
  { icon: <Checkboxicon />,
    gambar: "/",
    programkeahlian: "Pengembangan Perangkat Lunak dan Gim", 
  },
  { icon: <Checkboxicon />,
    gambar: "/",
    programkeahlian: "Pemasaran", 
  },
];

export default function TabelProKe() {
  return (
    <main className="main">
      <div className="content-title">
        <h2>Program Keahlian</h2>
        <Icontable />
      </div>
      <Table columns={columns} data={data} />
    </main>
  );
}
