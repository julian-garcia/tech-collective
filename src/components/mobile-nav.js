import React from "react"
import { Link } from "gatsby"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'

const MobileNav = () => (
  <div className="nav-mobile">
    <FontAwesomeIcon icon={faTimesCircle} className="modal-close" onClick={closeNavMenu} />
    <Link to="/philosophy" className="nav-mobile__item" activeClassName='active'>Philosophy</Link>
    <Link to="/curriculum" className="nav-mobile__item" activeClassName='active'>Curriculum</Link>
    <Link to="/faqs" className="nav-mobile__item" activeClassName='active'>FAQs</Link>
    <a href="https://docs.google.com/forms/d/e/1FAIpQLSdlaOkV39i4pSkLOf_nbAlygB8jtb3RXptCnDabb-65-MT9Ww/viewform" target="_blank" className="nav-mobile__item button" rel="noreferrer">Apply</a>
  </div>
)

export default MobileNav

function closeNavMenu() {
  document.querySelector('.nav-mobile.show').classList.remove('show');
}

export function showNavMenu() {
  document.querySelector('.nav-mobile').classList.add('show');
}