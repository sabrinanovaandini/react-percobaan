import Table from "./Table";
import Icontable from "./Icon-table";
import Checkboxicon from "./checkbox-icon";

const columns = [
  { label: <div className="checkbox-icon"><input type="checkbox"/></div>, key: "icon" },
  { label: "Penulis", key: "writer" },
  { label: "Email", key: "email" },
  { label: "Tanggal Kirim", key: "date" },
];

const data = [
  { icon: <Checkboxicon />,
    writer: "Nova", 
    email: "nova@gmail.com", 
    date: "02-02-2025 09:00:15", 
  },
  { icon: <Checkboxicon />,
    writer: "Nova", 
    email: "nova@gmail.com", 
    date: "02-02-2025 09:00:15", 
  },
  { icon: <Checkboxicon />,
    writer: "Nova", 
    email: "nova@gmail.com", 
    date: "02-02-2025 09:00:15", 
  },
  { icon: <Checkboxicon />,
    writer: "Nova", 
    email: "nova@gmail.com", 
    date: "02-02-2025 09:00:15", 
  },
];

export default function TabelPesan() {
  return (
    <main className="main">
      <div className="content-title">
        <h2>Pesan</h2>
        <Icontable />
      </div>
      <Table columns={columns} data={data} />
    </main>
  );
}
