// Write your code here
import {Component} from 'react'

import './index.css'

import DestinationItem from '../DestinationItem/index'

class DestinationSearch extends Component {
  state = {searchInput: ''}

  onUserSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {destinationsList} = this.props
    const {searchInput} = this.state
    console.log(searchInput)

    const searchResultsList = destinationsList.filter(eachObject =>
      eachObject.name.toLowerCase().includes(searchInput),
    )

    return (
      <div className="bg">
        <h1>Destination Search</h1>
        <div className="inputSearchStyling">
          <input
            type="search"
            placeholder="Search"
            value={searchInput}
            onChange={this.onUserSearchInput}
            className="inputSearchStyles"
          />
          <img
            src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
            alt="search icon"
            className="searchIconImage"
          />
        </div>

        <ul className="imagesCard">
          {searchResultsList.map(eachObject => (
            <DestinationItem
              destinationItemsProp={eachObject}
              key={eachObject.id}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default DestinationSearch
