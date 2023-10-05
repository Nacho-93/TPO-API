import React from 'react'
import "./Home.css"
import Fondo from "../assets/background-for-school.jpg"

function Home() {
    return (
        <div className='Banner'>
            <h2>Aprendé y enseñá junto a nosotros</h2>
            <img src={Fondo}>
            </img>


            <p></p>

        </div>
    )
}

export default Home;