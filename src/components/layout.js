/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql, Link } from "gatsby"

import Header from "./header"
import "./docs.css"
import "./yuri.css"

class SubMenu extends React.Component {
    render() {
        return(
			<li className={"menu-item " + ((this.props.slug === this.props.headPath + this.props.subMenu.path) ? 'active' : '')}>
				<Link to={this.props.headPath + this.props.subMenu.path}>
					{this.props.subMenu.subMenuName}
				</Link>
			</li>
		);
    }
}

class HeadMenu extends React.Component {
    render() {
        return(
			<>
				<Link to="#" className="menu-head">
					{this.props.headMenuName}
				</Link>
				<ul className="menu-list">
					{this.props.subMenuMap.map((subMenu, idx) => {
						return (
							<SubMenu 
								slug = {this.props.slug}
								headPath = {this.props.headPath}
								subMenu = {subMenu}
							/>
						);
					})}
				</ul>
			</>
		);
    }
}

const Layout = ({ slug, children }) => {
  const docsMenuMap = [
	  { 
		  headMenuName: 'Introduction',
		  headPath: '/introduction',
		  subMenuMap: [
			  { subMenuName: 'Download', path: '/download' },
			  { subMenuName: 'Customize', path: '/customize' },
			  { subMenuName: 'Reboot', path: '/reboot' }
		  ]
	  },
	  { 
		  headMenuName: 'Utilities',
		  headPath: '/utilities',
		  subMenuMap: [
			  { subMenuName: 'Flex', path: '/flex' },
			  { subMenuName: 'Grid', path: '/grid' },
			  { subMenuName: 'Position', path: '/position' }
		  ]
	  },
	  { 
		  headMenuName: 'Componentsp',
		  headPath: '/componentsp',
		  subMenuMap: [
			  { subMenuName: 'Alert', path: '/alert' },
			  { subMenuName: 'Button', path: '/button' },
			  { subMenuName: 'Card', path: '/card' },
			  { subMenuName: 'Form', path: '/form' },
			  { subMenuName: 'Navbar', path: '/navbar' }
		  ]
	  }
  ]
  return (
    <>
      <Header/>
      <div className="app container-fluid">
		  <div className="row docs">
			  <div className="col-md-2 docs-menu">
                    {docsMenuMap.map((docsMenu, idx) => {
                        return (
							<HeadMenu 
								slug = {slug} 
								headMenuName = {docsMenu.headMenuName} 
								headPath = {docsMenu.headPath} 
								subMenuMap = {docsMenu.subMenuMap}
							/>
						);
                    })}
			  </div>
			  <div className="col-md-10 docs-content">
				<main>{children}</main>
			  </div>
		  </div>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}


export default Layout
