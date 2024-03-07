import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

const BlogSite = ({ data }) => {
  const { title, body } = data.contentfulBlogSite

  return (
    <Layout>
      <h1>{title}</h1>
      <div
        dangerouslySetInnerHTML={{ __html: body.childMarkdownRemark.html }}
      ></div>
    </Layout>
  )
}

export default BlogSite

export const pageQuery = graphql`
  query blogSiteQuery($slug: String!) {
    contentfulBlogSite(slug: { eq: $slug }) {
      title
      slug
      body {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`
