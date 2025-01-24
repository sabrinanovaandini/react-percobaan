import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Carousel(){
    const router= useLocation()

    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = [
        {
          id: 1,
          title: "Selamat Datang",
          subtitle: "SMK Negeri 2 Magelang",
          text: "Unggul dan Juara",
          link: "/home",
          btn: "Selengkapnya",
          img: "public/backgroundcover.jpg",
        },
        {
            id: 2,
            title: "Eksplorasi Program Keahlian",
            subtitle: "SMK Negeri 2 Magelang",
            text: "Pilih Program Keahlianmu",
            link: "/home",
            btn: "Selengkapnya",
            img: "public/images1.jpg",
          },
          {
            id: 3,
            title: "Bergabung Bersama Kami",
            subtitle: "SMK Negeri 2 Magelang",
            text: "Daftarkan Dirimu",
            link: "/home",
            btn: "Selengkapnya",
            img: "public/cover1.jpg",
          },
        ];

        useEffect(() => {
            const interval = setInterval(() => {
                setCurrentSlide((prev) => (prev + 1) % slides.length);
            }, 5000); // Pindah setiap 5 detik
            return () => clearInterval(interval);
        }, [slides.length]);

    console.log(location.pathname)
    return (

        <div className="carousel">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`carousel-item ${index === currentSlide ? "active" : ""}`}
            >
              <img src={slide.img} alt={slide.title} className="carousel-img" />
              <div className="carousel-content">
                <h2>{slide.title}</h2>
                <h1>{slide.subtitle}</h1>
                <p>{slide.text}</p>
                <div className="btn-selengkapnya"><Link to={slide.link} className="button">{slide.btn}</Link></div>
              </div>
            </div>
          ))}

          <div className="carousel-indicators">
            {slides.map((_, index) => (
              <div
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`indicator ${
                  index === currentSlide ? "active" : ""
                }`}
              ></div>
            ))}
          </div>

        </div>

      );
    }