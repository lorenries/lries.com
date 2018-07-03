import React from 'react'
import Helmet from 'react-helmet'
import Header from '../components/Header'
import { StaticQuery, graphql } from 'gatsby'
import '../styles/main.scss'

const Layout = ({ children, location }) => {
  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={data => (
        <div className="wrapper">
          <Helmet>
            <title>{data.site.siteMetadata.title}</title>
            <meta
              name="description"
              content="Loren Riesenfeld's Personal Website"
            />
            <link
              rel="icon"
              href="/favicon-16.png"
              sizes="16x16"
              type="image/png"
            />
            <link
              rel="icon"
              href="/favicon-32.png"
              sizes="32x32"
              type="image/png"
            />
            <link
              rel="icon"
              href="/favicon-48.png"
              sizes="48x48"
              type="image/png"
            />
            <link
              rel="icon"
              href="/favicon-62.png"
              sizes="62x62"
              type="image/png"
            />
          </Helmet>
          <Header siteTitle={data.site.siteMetadata.title} />
          <main className="main">{children}</main>
        </div>
      )}
    />
  )
}

export default Layout
