import React from 'react';
import './App.css';
import Header from "./components/Header"
import Footer from "./components/Footer"
import Counter from "./components/Container"
import {Card, Container}  from "./components/Card";
 
const pokemon = [
  {
    name: "Fennekin",
    sprite: "https://vignette.wikia.nocookie.net/pokemonfakemon/images/8/8e/Fennekin_Dream.png/revision/latest?cb=20141114041249",
    caught: false
  },
  {
    name:"Torchick",
    sprite: "https://static.pokemonpets.com/images/monsters-images-300-300/255-Torchic.png",
    caught: false
  },
  {
    name:"Eevee",
    sprite: "https://cdn.bulbagarden.net/upload/thumb/e/e2/133Eevee.png/250px-133Eevee.png",
    caught: false
  },{
    name:"Bulbasaur",
    sprite: "https://cdn.bulbagarden.net/upload/thumb/2/21/001Bulbasaur.png/250px-001Bulbasaur.png",
    caught: false
  },{
    name:"Pikachu",
    sprite: "http://pngimg.com/uploads/pokemon/pokemon_PNG19.png",
    caught: false
  },{
    name:"Mudkip",
    sprite: "https://cdn.bulbagarden.net/upload/thumb/6/60/258Mudkip.png/250px-258Mudkip.png",
    caught: false
  },{
    name:"Charmander",
    sprite: "https://cdn.bulbagarden.net/upload/thumb/7/73/004Charmander.png/250px-004Charmander.png",
    caught: false
  },{
    name:"Sobble",
    sprite: "https://cdn.bulbagarden.net/upload/thumb/0/0c/Sobble.png/1200px-Sobble.png",
    caught: false
  },{
    name:"Snivy",
    sprite: "https://cdn.bulbagarden.net/upload/thumb/7/75/495Snivy.png/1200px-495Snivy.png",
    caught: false
  },
];

function App() {

  return (
    <div className="App">
      <Header />
      <Counter />
        {pokemon.map(pokemon => {
          return (
            <Card 
            key={pokemon.name} 
            name={pokemon.name}
            sprite={pokemon.sprite}
            caught={pokemon.caught}
            />
          );
      })}
<Container />
      <Footer />
    </div>
  );
}

export default App;
