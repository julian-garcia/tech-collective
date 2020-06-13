import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink } from '@fortawesome/free-solid-svg-icons'
import { RiServiceLine } from 'react-icons/ri';
import { FaMountain, FaSlideshare } from 'react-icons/fa';
import { FiSunrise } from 'react-icons/fi';
import { GrView } from 'react-icons/gr';

import Layout from "../components/layout"
import SEO from "../components/seo"

const PhilosophyPage = () => (
  <Layout>
    <SEO title="Philosophy" />
    <h2 className="heading principles">There are five main guiding principles of Tech Collective:</h2>
    <div>
      <div className="angled-block right">
        <div className="angled-block__content">
          <RiServiceLine className="angled-block__icon" />
          <h3 className="heading"><span className="angled-block__number">1</span> Commit to community</h3>
          <p>We believe that people are more fulfilled and effective when they have deep relationships.</p>
          <p>That's why we foster close cohort bonding through peer-driven selection and learning.</p>
        </div>
      </div>
      <div className="angled-block left">
        <div className="angled-block__content">
          <FaMountain className="angled-block__icon" />
          <h3 className="heading"><span className="angled-block__number">2</span> Take responsibility</h3>
          <p>We believe that we learn and achieve more when we act with ownership and openly learn from mistakes.</p>
          <p>That's why we bear members' risks with zero membership payments until they're in a good job afterwards.</p>
        </div>
      </div>
      <div className="angled-block right">
        <div className="angled-block__content">
          <FiSunrise className="angled-block__icon" />
          <h3 className="heading"><span className="angled-block__number">3</span> Empower individuals</h3>
          <p>We believe that people thrive when you enable them to invest in their own development.</p>
          <p>That's why we cap every member's total net contributions for their three year payment period.</p>
        </div>
      </div>
      <div className="angled-block left">
        <div className="angled-block__content">
          <GrView className="angled-block__icon" />
          <h3 className="heading"><span className="angled-block__number">4</span> Maximum transparency</h3>
          <p>We believe that people need information to make meaningful plans and consensual commitments.</p>
          <p>That's why our applicants get multiple chances to meet their prospective peers before joining.</p>
        </div>
      </div>
      <div className="angled-block right">
        <div className="angled-block__content">
          <FaSlideshare className="angled-block__icon" />
          <h3 className="heading"><span className="angled-block__number">5</span> Shared success</h3>
          <p>Part-time, where you can keep your income coming in</p>
          <p>Peer-driven, where you get strong support around you</p>
          <p>Pay-on-results, where you only pay if you're earning well</p>
        </div>
      </div>
    </div>
    <div className="section-grid desktop-move-down">
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
      <div className="block-container tablet-landscape-up"></div>
      <div className="block-container tablet-landscape-up"></div>
    </div>
  </Layout>
)

export default PhilosophyPage
