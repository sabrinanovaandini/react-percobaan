import React, { useState } from 'react';

type Subor = {
  gambar: React.ReactNode;
  suborganisasi: string;
  content: string;
};

const App = () => {
  const [selectedSubor, setSelectedSubor] = useState<Subor | null>(null);

  const data: Subor[] = [
    {
      gambar: <img src="/path/to/image.jpg" alt="Gambar 1" />,
      suborganisasi: 'Suborganisasi 1',
      content: 'Konten suborganisasi 1',
    },
    {
      gambar: <img src="/path/to/image2.jpg" alt="Gambar 2" />,
      suborganisasi: 'Suborganisasi 2',
      content: 'Konten suborganisasi 2',
    },
  ];

  return (
    <div>
      {data.map((subor, index) => (
        <div key={index} onClick={() => setSelectedSubor(subor)}>
          <h3>{subor.suborganisasi}</h3>
        </div>
      ))}

      {selectedSubor && (
        <div className="modal">
          {selectedSubor.gambar}
          <h2>{selectedSubor.suborganisasi}</h2>
          <p>{selectedSubor.content}</p>
        </div>
      )}
    </div>
  );
};

export default App;
