import {
  getPokemonDescription,
  getPokemonList,
  getPokemonSpriteUrl,
} from "../../api/utils";
import { useEffect, useState } from "react";

import Select from "../Select";
import styled from "styled-components";

const Wrapper = styled.div`
  line-height: 1.6;
  padding: 1rem;

  h1 {
    margin-bottom: 0.5em;
  }

  p,
  ul,
  ol {
    margin-bottom: 1em;
  }
`;

export default function Prompt() {
  const [pokemonData, setPokemonData] = useState([]);
  const [pokemonImage, setPokemonImage] = useState();
  const [pokemonDecription, setPokemonDecription] = useState();

  useEffect(() => {
    const getPokemon = async () => {
      const res = await getPokemonList();
      setPokemonData(res);
    };
    getPokemon();
  }, []);

  if (!pokemonData) {
    return;
  }

  const onSelectingPokemon = async (e) => {
    const imageRes = await getPokemonSpriteUrl(e.target.value); //TODO: Add debouncing
    const descriptionRes = await getPokemonDescription(e.target.value);
    console.warn(descriptionRes);

    setPokemonImage(imageRes);
    setPokemonDecription(descriptionRes);
  };

  return (
    <Wrapper>
      <Select onChange={(e) => onSelectingPokemon(e)}>
        {pokemonData.map((pokemon, index) => {
          return (
            <option value={index} key={index}>
              {pokemon.name}
            </option>
          );
        })}
      </Select>

      <div className="cardContainer">
        <img alt={"image of pokemon"} src={pokemonImage} />
        <p>{pokemonDecription}</p>
      </div>
    </Wrapper>
  );
}
