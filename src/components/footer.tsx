import { Link, useLocation } from "react-router-dom"

export default function Footer(){
    const router= useLocation()
    
    console.log(location.pathname)
    return (
        <footer>
            <div className="footer-container">
                <div className="footer-content1">
                    <Link to="/home" className="footer-title">SMKN 2 MAGELANG</Link>
                    <div className="footer-contact">
                        <p>Jln. Ahmad Yani, Magelang, Jawa Tengah</p>
                        <p>
                            <strong>Telp:</strong>
                            <span>083783763</span>
                        </p>
                        <p>
                            <strong>Email:</strong>
                            <span>@gmail.com</span>
                        </p>
                    </div>
                </div>

                <div className="footer-content1">
                    <Link to="/home" className="footer-title">SMKN 2 MAGELANG</Link>
                    <div className="footer-contact">
                        <p>Jln. Ahmad Yani, Magelang, Jawa Tengah</p>
                        <p>
                            <strong>Telp:</strong>
                            <span>083783763</span>
                        </p>
                        <p>
                            <strong>Email:</strong>
                            <span>@gmail.com</span>
                        </p>
                    </div>
                </div>
            </div>

            <div className="copyright">
                <p>@ copyright 2025 SMKN 2 Magelang</p>
            </div>
        </footer>
    )
}