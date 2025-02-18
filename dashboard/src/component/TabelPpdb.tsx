import Table from "./Table";
import Icontable from "./Icon-table";
import Checkboxicon from "./checkbox-icon";

const columns = [
  { label: <div className="checkbox-icon"><input type="checkbox"/></div>, key: "icon" },
//   { label: "Gambar", key: "gambar" },
  { label: "URL", key: "url" },
  { label: "Keterangan", key: "keterangan" },
];

const data = [
  { icon: <Checkboxicon />,
    url: "https://linktr.ee/smkn2mgl", 
    keterangan: "Informasi PPDB 2024 SMKN 2 Magelang", 
  },
  { icon: <Checkboxicon />,
    url: "https://drive.google.com/drive/folders/1S8E0JEPyp1BvaxZkP4WQ0TsXKf_oLCTs?usp=drive_link", 
    keterangan: "Download Dokumen Pendukung PPDB 2024", 
  },
  { icon: <Checkboxicon />,
    url: "https://jateng.siap-ppdb.com/#/", 
    keterangan: "Website PPDB Online Prov Jateng 2024", 
  },
];

export default function TabelPPDB() {
  return (
    <main className="main">
      <div className="content-title">
        <h2>PPDB</h2>
        <Icontable />
      </div>
      <Table columns={columns} data={data} />
    </main>
  );
}
