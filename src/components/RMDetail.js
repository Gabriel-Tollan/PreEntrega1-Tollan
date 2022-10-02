import { data } from "autoprefixer"
import axios from 'axios'
import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

const RMDetail = () => {
 
 const { id } = useParams()
 const [char, setChar] = useState({})

 useEffect(() => {
   getChar()
 }, [])
 
const getChar = async () => {
    const URL = 'https//rickandmortyapi.com/api/character/' + id
    const response = await axios.get(URL)
    console.log(response.data);
    setChar( response.data )
}
 
    return (
    <>
    <div>Detalle del ID: {id}</div>
    <li>{ char.name }</li>
    <li>{ char.species }</li>
    <img src={ char.image }></img>
    </>
  )
}

export default RMDetail