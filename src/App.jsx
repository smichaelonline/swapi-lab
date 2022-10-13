import './App.css';
import { Routes, Route } from "react-router-dom"
import NavBar from './components/NavBar.jsx/NavBar';
import AllStarships from './pages/AllStarships/AllStarships';
import StarshipDetails from './pages/StarshipDetails/StarshipDetails';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route 
          path="/all-starships"
          element={<AllStarships />}
        />  
        <Route 
          path="/starship"
          element={<StarshipDetails />}
        />
      </Routes> 
    </>
  );
}

export default App;
