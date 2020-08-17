import Layout from "./components/layout.js"
import SEO from "./components/seo"

import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"


// import Header from "./header"
// import "./docs.css"
// import "./yuri.css"

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  return (
	  <Layout slug={frontmatter.slug}>
		<SEO title={frontmatter.title} />
		<div className="blog-post-container">
		  <div className="blog-post">
			<h1>{frontmatter.title}</h1>
			<div
			  className="blog-post-content"
			  dangerouslySetInnerHTML={{ __html: html }}
			/>
		  </div>
		</div>
	  </Layout>
  )
}
export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        slug
        title
      }
    }
  }
`