import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import anime from 'animejs'
import Layout from '../components/layout'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import PostsGrid from '../components/PostsGrid'
import WritingList from '../components/WritingList'
import Link from '../components/Link'
import ClipPath from '../components/ClipPath'

const IndexPage = ({ data: { writing, posts, image } }) => {
  const imageLoaded = () => {
    // this is a shite way of doing this but gatspy-image doesnt have any built in event handlers :(
    const imgWrapper = document.querySelector('.homepage__image')
    const img = imgWrapper.querySelector('img')
    const morph = anime({
      targets: 'svg #path',
      d: [
        {
          value:
            'M77.7905561,61.0727662 C126.579714,31.3408583 223.634614,8.14275359 281.200046,18.51307 C338.765479,28.8833865 324.419449,113.149293 340.925739,163.975203 C357.432029,214.801114 379.262424,234.06364 357.682646,269.615262 C336.102868,305.166884 375.32397,361.929053 313.814782,379.370737 C252.305593,396.812421 201.326653,347.049521 155.820504,341.275252 C110.314355,335.500984 69.335869,397.60998 40.3431555,352.983528 C11.350442,308.357076 77.1534034,258.635141 83.2515669,214.655468 C89.3497303,170.675796 29.0013986,90.8046742 77.7905561,61.0727662 Z',
        },
      ],
      easing: 'easeOutQuad',
      duration: 600,
      autoplay: false,
    })
    img.addEventListener('mouseenter', () => {
      if (morph.completed) {
        morph.reverse()
      }
      morph.play()
    })
    img.addEventListener('mouseleave', () => {
      if (morph.completed) {
        morph.reverse()
        morph.play()
      }
    })
  }
  return (
    <Layout>
      <section className="homepage">
        <div className="homepage__description">
          <h2 className="homepage__title">Hi, I'm Loren</h2>
          <p>
            I'm a web developer and designer currently based in Washington DC.
          </p>
          <p>
            Right now, I work as a full-stack developer at{' '}
            <Link to="https://www.newamerica.org/">New America</Link>, where I
            lead our data visualization work and build/maintain our Django-based
            CMS.
          </p>
          <p>
            I used to develop and manage digital products as the Communications
            Officer at a human rights organization called the{' '}
            <Link to="https://www.wola.org/">
              Washington Office on Latin America (WOLA)
            </Link>
            . Before that, I reported on organized crime and security for{' '}
            <Link to="https://www.insightcrime.org/">InSight Crime</Link>.
          </p>
        </div>
        <div className="homepage__image">
          <Img
            fluid={image.childImageSharp.fluid}
            style={{ width: '100%' }}
            onLoad={imageLoaded}
          />
          <ClipPath />
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
      group(field: fields___type, limit: 3) {
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
              date(formatString: "MMM D, YYYY")
              published
              link
              redirect
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
