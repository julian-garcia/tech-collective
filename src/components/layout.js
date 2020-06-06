import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faLink } from '@fortawesome/free-solid-svg-icons'

import Header from "./header"
import Modal from "../components/modal"
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
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSdlaOkV39i4pSkLOf_nbAlygB8jtb3RXptCnDabb-65-MT9Ww/viewform" target="_blank" className="button primary" rel="noreferrer" style={{marginBottom:'40px'}}>Apply Now</a>
        <div>
          <a href="https://twitter.com/richardcrng"><FontAwesomeIcon icon={faTwitter} role="button" aria-label="Twitter" className="footer-social-icon" /></a>
          <a href="https://www.linkedin.com/in/richardcrng"><FontAwesomeIcon icon={faLinkedinIn} role="button" aria-label="LinkedIn" className="footer-social-icon" /></a>
          <a href="https://techcollective.substack.com"><FontAwesomeIcon icon={faLink} role="button" aria-label="Blog" className="footer-social-icon" /></a>
        </div>
        <p>&copy; Copyright {new Date().getFullYear()}. Tech Collective Group LTD</p>
      </footer>
      <Modal>
        <video controls="controls" width="100%" height="auto">
          <source src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/c2c4d373-c29e-4f1d-a559-bd4ea7e3281d/Tech_Collective_-_calmer.mp4?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20200605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20200605T002548Z&X-Amz-Expires=86400&X-Amz-Signature=95eceb782a853265a0e25b80a17f3686871233246ea9c83f5205c225feb0e741&X-Amz-SignedHeaders=host" type="video/mp4" />
          <track default kind="captions" srcLang="en" src="" label="English subtitles" />
        </video>
      </Modal>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
