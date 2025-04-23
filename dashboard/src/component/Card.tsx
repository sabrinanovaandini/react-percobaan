import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

interface CardProps {
  total: number | string;
  title: string;
  icon: IconDefinition;
  link: string;
}

export default function Card({ total, title, icon, link }: CardProps) {
  return (
    <div className="card">
      <div className="c-0">
        <div className="c-1">
          <FontAwesomeIcon icon={icon} />
        </div>
        <Link to={link} className="c-2">
          <FontAwesomeIcon icon={faArrowRight} style={{ transform: "rotate(-45deg)" }} />
        </Link>
      </div>
      <div className="cc-0">
        <h3>{total}</h3>
        <span>{title}</span>
      </div>
    </div>
  );
}
