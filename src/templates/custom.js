import React from 'react'
import Layout from '../components/layout'
import PostHeader from '../components/PostHeader'
import SEO from '../components/SEO'
import Confetti from '../components/Confetti'
import rehypeReact from 'rehype-react'
import { graphql } from 'gatsby'
import nuclearExplosions from './observables/nuclearExplosions'
import TwitterEmbed from '../components/Tweet'

const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: {
    'nuclear-explosions': nuclearExplosions,
    tweet: TwitterEmbed,
  },
}).Compiler

export default function Custom({ data }) {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <SEO postData={post.frontmatter} postSlug={post.fields.slug} />
      <article className="post">
        <PostHeader post={post} />
        <div>{renderAst(post.htmlAst)}</div>
        <Confetti />
      </article>
    </Layout>
  )
}

export const customQuery = graphql`
  query CustomQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      htmlAst
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
        thumbnail {
          childImageSharp {
            fluid(maxWidth: 640, maxHeight: 480, cropFocus: CENTER) {
              src
            }
          }
        }
      }
    }
  }
`
