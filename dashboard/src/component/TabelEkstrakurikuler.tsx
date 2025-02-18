import Table from "./Table";
import Icontable from "./Icon-table";
import Checkboxicon from "./checkbox-icon";

const columns = [
  { label: <div className="checkbox-icon"><input type="checkbox"/></div>, key: "icon" },
  { label: "Gambar", key: "gambar" },
  { label: "Ekstrakurikuler", key: "ekstrakurikuler" },
];

const data = [
  { icon: <Checkboxicon />,
    gambar: "/", 
    ekstrakurikuler: "Sub-Organisasi", 
  },
  { icon: <Checkboxicon />,
    gambar: "/", 
    ekstrakurikuler: "Futsal", 
  },
  { icon: <Checkboxicon />,
    gambar: "/", 
    ekstrakurikuler: "Paduan Suara", 
  },
  { icon: <Checkboxicon />,
    gambar: "/'", 
    ekstrakurikuler: "Bahasa Inggris", 
  },
  { icon: <Checkboxicon />,
    gambar: "/", 
    ekstrakurikuler: "Voli", 
  },
  { icon: <Checkboxicon />,
    gambar: "/", 
    ekstrakurikuler: "Silat", 
  },
  { icon: <Checkboxicon />,
    gambar: "/", 
    ekstrakurikuler: "PIK-R", 
  },
  { icon: <Checkboxicon />,
    gambar: "/", 
    ekstrakurikuler: "Screen", 
  },
];

export default function TabelEkstrakurikuler() {
  return (
    <main className="main">
      <div className="content-title">
        <h2>Ekstrakurikuler</h2>
        <Icontable />
      </div>
      <Table columns={columns} data={data} />
    </main>
  );
}
