import React from 'react'
import './Header.css'
import FoodDisplay from '../FoodDisplay/foodDisplay'
const Header = () => {
  return (
    <div className='header'>
        <div className="header-contents">
            <h2>get your delicious food</h2>
            <p>here order your favourite food from favourite place with in seconds. </p>
          <button>view menu</button>
        </div>
      
    </div>
  )
}

export default Header
