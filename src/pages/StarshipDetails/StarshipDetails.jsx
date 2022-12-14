import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { getStarshipDetails } from '../../services/sw-api'

const StarshipDetails= () => {
  const [starshipDetails, setStarshipDetails] = useState({})
  const location = useLocation()

  useEffect(() => {
    const fetchDetails = async () => {
      const starshipDetails = await getStarshipDetails(location.state.starship.url)
      setStarshipDetails(starshipDetails)
    }
    fetchDetails()
  },[location.state.starship.url])

  return ( 
    <>
      <h1 className="banner"> STARSHIP DETAILS</h1>
      <div> 
        {starshipDetails.name ? 
        <>
          <div className="starship-info-div">
            <h4 className="starship-name">NAME: {starshipDetails.name}</h4>
            <h4>MODEL: {starshipDetails.model}</h4>
            <Link className="return" to='/all-starships'>RETURN</Link>
          </div>
        </>
        :
        <>
          <p>Loading starship details...</p>
        </>
        }
      </div>
    </>
  );
}

export default StarshipDetails;