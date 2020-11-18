// // https://spectrum.chat/gatsby-js/general/using-variables-in-a-staticquery~abee4d1d-6bc4-4202-afb2-38326d91bd05

// import React from 'react';
// import Img from 'gatsby-image';
// import { StaticQuery, graphql } from 'gatsby';
// import DocsMenu from "./menu"

// function renderImage({ introduction, utilities, components }) {
// 	const slug="/introduction/version"
// 	const version="v1.0"
// 	return	<div id="menus" className="collapse collapse-md">
// 				<DocsMenu
// 					headMenuName = 'introduction'
// 					menus = {introduction.nodes}
// 					slug = {slug}
// 					version = {version}
// 				/>
// 				<DocsMenu
// 					headMenuName = 'utilities'
// 					menus = {utilities.nodes}
// 					slug = {slug}
// 					version = {version}
// 				/>
// 				<DocsMenu
// 					headMenuName = 'components'
// 					menus = {components.nodes}
// 					slug = {slug}
// 					version = {version}
// 				/>
// 			</div>
// }

// const MyImg = function (props) {
//   function hackTheQuery(vIntroduction, vUtilities, vComponents) {
//     return graphql`
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
// 	// console.log()
//   return <StaticQuery
//     query={hackTheQuery('v1.0/introduction', 'v1.0/introduction', 'v1.0/introduction')}
//     render={renderImage}
//   />
// }
// export default MyImg;