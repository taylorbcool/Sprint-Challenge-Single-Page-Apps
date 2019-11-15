import React from "react";
import { Card, CardText, CardTitle } from 'reactstrap';

export default function CharacterCard({character}) {
  const { name, species, image } = character;
  return (
      <Card className='container'>
        <img src={image} alt={name}/>
        <CardTitle>{name}</CardTitle>
        <CardText>Species: {species}</CardText>
      </Card>
  );
}
