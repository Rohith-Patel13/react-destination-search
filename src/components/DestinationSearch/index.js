// Write your code here

import './index.css'

import DestinationItem from '../DestinationItem/index'

const DestinationSearch = props => {
  const {destinationsList} = props

  return (
    <div className="bg">
      <h1>Destination Search</h1>
      <input type="search" placeholder="Search" />
      <div className="imagesCard">
        {destinationsList.map(eachObject => (
          <DestinationItem
            destinationItemsProp={eachObject}
            key={eachObject.id}
          />
        ))}
      </div>
    </div>
  )
}

export default DestinationSearch
