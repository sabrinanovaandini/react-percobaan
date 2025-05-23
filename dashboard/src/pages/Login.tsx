import { Link } from "react-router-dom";

export default function Login(){
    return(
    <div className="login">
        <form className="form">
            <div className="form-logo">
                <div className="logo">
                    <img src="public/logo smea.PNG" alt="logo smkn2mgl" />
                    <p>SMKN 2 MAGELANG</p>
                </div>
            </div>
            <p className="form-title">Masuk Ke Akun</p>
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
            <Link to="/dashboard" style={{ textDecoration: 'none' }}>
                <button className="submit" type="submit">
                        <span style={{ color: 'white' }}>Masuk</span>
                </button>
            </Link>
            <p className="signup-link">
                <a href="">Lupa password ?</a>
            </p>
        </form>
    </div>
    )
}