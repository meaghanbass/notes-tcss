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
      <main
          style={{
            minHeight: `100vh`,
            display: `flex`,
          }}
        >
          <div style={{
            display: `flex`,
            flexDirection: `column`,
            alignSelf: `center`,
            // margin: `90px`,
            // width: `100%`,
            width: `740px`,
            maxWidth: `80vw`,
            margin: `auto`,
            fontWeight: `300`,
            color: `var(--slate)`,
            paddingTop: `90px`,
            paddingBottom: `90px`,
          }}
          >

            <div>
              {children}
            </div>
          </div>
        </main>
        <footer
          
        >
          {data.site.siteMetadata.title}
        </footer>
      </React.Fragment>
  )
}

