const path = require("path")
exports.createPages = async ({ graphql, actions }) => {

  const { data } = await graphql(`
      query Projects {
        allMarkdownRemark {
          nodes {
            frontmatter {
              slug
            }
          }
        }
      }
  `)

  data.allMarkdownRemark.nodes.forEach(node => {

    actions.createPage({
      component: path.resolve("./src/templates/project-details.js"),
      path: "/projects/" + node.frontmatter.slug,
      context: {
        slug : node.frontmatter.slug
      }
    })
  })

}
