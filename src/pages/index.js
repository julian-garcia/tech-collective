import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faMoneyBillWave, faLightbulb } from '@fortawesome/free-solid-svg-icons'

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="usp-circle">
      <h3 className="heading usp-circle-copy1">
        ️<span className="usp-circle-emoji" role="img" aria-label="motivated peers">🖇</span><br/>A small, selective cohort of motivated peers
      </h3>
      <h3 className="heading usp-circle-copy2">
        ️<span className="usp-circle-emoji" role="img" aria-label="Zero costs">🎉</span><br className="tablet-up"/>Zero membership costs until you have a good job.
      </h3>
      <h3 className="heading usp-circle-copy3">
        ️<span className="usp-circle-emoji" role="img" aria-label="Part time study">🏦</span><br/>Part-time study and income-sharing to reduce your risk.
      </h3>
    </div>
    <div className="section-grid home-margin">
      <div className="block-container primary tablet-landscape-up"></div>
      <div className="block-container section-heading-left primary">
        <h2 className="heading" style={{maxWidth:'600px', margin:'2rem auto 0'}}>If you want to sharpen your technical skills, it's hard to know what the right path is...</h2>
      </div>
      <div className="block-container tablet-landscape-up"></div>
      <div className="block-container tablet-landscape-up"></div>
    </div>
    <div className="section-grid">
      <div className="block-container primary tablet-landscape-up"></div>
      <div className="block-container primary">
        <div className="block">
          <div className="block-icon-container primary">
            <FontAwesomeIcon icon={faUser} className="block-icon" />
          </div>
          <h3 className="heading">Learning by yourself</h3>
          <div className="list">
            <span className="list-emoji" role="img" aria-label="">😍</span>
            <p>Way cheaper</p>
            <span className="list-emoji" role="img" aria-label="">😍</span>
            <p>Can do it part-time</p>
            <span className="list-emoji" role="img" aria-label="">😱</span>
            <p>Lonely and isolating</p>
            <span className="list-emoji" role="img" aria-label="">😱</span>
            <p>Hard to judge your progress</p>
            <span className="list-emoji" role="img" aria-label="">😱</span>
            <p>Unclear what to learn</p>
          </div>
        </div>
      </div>
      <div className="block-container primary">
        <div className="block">
          <div className="block-icon-container primary">
            <FontAwesomeIcon icon={faMoneyBillWave} className="block-icon" />
          </div>
          <h3 className="heading">Paying for a bootcamp</h3>
          <div className="list">
            <span className="list-emoji" role="img" aria-label="">😍</span>
            <p>Structured curriculum</p>
            <span className="list-emoji" role="img" aria-label="">😍</span>
            <p>Access to support</p>
            <span className="list-emoji" role="img" aria-label="">😱</span>
            <p>Extremely expensive</p>
            <span className="list-emoji" role="img" aria-label="">😱</span>
            <p>Big income-less plunge</p>
            <span className="list-emoji" role="img" aria-label="">😱</span>
            <p>Cramming, not understanding</p>
          </div>
        </div>
      </div>
      <div className="block-container solution">
        <h2 className="heading">But there is another way possible; one that's:</h2>
        <div className="block">
          <div className="block-icon-container dark">
            <FontAwesomeIcon icon={faLightbulb} className="block-icon primary" />
          </div>
          <div className="list">
            <span className="list-emoji" role="img" aria-label="">✅</span>
            <p>Part-time, where you can keep your income coming in</p>
            <span className="list-emoji" role="img" aria-label="">✅</span>
            <p>Peer-driven, where you get strong support around you</p>
            <span className="list-emoji" role="img" aria-label="">✅</span>
            <p>Pay-on-results, where you only pay if you're earning well</p>
          </div>
        </div>
      </div>
      <div className="block-container tablet-landscape-up"></div>
    </div>
  </Layout>
)

export default IndexPage
