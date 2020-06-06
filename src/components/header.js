import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { showModal } from '../components/modal'
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
        <img src={logoImgSmall} alt="" className="logo-image-mobile" />
        <img src={logoImgLarge} alt="" className="logo-image" />
        <Link to="/" className="logo-link">
          <h1>{siteTitle}</h1>
        </Link>
      </div>
      <div className="nav-menu">
        <Link to="/philosophy" className="nav-menu__item" activeClassName='active'>Philosophy</Link>
        <Link to="/curriculum" className="nav-menu__item" activeClassName='active'>Curriculum</Link>
        <Link to="/faqs" className="nav-menu__item" activeClassName='active'>FAQs</Link>
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSdlaOkV39i4pSkLOf_nbAlygB8jtb3RXptCnDabb-65-MT9Ww/viewform" target="_blank" className="nav-menu__item button" rel="noreferrer">Apply</a>
      </div>
    </div>
    <FontAwesomeIcon icon={faBars} className="mobile-nav-toggle" />
    <h2 className="headline">A tech-upskill community for active, collaborative learners.|</h2>
    <FontAwesomeIcon icon={faPlayCircle} className="headline-button" onClick={showModal} />
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
