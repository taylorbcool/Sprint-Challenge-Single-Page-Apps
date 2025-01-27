import React, { useEffect, useState } from "react";
import axios from 'axios';
import CharacterCard from './CharacterCard';
import SearchForm from "./SearchForm";
import { Jumbotron } from 'reactstrap';

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacters] = useState([])

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    // Important: verify the 2nd `useEffect` parameter: the dependancies array!
    const getCharacters = () => {
      axios
        .get('https://rickandmortyapi.com/api/character/')
        .then(response => {
          // console.log(response)
          setCharacters(response.data.results)
        })
        .catch(error => {
          console.log('Server Error', error);
        })
    }
    getCharacters();
  }, []);

  return (
    <section className="character-list container">
      <Jumbotron>
      <h3 className='display-4'>Characters</h3>
      <SearchForm array={[...characters]}/>
      </Jumbotron>
      {characters.map(character => (
        <CharacterCard key={character.id} character={character} />
      ))}
    </section>
  );
};