import { faPlusSquare } from "@fortawesome/free-regular-svg-icons";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Editor } from "@tinymce/tinymce-react";
import { useState } from "react";
import { Link } from "react-router-dom";

interface DropdownProps {
    options: string[];
    selected: string;
    onSelect: (value: string) => void;
}

function Dropdown({ options, selected, onSelect }: DropdownProps) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="custom-dropdown" onClick={() => setIsOpen(!isOpen)}>
            <div className="dropdown-selected">
                {selected}
                <FontAwesomeIcon icon={faChevronDown} className={`dropdown-icon ${isOpen ? "open" : ""}`} />
            </div>
            {isOpen && (
                <ul className="dropdown-options">
                    {options.map((option: string, index: number) => (
                        <li key={index} onClick={() => { onSelect(option); setIsOpen(false); }}>
                            {option}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default function Tambahberita() {
    const [isi, setIsi] = useState("");
    const [status, setStatus] = useState("Diterbitkan");
    const [akses, setAkses] = useState("Publik");
    const [komentar, setKomentar] = useState("Diizinkan");

    return (
        <main className="main">
            <div className="content-title">
                <h2>Tambah Berita</h2>
            </div>
            <div className="content-addnews">
                <div className="word">
                    <form action="">
                        <input type="text" placeholder="Tulis Judul Berita disini" className="input-lg"/>
                        <Editor
                            apiKey="your-tinymce-api-key"
                            value={isi}
                            onEditorChange={(content) => setIsi(content)}
                            init={{
                                height: 400,
                                menubar: true,
                                plugins: [
                                    "advlist autolink lists link image charmap print preview anchor",
                                    "searchreplace visualblocks code fullscreen",
                                    "insertdatetime media table paste code help wordcount",
                                ],
                                toolbar:
                                    "undo redo | formatselect | " +
                                    "bold italic underline | alignleft aligncenter alignright alignjustify | " +
                                    "bullist numlist outdent indent | " +
                                    "image media table link | " +
                                    "preview fullscreen",
                            }}
                        />
                    </form>
                </div>
                <div className="ct-addnews">
                    <div className="c-category">
                        <div className="content-title">
                            <h3>Kategori Berita</h3>
                            <Link className="icon-table" to="/category">
                                <FontAwesomeIcon icon={faPlusSquare} />
                                <p>Tambah Kategori</p>
                            </Link>
                        </div>
                        <form action="" className="list-card">
                            <div className="checkbox-icon">
                                <input type="checkbox"/>
                                <p>Kegiatan Skanida </p>
                            </div>
                            <div className="checkbox-icon">
                                <input type="checkbox"/>
                                <p>Prestasi</p>
                            </div>
                            <div className="checkbox-icon">
                                <input type="checkbox"/>
                                <p>AKL</p>
                            </div>
                        </form>
                    </div>
                    <div className="c-setnews">
                        <div className="content-title">
                            <h3>Publikasi Berita</h3>
                        </div>
                        <form action="" className="ct-addnews">
                            <div className="publikasi">
                                <div className="selected">
                                    <p>Status</p>
                                    <Dropdown options={["Diterbitkan", "Draft"]} selected={status} onSelect={setStatus} />
                                </div>
                                <div className="selected">
                                    <p>Akses</p>
                                    <Dropdown options={["Publik", "Private"]} selected={akses} onSelect={setAkses} />
                                </div>
                            </div>
                            <div className="publikasi-2">
                                <div className="selected">
                                    <p>Komentar</p>
                                    <Dropdown options={["Diizinkan", "Tidak"]} selected={komentar} onSelect={setKomentar} />
                                </div>
                                <div className="selected">
                                    <p>File Foto</p>
                                    <input type="file" className="custom-file-input" />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="button-col">
                    <button>Reset</button>
                    <button>Simpan</button>
                </div>
            </div>
        </main>
    );
}
