import React from "react"
import Helmet from "react-helmet"
import PropTypes from "prop-types"
import { useStaticQuery, graphql, Link, withPrefix } from "gatsby"

import Header from "./header"
import DocsMenu from "./menu"
import { upperCase } from './util'
import "../styles/yuri.css"
import "../styles/docs.css"

function getCurrentMenu(slug) {
	if (slug === undefined)
		return '';
	return upperCase(slug.split('/')[1]) + ' - ' + upperCase(slug.split('/')[2]);
}
	
const Layout = ({ slug, children }) => {
	const docsMenuMap = useStaticQuery(
		graphql`
			query {
			  introduction: allFile(filter: {sourceInstanceName: {eq: "markdown-pages"}, relativeDirectory: {eq: "introduction"}}, sort: {fields: name}) {
				nodes {
				  name
				  headMenuName: relativeDirectory
				  path: relativePath
				}
			  }
			  utilities: allFile(filter: {sourceInstanceName: {eq: "markdown-pages"}, relativeDirectory: {eq: "utilities"}}, sort: {fields: name}) {
				nodes {
				  name
				  headMenuName: relativeDirectory
				  path: relativePath
				}
			  }
			  components: allFile(filter: {sourceInstanceName: {eq: "markdown-pages"}, relativeDirectory: {eq: "components"}}, sort: {fields: name}) {
				nodes {
				  name
				  headMenuName: relativeDirectory
				  path: relativePath
				}
			  }
			}

		`
	);
	
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
			  <div className="col-xl-2 col-md-3 docs-menu shadow-sm" id="nav-collapse">
					<button className="navbar-toggler show-md" type="button" data-target="#menus" data-toggle="collapse">
						<svg class="navbar-toggler-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
						</svg>
					</button>
					<p class="show-md dsp-inline mg-l-1">{getCurrentMenu(slug)}</p>
					<div id="menus" className="collapse collapse-md">
					<DocsMenu
						headMenuName = 'introduction'
						menus = {docsMenuMap.introduction.nodes}
						slug = {slug}
					/>
					<DocsMenu
						headMenuName = 'utilities'
						menus = {docsMenuMap.utilities.nodes}
						slug = {slug}
					/>
					<DocsMenu
						headMenuName = 'components'
						menus = {docsMenuMap.components.nodes}
						slug = {slug}
					/>
					</div>
			  </div>
			  <div className="col-xl-10 col-md-9 docs-content">
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
