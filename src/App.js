import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header.js";
import CharacterList from "./components/CharacterList";
import WelcomePage from './components/WelcomePage';

export default function App() {
  return (
    <Router>
      <main>
        <Header />
        <Route exact path='/' component={WelcomePage} />
        <Route exact path='/character-list' component={CharacterList} />
        {/* <WelcomePage /> */}
        {/* <CharacterList /> */}
      </main>
    </Router>
  );
}
