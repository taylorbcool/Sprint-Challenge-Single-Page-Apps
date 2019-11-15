import React from "react";
import Header from "./components/Header.js";
import CharacterList from "./components/CharacterList";
import WelcomePage from './components/WelcomePage';
import { BrowserRouter as Route } from "react-router-dom";

export default function App() {
  return (
    <main>
      <Header />
      <Route exact path='/' component={WelcomePage} />
      <Route path='/character-list' component={CharacterList} />
      {/* <WelcomePage /> */}
      {/* <CharacterList /> */}
    </main>
  );
}
