import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExclamation, faCommentDots, faShare, faFistRaised, faGlobe, faLink } from '@fortawesome/free-solid-svg-icons'

import Layout from "../components/layout"
import SEO from "../components/seo"

const PhilosophyPage = () => (
  <Layout>
    <SEO title="Philosophy" />
    <h2 className="heading desktop-move-up heading-right">There are five main guiding principles of Tech Collective:</h2>
    <div className="section-grid desktop-move-up">
      <div className="block-container tablet-landscape-up"></div>
      <div className="block-container tablet-landscape-up"></div>
      <div className="block-container desktop-move-left desktop-move-down">
        <div className="block primary dark-border">
          <div className="block-icon-container primary">
            <FontAwesomeIcon icon={faExclamation} className="block-icon" />
          </div>
          <h3 className="heading">Take responsibility</h3>
          <p>We believe that we learn and achieve more when we act with ownership and openly learn from mistakes.</p>
          <p>That's why we bear members' risks with zero membership payments until they're in a good job afterwards.</p>
        </div>
      </div>
      <div className="block-container" style={{display:'block'}}>
        <div className="block primary">
          <div className="block-icon-container primary">
            <FontAwesomeIcon icon={faGlobe} className="block-icon" />
          </div>
          <h3 className="heading">Commit to community</h3>
          <p>We believe that people are more fulfilled and effective when they have deep relationships.</p>
          <p>That's why we foster close cohort bonding through peer-driven selection and learning.</p>
        </div>
      </div>
      <div className="block-container tablet-landscape-up"></div>
    </div>
    <div className="section-grid desktop-move-up">
      <div className="block-container primary-fade tablet-landscape-up"></div>
      <div className="block-container primary-fade desktop-pad-vertical">
        <div className="block">
          <div className="block-icon-container primary">
            <FontAwesomeIcon icon={faFistRaised} className="block-icon" />
          </div>
          <h3 className="heading">Empower individuals</h3>
          <p>We believe that people thrive when you enable them to invest in their own development.</p>
          <p>That's why we cap every member's total net contributions for their three year payment period.</p>
        </div>
      </div>
      <div className="block-container primary-fade desktop-pad-vertical">
        <div className="block">
          <div className="block-icon-container primary">
            <FontAwesomeIcon icon={faCommentDots} className="block-icon" />
          </div>
          <h3 className="heading">Maximum transparency</h3>
          <p>We believe that people need information to make meaningful plans and consensual commitments.</p>
          <p>That's why our applicants get multiple chances to meet their prospective peers before joining.</p>
        </div>
      </div>
      <div className="block-container tablet-landscape-up"></div>
      <div className="block-container tablet-landscape-up"></div>
    </div>
    <div className="section-grid desktop-move-up">
      <div className="block-container tablet-landscape-up"></div>
      <div className="block-container tablet-landscape-up"></div>
      <div className="block-container desktop-move-left">
        <div className="block primary dark">
          <div className="block-icon-container dark">
            <FontAwesomeIcon icon={faShare} className="block-icon" />
          </div>
          <h3 className="heading">Shared success</h3>
          <p>Part-time, where you can keep your income coming in</p>
          <p>Peer-driven, where you get strong support around you</p>
          <p>Pay-on-results, where you only pay if you're earning well</p>
        </div>
      </div>
      <div className="block-container tablet-landscape-up"></div>
      <div className="block-container tablet-landscape-up"></div>
    </div>
    <div className="section-grid desktop-move-up">
      <div className="block-container tablet-landscape-up"></div>
      <div className="block-container tablet-landscape-up"></div>
      <div className="block-container primary-reverse-fade desktop-pad-vertical">
        <h2 className="heading section-heading-right">Philosophical Influences</h2>
        <div className="block">
          <h3 className="heading">Learning by yourself</h3>
          <p>An enabling environment significantly expands its participants' capacity to do things they find meaningful and important. Schools ostensibly aspire to this purpose, but...</p>
          <a href="https://notes.andymatuschak.org/Enabling_environment" rel="noreferrer" target="_blank" className="block-button">
            <FontAwesomeIcon icon={faLink} className="dark" />
          </a>
        </div>
      </div>
      <div className="block-container primary-reverse-fade desktop-pad-vertical">
        <div className="block">
          <h3 className="heading">Society Centered Design</h3>
          <p>All around us we see signs that patriarchal capitalism and exploitative business models place profit over privacy, and efficiency over agency. They pit individuals against the collective...</p>
          <a href="https://societycentered.design/" target="_blank" rel="noreferrer" className="block-button">
            <FontAwesomeIcon icon={faLink} className="dark" />
          </a>
        </div>
      </div>
      <div className="block-container primary-reverse-fade tablet-landscape-up"></div>
    </div>
  </Layout>
)

export default PhilosophyPage
