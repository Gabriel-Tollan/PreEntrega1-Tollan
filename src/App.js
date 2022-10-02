import logo from './logo.svg';
import './App.css';
import Saludo from './components/Saludo';
import BoxForChildren from './components/BoxForChildren';
import NavBar from './components/NavBar';
import AgeLabel from './components/AgeLabel';
import Clicker from './components/Clicker';
import ItemListContainer from './components/ItemListContainer';
import RMContainer from './components/RMContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import StarWarsContainer from './components/StarWarsContainer';
import RMDetail from './components/RMDetail';
import Error404 from './components/Error404';
import ItemDetailContainer from './components/ItemDetailContainer';

function App() {

  const styles = {
    border: 'solid 2px blue', 
    padding:'20px'
  }

  return (
    <>
    <BrowserRouter>
    <NavBar/>
    <Routes>
     <Route path={'/'} element={<ItemListContainer greeting=''/>} />
     <Route path={'/category/:categoryId'} element={<ItemListContainer/>} />
     <Route path={'/detail/:productId'} element={<ItemDetailContainer/>} />
     <Route path={'/swapi'} element={<StarWarsContainer/>} />
     <Route path={'*'} element={<Error404/>}/>
    </Routes>
    </BrowserRouter>
    <ItemListContainer greeting={'Mi Tienda'}/>
    <AgeLabel/>
    <Clicker/>
    <ItemDetailContainer/>
    <StarWarsContainer/>
    <RMContainer/>
    <NavBar/>
    <RMDetail/>
    <Error404/>
    <h1 className="text-3xl font-bold underline">¡Hola Mundo!</h1>
    <BoxForChildren>
      <p>Parrafo con texto</p>
      <li>1</li>
      <li>2</li>
      <li>3</li>
    </BoxForChildren>
    <h2 style={ styles }>Subtítulo</h2>
    <li className='green'>elemento 1</li>
    <li>elemento 2</li>
    <li>elemento 3</li>
    <span>otra cosa</span>
    <strong>en negritas</strong>
    <Saludo name='Miguel' age={23} />
    <Saludo name='Jorge' age={18} ></Saludo>
    <Saludo name='Robinson' age={25} ></Saludo>
    </>
  );
}

export default App;
