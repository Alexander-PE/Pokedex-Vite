import { useState, useEffect } from 'react';
import { Card } from './components/Card.jsx';

function App() {
  const [pokemons, setPokemons] = useState([])
  const link = "https://pokeapi.co/api/v2/pokemon?offset=20&limit=20";

  const getPokemons = async(url) => {
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data.results);
      setPokemons(data.results);
    })
  }

  useEffect(() => {
    getPokemons(link)
  }, [link]);
  

  // pokemons.map((val, index) => {
  //   console.log(val.name);
  // })

  return (
    <div className="App">
      <header className="text-5xl text-laurel grid justify-center p-7 py-10 min-w-full font-semibold">
        <h1>Pokedex</h1>
      </header>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 auto-rows-auto gap-8 p-5">
        {
          pokemons.map((val, index) => (
            <Card nombre={val.name} poke={pokemons} link={val.url}></Card>
          ))   
        }
      </div>
    </div>
  )
}

export default App
