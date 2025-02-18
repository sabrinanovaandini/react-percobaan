import Table from "./Table";
import Icontable from "./Icon-table";
import Checkboxicon from "./checkbox-icon";

const columns = [
  { label: <div className="checkbox-icon"><input type="checkbox"/></div>, key: "icon" },
  { label: "kategori", key: "category" },
];

const data = [
  { icon: <Checkboxicon />,
    category: "AKL", 
  },
  { icon: <Checkboxicon />,
      category: "Kegiatan Skanida", 
  },
  { icon: <Checkboxicon />,
        category: "prestasi", 
  },
  { icon: <Checkboxicon />,
    category: "AKL", 
  },
  { icon: <Checkboxicon />,
    category: "PPLG", 
  },
  { icon: <Checkboxicon />,
    category: "MPLB", 
  },
  { icon: <Checkboxicon />,
    category: "PM", 
  },
];

export default function TabelKategori() {
  return (
    <main className="main">
      <div className="content-title">
        <h2>Kategori Berita</h2>
        <Icontable />
      </div>
      <Table columns={columns} data={data} />
    </main>
  );
}
