import React, { useEffect, useState } from 'react'

const CondicionalContainer = () => {

  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  
  useEffect(() => {
    getData().then( data => {
        setUsers( data )
        setLoading( false )
    })
  }, [])

  const getData = () => {
    return new Promise( resolve => {
        setTimeout(() => {
            resolve( ['Hugo', 'Ana', 'Camila'] )
        }, 3000);
    })
  }

  return (
    <div>
      
      { !loading && 
        <>
          <h1>Lista de nombres:</h1>
          { users.map( (u, i) => <li className='text-xl' key={i}>{u}</li> ) }
        </>
      }
    </div>
  )
}

export default CondicionalContainer