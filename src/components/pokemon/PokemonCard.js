import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import spinner from './spinner.gif';
import styled from 'styled-components';

const Sprite = styled.img`
    width: 5em;
    heigh: 5em;
    display: none;
`;

const Card = styled.div`
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
    &:hover {
        box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25),
            0 10px 10px rgba(0, 0, 0, 0.22);
    }
    -moz-user-select: none;
    -website-user-select: none;
    -user-select: none;
    -o-user-select: none;
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    color: #000000;
    &:focus,
    &:hover,
    &:visited,
    &:link,
    &:active {
        text-decoration: none;
    }
`;

function PokemonCard(props) {
    //State
    const [imageUrl, setImageUrl] = useState('');
    const [name, setName] = useState('');
    const [pokemonIndex, setPokemonIndex] = useState('');
    const [imageLoading, setImageLoading] = useState(true);
    const [tooManyRequests, setTooManyRequests] = useState(false);

    //Props
    useEffect(() => {
        const name = props.name;
        const url = props.url;
        const pokemonIndex = url.split('/')[url.split('/').length - 2];
        const imageUrl = `https://img.pokemondb.net/sprites/x-y/normal/${name}.png`;

        setName(name);
        setImageUrl(imageUrl);
        setPokemonIndex(pokemonIndex);
    }, [props]);

    return (
        <div className="col-md-3 col-sm-6 mb-5">
            <StyledLink to={`pokemon/${pokemonIndex}`}>
                <Card className="card">
                    <h5 className="card-header">{pokemonIndex}</h5>
                    {imageLoading ? (
                        <img
                            src={spinner}
                            style={{ width: '5em', height: '5em' }}
                            className="card-img-top rounded mx-auto mt-2"
                            alt="spinner"
                        />
                    ) : null}
                    <Sprite
                        className="card-img-top rounded mx-auto mt-2"
                        src={imageUrl}
                        onLoad={() => setImageLoading(false)}
                        onError={() => setTooManyRequests(true)}
                        style={
                            tooManyRequests
                                ? { display: 'none' }
                                : imageLoading
                                ? null
                                : { display: 'block' }
                        }
                    />
                    {tooManyRequests ? (
                        <h6 className="mx-auto">
                            <span className="badge badge-danger mt-2">
                                Not found :(
                            </span>
                        </h6>
                    ) : null}

                    <div className="card-body mx-auto">
                        <h6 className="card-title">
                            {name
                                .toLocaleLowerCase()
                                .split(/\W/)
                                .map(
                                    (letter) =>
                                        letter.charAt(0).toUpperCase() +
                                        letter.substring(1)
                                )
                                .join(' ')}
                        </h6>
                    </div>
                </Card>
            </StyledLink>
        </div>
    );
}

export default PokemonCard;
