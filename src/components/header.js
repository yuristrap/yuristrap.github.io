import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header>
    <nav class="navbar navbar-primary fixed-top">
	  <a class="navbar-brand" href="#">Navbar</a>
		<ul class="navbar-nav">
		  <li class="nav-item active">
			<Link to="#" class="nav-link">Home</Link>
		  </li>
		  <li class="nav-item">
			<Link to="#" class="nav-link">Features</Link>
		  </li>
		  <li class="nav-item">
			<Link to="#" class="nav-link">Pricing</Link>
		  </li>
		  <li class="nav-item">
			<a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
		  </li>
		</ul>
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
