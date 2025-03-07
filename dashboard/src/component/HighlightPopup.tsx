import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function HighlightPopup({ isOpen, onClose, slide }) {
    if (!isOpen || !slide) return null;
  
    return (
      <div className="popup-overlay">
        <div className="popup-high">
            <button onClick={onClose} className="btn-close">
                <FontAwesomeIcon icon={faXmark} size="lg"/>
            </button>

            {/* <div className="carousel"> */}
                <div className="carousel-item ">
                    <img src={slide.img}  alt={slide.img}  className="carousel-img"/>
                    <div className="carousel-content">
                        <h2>{slide.title} </h2>
                        <h1>{slide.subtitle} </h1>
                        <p>{slide.text} </p>
                        <div className="btn-selengkapnya">
                            <button className="button">Selengkapnya</button>
                        </div>
                    </div>
                </div>
            {/* </div> */}
        </div>
      </div>
    );
  }
  