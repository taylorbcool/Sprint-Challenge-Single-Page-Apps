import React from 'react';
import { Link } from "react-router-dom";
import {
  Navbar,
  Nav,
  NavItem } from 'reactstrap';

export default function Header() {  
  return (
    <div>
      <Navbar color="light" light expand="md">
        <Link to="/">{`Rick & Morty Fan Page`}</Link>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <Link to="/character-list">Characters</Link>
          </NavItem>
          <NavItem>
            {/* Searchbar */}
          </NavItem>
        </Nav>
      </Navbar>
    </div>
  );
}
