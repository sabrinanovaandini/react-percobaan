import React from "react";
import strukturData from "../data/strukturdata";

const CardStruktur = () => {
  const firstCard = strukturData[0];
  const remainingData = strukturData.slice(1);

  return (
    <div className="card-container">
      {/* First card */}
      <h1>Pimpinan Sekolah</h1>
      <div className="card-struktur">
        <div className="img-struktur">
          <img className="image" src={firstCard.photo} alt={firstCard.name} />
        </div>
        <div className="caption-struktur">
          <p className="position">{firstCard.position}</p>
          <strong className="name">{firstCard.name}</strong>
        </div>
      </div>

      {/* Remaining 8 cards */}
      <h1>Wakil Kepala Sekolah</h1>
      <div className="row">
        {remainingData.slice(0, 4).map((person, index) => (
          <div key={index} className="card-struktur">
            <div className="img-struktur">
              <img className="image" src={person.photo} alt={person.name} />
            </div>
            <div className="caption-struktur">
              <p className="position">{person.position}</p>
              <strong className="name">{person.name}</strong>
            </div>
          </div>
        ))}
      </div>
      
      <h1>Ketua Program Studi Sekolah</h1>
      <div className="row">
        {remainingData.slice(4, 8).map((person, index) => (
          <div key={index} className="card-struktur">
            <div className="img-struktur">
              <img className="image" src={person.photo} alt={person.name} />
            </div>
            <div className="caption-struktur">
              <p className="position">{person.position}</p>
              <strong className="name">{person.name}</strong>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default CardStruktur;
