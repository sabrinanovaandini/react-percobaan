import { faPlusSquare } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Editor } from "@tinymce/tinymce-react";
import { useState } from "react";

export default function Tambahberita() {
    const [isi, setIsi] = useState("");

    return(
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
                            <div className="icon-table">
                                <FontAwesomeIcon icon={faPlusSquare} />
                                <p>Tambah Kategori</p>
                            </div>
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
                                    <select>
                                        <option value="diterbitkan">Diterbitkan</option>
                                        <option value="Draft">Draft</option>
                                    </select>
                                </div>
                                <div className="selected">
                                    <p>Akses</p>
                                    <select>
                                        <option value="Publik">Publik</option>
                                        <option value="Private">Private</option>
                                    </select>
                                </div>
                            </div>
                            <div className="publikasi-2">
                                <div className="selected">
                                    <p>Komentar</p>
                                    <select>
                                        <option value="Dizinkan">Diizinkan</option>
                                        <option value="Tidak">Tidak</option>
                                    </select>
                                </div>
                                <div className="selected">
                                    <p>File Foto</p>
                                    <input type="file" />
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
    )
}