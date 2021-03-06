import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { showModalById } from '../components/modal'
import { showNavMenu } from '../components/mobile-nav'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlayCircle, faBars } from '@fortawesome/free-solid-svg-icons'
import HeaderImage from "../images/header-background.svg"
import HeaderImageMobile from "../images/header-background-mobile.svg"
import LogoBackground from "../images/logo-background.svg"
import logoImgSmall from '../images/logo-small.svg'
import logoImgLarge from '../images/logo-large.svg'

const Header = ({ siteTitle }) => (
  <header className="header">
    <img src={HeaderImage} alt="" className="header-background" />
    <img src={HeaderImageMobile} alt="" className="header-background-mobile" />
    <img src={LogoBackground} alt="" className="logo-background" />
    <div className="header-content">
      <div className="logo-title">
        <Link to="/" className="logo-link">
          <img src={logoImgSmall} alt="" className="logo-image-mobile" />
          <img src={logoImgLarge} alt="" className="logo-image" />
          <h1 className="site-title">{siteTitle}</h1>
        </Link>
      </div>
      <div className="nav-menu">
        <Link to="/philosophy/" className="nav-menu__item" activeClassName='active'>Philosophy</Link>
        <Link to="/curriculum/" className="nav-menu__item" activeClassName='active'>Curriculum</Link>
        <Link to="/faqs/" className="nav-menu__item" activeClassName='active'>FAQs</Link>
        <Link to="/apply" className="nav-menu__item button">Apply</Link>
      </div>
    </div>
    <FontAwesomeIcon icon={faBars} className="mobile-nav-toggle" onClick={showNavMenu} />
    <h2 className="headline">A tech-upskill community for active, collaborative learners.|</h2>
    <FontAwesomeIcon icon={faPlayCircle} className="headline-button" onClick={() => showModalById('video')} />
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
