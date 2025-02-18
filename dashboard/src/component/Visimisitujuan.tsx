import FormEdit from "./FormEdit";
import Icontable from "./Icon-table";
import Table from "./Table";
import Checkboxicon from "./checkbox-icon";

export default function VisiMisiTujuan() {
    const fields = [
        { label: "Visi", key: "visi", type: "textarea",default: '"Terwujudnya lulusan yang beriman dan bertaqwa kepada Tuhan Yang Maha Esa, kompeten serta menguasai teknologi informasi dan komunikasi"' },
    ];

    const handleSubmit = (data) => {
        console.log("Data Tersimpan:", data);
    };

    const columns = [
        { label: <div className="checkbox-icon"><input type="checkbox"/></div>, key: "icon" },
        { label: "NO", key: "no" },
        { label: "Keterangan", key: "keterangan" },
      ];
      
      const data = [
        { icon: <Checkboxicon />,
          no: "1", 
          keterangan: "Melaksanakan proses pembelajaran yang berkarakter dan berakhlak mulia;", 
        },
        { icon: <Checkboxicon />,
          no: "2", 
          keterangan: "Meningkatkan Mutu Penyelenggaraan Pendidikan sehingga menghasilkan lulusan yang memiliki kompetensi yang kompetitif di pasar nasional dan global;", 
        },
        { icon: <Checkboxicon />,
          no: "3", 
          keterangan: "Meningkatkan peran serta dunia kerja dalam proses pembelajaran", 
        },
        { icon: <Checkboxicon />,
          no: "4", 
          keterangan: "Membangun jiwa wirausaha yang handal", 
        },
        { icon: <Checkboxicon />,
          no: "5", 
          keterangan: "Melaksanakan sistem pendidikan berbasis teknologi informasi dan komunikasi.", 
        },
      ];

    const columns2 = [
        { label: <div className="checkbox-icon"><input type="checkbox"/></div>, key: "icon" },
        { label: "NO", key: "no" },
        { label: "Keterangan", key: "keterangan" },
      ];
      
      const data2 = [
        { icon: <Checkboxicon />,
          no: "1", 
          keterangan: "Terwujudnya SMK Negeri 2 Magelang sebagai lembaga pendidikan kejuruan yang mengembangkan pendidikan karakter;", 
        },
        { icon: <Checkboxicon />,
          no: "2", 
          keterangan: "Terwujudnya SMK Negeri2 Magelang sebagai lembaga pendidikan kejuruan yang akuntabel dan unggul;", 
        },
        { icon: <Checkboxicon />,
          no: "3", 
          keterangan: "Terciptanya lulusan yang memiliki jiwa berkebhinekaan global, mandiri dan kreatif;", 
        },
        { icon: <Checkboxicon />,
          no: "4", 
          keterangan: "Peningkatan kualitas output dan outcomes lulusan sesuai dengan kebutuhan masyarakat, dunia usaha/industri/kerja yang berdampak positif terhadap pengembangan mutupendidikan", 
        },
        { icon: <Checkboxicon />,
          no: "5", 
          keterangan: "Terlaksananya sistem pendidikan berbasis teknologi informasi dan komunikasi.", 
        },
      ];

    return(
    <main className="main">
        <FormEdit fields={fields} title="Visi" onSubmit={handleSubmit} />
        <div className="content-title">
            <h2>Misi</h2>
            <Icontable />
        </div>
        <Table columns={columns} data={data} />
        <div className="content-title">
            <h2>Tujuan</h2>
            <Icontable />
        </div>
        <Table columns={columns2} data={data2} />
    </main>
    )
}