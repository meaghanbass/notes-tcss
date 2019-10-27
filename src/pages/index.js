import React from "react"
// import { graphql } from "gatsby"
import ButtonContainer from "../components/buttoncontainer"
// import { Helmet } from "react-helmet"

import Layout from "../components/layout"
import RussianLanguage from "../components/tagqueries/russian-language"
import Other from "../components/tagqueries/other"
import RussianHistory from "../components/tagqueries/russian-history"
import Development from "../components/tagqueries/development"
import Algorithms from "../components/tagqueries/algorithms"
import AWS from "../components/tagqueries/aws"

export default ({ data }) => {
  return (
    <Layout>
      <div className="index-wrapper">
        <h1>Notes</h1>

        {/* <div id="jstest" style={{
          width: `100%`,
          height: `65px`,
          background: `white`,
          boxShadow: `0 6px 8px rgba(102,119,136,.03),0 1px 2px rgba(102,119,136,.3)`,
          marginBottom: `50px`,
        }}>
        </div> */}

        {/* <div dangerouslySetInnerHTML={{ __html: "<h3>Hi there!</h3>" }} /> */}

        <ButtonContainer></ButtonContainer>
        <Other></Other>
        <RussianLanguage></RussianLanguage>
        <RussianHistory></RussianHistory>
        <Development></Development>
        <Algorithms></Algorithms>
        <AWS></AWS>

        <footer>
          <img src="https://api.netlify.com/api/v1/badges/ed02e763-a461-4b3d-880b-76a016a6e55d/deploy-status" alt="Netlify Status"></img>
        </footer>
      </div>
      
    </Layout>
  )

  
}