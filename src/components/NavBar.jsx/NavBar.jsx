import { Link } from "react-router-dom"

const NavBar = () => {
  return (
    <header className="App-header">
      <i id="icon" className="fa-brands fa-space-awesome fa-2xl fa-shake"></i>
      <Link className="all-starships" to="/all-starships">Star Wars Starships</Link>
    </header>
  )
}

export default NavBar