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
import ProgrammingLanguages from "../components/tagqueries/programming-languages"

export default ({ data }) => {
  return (
    <Layout>
      <div className="index-wrapper font-sans">
        <h1>Title</h1>

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
        <AWS></AWS>
        <Development></Development>
        <Algorithms></Algorithms>
        <ProgrammingLanguages></ProgrammingLanguages>

        <footer>
          
        </footer>
      </div>
      
    </Layout>
  )

  
}