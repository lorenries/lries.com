import React from 'react'
import Link from '../components/Link'

const WritingList = ({ posts }) => {
  console.log(posts)
  return (
    <section className="writing-section">
      <div className="writing-section__header">
        <h3 className="writing-section__title">Writing</h3>
        <Link to={'/writing'}>
          <span className="writing-section__read-more">All&rarr;</span>
        </Link>
      </div>
      {posts.map(({ node }) => (
        <div className="writing-section__post" key={node.id}>
          <Link
            to={
              node.frontmatter.redirect
                ? node.frontmatter.link
                : node.fields.slug
            }
          >
            <div className="writing-section__post-container">
              <span className="writing-section__post-title">
                {node.frontmatter.title}
              </span>
              <span className="writing-section__post-date">
                {node.frontmatter.date}
              </span>
            </div>
          </Link>
        </div>
      ))}
    </section>
  )
}

export default WritingList
