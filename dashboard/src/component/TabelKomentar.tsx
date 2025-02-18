import Table from "./Table";
import Icontable from "./Icon-table";
import Checkboxicon from "./checkbox-icon";

const columns = [
  { label: <div className="checkbox-icon"><input type="checkbox"/></div>, key: "icon" },
  { label: "Penulis", key: "writer" },
  { label: "komentar Untuk Berita", key: "comentarynews" },
  { label: "Tanggal Kirim", key: "date" },
];

const data = [
  { icon: <Checkboxicon />,
    writer: "Nova", 
    comentarynews: "AKL", 
    date: "02-02-2025 09:00:15", 
  },
  { icon: <Checkboxicon />,
    comentarynews: "Kegiatan Skanida", 
  },
  { icon: <Checkboxicon />,
    comentarynews: "prestasi", 
  },
  { icon: <Checkboxicon />,
    comentarynews: "AKL", 
  },
  { icon: <Checkboxicon />,
    comentary: "PPLG", 
  },
  { icon: <Checkboxicon />,
    comentary: "MPLB", 
  },
  { icon: <Checkboxicon />,
    comentary: "PM", 
  },
];

export default function TabelKomentar() {
  return (
    <main className="main">
      <div className="content-title">
        <h2>Komentar Berita</h2>
        <Icontable />
      </div>
      <Table columns={columns} data={data} />
    </main>
  );
}
