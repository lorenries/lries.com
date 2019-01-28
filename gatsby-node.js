/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })

    const dirSplit = path.parse(slug).dir.split(path.sep)
    if (dirSplit.length > 0 && dirSplit[0] === '') {
      dirSplit.shift() // because path starts with /, '' is always at position 0
    }

    let section
    switch (dirSplit[0]) {
      case 'posts':
        section = 'Fun/Experiments/Writing'
        break
      case 'work':
        section = 'Work'
        break
      case 'writing':
        section = 'Writing'
        break
    }

    createNodeField({
      node,
      name: 'section',
      value: section,
    })

    createNodeField({ node, name: 'type', value: dirSplit[0] })
  }
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return new Promise((resolve, reject) => {
    graphql(`
      {
        allMarkdownRemark {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                template
              }
            }
          }
        }
      }
    `).then(result => {
      result.data.allMarkdownRemark.edges.forEach(({ node }) => {
        console.log(node)
        createPage({
          path: node.fields.slug,
          component: path.resolve(
            `./src/templates/${String(node.frontmatter.template)}.js`
          ),
          context: {
            // Data passed to context is available in page queries as GraphQL variables.
            slug: node.fields.slug,
          },
        })
      })
      resolve()
    })
  })
}
