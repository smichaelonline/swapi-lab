import './App.css';
import { Routes, Route } from "react-router-dom"
import NavBar from './components/NavBar.jsx/NavBar';
import AllStarships from './pages/AllStarships/AllStarships';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route 
          path="/all-starships"
          element={<AllStarships />}
        />  
      </Routes> 
    </>
  );
}

export default App;
