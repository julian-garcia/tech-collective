import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import HeaderImage from "../images/header-background.svg"
import HeaderImageMobile from "../images/header-background-mobile.svg"
import LogoBackground from "../images/logo-background.svg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlayCircle, faBars } from '@fortawesome/free-solid-svg-icons'
import logoImgSmall from '../images/logo-small.svg'
import logoImgLarge from '../images/logo-large.svg'

const Header = ({ siteTitle }) => (
  <header className="header">
    <img src={HeaderImage} alt="" className="header-background" />
    <img src={HeaderImageMobile} alt="" className="header-background-mobile" />
    <img src={LogoBackground} alt="" className="logo-background" />
    <div className="header-content">
      <div className="logo-title">
        <img src={logoImgSmall} alt="" className="logo-image-mobile" />
        <img src={logoImgLarge} alt="" className="logo-image" />
        <Link to="/" className="logo-link">
          <h1>{siteTitle}</h1>
        </Link>
      </div>
      <div className="nav-menu">
        <Link to="/" className="nav-menu__item">Philosophy</Link>
        <Link to="/" className="nav-menu__item">Curriculum</Link>
        <Link to="/" className="nav-menu__item">FAQs</Link>
        <Link to="/" className="nav-menu__item button">Apply</Link>
      </div>
    </div>
    <FontAwesomeIcon icon={faBars} className="mobile-nav-toggle" />
    <h2 className="headline">A tech-upskill community for active, collaborative learners.|</h2>
    <FontAwesomeIcon icon={faPlayCircle} className="headline-button" />
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
