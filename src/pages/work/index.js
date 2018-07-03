import React from 'react'
import Layout from '../../components/layout'
import PostsGrid from '../../components/PostsGrid'
import { graphql } from 'gatsby'

const WorkPage = ({ data }) => {
  return (
    <Layout>
      <PostsGrid
        posts={data.allMarkdownRemark.edges}
        section="Work"
        standalone
      />
    </Layout>
  )
}

export default WorkPage

export const allWorkQuery = graphql`
  query AllWorkQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: {
        frontmatter: { published: { eq: true } }
        fields: { type: { eq: "work" } }
      }
    ) {
      edges {
        node {
          id
          fields {
            slug
            type
          }
          frontmatter {
            title
            description
            template
            date
            published
            link
            redirect
            thumbnail {
              childImageSharp {
                fluid(maxWidth: 640, maxHeight: 480, cropFocus: CENTER) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    }
  }
`
