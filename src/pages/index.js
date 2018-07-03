import React from 'react'
import Layout from '../components/layout'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import PostsGrid from '../components/PostsGrid'
import Link from '../components/Link'
import { graphql } from 'gatsby'

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <section className="homepage">
        <h2 className="homepage__title">Hi, I'm Loren</h2>
        <p>
          I'm a web developer, designer, and creative technologist currently
          based in Washington DC.
        </p>
        <p>
          I used to develop and manage digital products as the Communications
          Officer for a human rights organization called the <Link to="https://www.wola.org/">Washington Office
          on Latin America (WOLA)</Link>. Before that, I reported on organized crime
          and security for <Link to="https://www.insightcrime.org/">InSight Crime</Link>.
        </p>
      </section>
      {data.allMarkdownRemark.group.map(group => (
        <PostsGrid posts={group.edges} type={group.fieldValue} section={group.fieldValue === 'work' ? 'Work' : group.fieldValue === 'posts' ? 'Fun/Experiments/Writing' : null} key={group.fieldValue} />
      ))}
      <Contact />
      <Footer />
    </Layout>
  )
}

export default IndexPage

export const allPostsQuery = graphql`
  query AllPostsQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { published: { eq: true } } }
    ) {
      group(field: fields___type, limit: 6) {
        fieldValue
        edges {
          node {
            id
            fields {
              slug
              section
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
  }
`
