import React from "react";
import bilde from "./Bilder/Stefan_Nærbilde.png"
import bakgrunn from "./Bilder/NEUMORPHIC_CIRCLES_BACKGROUND.jpg"
import "./styles.css"
import 'bootstrap/dist/css/bootstrap.min.css'


const Home = () => {
  return (

<body className='justify-content-center align-items-top 100-w vh-100'
style={{
  backgroundImage: `url(${bakgrunn})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover"
}}>       
      <h1 className="hovedside">Velkommen <img class="bilde" src={bilde} alt="bilde av meg"></img></h1>
      <div>
      <p className="hovedtext">Dette er en nettside der jeg har brukt ulike funksjoner som:</p>
        <div class="text-center"> 
          <ul className="liste">
            <li>Navigasjons bar med React Routes</li>
            <li>Design for en login og lag en bruker side</li>
            <li>Testet React bootstrap css for design</li>
            <li>Brukt tailwindcss for å lettere legge til css i enkelttilfeller</li>
            <li>Laget en Quote side med onClick der den henter quotes fra 'https://type.fit/api/quotes' API med en kopi knapp </li>
          </ul>
        </div>
      </div>
</body>
  );
};

export default Home;