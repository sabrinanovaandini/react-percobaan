import FormEdit from "./FormEdit";

export default function ProfilSekolah() {
    const fields = [
        { label: "Nama Sekolah", key: "namasekolah", default: "SMK NEGERI 2 MAGELANG" },
        { label: "NPSN", key: "npsn", type: "text", default: "20327586" },
        { label: "Alamat Jalan", key: "alamat", type: "text", default: "Jalan Jend. Ahmad Yani 135 A. Kramat Selatan, Magelang Utara 56115 Magelang, Jawa Tengah, (0293) 362577" },
        { label: "Dusun", key: "dusun", type: "text", default: "Kramat Selatan" },
        { label: "Kelurahan / Desa", key: "kelurahan/desa", type: "text", default: "Kramat Selatan" },
        { label: "Kecamatan", key: "kec", type: "text", default: "Magelang Utara" },
        { label: "Kabupaten", key: "kab", type: "text", default: "Kota Magelang" },
        { label: "Telp", key: "telp", type: "text", default: "0293 362577" },
        { label: "Fax", key: "fax", type: "text", default: "0293 362577" },
        { label: "Email", key: "email", type: "email", default: "smkn2magelang@yahoo.com" },
        { label: "Kode Pos", key: "kodepos", type: "text", default: "56115" },
    ];

    const handleSubmit = (data) => {
        console.log("Data Tersimpan:", data);
    };

    return(
    <main className="main">
        <FormEdit fields={fields} title="Profil Sekolah" onSubmit={handleSubmit} />
    </main>
    )
}