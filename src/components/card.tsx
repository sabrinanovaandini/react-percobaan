import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Link, useLocation, } from "react-router-dom";

export default function Card(){
    const router= useLocation()

    const [selectedCategory, setSelectedCategory] = useState("Semua");
    
    // Data berita yang bisa difilter (misalnya)
    const newsData = [
        { id: 1, title: "HUT SMKN 2 Magelang ke-999 Tahun 9999/10000", category: "Kegiatan Skanida", date: "Senin, 13 Januari 2025", time: "12.01", author: "Oleh Jurnalis", content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit sequi pariatur omnis commodi libero maiores debitis voluptate, et nihil inventore. Debitis numquam voluptatibus iusto nesciunt reprehenderit quasi cumque dignissimos est. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit sequi pariatur omnis commodi libero maiores debitis voluptate, et nihil inventore. Debitis numquam voluptatibus iusto nesciunt reprehenderit quasi cumque dignissimos est. Lorem ipsum dolor sit amet, consectetur adipisicing elit..." },
        { id: 2, title: "Juara 1 Mancing diraih Oleh Sabrina Bunga Dengan Mendapatkan Ikan Batu", category: "Prestasi", date: "Selasa, 14 Januari 2025", time: "14.00", author: "Oleh Jurnalis", content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit sequi pariatur omnis commodi libero maiores debitis voluptate, et nihil inventore. Debitis numquam voluptatibus iusto nesciunt reprehenderit quasi cumque dignissimos est.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit sequi pariatur omnis commodi libero maiores debitis voluptate, et nihil inventore. Debitis numquam voluptatibus iusto nesciunt reprehenderit quasi cumque dignissimos est.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit sequi pariatur omnis commodi libero maiores debitis voluptate, et nihil inventore. Debitis numquam voluptatibus iusto nesciunt reprehenderit quasi cumque dignissimos est. consectetur adipisicing elit..." },
        { id: 3, title: "Kelas Industri Akuntansi Kelas 12", category: "AKL", date: "Rabu, 15 Januari 2025", time: "10.30", author: "Oleh Jurnalis", content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit sequi pariatur omnis commodi libero maiores debitis voluptate, et nihil inventore. Debitis numquam voluptatibus iusto nesciunt reprehenderit quasi cumque dignissimos est. Lorem ipsum dolor sit amet, consectetur adipisicing elit..." },
        // Tambahkan berita lainnya di sini
    ];

    // Filter berita berdasarkan kategori yang dipilih
    const filteredNews = selectedCategory === "Semua" 
        ? newsData 
        : newsData.filter(news => news.category === selectedCategory);


    console.log(location.pathname)
    return (
        <div className="card-news">
            <div className="card">
                <div className="card-title">
                    <h1>Berita Terbaru</h1>
                </div>

                <div className="card-filter">
                    <ul className="filter-items">
                        <li
                            onClick={() => setSelectedCategory("Semua")}
                            className={selectedCategory === "Semua" ? "active" : ""}
                        >
                            Semua
                        </li>
                        <li
                            onClick={() => setSelectedCategory("Kegiatan Skanida")}
                            className={selectedCategory === "Kegiatan Skanida" ? "active" : ""}
                        >
                            Kegiatan Skanida
                        </li>
                        <li
                            onClick={() => setSelectedCategory("News Skanida")}
                            className={selectedCategory === "News Skanida" ? "active" : ""}
                        >
                            News Skanida
                        </li>
                        <li
                            onClick={() => setSelectedCategory("Prestasi")}
                            className={selectedCategory === "Prestasi" ? "active" : ""}
                        >
                            Prestasi
                        </li>
                        <li
                            onClick={() => setSelectedCategory("AKL")}
                            className={selectedCategory === "AKL" ? "active" : ""}
                        >
                            AKL
                        </li>
                        <li
                            onClick={() => setSelectedCategory("MPLB")}
                            className={selectedCategory === "MPLB" ? "active" : ""}
                        >
                            MPLB
                        </li>
                        <li
                            onClick={() => setSelectedCategory("PPLG")}
                            className={selectedCategory === "PPLG" ? "active" : ""}
                        >
                            PPLG
                        </li>
                        <li
                            onClick={() => setSelectedCategory("PM")}
                            className={selectedCategory === "PM" ? "active" : ""}
                        >
                            PM
                        </li>
                    </ul>
                    <Link to="/about" className="btn-sm">Lihat Semua</Link>
                </div>

                <div className="card-card">
                    {filteredNews.map(news => (
                        <div className="card-content" key={news.id}>
                            <div className="card-img"><img src="public/images1.jpeg" alt=""/></div>
                            <div className="card-caption">
                                <h3>{news.title}</h3>
                                <div className="card-info">
                                    <p>{news.date}</p>
                                    <p>{news.time}</p>
                                    <p>|</p>
                                    <p>{news.author}</p>
                                </div>
                                <p>{news.content}</p>
                                <div className="btn-card"><Link to="/about" className="btn">Baca Selengkapnya</Link></div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    )
}