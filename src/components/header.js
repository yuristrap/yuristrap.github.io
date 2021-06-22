import { Link } from "gatsby"
import React from "react"
import NightCheckbox from "./night"

const Header = () => (
  <header>
    <nav className="navbar navbar-primary fixed-top docs-nav shadow-sm">
		<a class="navbar-brand" href="/">
			<img src="https://avatars1.githubusercontent.com/u/68942934?s=200&amp;v=4" width="48" height="48" className="navbar-brand-logo" alt=""/>
		</a>
		<div class="collapse navbar-collapse">
			<ul className="navbar-nav">
			  <li className="nav-item active">
				<Link to="#" className="nav-link">Yuristrap</Link>
			  </li>
			  <li className="nav-item">
				<Link to="#" className="nav-link disabled">Vue.UI</Link>
			  </li>
			  <li className="nav-item">
				<Link to="#" className="nav-link disabled" >React.UI</Link>
			  </li>
			</ul>
			<div class="dsp-flex">
				<div class="form-group mg-b-0 mg-r-1 hide-md">
					<select class="form-control mg-b-0">
						<option selected>v1.0.4</option>
					</select>
				</div>
				<NightCheckbox></NightCheckbox>
			</div>
		</div>
    </nav>
  </header>
)


export default Header
