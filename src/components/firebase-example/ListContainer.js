import React, { useEffect, useState } from 'react'
import { collection, doc, getDoc, getDocs, getFirestore, query, where } from "firebase/firestore";

const ListContainer = () => {

  const [items, setItems] = useState([])

  useEffect(() => {
    getItemsPricierThan(500)
  }, [])
  
  const getItem = () => {
    const db = getFirestore()
    const docRef = doc(db, 'items', 'AC1RM093Yf4aEOiN3in0', 'LCKNWg45Wy1tMYY0b3tD', 'UWEo5xneAb9o4ZlFx8wm')
    getDoc( docRef ).then( snapshot => {
        console.log( {id: snapshot.id, ...snapshot.data()} );
    })
  }

  const getItems = () => {
    const db = getFirestore()
    const itemsRef = collection(db, 'items')
    getDocs( itemsRef ).then( snapshot => {
        const data = snapshot.docs.map( e => ({id: e.id, ...e.data()}) )
        console.table(data);
        setItems(data)
    })
  }

  const getItemsPricierThan = ( price ) => {
    const db = getFirestore()
    const itemsRef = collection(db, 'items')
    const q = query(itemsRef, where('price', '>', price) )
    getDocs( q ).then( snapshot => {
        const data = snapshot.docs.map( e => ({id: e.id, ...e.data()}) )
        console.table(data);
        setItems(data)
    })
  }

  return (
    <div>
        { items.map( i => <li key={i.id}>{ i.title }</li> ) }
    </div>
  )
}

export default ListContainer