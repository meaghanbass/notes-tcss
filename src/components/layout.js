/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
// import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import "./layout.css"
import "../components/markdown.css"

export default ({ children }) => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )
  return (
    <React.Fragment>
      <main>{children}</main>

      <footer className="minimal-footer">&copy; 2019. Meaghan Bass - {data.site.siteMetadata.title}</footer>
      </React.Fragment>
  )
}

