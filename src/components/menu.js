import React from "react"
import { Link } from "gatsby"

import { upperCase } from './util'

function checkSlugHeadMenu(slug, headMenuName) {
	if (slug === undefined)
		return false;
	if (slug.split('/')[1] === headMenuName)
		return true;
	return false;
}

class DocsMenu extends React.Component {
	render() {
		return (
			<>
				<Link to={'/' + this.props.headMenuName + '/' + this.props.menus[0].name} className="menu-head">
					{upperCase(this.props.headMenuName)}
					<img class="f-right" src="https://systemuicons.com/images/icons/chevron_down.svg"/>
				</Link>
				<ul className={"menu-list " + ( checkSlugHeadMenu(this.props.slug, this.props.headMenuName) ? '' : 'dsp-none' )}>
					{this.props.menus.map((menu, idx) => {
						let path = '/' + this.props.headMenuName + '/' + menu.name;
						return (
							<li className={"menu-item " + ((this.props.slug === path) ? 'active' : '')}>
								<Link to={path}>
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