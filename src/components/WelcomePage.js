import React from "react";
import { Jumbotron } from 'reactstrap';

export default function WelcomePage() {
  return (
    <section className="welcome-page">
      <Jumbotron className='container'>
        <h1 className='display-5'>Welcome to the ultimate fan site!</h1>
        <img
          className="main-img"
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt="rick"
        />
      </Jumbotron>
    </section>
  );
}
