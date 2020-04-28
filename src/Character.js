import React, {useState, useEffect} from 'react';
import Axios from 'axios';
import {useParams} from 'react-router-dom'
const Character = () => {
  const [person, setPerson] = useState({})

const name = useParams().name

  useEffect( () => {
    Axios.get('https://swapi.py4e.com/api/people/?search=' + name)
    .then( res => {
      setPerson(res.data.results[0])
    })
  }, [])


    
  return (
    <div>
      Character
      {person.name}
    </div>
  );
};

export default Character;