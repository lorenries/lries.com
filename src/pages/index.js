import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import PostsGrid from '../components/PostsGrid'
import WritingList from '../components/WritingList'
import Link from '../components/Link'

const IndexPage = ({ data: { writing, posts, image } }) => {
  return (
    <Layout>
      <section className="homepage">
        <div className="homepage__description">
          <h2 className="homepage__title">Hi, I'm Loren</h2>
          <p>
            I'm a web developer and designer currently based in Washington DC.
          </p>
          <p>
            Right now, I work as a front end developer at{' '}
            <Link to="https://www.theatlantic.com/">The Atlantic</Link>. Before
            that, I was the full stack developer at{' '}
            <Link to="https://www.newamerica.org/">New America</Link>, where I
            led data visualization projects and maintained a custom Django-based
            CMS.
          </p>
        </div>
      </section>
      {writing.group.map(group => (
        <WritingList posts={group.edges} key={group.fieldValue} />
      ))}
      {posts.group.map(group => (
        <PostsGrid
          posts={group.edges}
          type={group.fieldValue}
          section={
            group.fieldValue === 'work'
              ? 'Work'
              : group.fieldValue === 'posts'
              ? 'Fun/Experiments'
              : null
          }
          key={group.fieldValue}
        />
      ))}
      <Contact />
      <Footer />
    </Layout>
  )
}

export default IndexPage

export const allPostsQuery = graphql`
  query AllPostsQuery {
    writing: allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: {
        frontmatter: { published: { eq: true } }
        fields: { type: { in: ["writing"] } }
      }
    ) {
      group(field: fields___type, limit: 2) {
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
              template
              date(formatString: "MMM D, YYYY")
              published
            }
          }
        }
      }
    }
    posts: allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: {
        frontmatter: { published: { eq: true } }
        fields: { type: { in: ["work", "posts"] } }
      }
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
    image: file(relativePath: { eq: "loren.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 800, maxHeight: 800) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
  }
`
