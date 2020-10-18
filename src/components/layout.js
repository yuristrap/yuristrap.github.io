import React from "react"
import Helmet from "react-helmet"
import PropTypes from "prop-types"
import { useStaticQuery, graphql, Link, withPrefix } from "gatsby"

import Header from "./header"
import DocsMenu from "./menu"
import "../styles/yuri.css"
import "../styles/docs.css"

	
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
		  <link href="https://fonts.googleapis.com/css2?family=Jua&display=swap" rel="stylesheet"></link>
	  </Helmet>
      <Header/>
      <div className="app container-fluid">
		  <div className="row docs">
			  <div className="col-md-2 docs-menu" id="nav-collapse">
					<button className="navbar-toggler show-md" type="button" data-target="#menus" data-toggle="collapse">
						<span className="navbar-toggler-icon"></span>
					</button>
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
