import { data } from 'autoprefixer'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export const RMCard = ( {id, name, image} ) => {
    return (
    <Link to={`/ram/${id}`}>  
        <div>{name}</div>
        <img src={image}/>
    </Link>  
    )
}




const RMContainer = () => {

const [chars, setChars] = useState( [] )

    useEffect(() => {
        getChars()
    }, [])

    const getChars = async () => {
        const URL = 'https://rickandmortyapi.com/api/character'
        const response = await axios.get( URL )
        setChars( response.data.results )
        }
    
  return (
    <div>
        { chars.map( c => <RMCard key={c.id} {...c}/> )}
        </div>
  )
}
export default RMContainer