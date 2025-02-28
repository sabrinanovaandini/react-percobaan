import { useState } from "react";
import FormEdit from "./FormEdit";
import Icontable from "./Icon-table";
import Table from "./Table";
import PopupDelete from "./PopupDelete";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowsRotate, faEdit, faFileExcel, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { faPlusSquare } from "@fortawesome/free-regular-svg-icons";
import DialogMisi from "./DialogMisi";
import DeletePopup from "./DeletePopup";
import DialogTujuan from "./DialogTujuan";

export default function VisiMisiTujuan() {
    const [showPopup, setShowPopup] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);
    const [misiData, setMisiData] = useState([
        { no: "1", keterangan: "Melaksanakan proses pembelajaran yang berkarakter dan berakhlak mulia;" },
        { no: "2", keterangan: "Meningkatkan Mutu Penyelenggaraan Pendidikan sehingga menghasilkan lulusan yang memiliki kompetensi yang kompetitif di pasar nasional dan global;" },
        { no: "3", keterangan: "Meningkatkan peran serta dunia kerja dalam proses pembelajaran" },
        { no: "4", keterangan: "Membangun jiwa wirausaha yang handal" },
        { no: "5", keterangan: "Melaksanakan sistem pendidikan berbasis teknologi informasi dan komunikasi." },
    ]);

    const [tujuanData, setTujuanData] = useState([
        { no: "1", keterangan: "Terwujudnya SMK Negeri 2 Magelang sebagai lembaga pendidikan kejuruan yang mengembangkan pendidikan karakter;" },
        { no: "2", keterangan: "Terwujudnya SMK Negeri 2 Magelang sebagai lembaga pendidikan kejuruan yang akuntabel dan unggul;" },
        { no: "3", keterangan: "Terciptanya lulusan yang memiliki jiwa berkebhinekaan global, mandiri dan kreatif;" },
        { no: "4", keterangan: "Peningkatan kualitas output dan outcomes lulusan sesuai dengan kebutuhan masyarakat, dunia usaha/industri/kerja yang berdampak positif terhadap pengembangan mutu pendidikan" },
        { no: "5", keterangan: "Terlaksananya sistem pendidikan berbasis teknologi informasi dan komunikasi." },
    ]);

    const fields = [
        { label: "Visi", key: "visi", type: "textarea", default: '"Terwujudnya lulusan yang beriman dan bertaqwa kepada Tuhan Yang Maha Esa, kompeten serta menguasai teknologi informasi dan komunikasi"' },
    ];

    const handleSubmit = (data) => {
        console.log("Data Tersimpan:", data);
    };

    const handleDeleteClick = (item, type) => {
        setSelectedItem({ ...item, type });
        setShowPopup(true);
    };

    const closePopup = () => {
        setShowPopup(false);
        setSelectedItem(null);
    };

    const confirmDelete = () => {
        if (selectedItem.type === "misi") {
            setMisiData((prevData) => prevData.filter((item) => item.no !== selectedItem.no));
        } else if (selectedItem.type === "tujuan") {
            setTujuanData((prevData) => prevData.filter((item) => item.no !== selectedItem.no));
        }
        closePopup();
    };

    const columns = [
        { label: <div className="checkbox-icon"><input type="checkbox" /></div>, key: "icon" },
        { label: "NO", key: "no" },
        { label: "Keterangan", key: "keterangan" },
    ];

    const columns2 = [
        { label: <div className="checkbox-icon"><input type="checkbox" /></div>, key: "icon" },
        { label: "NO", key: "no" },
        { label: "Keterangan", key: "keterangan" },
    ];

    const misiDataWithIcons = misiData.map((item) => ({
        ...item,
        icon: (
            <div className="checkbox-icon">
                <input type="checkbox" />
                <FontAwesomeIcon
                    icon={faTrashCan}
                    style={{ color: "red", cursor: "pointer", marginLeft: "10px" }}
                    onClick={() => handleDeleteClick(item, "misi")}
                />
                <FontAwesomeIcon icon={faEdit} style={{ color: "skyblue", marginLeft: "10px", cursor: "pointer" }} onClick={() => setShowMisiPopup(true)}/>
            </div>
        ),
    }));

    const tujuanDataWithIcons = tujuanData.map((item) => ({
        ...item,
        icon: (
            <div className="checkbox-icon">
                <input type="checkbox" />
                <FontAwesomeIcon
                    icon={faTrashCan}
                    style={{ color: "red", cursor: "pointer", marginLeft: "10px" }}
                    onClick={() => handleDeleteClick(item, "tujuan")}
                />
                <FontAwesomeIcon icon={faEdit} style={{ color: "skyblue", marginLeft: "10px", cursor: "pointer" }} onClick={() => setShowTujuanPopup(true)}/>
            </div>
        ),
    }));

  // Popup/Dialog
  const [showMisiPopup, setShowMisiPopup] = useState(false);
  const [showTujuanPopup, setShowTujuanPopup] = useState(false);
  const [showDeletePopup, setShowDeletePopup] = useState(false);

    return (
        <main className="main">
            <FormEdit fields={fields} title="Visi" onSubmit={handleSubmit} />
            <div className="content-title">
                <h2>Misi</h2>
                <div className="icon-table">
                    <FontAwesomeIcon icon={faPlusSquare} style={{ color: "black", cursor: "pointer" }} onClick={() => setShowMisiPopup(true)} />
                    <FontAwesomeIcon icon={faTrashCan} style={{ color: "red", cursor: "pointer" }} onClick={() => setShowDeletePopup(true)} />
                    <FontAwesomeIcon icon={faFileExcel} style={{ color: "green", cursor: "pointer" }} />
                    <FontAwesomeIcon icon={faArrowsRotate} style={{ color: "blue", cursor: "pointer" }} />
                    {/* Popup Tambah "icon-table" */}
                    <DialogMisi
                        isOpen={showMisiPopup} 
                        onClose={() => setShowMisiPopup(false)} 
                        onSubmit={(nama) => {
                        console.log("Data ditambahkan:", nama);
                        setShowMisiPopup(false);
                        }} 
                    />
                    {/* Popup Hapus "icon-table" */}
                    <DeletePopup 
                        isOpen={showDeletePopup} 
                        onClose={() => setShowDeletePopup(false)} 
                        onConfirm={() => {
                        console.log("Data dihapus");
                        setShowDeletePopup(false);
                        }} 
                    />
                </div>
            </div>
            <Table columns={columns} data={misiDataWithIcons} />

            <div className="content-title">
                <h2>Tujuan</h2>
                <div className="icon-table">
                    <FontAwesomeIcon icon={faPlusSquare} style={{ color: "black", cursor: "pointer" }} onClick={() => setShowTujuanPopup(true)} />
                    <FontAwesomeIcon icon={faTrashCan} style={{ color: "red", cursor: "pointer" }} onClick={() => setShowDeletePopup(true)} />
                    <FontAwesomeIcon icon={faFileExcel} style={{ color: "green", cursor: "pointer" }} />
                    <FontAwesomeIcon icon={faArrowsRotate} style={{ color: "blue", cursor: "pointer" }} />
                    {/* Popup Tambah "icon-table" */}
                    <DialogTujuan
                        isOpen={showTujuanPopup} 
                        onClose={() => setShowTujuanPopup(false)} 
                        onSubmit={(nama) => {
                        console.log("Data ditambahkan:", nama);
                        setShowTujuanPopup(false);
                        }} 
                    />
                </div>
            </div>
            <Table columns={columns2} data={tujuanDataWithIcons} />

            <PopupDelete
                show={showPopup}
                label={selectedItem?.type === "misi" ? "Misi" : "Tujuan"}
                value={selectedItem?.keterangan}
                onCancel={closePopup}
                onConfirm={confirmDelete}
            />
        </main>
    );
}
