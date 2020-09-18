// import { useStaticQuery, graphql } from "gatsby"

// const docsMenuMapTemp = useStaticQuery(
// 	graphql`
// 		query {
// 		  allFile(filter: {sourceInstanceName: {eq: "markdown-pages"}}) {
// 			edges {
// 			  node {
// 				relativeDirectory
// 				relativePath
// 				name
// 			  }
// 			}
// 		  }
// 		}
// 	`
// )

// const docsMenuMapTT = docsMenuMapTemp.allFile.edges;
// class DocsMenuMap {
// 	constructor() {
// 		this.docsMenuMapTemp = useStaticQuery(
// 			graphql`
// 				query {
// 				  allFile(filter: {sourceInstanceName: {eq: "markdown-pages"}}) {
// 					edges {
// 					  node {
// 						relativeDirectory
// 						relativePath
// 						name
// 					  }
// 					}
// 				  }
// 				}
// 			`
// 		)
// 	}
	
// 	function getData {
// 		return docsMenuMapTemp;
// 	}
// }

// export default docsMenuMapTT;