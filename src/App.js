import React, {useState, useEffect }from 'react';
import './App.css';
import axios from "axios";
import Character from "./components/Character"
import styled from 'styled-components'

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [characters, setCharacters] = useState([]);
  const [currentCharacterId, setCurrentCharacterId] = useState(1);
  const [query, setQuery] = useState("react");

  const displayCharacter = (id) => {
    setCurrentCharacterId(id);
  };

  const closeCharacter = () => {
    setCurrentCharacterId(1);
  };

  const nextCharacter = (id) => {
    setCurrentCharacterId(id + 1);
  };

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  useEffect( () => {
    const fetchCharacters = () => {
      axios.get(
        'https://rickandmortyapi.com/api/character')
        .then( (res) => {
          
         setCharacters(res.data.results)
        }
        ).catch( (err) => {
          console.log(err);
        })
    }
    fetchCharacters();
  }, [])
  


  // const Character = (props) => (
  //   <div className="character">
  //     {props.name}
  //   </div>
  // );

  const WrapperDiv = styled.div`

font-family: 'Montserrat', sans-serif;
background-image: url(https://images.unsplash.com/photo-1467293622093-9f15c96be70f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80);
background-repeat: no-repeat;
background-attachment: fixed;
background-position: center;
background-color: black;
background-size: contain;
opacity: 1;`

  return (
    <WrapperDiv>
      <h1 className="Header">Rick and Morty Characters</h1>
      {characters.map( (char) => {

        return (
        <Character name = {char.name} currentCharacterId = {currentCharacterId} image = {char.image} />)
      })}
      {/* // <Character characters = {characters} currentCharacterId = {currentCharacterId} displayCharacter = {displayCharacter}/> */}
    </WrapperDiv>
  );
}

export default App;
