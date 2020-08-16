/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

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
			  <div class="col-2 docs-menu">
			  </div>
			  <div class="col-10 docs-content">
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
