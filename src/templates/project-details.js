import Layout from "../components/Layout"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styles from "../styles/project-details.module.css"
import React from "react"
import { graphql } from "gatsby"

export default function ProjectDetails({ data }) {

  const { html, frontmatter } = data.markdownRemark
  const { title, stack, featuredImg } = frontmatter

  return (
    <Layout>
      <div className={styles.details}>
        <h2>{title}</h2>
        <h3>{stack}</h3>
        <div className={styles.featured}>
          <GatsbyImage alt={title} image={getImage(featuredImg)} />
        </div>
        <div className={styles.html} dangerouslySetInnerHTML={{ __html:html }} />
      </div>
    </Layout>
  )
}

export const query = graphql`
    query ProjectSlug($slug: String) {
        markdownRemark(frontmatter: {slug: {eq: $slug}}) {
            frontmatter {
                slug
                stack
                title
                featuredImg {
                    childImageSharp {
                        gatsbyImageData(width: 1600)
                    }
                }
            }
            html
        }
    }
`
