import { Link } from "gatsby"
import React from "react"
import NightCheckbox from "./night"

const Header = () => (
  <header>
    <nav className="navbar navbar-primary fixed-top docs-nav">
	  <a className="navbar-brand" href="/">Yuri</a>
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
			<NightCheckbox></NightCheckbox>
		</ul>
    </nav>
  </header>
)


export default Header
