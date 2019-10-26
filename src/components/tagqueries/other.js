import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import QueryList from "../../templates/query-list"

// import "./layout.css"

export default ({ children }) => {
    const data = useStaticQuery(
        graphql`
            query {
                allMarkdownRemark(filter: {frontmatter: {tag: {in: "other"}}}) {
                    edges {
                    node {
                        frontmatter {
                        title
                        tag
                        }
                        fields {
                        slug
                        }
                    }
                    }
                }
            }
        `
    )
    return (
        <React.Fragment>
            <div className="tag-listings">
            <QueryList>miscellaneous</QueryList>
                <ul>
                    {data.allMarkdownRemark.edges.map(({ node }) => (
                        <React.Fragment>
                        <li>
                            <span></span>
                            <Link to={node.fields.slug}> {node.frontmatter.title} </Link>
                        </li>
                        </React.Fragment>
                    ))}
                </ul>
            </div>
            </React.Fragment>
    )
}