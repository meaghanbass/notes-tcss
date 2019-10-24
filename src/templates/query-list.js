/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
// import { useStaticQuery, graphql } from "gatsby"

// import "./layout.css"

export default ({ children }) => {
    return (
        <React.Fragment>

            <h3>{children}</h3>

        </React.Fragment>
    )
}

