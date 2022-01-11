import * as React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes

  if (posts.length === 0) {
    return (
      <Layout location={location} title={siteTitle}>
        <Seo title="All posts" />
        <Bio />
        <p>
          No blog posts found. Add markdown posts to "content/blog" (or the
          directory you specified for the "gatsby-source-filesystem" plugin in
          gatsby-config.js).
        </p>
      </Layout>
    )
  }

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="All posts" />
      <div className="tile is-ancestor">
        <div className="tile box">This is the front page.</div>
      </div>
      <br></br>
      <div className="columns is-multiline">
        {posts.map(post => {
          const title = post.frontmatter.title || post.fields.slug

          return (
            <div className="column is-one-third" key={post.fields.slug}>
              <div className="card">
                <header className="card-header">
                  <h2 className="card-header-title">
                    <Link to={post.fields.slug} itemProp="url">
                      <span itemProp="headline">{title}</span>
                    </Link>
                  </h2>
                  <small className="card-header-icon">
                    {post.frontmatter.date}
                  </small>
                </header>
                <div className="card-content">
                  <p
                    className="content"
                    dangerouslySetInnerHTML={{
                      __html: post.frontmatter.description || post.excerpt,
                    }}
                    itemProp="description"
                  />
                </div>
              </div>
            </div>
          )
        })}
      </div>

      <br></br>
      <br></br>
      <br></br>
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
  }
`
