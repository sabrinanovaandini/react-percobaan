import { useParams } from "react-router-dom";
import newsData from "../data/newsdata";

export default function NewsDetail ({}) {
    const { id } = useParams(); // Ambil ID dari URL
    const news = newsData.find((item) => item.id === parseInt(id)); // Cari berita berdasarkan ID

    if (!news) {
        return <p>Berita tidak ditemukan.</p>;
    }

    return(
        
        <div className="news-details">
            <div className="news-img">
                <img src={news.image} alt={news.title} />
            </div>

            <div className="news-caption">
                <h1>{news.title}</h1>
                <div className="card-info">
                    <p>{news.date}</p>
                    <p>{news.time}</p>
                    <p>|</p>
                    <p>{news.author}</p>
                </div>
                <p>{news.content}</p>
                <p>{news.content}</p>
                <p>{news.content}</p>
                <p>{news.content}</p>
            </div>
        </div>
    )
}