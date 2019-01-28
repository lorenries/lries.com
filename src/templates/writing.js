import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import PostHeader from '../components/PostHeader'
import SEO from '../components/SEO'
import { graphql } from 'gatsby'

export default function Writing({ data }) {
  const { markdownRemark: post } = data
  return (
    <Layout>
      <SEO postData={post.frontmatter} postSlug={post.fields.slug} />
      <article className="post">
        <PostHeader post={post} />
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </article>
    </Layout>
  )
}

export const writingQuery = graphql`
  query WritingQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      fields {
        type
        section
        slug
      }
      frontmatter {
        title
        roles
        link
        description
        date(formatString: "MMMM D, YYYY")
      }
    }
  }
`
