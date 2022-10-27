import React from 'react'

const InputNo = () => {

  const handler = ( event ) => {
    console.log('se tecleó ' + event.key);
    const notAllowed = ['a','e','i','o','u']
    if ( notAllowed.includes ( event.key.toLowerCase() ) ) {
        event.preventDefault()
    }
  } 

  return (
    <div className='m-5'>
        <input onKeyDown={handler} type='text' className='border border-gray-400'/>
    </div>
  )
}

export default InputNo