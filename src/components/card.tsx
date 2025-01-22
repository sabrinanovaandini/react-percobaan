import NewsCard from "./newscard";

export default function Card(){
    // const router= useLocation()

    console.log(location.pathname)
    return (

        <div className="card-news"> {/* buat hanya menampilkan 3 berita terkini */}
            <NewsCard/>
        </div>

    )
}