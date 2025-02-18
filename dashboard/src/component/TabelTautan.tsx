import Table from "./Table";
import Icontable from "./Icon-table";
import Checkboxicon from "./checkbox-icon";

const columns = [
  { label: <div className="checkbox-icon"><input type="checkbox"/></div>, key: "icon" },
  { label: "URL", key: "url" },
  { label: "Keterangan", key: "keterangan" },
];

const data = [
  { icon: <Checkboxicon />,
    url: "https://linktr.ee/smkn2mgl", 
    keterangan: "BKK", 
  },
  { icon: <Checkboxicon />,
    url: "https://drive.google.com/drive/folders/1S8E0JEPyp1BvaxZkP4WQ0TsXKf_oLCTs?usp=drive_link", 
    keterangan: "LSP P1", 
  },
  { icon: <Checkboxicon />,
    url: "https://linktr.ee/smkn2mgl", 
    keterangan: "Prestasi", 
  },
  { icon: <Checkboxicon />,
    url: "https://linktr.ee/smkn2mgl", 
    keterangan: "Kegiatan Skanida", 
  },
  { icon: <Checkboxicon />,
    url: "https://linktr.ee/smkn2mgl", 
    keterangan: "Kurikulum", 
  },
  { icon: <Checkboxicon />,
    url: "https://jateng.siap-ppdb.com/#/", 
    keterangan: "PPDB SMK", 
  },
];

export default function TabelTautan() {
  return (
    <main className="main">
      <div className="content-title">
        <h2>Tautan</h2>
        <Icontable />
      </div>
      <Table columns={columns} data={data} />
    </main>
  );
}
