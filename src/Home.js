import React, {useState, useEffect} from 'react';
import Axios from 'axios';
import {Link} from 'react-router-dom'
const Home = () => {
  const [character, setCharacter] = useState([])

  useEffect( ( ) => {
    Axios.get('https://swapi.py4e.com/api/people/')
    .then( res => {
      console.log(res.data.results)
      setCharacter(res.data.results)
    })
  },[])
  
  return (
    <div>
      Home 
      { character.length > 0 && character.map( person => {
        return <>
          <Link to={'/' + person.name}>{person.name}</Link>
          <br />
        </>
      })}
    </div>
  );
};

export default Home;