import React from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'

const SEO = ({ postData, postSlug }) => {
  const postMeta = postData
  const title = postMeta.title || 'Loren Riesenfeld'
  const description = postMeta.description

  let image = "https://lries.com/logo.png"
  if (postMeta.thumbnail) {
    image = 'https://lries.com' + postMeta.thumbnail.childImageSharp.fluid.src
  }

  const url = 'https://lries.com' + postSlug
  const date = postMeta.date

  return (
    <Helmet>
      {/* General tags */}
      <title>{`${postMeta.title} | Loren Riesenfeld`}</title>
      <meta name="description" content={description} />
      <meta name="image" content={image} />

      {/* OpenGraph tags */}
      <meta property="og:url" content={url} />
      <meta property="og:type" content="article" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/* Twitter Card tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content="@astrocart" />
      <meta name="twitter:site" content="@astrocart" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  )
}

SEO.propTypes = {
  postData: PropTypes.shape({
    frontmatter: PropTypes.any,
    excerpt: PropTypes.any,
  }).isRequired,
  postImage: PropTypes.string,
}

SEO.defaultProps = {
  postImage: null,
}

export default SEO
