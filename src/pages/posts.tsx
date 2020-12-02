import React from "react"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allAirtable {
        edges {
          node {
            id
            data {
              Name
              Notes
              Status
            }
          }
        }
      }
    }
  `)
console.log('data', data)

  return (
  
    <Layout>
      <SEO title="Page two" />
      <h1>All Posts</h1>
      <Link to="/">Go back to the homepage</Link>
      <div className="posts-list">
        {data?.allAirtable?.edges?.map(
          (post: any) => <div className="post" key={post.node.id}><Link to={`/posts/${post.node.id}`}>{post?.node?.data?.Name}</Link></div>
        )}
      </div>
    </Layout>
  )
}

export default SecondPage
