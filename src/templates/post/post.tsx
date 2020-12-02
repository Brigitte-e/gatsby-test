import React from "react"
import Layout from "../../components/layout"


const Post = ({pageContext}: any) => {
console.log('post', pageContext)
  const { post } = pageContext

  return (
  
    <Layout>
      <h1><strong>Post: {post?.Name}</strong></h1>
      <div className="post">
        <p style={{marginTop: 20}}><strong>Name:</strong> {post?.Name}</p>
        <p style={{marginTop: 20}}><strong>Notes:</strong> {post?.Notes}</p>
        <p style={{marginTop: 20}}><strong>Status:</strong> {post?.Status}</p>
        {post?.Attachments?.map((attachment: any) => <img key={attachment.id} src={attachment.url} alt=""/>)}
      </div>
    </Layout>
  )
}

export default Post
