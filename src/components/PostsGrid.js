import React from 'react'
import Img from 'gatsby-image'
import Link from '../components/Link'

const PostsGrid = ({ posts, section, type, standalone }) => (
  <section className="project-section" key={type}>
    {standalone ? (
      <h1 className="project-section__title--standalone">{section}</h1>
    ) : (
      <div className="project-section__header">
        <h3 className="project-section__title">{section}</h3>
        <Link to={'/' + type}>
          <span className="project-section__read-more">All&rarr;</span>
        </Link>
      </div>
    )}
    {posts.map(({ node }) => (
      <div
        className={
          node.frontmatter.thumbnail
            ? `project-section__post`
            : `project-section__post--no-image`
        }
        key={node.id}
      >
        <Link
          to={
            node.frontmatter.redirect ? node.frontmatter.link : node.fields.slug
          }
        >
          <div className="project-section__post-container">
            {node.frontmatter.thumbnail ? (
              <Img
                fluid={node.frontmatter.thumbnail.childImageSharp.fluid}
                className="project-section__image"
              />
            ) : (
              ``
            )}
            <span className="project-section__post-title">
              <strong>{node.frontmatter.title}</strong>
            </span>
            <span className="project-section__post-description">
              {node.frontmatter.description}
            </span>
          </div>
        </Link>
      </div>
    ))}
  </section>
)

export default PostsGrid
