import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

import Button from "../components/button"

export default ({ data }) => {
    const post = data.markdownRemark
    return (
        <Layout>
            {/* <Button></Button> */}
            <div className="markdown">
            <Button></Button>
                <h1>{post.frontmatter.title} {" "} {post.frontmatter.emoji}</h1>
                <div dangerouslySetInnerHTML={{ __html: post.html }} />
            </div>
        </Layout>
    )
    }

    export const query = graphql`
    query($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug } }) {
        html
        frontmatter {
            title
            emoji
        }
        }
    }
`