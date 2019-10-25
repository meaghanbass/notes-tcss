import React from "react"
// import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import RussianLanguage from "../components/tagqueries/russian-language"
import Other from "../components/tagqueries/other"
import RussianHistory from "../components/tagqueries/russian-history"
import Development from "../components/tagqueries/development"
import Algorithms from "../components/tagqueries/algorithms"

export default ({ data }) => {
  console.log(data)
  return (
    <Layout>
      <div className="index-wrapper">
        <h1>Notes</h1>
        <Other></Other>
        <RussianLanguage></RussianLanguage>
        <RussianHistory></RussianHistory>
        <Development></Development>
        <Algorithms></Algorithms>
      </div>
    </Layout>
  )
}