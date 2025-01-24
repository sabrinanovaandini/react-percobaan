import { useState } from "react";
import { Link, useLocation, } from "react-router-dom";
import NewsCard from "../components/newscard";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import AllNews from "../components/all-news";
import ScrollTop from "../components/scrolltop";

export default function Berita(){
    const router= useLocation()

    console.log(location.pathname)
    return (
        <>
        <Navbar/>
        <AllNews/>
        <Footer/>
        <ScrollTop/>
        </>
    )
}