import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

const IndexPage = () => {
  return (
    <Layout>
      <h1>Hello Index</h1>
      <p>This is an anchor to <a href={'/contact'}>Contact me.</a></p>
      <p>This is a gatsby-Link to <Link to={'/contact'}>Contact me.</Link></p>
    </Layout>
  )
}

export default IndexPage