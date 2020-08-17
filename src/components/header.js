import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header>
    <nav class="navbar navbar-primary fixed-top">
	  <a class="navbar-brand" href="#">Yuri</a>
		<ul class="navbar-nav">
		  <li class="nav-item active">
			<Link to="#" class="nav-link">Docs</Link>
		  </li>
		  <li class="nav-item">
			<Link to="#" class="nav-link"></Link>
		  </li>
		  <li class="nav-item">
			<Link to="#" class="nav-link"></Link>
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
