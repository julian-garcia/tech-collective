import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faLink } from '@fortawesome/free-solid-svg-icons'

import Header from "./header"
import "../style/main.scss"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <main className="page-content">{children}</main>
      <footer className="footer">
        <Link to="/" className="button primary" style={{marginBottom:'40px'}}>Apply Now</Link>
        <div>
          <a href="/"><FontAwesomeIcon icon={faTwitter} role="button" aria-label="Twitter" className="footer-social-icon" /></a>
          <a href="/"><FontAwesomeIcon icon={faLinkedinIn} role="button" aria-label="LinkedIn" className="footer-social-icon" /></a>
          <a href="/"><FontAwesomeIcon icon={faLink} role="button" aria-label="Blog" className="footer-social-icon" /></a>
        </div>
        <p>&copy; Copyright {new Date().getFullYear()}. Tech Collective Group LTD</p>
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
