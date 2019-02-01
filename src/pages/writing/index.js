import React from 'react'
import Layout from '../../components/layout'
import WritingList from '../../components/WritingList'
import { graphql } from 'gatsby'

const WritingPage = ({ data }) => {
  return (
    <Layout>
      <WritingList posts={data.allMarkdownRemark.edges} standalone />
    </Layout>
  )
}

export default WritingPage

export const allWritingQuery = graphql`
  query AllWritingQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: {
        frontmatter: { published: { eq: true } }
        fields: { type: { eq: "writing" } }
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
            date(formatString: "MMM D, YYYY")
            published
            link
            redirect
          }
        }
      }
    }
  }
`
