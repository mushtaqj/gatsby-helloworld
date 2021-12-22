import { graphql, Link } from "gatsby"
import React from "react"
import Layout from "../components/Layout"
import styles from "../styles/home.module.css"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

export default function Home({ data }) {

  const banner = getImage(data.banner.childImageSharp)

  return (
    <Layout>
      <section className={styles.header}>
        <div>
          <h2>Design</h2>
          <h3>Develop & Deploy</h3>
          <p>UX designer & web developer based in Manchester.</p>
          <Link className={styles.btn} to="/projects">My Portfolio Projects</Link>
        </div>
        <GatsbyImage alt="Site Banner" image={banner} />
      </section>
    </Layout>
  )
}

export const query = graphql`
    query bannerImage {
        banner: file(relativePath: {eq: "banner.png"}) {
            childImageSharp {
                gatsbyImageData(width: 500)
            }
        }
    }
`
