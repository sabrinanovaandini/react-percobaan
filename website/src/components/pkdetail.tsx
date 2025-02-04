import { useParams } from "react-router-dom";
import pkData from "../data/pkdata";

export default function PkDetail() {
    const { id } = useParams(); 
    const pk = pkData.find((item) => item.id === Number(id));
    if (!pk) {
        return <p>Data tidak ditemukan.</p>; // Jika ID tidak valid
    }



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