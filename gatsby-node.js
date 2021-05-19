/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it
exports.createPages = async ({ graphql, actions: { createPage } }) => {
return graphql(`
    {
        allAirtable {
            edges {
                node {
                    id
                    data {
                        Name
                        Notes
                        Status
                        Attachments {
                          id
                          url
                        }
                    }
                }
            }
        }
    }`).then(res => {
        res.data.allAirtable.edges.forEach(({ node }) => {
            createPage({
                path: `/posts/${node.id}`,
                component: require.resolve("./src/templates/post/post.tsx"),
                context: { post: node.data, res: res },
            })
        })
    })
}