/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions
  const blogPostTemplate = require.resolve(`./src/markdown-template.js`)
  const result = await graphql(`
    {
      allMarkdownRemark(
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              version
              slug
            }
          }
        }
      }
    }
  `)
  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }
  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: '/' + node.frontmatter.version + node.frontmatter.slug,
      component: blogPostTemplate,
      context: {
        version: node.frontmatter.version,
        // additional data can be passed via context
        slug: node.frontmatter.slug,
        // GraphQL Relative Directory path,  'version/menuName'
        vIntroduction: `v1.0/introduction`,
        vUtilities: `v1.0/utilities`,
        vComponents: `v1.0/components`,
      },
    })
  })
}