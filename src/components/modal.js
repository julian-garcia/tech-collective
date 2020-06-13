import React from "react"
import PropTypes from "prop-types"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'

const Modal = ({ children, id }) => (
  <div className="modal" id={id}>
    <div className="modal-content">
      {children}
      <FontAwesomeIcon icon={faTimesCircle} className="modal-close" onClick={closeModal} />
    </div>
  </div>
)

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  id: PropTypes.string
}

export default Modal

function closeModal() {
  document.querySelector('.modal.show').classList.remove('show');
  document.querySelector('video').pause();
}

export function showModalById(id) {
  document.getElementById(id).classList.add('show');
  if (id === 'video') {
    document.querySelector('video').play();
  }
}