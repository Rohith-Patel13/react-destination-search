// Write your code here
import './index.css'

const DestinationItem = props => {
  const {destinationItemsProp} = props
  const {name, imgUrl} = destinationItemsProp
  return (
    <li className="imgCardContainer">
      <img src={imgUrl} alt={name} className="imgCard" />
      <p className="paraText">{name}</p>
    </li>
  )
}

export default DestinationItem
