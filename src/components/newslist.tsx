import { Link } from "react-router-dom";

export default function NewsList({ filteredNews }) {
  return (
    <div className="all-news">
      {filteredNews.map((news) => (
        <div className="card-content" key={news.id}>
          <div className="card-img">
            <img src={news.image} alt={news.title} />
          </div>
          <div className="card-caption">
            <h3>{news.title}</h3>
            <div className="card-info">
              <p>{news.date}</p>
              <p>{news.time}</p>
              <p>|</p>
              <p>{news.author}</p>
            </div>
            <p>{news.content}</p>
            <div className="btn-card">
                <Link to={`/news/${news.id}`} className="btn">Baca Selengkapnya</Link>
            </div>
          </div>
        </div>
      ))}
    </div>
    
  );
}
