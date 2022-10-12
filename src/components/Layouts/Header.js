import React from 'react'
import Alert from '../Ui/Alert';
import './Header.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

function Header() {
  return (
    <div>
      <Alert alert={'FREE SHIPPING ABOVE RS.499 | SHOP NOW'} />
      <div className='navigation-bar'>
        <Router>
          <div className="navigation-container">
            <div className="navigation-brand">
              <Link to='/'>Home</Link>
            </div>
            <div className="navigation-list">
              <Link to='/plants'>Plants</Link>
              <Link to='/seeds'>Seeds</Link>
              <Link to='/gifting'>Gifting</Link>
            </div>
          </div>
        </Router>
      </div>
    </div>
  )
}

export default Header