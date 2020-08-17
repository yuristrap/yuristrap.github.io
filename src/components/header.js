import { Link } from "gatsby"
import React from "react"

const Header = () => (
  <header>
    <nav className="navbar navbar-primary fixed-top">
	  <a className="navbar-brand" href="#">Yuri</a>
		<ul className="navbar-nav">
		  <li className="nav-item active">
			<Link to="#" className="nav-link">Docs</Link>
		  </li>
		  <li className="nav-item">
			<Link to="#" className="nav-link"></Link>
		  </li>
		  <li className="nav-item">
			<Link to="#" className="nav-link"></Link>
		  </li>
		</ul>
    </nav>
  </header>
)


export default Header
