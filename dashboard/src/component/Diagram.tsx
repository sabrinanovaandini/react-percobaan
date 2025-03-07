import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const data2024 = [
  { name: "Jan", Berita: 4 },
  { name: "Feb", Berita: 3 },
  { name: "Mar", Berita: 5 },
  { name: "Apr", Berita: 7 },
  { name: "Mei", Berita: 6 },
  { name: "Jun", Berita: 8 },
  { name: "Jul", Berita: 2 },
  { name: "Agu", Berita: 0 },
  { name: "Sep", Berita: 1 },
  { name: "Okt", Berita: 9 },
  { name: "Nov", Berita: 5 },
  { name: "Des", Berita: 7 },
];

const data2025 = [
    { name: "Jan", Berita: 4 },
    { name: "Feb", Berita: 3 },
    { name: "Mar", Berita: 5 },
    { name: "Apr", Berita: 2 },
    { name: "Mei", Berita: 2 },
    { name: "Jun", Berita: 4 },
    { name: "Jul", Berita: 1 },
    { name: "Agu", Berita: 7 },
    { name: "Sep", Berita: 8 },
    { name: "Okt", Berita: 2 },
    { name: "Nov", Berita: 4 },
    { name: "Des", Berita: 1 },
  ];

const Diagram: React.FC = () => {
    const [selectedYear, setSelectedYear] = useState("2025");
    const [isOpen, setIsOpen] = useState(false);
    const data = selectedYear === "2024" ? data2024 : data2025;
    const options = ["2024", "2025"];

  return (
    <div className="diagram">
    <div className="filters">
        <div className="filter-dropdown" onClick={() => setIsOpen(!isOpen)}>
            <div className="dropdown-selected">
            {selectedYear}
            <FontAwesomeIcon icon={faChevronDown} className={`dropdown-icon ${isOpen ? "open" : ""}`} />
            </div>
            {isOpen && (
            <ul className="dropdown-options">
                {options.map((option, index) => (
                <li key={index} onClick={() => { setSelectedYear(option); setIsOpen(false); }}>
                    {option}
                </li>
                ))}
            </ul>
            )}
        </div>
    </div>
    
    <ResponsiveContainer width="100%" height={400}>
      <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="Berita" fill="#213555" />
      </BarChart>
    </ResponsiveContainer>
    </div>
  );
};

export default Diagram;
