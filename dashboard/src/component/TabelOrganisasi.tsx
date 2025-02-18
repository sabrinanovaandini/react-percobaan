import Table from "./Table";
import Icontable from "./Icon-table";
import Checkboxicon from "./checkbox-icon";

const columns = [
  { label: <div className="checkbox-icon"><input type="checkbox"/></div>, key: "icon" },
  { label: "Gambar", key: "gambar" },
  { label: "Organisasi", key: "organisasi" },
];

const data = [
  { icon: <Checkboxicon />,
    gambar: "/", 
    organisasi: "OSIS (OSKAMA)", 
  },
];

export default function TabelOrganisasi() {
  return (
    <main className="main">
      <div className="content-title">
        <h2>Organisasi</h2>
        <Icontable />
      </div>
      <Table columns={columns} data={data} />
    </main>
  );
}
