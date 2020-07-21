import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TYPE_COLORS = {
    bug: 'B1C12E',
    dark: '4F3A2D',
    dragon: '755EDF',
    electric: 'FCBC17',
    fairy: 'F4B1F4',
    fighting: '823551D',
    fire: 'E73B0C',
    flying: 'A3B3F7',
    ghost: '6060B2',
    grass: '74C236',
    ground: 'D3B357',
    ice: 'A3E7FD',
    normal: 'C8C4BC',
    poison: '934594',
    psychic: 'ED4882',
    rock: 'B9A156',
    steel: 'B5B5C3',
    water: '3295F6',
};

function Pokemon(props) {
    const [name, setName] = useState('');
    const [pokemonIndex, setPokemonIndex] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [types, setTypes] = useState([]);
    const [desc, setDesc] = useState('');
    const [stats, setStats] = useState({
        hp: '',
        attack: '',
        defense: '',
        speed: '',
        specialAttack: '',
        specialDefense: '',
    });
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
    const [eggGroup, setEggGroup] = useState('');
    const [abilities, setAbilities] = useState('');
    const [genderRatioMale, setGenderRatioMale] = useState('');
    const [genderRatioFemale, setGenderRatioFemale] = useState('');
    const [catchRate, setCatchRate] = useState('');
    const [evs, setEvs] = useState('');
    const [hatchSteps, setHatchSteps] = useState('');

    useEffect(() => {
        async function fetchPokemonDetails() {
            const { pokemonIndex } = props.match.params;

            //Urls for pokemon infos
            const pokemonUrl = `https://pokeapi.co/api/v2/pokemon/${pokemonIndex}/`;
            const pokemonSpeciesUrl = `https://pokeapi.co/api/v2/pokemon-species/${pokemonIndex}/`;

            //Get Pokemon Info
            const pokemons = await axios.get(pokemonUrl);
            setName(pokemons.data.name);

            const imageUrl = pokemons.data.sprites.front_default;
            setImageUrl(imageUrl);

            let [
                hp,
                attack,
                defense,
                speed,
                specialAttack,
                specialDefense,
            ] = '';

            pokemons.data.stats.map((stat) => {
                switch (stat.stat.name) {
                    case 'hp':
                        hp = stat['base_stat'];
                        break;
                    case 'attack':
                        attack = stat['base_stat'];
                        break;
                    case 'defense':
                        defense = stat['base_stat'];
                        break;
                    case 'speed':
                        speed = stat['base_stat'];
                        break;
                    case 'special-attack':
                        specialAttack = stat['base_stat'];
                        break;
                    case 'special-defense':
                        specialDefense = stat['base_stat'];
                        break;
                    default:
                        break;
                }
                return 0;
            });

            //Convert dm to m
            const height = pokemons.data.height / 10;
            //Convert hg to kg
            const weight = pokemons.data.weight / 10;

            const types = pokemons.data.types.map((type) => type.type.name);
            const abilities = pokemons.data.abilities.map((ability) => {
                return ability.ability.name
                    .toLowerCase()
                    .split('-')
                    .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
                    .join(' ');
            });
            const evs = pokemons.data.stats
                .filter((stat) => {
                    if (stat.effort > 0) {
                        return true;
                    }
                    return false;
                })
                .map((stat) => {
                    return `${stat.effort} ${stat.stat.name
                        .toLowerCase()
                        .split('-')
                        .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
                        .join(' ')}`;
                })
                .join(', ');

            //Get pokemon desc, catch rate, egg groups, gender ratio, hatch steps
            await axios.get(pokemonSpeciesUrl).then((res) => {
                let desc = '';
                // eslint-disable-next-line
                res.data.flavor_text_entries.some((flavor) => {
                    if (flavor.language.name === 'en') {
                        desc = flavor.flavor_text;
                        // eslint-disable-next-line
                        return;
                    }
                });

                const femaleRate = res.data['gender_rate'];
                const genderRatioFemale = 12.5 * femaleRate;
                const genderRatioMale = 12.5 * (8 - femaleRate);

                const catchRate = Math.round(
                    (100 / 255) * res.data['capture_rate']
                );

                const eggGroups = res.data['egg_groups']
                    .map((group) => {
                        return group.name
                            .toLowerCase()
                            .split('-')
                            .map(
                                (s) =>
                                    s.charAt(0).toUpperCase() + s.substring(1)
                            )
                            .join(' ');
                    })
                    .join(', ');

                const hatchSteps = 255 * (res.data['hatch_counter'] + 1);

                //Putting info into state
                setDesc(desc);
                setGenderRatioFemale(genderRatioFemale);
                setGenderRatioMale(genderRatioMale);
                setCatchRate(catchRate);
                setEggGroup(eggGroups);
                setHatchSteps(hatchSteps);
                setPokemonIndex(pokemonIndex);
                setTypes(types);
                setStats({
                    hp,
                    attack,
                    defense,
                    speed,
                    specialAttack,
                    specialDefense,
                });
                setHeight(height);
                setWeight(weight);
                setAbilities(abilities);
                setEvs(evs);
            });
        }
        fetchPokemonDetails();
    }, [props.match.params]);

    return (
        <div className="col">
            <div className="card">
                <div className="card-header">
                    <div className="row">
                        <div className="col-5">
                            <h5>{pokemonIndex}</h5>
                        </div>
                        <div className="col-7">
                            <div className="float-right">
                                {types.map((type) => (
                                    <span
                                        key={type}
                                        className="badge badge-pull mr-1"
                                        style={{
                                            backgroundColor: `#${TYPE_COLORS[type]}`,
                                            color: 'white',
                                        }}
                                    >
                                        {type
                                            .split()
                                            .map(
                                                (s) =>
                                                    s.charAt(0).toUpperCase() +
                                                    s.substring(1).toLowerCase()
                                            )}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className="row align-items-center">
                            <div className="col-md-3">
                                <img
                                    src={imageUrl}
                                    alt="pokemon-sprite"
                                    className="card-img-top rounded mx-auto mt-2"
                                />
                            </div>
                            <div className="col-md-8">
                                <h4 className="mx-auto">
                                    {name
                                        .toLowerCase()
                                        .split('-')
                                        .map(
                                            (s) =>
                                                s.charAt(0).toUpperCase() +
                                                s.substring(1)
                                        )
                                        .join(' ')}
                                </h4>
                                <div className="row align-items-center">
                                    <div className="col-12 col-md-4">HP</div>
                                    <div className="col-12 col-md-8">
                                        <div className="progress">
                                            <div
                                                className="progress-bar"
                                                role="progressbar"
                                                style={{
                                                    width: `${stats.hp}%`,
                                                }}
                                                aria-valuenow="25"
                                                aria-valuemin="0"
                                                aria-valuemax="100"
                                            >
                                                <small>{stats.hp}</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row align-items-center">
                                    <div className="col-12 col-md-4">
                                        Attack
                                    </div>
                                    <div className="col-12 col-md-8">
                                        <div className="progress">
                                            <div
                                                className="progress-bar"
                                                role="progressbar"
                                                style={{
                                                    width: `${stats.attack}%`,
                                                }}
                                                aria-valuenow="25"
                                                aria-valuemin="0"
                                                aria-valuemax="100"
                                            >
                                                <small>{stats.attack}</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row align-items-center">
                                    <div className="col-12 col-md-4">
                                        Defense
                                    </div>
                                    <div className="col-12 col-md-8">
                                        <div className="progress">
                                            <div
                                                className="progress-bar"
                                                role="progressbar"
                                                style={{
                                                    width: `${stats.defense}%`,
                                                }}
                                                aria-valuenow="25"
                                                aria-valuemin="0"
                                                aria-valuemax="100"
                                            >
                                                <small>{stats.defense}</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row align-items-center">
                                    <div className="col-12 col-md-4">Speed</div>
                                    <div className="col-12 col-md-8">
                                        <div className="progress">
                                            <div
                                                className="progress-bar"
                                                role="progressbar"
                                                style={{
                                                    width: `${stats.speed}%`,
                                                }}
                                                aria-valuenow="25"
                                                aria-valuemin="0"
                                                aria-valuemax="100"
                                            >
                                                <small>{stats.speed}</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row align-items-center">
                                    <div className="col-12 col-md-4">
                                        Special Attack
                                    </div>
                                    <div className="col-12 col-md-8">
                                        <div className="progress">
                                            <div
                                                className="progress-bar"
                                                role="progressbar"
                                                style={{
                                                    width: `${stats.specialAttack}%`,
                                                }}
                                                aria-valuenow="25"
                                                aria-valuemin="0"
                                                aria-valuemax="100"
                                            >
                                                <small>
                                                    {stats.specialAttack}
                                                </small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row align-items-center">
                                    <div className="col-12 col-md-4">
                                        Special Defense
                                    </div>
                                    <div className="col-12 col-md-8">
                                        <div className="progress">
                                            <div
                                                className="progress-bar"
                                                role="progressbar"
                                                style={{
                                                    width: `${stats.specialDefense}%`,
                                                }}
                                                aria-valuenow="25"
                                                aria-valuemin="0"
                                                aria-valuemax="100"
                                            >
                                                <small>
                                                    {stats.specialDefense}
                                                </small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-sm-12 mt-2">
                                <h5 className="text-center">Description:</h5>
                                <p className="p-2 text-center">{desc}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="card-body">
                    <h5 className="card-title text-center">Profile</h5>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="row">
                                <div className="col-md-6">
                                    <h6 className="float-right">Height:</h6>
                                </div>
                                <div className="col-md-6">
                                    <h6 className="float-left">{height} m</h6>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <h6 className="float-right">Weight:</h6>
                                </div>
                                <div className="col-md-6">
                                    <h6 className="float-left">{weight} kg</h6>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <h6 className="float-right">Catch Rate:</h6>
                                </div>
                                <div className="col-md-6">
                                    <h6 className="float-left">{catchRate}%</h6>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <h6 className="float-right">
                                        Gender Ratio:
                                    </h6>
                                </div>
                                <div className="col-md-6">
                                    <div className="progress">
                                        <div
                                            className="progress-bar"
                                            role="progressbar"
                                            style={{
                                                width: `${genderRatioFemale}%`,
                                                backgroundColor: '#C3285B',
                                            }}
                                            aria-valuenow="15"
                                            aria-valuemin="0"
                                            aria-valuemax="100"
                                        >
                                            <small>{genderRatioFemale}</small>
                                        </div>
                                        <div
                                            className="progress-bar"
                                            role="progressbar"
                                            style={{
                                                width: `${genderRatioMale}%`,
                                                backgroundColor: '#1976D2',
                                            }}
                                            aria-valuenow="30"
                                            aria-valuemin="0"
                                            aria-valuemax="100"
                                        >
                                            <small>{genderRatioMale}</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="row">
                                <div className="col-md-6">
                                    <h6 className="float-right">Egg Groups:</h6>
                                </div>
                                <div className="col-md-6">
                                    <h6 className="float-left">{eggGroup}</h6>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <h6 className="float-right">
                                        Hatch Steps:
                                    </h6>
                                </div>
                                <div className="col-md-6">
                                    <h6 className="float-left">{hatchSteps}</h6>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <h6 className="float-right">Abilities:</h6>
                                </div>
                                <div className="col-md-6">
                                    <h6 className="float-left">{abilities}</h6>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <h6 className="float-right">
                                        Possible EV gain from slain:
                                    </h6>
                                </div>
                                <div className="col-md-6">
                                    <h6 className="float-left">+{evs}</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card-footer text-muted">
                    Data From{' '}
                    <a
                        href="https://pokeapi.co/"
                        target="_blank"
                        className="card-link"
                        rel="noopener noreferrer"
                    >
                        PokeAPI.co
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Pokemon;
