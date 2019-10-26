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
      <main>
        {children}
      </main>

      

{/* [![Netlify Status](https://api.netlify.com/api/v1/badges/ed02e763-a461-4b3d-880b-76a016a6e55d/deploy-status)](https://app.netlify.com/sites/mbnotes/deploys) */}

        {/* <footer
          
        >
          {data.site.siteMetadata.title}
        </footer> */}
      </React.Fragment>
  )
}

