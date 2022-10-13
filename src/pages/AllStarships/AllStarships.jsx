import { useEffect, useState } from 'react'
import { getAllStarships } from "../../services/sw-api";
import { Link } from "react-router-dom"

const AllStarships = () => {
  const [starships, setStarships]= useState([]) 

  useEffect(()=> {
    const fetchStarshipList = async () => {
      const starshipData = await getAllStarships()
      setStarships(starshipData.results)
    }
    fetchStarshipList()
  }, [])

  return ( 
    <>
      <h1 className="banner"> STAR WARS STARSHIPS</h1>
      <div className="starship-div">
        {starships.map(starship => 
          <Link key={starship.model} state={{ starship }} to='/starship'> 
            <div className='starship-name-div'>
              {starship.name}
            </div>
          </Link>
          )}
      </div>
    </>
  );
}

export default AllStarships;

