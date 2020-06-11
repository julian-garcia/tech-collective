import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faFilter } from '@fortawesome/free-solid-svg-icons'
import Modal, { showFAQModal } from '../components/modal'

import Layout from "../components/layout"
import SEO from "../components/seo"

const FaqsPage = () => (
  <div className="faqs">
    <Layout>
      <SEO title="Home" />
      <div className="section-grid desktop-move-down">
        <div className="block-container dark tablet-landscape-up"></div>
        <div className="block-container dark">
          <FontAwesomeIcon icon={faFilter} className="block-icon" style={{margin:'0 1rem'}} />
          <select className="faqs-filter" name="filter" id="filter">
            <option value="">All</option>
            <option value="">Applying</option>
            <option value="">Bootcamp</option>
            <option value="">Curriculum</option>
            <option value="">Programme</option>
            <option value="">Sharing</option>
            <option value="">Effectiveness</option>
            <option value="">Location</option>
            <option value="">Referrals</option>
            <option value="">Payments</option>
          </select>
        </div>
      </div>
      <div className="section-grid">
        <div className="block-container dark tablet-landscape-up"></div>
        <div className="block-container dark">
          <div className="block primary" onClick={() => showFAQModal('1')} onKeyDown role="button" tabIndex="0">
            <div className="block-icon-container primary">
              <FontAwesomeIcon icon={faPlus} className="block-icon" />
            </div>
            <h3 className="heading">How can I apply and what's involved?</h3>
            <div className="faqs-tags">
              <span className="faqs-tag">Applying</span>
            </div>
          </div>
        </div>
        <div className="block-container dark">
          <div className="block primary" onClick={() => showFAQModal('1')} onKeyDown role="button" tabIndex="0">
            <div className="block-icon-container primary">
              <FontAwesomeIcon icon={faPlus} className="block-icon" />
            </div>
            <h3 className="heading">What weekly commitment is involved?</h3>
            <div className="faqs-tags">
              <span className="faqs-tag">Programme</span>
            </div>
          </div>
        </div>
        <div className="block-container dark">
          <div className="block primary" onClick={() => showFAQModal('1')} onKeyDown role="button" tabIndex="0">
            <div className="block-icon-container primary">
              <FontAwesomeIcon icon={faPlus} className="block-icon" />
            </div>
            <h3 className="heading">What can I expect at the end of the programme?</h3>
            <div className="faqs-tags">
              <span className="faqs-tag">Programme</span>
              <span className="faqs-tag">Curriculum</span>
            </div>
          </div>
        </div>
        <div className="block-container tablet-landscape-up"></div>
        <div className="block-container dark tablet-landscape-up"></div>
        <div className="block-container dark">
          <div className="block primary" onClick={() => showFAQModal('1')} onKeyDown role="button" tabIndex="0">
            <div className="block-icon-container primary">
              <FontAwesomeIcon icon={faPlus} className="block-icon" />
            </div>
            <h3 className="heading">How can I apply and what's involved?</h3>
          </div>
        </div>
        <div className="block-container dark">
          <div className="block primary" onClick={() => showFAQModal('1')} onKeyDown role="button" tabIndex="0">
            <div className="block-icon-container primary">
              <FontAwesomeIcon icon={faPlus} className="block-icon" />
            </div>
            <h3 className="heading">What weekly commitment is involved?</h3>
          </div>
        </div>
        <div className="block-container dark">
          <div className="block primary" onClick={() => showFAQModal('1')} onKeyDown role="button" tabIndex="0">
            <div className="block-icon-container primary">
              <FontAwesomeIcon icon={faPlus} className="block-icon" />
            </div>
            <h3 className="heading">What can I expect at the end of the programme?</h3>
          </div>
        </div>
        <div className="block-container tablet-landscape-up"></div>
      </div>
    </Layout>
    <Modal id="1">
      <h2 className="heading">What can I expect at the end of the programme?</h2>
      <p>You will graduate as a proficient coder with:</p>
      <p>- a personal portfolio including full-stack web development projects;<br/>
      - job-relevant experience of software teams, processes and toolings; and<br/>
      - a cohort of highly motivated peers with an ongoing stake in your career.</p>
      <p>These skills are specifically optimised for junior developer roles, but will be useful to you in any role where you have to talk about, understand or work with technology.</p>
    </Modal>
  </div>
)

export default FaqsPage
