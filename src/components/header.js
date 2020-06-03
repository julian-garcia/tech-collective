import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import HeaderImage from "../images/header-background.svg"
import HeaderImageMobile from "../images/header-background-mobile.svg"

const Header = ({ siteTitle }) => (
  <header className="header">
    <img src={HeaderImage} alt="" className="header-background" />
    <img src={HeaderImageMobile} alt="" className="header-background-mobile" />
    <div className="header-content">
      <div className="logo-title">
        <h1><Link to="/" className="logo-link">{siteTitle}</Link></h1>
      </div>
      <div className="nav-menu">
        <Link to="/" className="nav-menu__item">Philosophy</Link>
        <Link to="/" className="nav-menu__item">Curriculum</Link>
        <Link to="/" className="nav-menu__item">FAQs</Link>
        <Link to="/" className="nav-menu__item button">Apply</Link>
      </div>
    </div>
    <h2 className="headline">A tech-upskill community for active, collaborative learners.|</h2>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
