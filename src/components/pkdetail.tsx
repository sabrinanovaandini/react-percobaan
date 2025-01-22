import { useParams } from "react-router-dom";
import pkData from "../data/pkdata";

export default function pkDetail() {
    const { id } = useParams(); // Ambil ID dari URL
    const pk = pkData.find((item) => item.id === parseInt(id)); // Temukan data sesuai ID

    if (!pk) {
        return <p>Data tidak ditemukan.</p>; // Jika ID tidak valid
    }

    return (
        <div className="detail-pk">
            <div className="pk-image">
                <img src={pk.image} alt={pk.title} />
            </div>
            <div className="pk-content">
                <h1>{pk.title}</h1>
                <p>{pk.content}</p>
            </div>
        </div>
    );
}