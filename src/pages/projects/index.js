import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../../components/Layout"
import styles from "../../styles/projects.module.css"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

export default function Projects({ data }) {

  const contact = data.contact.siteMetadata.contact
  const projects = data.projects.nodes

  return (
    <Layout>
      <div className={styles.portfolio}>
        <h2>Portfolio</h2>
        <h3>Projects & Websites I've Created</h3>

        <div className={styles.projects}>
          {projects.map(project => (

            <Link to={"/projects/" + project.frontmatter.slug} key={project.id}>
              <div>
                <GatsbyImage alt={project.frontmatter.title} image={getImage(project.frontmatter.thumb.childImageSharp)} />
                <h3>{project.frontmatter.title}</h3>
                <p>{project.frontmatter.stack}</p>
              </div>
            </Link>
          ))}
        </div>
        <p>Like what you see ? Email me {contact} for a quote</p>
      </div>
    </Layout>
  )
}

export const query = graphql`
    query ProjectsInfo {
        projects: allMarkdownRemark(
            sort: { order: DESC, fields: frontmatter___date }
        ) {
            nodes {
                id
                frontmatter {
                    title
                    stack
                    slug,
                    thumb {
                        childImageSharp {
                            gatsbyImageData(width: 400)
                        }
                    }
                }
            }
        }
        contact: site {
            siteMetadata {
                contact
            }
        }
    }
`
