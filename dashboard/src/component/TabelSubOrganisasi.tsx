import Table from "./Table";
import Icontable from "./Icon-table";
import Checkboxicon from "./checkbox-icon";

const columns = [
  { label: <div className="checkbox-icon"><input type="checkbox"/></div>, key: "icon" },
  { label: "Gambar", key: "gambar" },
  { label: "Sub Organisasi", key: "suborganisasi" },
];

const data = [
  { icon: <Checkboxicon />,
    gambar: "/", 
    suborganisasi: "Sub-Organisasi", 
  },
  { icon: <Checkboxicon />,
    gambar: "/", 
    suborganisasi: "Tonti", 
  },
  { icon: <Checkboxicon />,
    gambar: "/", 
    suborganisasi: "Pasopati", 
  },
  { icon: <Checkboxicon />,
    gambar: "/'", 
    suborganisasi: "I.Y.O.S", 
  },
  { icon: <Checkboxicon />,
    gambar: "/", 
    suborganisasi: "Cospala", 
  },
];

export default function TabelSubOrganisasi() {
  return (
    <main className="main">
      <div className="content-title">
        <h2> Sub Organisasi</h2>
        <Icontable />
      </div>
      <Table columns={columns} data={data} />
    </main>
  );
}
