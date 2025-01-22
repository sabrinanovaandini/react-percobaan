import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"
import Navbar from "../components/navbar";
import Carousel from "../components/carousel";
import Footer from "../components/footer";
import Card from "../components/card";
import CardPK from "../components/cardpk";

export default function Home(){


    return (
        <>

        <Navbar/>
        <Carousel/>
        <Card/>
        <CardPK/>
        <Footer/>

        </>
    )
}