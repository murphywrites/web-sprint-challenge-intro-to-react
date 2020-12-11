// Write your Character component here
import React, { useState, useEffect } from "react";
import styled from 'styled-components'


export default function Character(props) {

   const {name, image, displayCharacter, currentCharacterId} = props;

//    const names = props.characters.forEach( char => {
//     console.log(char.name)
//     return char.name
//    })

const WrapperDiv = styled.div`

font-family: 'Montserrat', sans-serif;

opacity: 1;
display: block;
width:100%;
margin: 0 auto;
align-content: center;
border: 1px solid black`
    
   return (
   <WrapperDiv>
       <h2>{name}</h2>
       <div>
       <img src = {image} />
       </div>     
    <p></p>
    </WrapperDiv>
)
}