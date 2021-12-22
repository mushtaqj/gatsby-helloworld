import { graphql, Link, useStaticQuery } from 'gatsby'
import React from 'react'

export default function Navbar() {
  const query = graphql`query NavSiteInfo {
      site {
        siteMetadata {
          title
        }
      }
    }
  `
  const data = useStaticQuery(query)
  const {title} = data.site.siteMetadata

  return (
    <nav>
      <h1>{title}</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/projects">Portfolio Projects</Link>
      </div>
    </nav>
  )
}
