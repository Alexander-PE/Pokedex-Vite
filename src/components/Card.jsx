import { useState, useEffect } from 'react'

export const Card = ({link, nombre, poke}) => {
  const [pokemon, setPokemon] = useState()
  const [imagen, setImagen] = useState("")


  const getPokemon = async(url) => {
    await fetch(url).then(response => response.json()).then(data => {
      setImagen(data.sprites.front_default);
      setPokemon(data)
    });
    console.log(pokemon)
  }

  useEffect(() => {
    getPokemon(link);
  }, [link])

  return (
    <div className="flex items-center w-auto p-2 rounded-xl bg-gray-500 hover:cursor-pointer shadow-xl transform transition-all hover:translate-y-1">
      <img className="h-30 object-cover rounded-xl" src={imagen} />
      <h1 className='font-bold text-xl'>{nombre.charAt(0).toUpperCase() + nombre.slice(1)}</h1>
    </div>
  )
}
