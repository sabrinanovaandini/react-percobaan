import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Link, useLocation, } from "react-router-dom";

export default function Card4(){
    const router= useLocation()

    console.log(location.pathname)
    return (
        <div className="card-news">
            <div className="card">
                <div className="card-title">
                    <h1>Program Keahlian</h1>
                </div>

                <div className="card-card">
                    <div className="card-content">
                        <div className="card-img"><img src="public/images1.jpeg" alt=""/></div>
                        <div className="card-caption">
                            <h3>Akuntansi dan Lembaga Keuangan</h3>
                            <div className="card-info">
                                <p>huhg</p>
                                <p>kjgygk</p>
                                <p>|</p>
                                <p>igutfkj</p>
                            </div>
                            <p>jhvyygfjyhg</p>
                            <div className="btn-card"><Link to="/about" className="btn">Baca Selengkapnya</Link></div>
                        </div>
                    </div>

                    <div className="card-content">
                        <div className="card-img"><img src="public/images1.jpeg" alt=""/></div>
                        <div className="card-caption">
                            <h3>Manajemen Perkantoran dan Layanan Bisnis</h3>
                            <div className="card-info">
                                <p>huhg</p>
                                <p>kjgygk</p>
                                <p>|</p>
                                <p>igutfkj</p>
                            </div>
                            <p>jhvyygfjyhg</p>
                            <div className="btn-card"><Link to="/about" className="btn">Baca Selengkapnya</Link></div>
                        </div>
                    </div>
                </div>

                <div className="card-card">
                    <div className="card-content">
                        <div className="card-img"><img src="public/images1.jpeg" alt=""/></div>
                        <div className="card-caption">
                            <h3>Pengembangan Perangkat Lunak dan Gim</h3>
                            <div className="card-info">
                                <p>huhg</p>
                                <p>kjgygk</p>
                                <p>|</p>
                                <p>igutfkj</p>
                            </div>
                            <p>jhvyygfjyhg</p>
                            <div className="btn-card"><Link to="/about" className="btn">Baca Selengkapnya</Link></div>
                        </div>
                    </div>

                    <div className="card-content">
                        <div className="card-img"><img src="public/images1.jpeg" alt=""/></div>
                        <div className="card-caption">
                            <h3>Akuntansi dan Lembaga Keuangan</h3>
                            <div className="card-info">
                                <p>huhg</p>
                                <p>kjgygk</p>
                                <p>|</p>
                                <p>igutfkj</p>
                            </div>
                            <p>jhvyygfjyhg</p>
                            <div className="btn-card"><Link to="/about" className="btn">Baca Selengkapnya</Link></div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}