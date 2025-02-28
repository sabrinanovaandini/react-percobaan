import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Signup(){
    const [role, setRole] = useState("Role");
    return(
    <div className="login">
        <form className="form">
            <div className="form-logo">
                <div className="logo">
                    <img src="/logo smea.PNG" alt="logo smkn2mgl" />
                    <p>SMKN 2 MAGELANG</p>
                </div>
            </div>
            <p className="form-title">Buat Akun Baru</p>
            <div className="input-container">
                <input placeholder="Masukkan Username" type="username"/>
                <span>
                <FontAwesomeIcon icon={faUser}/>
                </span>
            </div>
            <div className="input-container">
                <input placeholder="Masukkan email" type="email"/>
                <span>
                    <svg stroke="currentColor" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"></path>
                    </svg>
                </span>
            </div>
            <div className="input-container">
                <input placeholder="Masukkan password" type="password"/>
                <span>
                    <svg stroke="currentColor" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"></path>
                    <path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"></path>
                    </svg>
                </span>
            </div>
            <div className="input-container">
                <Dropdown options={["Admin", "Jurnalis"]} selected={role} onSelect={setRole} />
            </div>
            <button className="submit" type="submit">
                Buat Akun
            </button>

            <p className="signup-link">
                <Link to="/login">Log in disini !</Link>
            </p>
        </form>
    </div>
    )
}

function Dropdown({ options, selected, onSelect }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="custom-dropdown" onClick={() => setIsOpen(!isOpen)} 
            style=
            {{ 
                backgroundColor: "#fff",
                color: "#6B7280",
                padding: "1rem",
                paddingRight: "3rem",
                margin: "8px 0",
                height: "auto",
                fontSize: "0.875rem",
                width: "350px",
                borderRadius: "0.5rem",
                borderColor: "#e5e7eb",
                boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.05)" 
            }}
        >
            <div className="dropdown-selected">
                {selected}
                <span>
                    <FontAwesomeIcon icon={faChevronDown} className={`dropdown-icon ${isOpen ? "open" : ""}`}/>
                </span>
            </div>
            {isOpen && (
                <ul className="dropdown-options"
                style=
                {{  
                    color: "#6B7280",
                    borderRadius: "0.5rem",
                    boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.05)" 
                }}
                >
                    {options.map((option, index) => (
                        <li key={index} onClick={() => { onSelect(option); setIsOpen(false); }}>
                            {option}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}