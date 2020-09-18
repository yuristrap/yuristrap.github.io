import React from "react"
import { Link } from "gatsby"

import {upperCase} from './util'

class DocsMenu extends React.Component {
	render() {
		return (
			<>
				<Link to="#" className="menu-head">
					{upperCase(this.props.headMenuName)}
				</Link>
				<ul className="menu-list">
					{this.props.menus.map((menu, idx) => {
						return (
							<li className="menu-item">
								<Link to={'/' + this.props.headMenuName + '/' + menu.name}>
									{menu.name}
								</Link>
							</li>
						);
					})}
				</ul>
			</>
		)
	}
}

export default DocsMenu;