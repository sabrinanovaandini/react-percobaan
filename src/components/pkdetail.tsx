import { useParams } from "react-router-dom";
import pkData from "../data/pkdata";

export default function PkDetail() {
    const { id } = useParams(); // Ambil ID dari URL
    const pk = pkData.find((item) => item.id === Number(id, 10)); // Temukan data sesuai ID

    if (!pk) {
        return <p>Data tidak ditemukan.</p>; // Jika ID tidak valid
    }
    console.log(pkData, id);
    console.log("pkData:", pkData);
console.log("ID dari URL:", id);
console.log("Data yang ditemukan:", pk);


    return (
        <div className="detail-pk">
            <div className="dt-pk1">
                <div className="pk-image">
                    <img src={pk.image} alt={pk.title} />
                </div>
                <div className="pk-content">
                    <h1>{pk.title}</h1>
                    <p>{pk.content1}</p>
                </div>
            </div>
            <div className="dt-pk2">
                <p>{pk.content2}</p>
            </div>
        </div>
    );
}