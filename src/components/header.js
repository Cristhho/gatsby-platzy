import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import {MenuItem, StyledHeader} from '../styles/components';
import logo from '../images/Logo.png'

const Header = ({ siteTitle }) => (
  <StyledHeader>
    <Link to="/">
      <img src={logo} alt="logoplatziswag" />
    </Link>
    <nav>
      <ul>
        <MenuItem margin><Link to="/">Productos</Link></MenuItem>
        <MenuItem margin><a href="https://platzi.com">Platzi</a></MenuItem>
        <MenuItem><Link to="/cart"><span><img alt="cartlogo" /></span></Link></MenuItem>
      </ul>
    </nav>
  </StyledHeader>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
