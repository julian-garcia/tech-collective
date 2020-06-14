import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faLink } from '@fortawesome/free-solid-svg-icons'

import Header from "./header"
import Modal from "../components/modal"
import MobileNav from "../components/mobile-nav"
import introVideo from "../videos/intro.mp4"
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
        <Link to="/apply" className="button primary" style={{marginBottom:'40px', padding:'.5rem 2.5rem'}}>Apply</Link>
        <div>
          <a href="https://twitter.com/richardcrng"><FontAwesomeIcon icon={faTwitter} role="button" aria-label="Twitter" className="footer-social-icon" /></a>
          <a href="https://www.linkedin.com/in/richardcrng"><FontAwesomeIcon icon={faLinkedinIn} role="button" aria-label="LinkedIn" className="footer-social-icon" /></a>
          <a href="https://techcollective.substack.com"><FontAwesomeIcon icon={faLink} role="button" aria-label="Blog" className="footer-social-icon" /></a>
        </div>
        <p>&copy; Copyright {new Date().getFullYear()}. Tech Collective Group LTD</p>
      </footer>
      <Modal id="video">
        <video controls="controls" width="100%" height="auto">
          <source src={introVideo} type="video/mp4" />
          <track default kind="captions" srcLang="en" src="" label="English subtitles" />
        </video>
      </Modal>
      <MobileNav />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
