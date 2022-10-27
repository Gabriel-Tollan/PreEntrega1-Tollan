import axios from "axios"
import { useEffect, useState } from "react"
import { useFavs } from "../../context/FavContext"
import { RMCard } from "./RMCard"

const RMContainer = () => {

  const [chars, setChars] = useState([])

  const {favs} = useFavs()

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
        { favs.map( f => <li>{f}</li> ) }
        { chars.map( c => <RMCard key={c.id} {...c}/>)}
    </div>
  )
}
export default RMContainer