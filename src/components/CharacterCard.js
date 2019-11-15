import React from "react";
import { Card } from 'reactstrap';

export default function CharacterCard({character}) {
  const { name, species, image } = character;
  return (
      <Card className='container'>
        <img src={image} alt={`${name}`}/>
        <h2 className='display-2'>{name}</h2>
        <div className="species">
          <p>Species: {species}</p>
        </div>
      </Card>
  );
}
