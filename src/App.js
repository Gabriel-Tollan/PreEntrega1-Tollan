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
    </>
  );
}

export default App;
