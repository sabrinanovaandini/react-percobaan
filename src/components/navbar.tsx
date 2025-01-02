import { Link, useLocation, } from "react-router-dom";

export default function Navbar(){
    const router= useLocation()

    console.log(location.pathname)
    return (
        <nav className="navbar">
            <a>
                <img src="https://smkn2mgl.sch.id/media_library/images/4cf9743116d33ca628f4238601357f7f.png" alt="" />
                <h1>SMKN 2 Magelang</h1>
            </a>

            <div className="nav-menu">
                <div>
                    <button>Dropdown</button>
                </div>

            </div>

            <Link to="/home" className="navbar-link">page 1</Link>
        </nav>
    )
}