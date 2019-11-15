import React, { useState, useEffect } from "react";
import CharacterList from "./CharacterList";
import CharacterCard from "./CharacterCard";

export default function SearchForm(props) {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  console.log(props.array);
  const characters = props.array;
  
  useEffect(() => {
    const results = characters.filter(character =>
      character.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
  }, [searchTerm]);

  const handleChange = event => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="App">
      <form>
        <label htmlFor="name">Search:</label>{' '}
        <input
          id="name"
          type="text"
          name="textfield"
          placeholder="Enter character name"
          value={searchTerm}
          onChange={handleChange}
        />
      </form>
      <div className="character-list">
        <ul>
          {searchResults.map(character => (
            <CharacterCard character={character} />
          ))}
        </ul>
      </div>
    </div>
  );
}
