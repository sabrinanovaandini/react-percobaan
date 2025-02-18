import Table from "./Table";
import Icontable from "./Icon-table";
import Checkboxicon from "./checkbox-icon";

const columns = [
  { label: <div className="checkbox-icon"><input type="checkbox"/></div>, key: "icon" },
  { label: "Gambar", key: "gambar" },
  { label: "Status", key: "status" },
  { label: "Nama", key: "nama" },
  { label: "Jabatan", key: "jabatan" },
];

const data = [
  { icon: <Checkboxicon />,
    gambar: "/", 
    status: "Pimpinan Sekolah", 
    nama: "Kurniawan Basuki, S.Pd.,M.T", 
    jabatan: "Kepala Sekolah SMK Negeri 2 Magelang", 
  },
  { icon: <Checkboxicon />,
    gambar: "/", 
    status: "Wakil Kepala Sekolah", 
    nama: "Kurniawan Basuki, S.Pd.,M.T", 
    jabatan: "Waka Bidang Kurikulum", 
  },
  { icon: <Checkboxicon />,
    gambar: "/", 
    status: "Wakil Kepala Sekolah", 
    nama: "Kurniawan Basuki, S.Pd.,M.T", 
    jabatan: "Waka Bidang Kesiswaan", 
  },
  { icon: <Checkboxicon />,
    gambar: "/", 
    status: "Wakil Kepala Sekolah", 
    nama: "Kurniawan Basuki, S.Pd.,M.T", 
    jabatan: "Waka Bidang Sarpras", 
  },
  { icon: <Checkboxicon />,
    gambar: "/", 
    status: "Wakil Kepala Sekolah", 
    nama: "Kurniawan Basuki, S.Pd.,M.T", 
    jabatan: "Waka Bidang Humas dan Industri", 
  },
  { icon: <Checkboxicon />,
    gambar: "/", 
    status: "Ketua Program Studi Sekolah", 
    nama: "Kurniawan Basuki, S.Pd.,M.T", 
    jabatan: "Ketua Program Studi Akuntansi dan Keuangan Lembaga", 
  },
  { icon: <Checkboxicon />,
    gambar: "/", 
    status: "Ketua Program Studi Sekolah", 
    nama: "Kurniawan Basuki, S.Pd.,M.T", 
    jabatan: "Ketua Program Studi Manajemen Perkantoran dan Layanan Bisnis", 
  },
  { icon: <Checkboxicon />,
    gambar: "/", 
    status: "Ketua Program Studi Sekolah", 
    nama: "Kurniawan Basuki, S.Pd.,M.T", 
    jabatan: "Ketua Program Studi Pengembangan Perangkat Lunak dan Gim", 
  },
  { icon: <Checkboxicon />,
    gambar: "/", 
    status: "Ketua Program Studi Sekolah", 
    nama: "Kurniawan Basuki, S.Pd.,M.T", 
    jabatan: "Ketua Program Studi Pemasaran", 
  },
];

export default function TabelStrukturOrganisasi() {
  return (
    <main className="main">
      <div className="content-title">
        <h2> Struktur Organisasi</h2>
        <Icontable />
      </div>
      <Table columns={columns} data={data} />
    </main>
  );
}
