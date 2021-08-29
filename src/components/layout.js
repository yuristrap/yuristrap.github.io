import React from "react"
import Helmet from "react-helmet"
import PropTypes from "prop-types"
import { useStaticQuery, graphql, Link, withPrefix } from "gatsby"

import Header from "./header"
import DocsMenu from "./menu"
// import MyImg from "./docsMenu"
import { upperCase } from './util'
import "../styles/yuri.css"
import "../styles/docs.css"


function getCurrentMenu(slug) {
	if (slug === undefined)
		return '';
	return upperCase(slug.split('/')[1]) + ' - ' + upperCase(slug.split('/')[2]);
}
	
const Layout = ({ version='v1.0', slug, children}) => {
	const docsMenuMap = useStaticQuery(
		graphql`
			query {
			  introduction: allFile(filter: {sourceInstanceName: {eq: "markdown-pages"}, relativeDirectory: {eq: "v1.0/introduction"}}, sort: {fields: name}) {
				nodes {
				  name
				  headMenuName: relativeDirectory
				  path: relativePath
				}
			  }
			  utilities: allFile(filter: {sourceInstanceName: {eq: "markdown-pages"}, relativeDirectory: {eq: "v1.0/utilities"}}, sort: {fields: name}) {
				nodes {
				  name
				  headMenuName: relativeDirectory
				  path: relativePath
				}
			  }
			  components: allFile(filter: {sourceInstanceName: {eq: "markdown-pages"}, relativeDirectory: {eq: "v1.0/components"}}, sort: {fields: name}) {
				nodes {
				  name
				  headMenuName: relativeDirectory
				  path: relativePath
				}
			  }
			}
		`);
	
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
					<div class="dsp-flex justify-between">
						<div>
							<button className="navbar-toggler show-md" type="button" data-target="#menus" data-toggle="collapse">
								<svg class="navbar-toggler-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
								</svg>
							</button>
							<p class="show-md dsp-inline mg-l-1 mg-b-0" style={{ lineHeight: '2rem' }}>{getCurrentMenu(slug)}</p>
						</div>
						<div class="form-group mg-b-0 show-md">
							<select class="form-control mg-b-0">
								<option selected>v1.0.5</option>
							</select>
						</div>
					</div>
					<div id="menus" className="collapse collapse-md">
						<DocsMenu
							headMenuName = 'introduction'
							menus = {docsMenuMap.introduction.nodes}
							slug = {slug}
							version = {version}
						/>
						<DocsMenu
							headMenuName = 'utilities'
							menus = {docsMenuMap.utilities.nodes}
							slug = {slug}
							version = {version}
						/>
						<DocsMenu
							headMenuName = 'components'
							menus = {docsMenuMap.components.nodes}
							slug = {slug}
							version = {version}
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

// export const docsQuery = graphql(`
// 			query DocsQ($vIntroduction: String, $vUtilities: String, $vComponents: String) {
// 			  introduction: allFile(filter: {sourceInstanceName: {eq: "markdown-pages"}, relativeDirectory: {eq: $vIntroduction}}, sort: {fields: name}) {
// 				nodes {
// 				  name
// 				  headMenuName: relativeDirectory
// 				  path: relativePath
// 				}
// 			  }
// 			  utilities: allFile(filter: {sourceInstanceName: {eq: "markdown-pages"}, relativeDirectory: {eq: $vUtilities}}, sort: {fields: name}) {
// 				nodes {
// 				  name
// 				  headMenuName: relativeDirectory
// 				  path: relativePath
// 				}
// 			  }
// 			  components: allFile(filter: {sourceInstanceName: {eq: "markdown-pages"}, relativeDirectory: {eq: $vComponents}}, sort: {fields: name}) {
// 				nodes {
// 				  name
// 				  headMenuName: relativeDirectory
// 				  path: relativePath
// 				}
// 			  }
// 			}`);

// const MyImg = function () {
//   function hackTheQuery(vIntroduction, vUtilities, vComponents) {
//     return `
//       query {
// 		  introduction: allFile(filter: {sourceInstanceName: {eq: "markdown-pages"}, relativeDirectory: {eq: "${vIntroduction}"}}, sort: {fields: name}) {
// 			nodes {
// 			  name
// 			  headMenuName: relativeDirectory
// 			  path: relativePath
// 			}
// 		  }
// 		  utilities: allFile(filter: {sourceInstanceName: {eq: "markdown-pages"}, relativeDirectory: {eq: "${vUtilities}"}}, sort: {fields: name}) {
// 			nodes {
// 			  name
// 			  headMenuName: relativeDirectory
// 			  path: relativePath
// 			}
// 		  }
// 		  components: allFile(filter: {sourceInstanceName: {eq: "markdown-pages"}, relativeDirectory: {eq: "${vComponents}"}}, sort: {fields: name}) {
// 			nodes {
// 			  name
// 			  headMenuName: relativeDirectory
// 			  path: relativePath
// 			}
// 		  }
// 		}
//   `
//   }
//   return graphql([hackTheQuery('v1.0/introduction', 'v1.0/introduction', 'v1.0/introduction')])
// }

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
