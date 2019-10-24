import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <center>
      <SEO title="404: Not found" />

      <h3 style={{
        fontSize: `10rem`,
        margin: '0',
        lineHeight: `1`,
      }}>404</h3>
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </center>
  </Layout>
)

export default NotFoundPage
