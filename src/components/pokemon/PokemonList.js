import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PokemonCard from './PokemonCard';

function PokemonList() {
    //Pokemon List
    const url = useState(
        'https://pokeapi.co/api/v2/pokemon?limit=721'
    );
    const [pokemons, setPokemons] = useState(null);

    //Fetching Pokemon List API
    useEffect(() => {
        //componentDidMount/DidUpdate
        //I need to put this into an async function
        //Because I can't async useEffect.
        async function fetchPokemonAPI() {
            let res = await axios.get(url);
            res = await res.data.results;
            setPokemons(res);
        }
        fetchPokemonAPI();
    }, [url]);

    return (
        <React.Fragment>
            {pokemons ? (
                <div>
                    <div className="row">
                        {pokemons.map((pokemon) => (
                            <PokemonCard
                                key={pokemon.name}
                                name={pokemon.name}
                                url={pokemon.url}
                            />
                        ))}
                    </div>
                </div>
            ) : (
                <h1>Loading pokemons...</h1>
            )}
        </React.Fragment>
    );
}

export default PokemonList;
