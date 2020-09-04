/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import Helmet from "react-helmet"
import PropTypes from "prop-types"
import { useStaticQuery, graphql, Link, withPrefix } from "gatsby"

import Header from "./header"
import "./yuri.css"
import "./docs.css"

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
								key = {idx}
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
			  { subMenuName: 'Position', path: '/position' },
			  { subMenuName: 'Night mode', path: '/nightmode' }
		  ]
	  },
	  { 
		  headMenuName: 'Components',
		  headPath: '/components',
		  subMenuMap: [
			  { subMenuName: 'Alert', path: '/alert' },
			  { subMenuName: 'Button', path: '/button' },
			  { subMenuName: 'Card', path: '/card' },
			  { subMenuName: 'Form', path: '/form' },
			  { subMenuName: 'Nav', path: '/nav' },
			  { subMenuName: 'Navbar', path: '/navbar' }
		  ]
	  }
  ]
  return (
    <>
	  <Helmet>
		  <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
		  <script src={withPrefix('yuri.js')} type="text/javascript"></script>
		  <script src={withPrefix('night.js')} type="text/javascript"></script>
	  </Helmet>
      <Header/>
      <div className="app container-fluid">
		  <div className="row docs">
			  <div className="col-md-2 docs-menu" id="nav-collapse">
					<button className="navbar-toggler show-md" type="button" data-target="#menus" data-toggle="collapse">
						<span className="navbar-toggler-icon"></span>
					</button>
					<div id="menus" className="collapse collapse-md">
                    {docsMenuMap.map((docsMenu, idx) => {
                        return (
							<HeadMenu 
								slug = {slug} 
								headMenuName = {docsMenu.headMenuName} 
								headPath = {docsMenu.headPath} 
								subMenuMap = {docsMenu.subMenuMap}
								key = {idx}
							/>
						);
                    })}
					</div>
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
