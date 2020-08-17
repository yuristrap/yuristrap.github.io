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

import { Helmet } from "react-helmet"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
	  <Helmet>      
	  </Helmet>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div class="app container-fluid">
		  <div class="row docs">
			  <div class="col-md-2 docs-menu">
				  <Link to="#" class="menu-head">Introduction</Link>
				  <ul class="menu-list">
					  <li class="menu-item active"><Link to="#">Download</Link></li>
					  <li class="menu-item"><Link to="#">Customize</Link></li>
					  <li class="menu-item"><Link to="#">Reboot</Link></li>
				  </ul>
				  <Link to="#" class="menu-head">Utilities</Link>
				  <ul class="menu-list">
					  <li class="menu-item"><Link to="#">Flex</Link></li>
					  <li class="menu-item"><Link to="#">Grid</Link></li>
					  <li class="menu-item"><Link to="#">Position</Link></li>
				  </ul>
				  <Link to="#" class="menu-head">Components</Link>
				  <ul class="menu-list">
					  <li class="menu-item"><Link to="#">Alert</Link></li>
					  <li class="menu-item"><Link to="#">Button</Link></li>
					  <li class="menu-item"><Link to="#">Card</Link></li>
					  <li class="menu-item"><Link to="#">Form</Link></li>
					  <li class="menu-item"><Link to="#">Navbar</Link></li>
				  </ul>
			  </div>
			  <div class="col-md-10 docs-content">
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
