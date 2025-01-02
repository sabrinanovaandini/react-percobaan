import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"
import Navbar from "../components/navbar";

export default function About(){

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

        <div className="content">
            <h1>{count}</h1>
            <h1>{name}</h1>

            <button onClick={()=> handleChange(4, "Sabrina")}>
                Change
            </button>
        </div>

        </>
        
    )
}