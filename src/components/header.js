import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useContext } from "react"

import {MenuItem, StyledHeader} from '../styles/components';
import { CartContext } from '../context';
import logo from '../images/Logo.png';
import cartIcon from '../images/cart.png';

const Header = ({ siteTitle }) => {
  const {cart} = useContext(CartContext);

  return (
    <StyledHeader>
      <Link to="/">
        <img src={logo} alt="logoplatziswag" />
      </Link>
      <nav>
        <ul>
          <MenuItem margin><Link to="/">Productos</Link></MenuItem>
          <MenuItem margin><a href="https://platzi.com">Platzi</a></MenuItem>
          <MenuItem>
            <Link to="/cart">
              <span><img src={cartIcon} alt="cartlogo" />{cart.length}</span>
            </Link>
          </MenuItem>
        </ul>
      </nav>
    </StyledHeader>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
