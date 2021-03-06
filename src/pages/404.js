import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="Page not found" />
    <h1 className="heading" style={{textAlign:'center', paddingTop:'2rem'}}>Page not found.</h1>
  </Layout>
)

export default NotFoundPage
