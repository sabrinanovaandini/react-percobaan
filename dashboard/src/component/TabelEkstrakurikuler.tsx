import Table from './Table';

type EkstrakurikulerRow = {
  icon: JSX.Element;
  ekstrakurikuler: string;
  gambar: JSX.Element;
  content: string;
};

const columns = [
  { label: <div className="text-sm font-semibold">Ikon</div>, key: 'icon' },
  { label: 'Ekstrakurikuler', key: 'ekstrakurikuler' },
  { label: 'Gambar', key: 'gambar' },
  { label: 'Deskripsi', key: 'content' },
];

const data: EkstrakurikulerRow[] = [
  {
    icon: <span>🎨</span>,
    ekstrakurikuler: 'Seni Rupa',
    gambar: <img src="seni.jpg" alt="Seni" className="h-12 w-12 object-cover" />,
    content: 'Ekskul seni rupa mengasah kreativitas siswa melalui lukisan dan patung.',
  },
  {
    icon: <span>⚽</span>,
    ekstrakurikuler: 'Sepak Bola',
    gambar: <img src="sepakbola.jpg" alt="Sepak Bola" className="h-12 w-12 object-cover" />,
    content: 'Ekskul sepak bola melatih fisik dan kekompakan tim.',
  },
];

const EkstrakurikulerTable = () => {
  return (
    <Table<EkstrakurikulerRow>
      columns={columns}
      data={data}
      onRowClick={(row: EkstrakurikulerRow) => {
        console.log('Row clicked:', row);
      }}
    />
  );
};

export default EkstrakurikulerTable;
