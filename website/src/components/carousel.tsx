import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Carousel() {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      idslide: 1,
      title: "Selamat Datang",
      subtitle: "SMK Negeri 2 Magelang",
      text: "Unggul dan Juara",
      btn: "Selengkapnya",
      type: "scroll", // Scroll ke bawah
      target: "#berita-smk",
      img: "/backgroundcover.jpg",
    },
    {
      idslide: 2,
      title: "Eksplorasi Program Keahlian",
      subtitle: "SMK Negeri 2 Magelang",
      text: "Cari Minat Program Keahlianmu",
      btn: "Selengkapnya",
      type: "scroll", // Scroll ke bawah
      target: "#program-keahlian",
      img: "/images1.jpg",
    },
    {
      idslide: 3,
      title: "Bergabung Bersama Kami",
      subtitle: "SMK Negeri 2 Magelang",
      text: "Informasi Pendaftaran",
      btn: "Selengkapnya",
      type: "navigate", // Pindah halaman lain
      target: "/ppdb",
      img: "/cover1.jpg",
    },
  ];

  // Fungsi untuk menangani klik tombol "Selengkapnya"
  const handleButtonClick = (type: string, target: string) => {
    if (type === "scroll") {
      const element = document.querySelector(target);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else if (type === "navigate") {
      navigate(target); // Pindah ke halaman baru
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Pindah setiap 5 detik
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="carousel">
      {slides.map((slide, index) => (
        <div
          key={slide.idslide}
          className={`carousel-item ${index === currentSlide ? "active" : ""}`}
        >
          <img src={slide.img} alt={slide.title} className="carousel-img" />
          <div className="carousel-content">
            <h2>{slide.title}</h2>
            <h1>{slide.subtitle}</h1>
            <p>{slide.text}</p>
            <div className="btn-selengkapnya">
              <button
                onClick={() => handleButtonClick(slide.type, slide.target)}
                className="button"
              >
                {slide.btn}
              </button>
            </div>
          </div>
        </div>
      ))}

      <div className="carousel-indicators">
        {slides.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`indicator ${index === currentSlide ? "active" : ""}`}
          ></div>
        ))}
      </div>
    </div>
  );
}
