import { useState } from "react";
import { Link, useLocation, } from "react-router-dom";
import NewsCard from "../components/newscard";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

export default function Card(){
    const router= useLocation()

    console.log(location.pathname)
    return (
        <>
        <Navbar/>

        <div className="all-news"> {/* buat grid satu baris 3 kolom */}
            <NewsCard/>
        </div>

        <Footer/>
        </>
    )
}