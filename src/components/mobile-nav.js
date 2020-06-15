import React from "react"
import { Link } from "gatsby"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'

const MobileNav = () => (
  <div className="nav-mobile">
    <FontAwesomeIcon icon={faTimesCircle} className="modal-close" onClick={closeNavMenu} />
    <Link to="/philosophy" className="nav-mobile__item" activeClassName='active' onClick={closeNavMenu}>Philosophy</Link>
    <Link to="/curriculum" className="nav-mobile__item" activeClassName='active' onClick={closeNavMenu}>Curriculum</Link>
    <Link to="/faqs" className="nav-mobile__item" activeClassName='active' onClick={closeNavMenu}>FAQs</Link>
    <Link to="/apply" className="nav-mobile__item button" activeClassName='active' onClick={closeNavMenu}>Apply</Link>
  </div>
)

export default MobileNav

function closeNavMenu() {
  document.querySelector('.nav-mobile.show').classList.remove('show');
}

export function showNavMenu() {
  document.querySelector('.nav-mobile').classList.add('show');
}