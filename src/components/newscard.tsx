import React, { useState } from "react";
import {NewsFilter} from "./newsfilter";
import NewsList from "./newslist";
import newsData from "../data/newsdata";

export default function NewsCard() {
  const [selectedCategory, setSelectedCategory] = useState("Semua");

  const filteredNews =
    selectedCategory === "Semua"
      ? newsData
      : newsData.filter((news) => news.category === selectedCategory);

      console.log(filteredNews)
  return (

    <div className="card-news">
      <div className="card-title">
        <h1>Berita Terkini</h1>
      </div>

      <NewsFilter
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory} // Pass the function to update the category
        newsData={newsData} // Pass newsData to derive categories
      />

      <NewsList filteredNews={filteredNews} />
    </div>

  );
}


  


// import { useState } from "react";
// import { Link } from "react-router-dom";

// export default function NewsCard() {

//   const [selectedCategory, setSelectedCategory] = useState("Semua");
    
//     // Data berita yang bisa difilter (misalnya)
//     const newsData = [
//         { 
//             id: 1, 
//             title: "HUT SMKN 2 Magelang ke-999 Tahun 9999/10000", 
//             category: "Kegiatan Skanida", 
//             date: "Senin, 13 Januari 2025", 
//             time: "12.01", 
//             author: "Oleh Jurnalis", 
//             content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit sequi pariatur omnis commodi libero maiores debitis voluptate, et nihil inventore. Debitis numquam voluptatibus iusto nesciunt reprehenderit quasi cumque dignissimos est. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit sequi pariatur omnis commodi libero maiores debitis voluptate, et nihil inventore. Debitis numquam voluptatibus iusto nesciunt reprehenderit quasi cumque dignissimos est. Lorem ipsum dolor sit amet, consectetur adipisicing elit..." ,
//             image: "/images/hutsmea.jpg"
//         },
//         { 
//             id: 2, 
//             title: "Juara 1 Mancing diraih Oleh Sabrina Bunga Dengan Mendapatkan Ikan Batu", 
//             category: "Prestasi", 
//             date: "Selasa, 14 Januari 2025", 
//             time: "14.00", 
//             author: "Oleh Jurnalis", 
//             content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit sequi pariatur omnis commodi libero maiores debitis voluptate, et nihil inventore. Debitis numquam voluptatibus iusto nesciunt reprehenderit quasi cumque dignissimos est.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit sequi pariatur omnis commodi libero maiores debitis voluptate, et nihil inventore. Debitis numquam voluptatibus iusto nesciunt reprehenderit quasi cumque dignissimos est.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit sequi pariatur omnis commodi libero maiores debitis voluptate, et nihil inventore. Debitis numquam voluptatibus iusto nesciunt reprehenderit quasi cumque dignissimos est. consectetur adipisicing elit...", 
//             image: "public/bunga mancing.jpg"
//         },
//         { 
//             id: 3, 
//             title: "Outing Class MPLB Kelas 11", 
//             category: "AKL", 
//             date: "Rabu, 15 Januari 2025", 
//             time: "10.30", 
//             author: "Oleh Jurnalis", 
//             content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit sequi pariatur omnis commodi libero maiores debitis voluptate, et nihil inventore. Debitis numquam voluptatibus iusto nesciunt reprehenderit quasi cumque dignissimos est. Lorem ipsum dolor sit amet, consectetur adipisicing elit...", 
//             image: "public/mplb.jpg"
//         },
//         { 
//             id: 4, 
//             title: "yayayaya jajajajaja", 
//             category: "AKL", 
//             date: "Rabu, 15 Januari 2025", 
//             time: "10.30", 
//             author: "Oleh Jurnalis", 
//             content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit sequi pariatur omnis commodi libero maiores debitis voluptate, et nihil inventore. Debitis numquam voluptatibus iusto nesciunt reprehenderit quasi cumque dignissimos est. Lorem ipsum dolor sit amet, consectetur adipisicing elit...", 
//             image: "public/hutsmea.jpg"
//         },
//         // Tambahkan berita lainnya di sini
//     ];

//     // Filter berita berdasarkan kategori yang dipilih
//     const filteredNews = selectedCategory === "Semua" 
//         ? newsData 
//         : newsData.filter(news => news.category === selectedCategory);

//     const categories = ["Semua", ...new Set(newsData.map(news => news.category))];


//     return (

//       <div className="card">
//                 <div className="card-title">
//                     <h1>Berita Terkini</h1>
//                 </div>

//                 <div className="card-filter">
//                     <ul className="filter-items">
//                     {categories.map(category => (
//                         <li
//                         key={category}
//                         onClick={() => setSelectedCategory(category)}
//                         className={selectedCategory === category ? "active" : ""}
//                         >
//                         {category}
//                         </li>
//                     ))}
//                     </ul>

//                     <Link to="/berita" className="btn-sm">Lihat Semua</Link>
//                 </div>

//                 <div className="card-card">
//                     {filteredNews.map(news => (
//                         <div className="card-content" key={news.id}>
//                             <div className="card-img">
//                             <img src={news.image} alt={news.title} />
//                             </div>

//                             <div className="card-caption">
//                             <h3>{news.title}</h3>
//                             <div className="card-info">
//                                 <p>{news.date}</p>
//                                 <p>{news.time}</p>
//                                 <p>|</p>
//                                 <p>{news.author}</p>
//                             </div>
//                             <p>{news.content}</p>

//                             <div className="btn-card">
//                                 <Link to="/about" className="btn">Baca Selengkapnya</Link>
//                             </div>
//                             </div>
//                         </div>
//                     ))}
//                 </div>

//             </div>
//     );
//   }
  


  