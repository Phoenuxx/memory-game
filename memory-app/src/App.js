import React, { Component } from 'react';
import './App.css';
import Header from "./components/Header"
import Footer from "./components/Footer"
import Counter from "./components/Counter"
import { Card, Container } from "./components/Card";

const pokemon = [
  {
    id:0,
    name: "Fennekin",
    sprite: "https://vignette.wikia.nocookie.net/pokemonfakemon/images/8/8e/Fennekin_Dream.png/revision/latest?cb=20141114041249",
    caught: false
  },
  {
    id:1,
    name: "Torchick",
    sprite: "https://static.pokemonpets.com/images/monsters-images-300-300/255-Torchic.png",
    caught: false
  },
  {
    id:2,
    name: "Eevee",
    sprite: "https://cdn.bulbagarden.net/upload/thumb/e/e2/133Eevee.png/250px-133Eevee.png",
    caught: false
  }, {
    id:3,
    name: "Bulbasaur",
    sprite: "https://cdn.bulbagarden.net/upload/thumb/2/21/001Bulbasaur.png/250px-001Bulbasaur.png",
    caught: false
  }, {
    id:4,
    name: "Pikachu",
    sprite: "http://pngimg.com/uploads/pokemon/pokemon_PNG19.png",
    caught: false
  }, {
    id:5,
    name: "Mudkip",
    sprite: "https://cdn.bulbagarden.net/upload/thumb/6/60/258Mudkip.png/250px-258Mudkip.png",
    caught: false
  }, {
    id:6,
    name: "Charmander",
    sprite: "https://cdn.bulbagarden.net/upload/thumb/7/73/004Charmander.png/250px-004Charmander.png",
    caught: false
  }, {
    id:7,
    name: "Sobble",
    sprite: "https://cdn.bulbagarden.net/upload/thumb/0/0c/Sobble.png/1200px-Sobble.png",
    caught: false
  }, {
    id:8,
    name: "Snivy",
    sprite: "https://cdn.bulbagarden.net/upload/thumb/7/75/495Snivy.png/1200px-495Snivy.png",
    caught: false
  },
];

class App extends Component{

  state = {
    catches: 1,
    
  }

  handleClick = pokeId => e => {
    e.preventDefault();
    if (pokemon[pokeId].caught === false) {
      // console.log("Pokemon Id:" + pokeId);
      console.log("Pokemon caught? " + pokemon[pokeId].caught)
      console.log("------------");
      pokemon[pokeId].caught = true;
      console.log("Pokemon caught? " + pokemon[pokeId].caught)
      this.setState({catches: this.state.catches + 1})
      console.log(this.state.catches);
    } else {
      console.log("------------");
      console.log("Already caught this one");
    }
    // let pokemon = this.state.pokemon
    // console.log(pokeId);
 

}

  render() {
    return (
      <div className="App">
        <Header />
        <Counter />
        {pokemon.map(pokemon => {
      // console.log(pokemon.name);
          return (
            <Card
              key={pokemon.id}
              name={pokemon.name}
              sprite={pokemon.sprite}
              caught={pokemon.caught}
              buttonClick={this.handleClick(pokemon.id)}
            />
          );
        })}
        <Container />
        <Footer />
      </div>
    )
  };
}

export default App;
