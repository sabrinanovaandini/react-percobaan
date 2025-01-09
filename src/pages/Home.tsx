import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"
import Navbar from "../components/navbar";
import Carousel from "../components/carousel";

export default function Home(){

    const navigate = useNavigate()
    const [count, setCount] = useState(1)
    const [name, setName] = useState("Nova");

    function handleChange(angka: number, nama: string){
        setCount(angka);
        setName(nama);
    }

    return (
        <>

        <Navbar/>

        <Carousel/>

        </>
    )
}