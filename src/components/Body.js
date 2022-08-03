import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import Pokemon from './Pokemon';
import './Body.css'

function Body(){
    const[pokemonList, setPokemonList] = useState([])
    const[loading, setLoading] = useState(true);
    const[searchTerm, setSearchTerm] = useState("");
    const fetchData = () =>{
        return fetch(`https://pokeapi.co/api/v2/pokemon/?limit=1099/`)
            .then((response) => response.json())
            .then((response)=>setPokemonList(response))
            .then(() => setLoading(false))
    ;}
    useEffect(()=>{
        fetchData();
    },[])
    if(!loading){
        return(
            <div className="bg-black">
                <div style={{textAlign:'center'}} className='place-content-center align-center py-8'>
                    <input className='body-input justify-self-center' type="text" placeholder="Pokemon Name..." onChange={(e) => setSearchTerm(e.target.value)} value={searchTerm}/>
                </div>
                {console.log(pokemonList)}
                <div className='flex flex-wrap'>
                    {pokemonList.results.map(function(n, idn){
                        if(searchTerm===""){
                        return(
                            <div className='basis-1/6'>
                                <p className='py-16 px-32' key={idn}>
                                    <Pokemon pokemonName={n.name}/>
                                </p>
                            </div>
                        )
                        } else if(n.name.toLowerCase().includes(searchTerm.toLowerCase())){
                            return(
                                <div className='basis-1/6'>
                                    <p className='py-16 px-32' key={idn}>
                                        <Pokemon pokemonName={n.name}/>
                                    </p>
                                </div>
                            )
                        }
                    })}
                </div>
                
            </div>
        )
    } else {
        return(
            <div className='text-center text-xl text-gray-100'>
                <p>Pokemon Are Loading...</p>
            </div>
        )
    }
}

export default Body;