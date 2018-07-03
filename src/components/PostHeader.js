import React from 'react'
import Link from './Link'

const PostHeader = ({ post }) => (
  <header>
    <div className="post__metadata">
      <span>{post.fields.section}</span>
      <time dateTime={post.frontmatter.date}>{post.frontmatter.date}</time>
    </div>

    {post.frontmatter.roles ? (
      <div className="post__roles">
        {post.fields.type === 'work' ? 'Role:' : 'Tech:'}
        {post.frontmatter.roles.map(role => (
          <span className="post__role" key={role}>{role}</span>
        ))}
      </div>
    ) : null}

    <h1 className="post__title">{post.frontmatter.title}</h1>

    {post.frontmatter.link ? (
      <div className="post__link">
        <Link to={post.frontmatter.link}>Check it out →</Link>
      </div>
    ) : null}
  </header>
)

export default PostHeader
