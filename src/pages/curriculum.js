import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearchDollar, faFilePdf, faCodeBranch, faLaptopCode, faQuestion } from '@fortawesome/free-solid-svg-icons'
import { faReact, faJsSquare, faGitAlt } from '@fortawesome/free-brands-svg-icons'

import Layout from "../components/layout"
import SEO from "../components/seo"
import wefImg from '../images/wef.svg'
import reduxImg from '../images/redux.png'

const CurriculumPage = () => (
  <Layout>
    <SEO title="Curriculum" />
    <div className="heading-right desktop-move-up">
      <span></span>
      <div style={{display:'grid', gridTemplateColumns:'.3fr 5fr', gap:'10px'}}>
        <span className="heading" role="img" aria-label="" style={{textAlign:'right', fontSize:'1.6rem'}}>❌</span>
        <h2 className="heading" style={{margin:0}}>We're not interested in churning out code-monkey developers.</h2>
        <span className="heading" role="img" aria-label="" style={{textAlign:'right', fontSize:'1.6rem'}}>✅</span>
        <h2 className="heading" style={{margin:0}}>Our curriculum bridges the technical and the interpersonal.</h2>
      </div>
    </div>
    <div className="section-grid desktop-move-down">
      <div className="primary-reverse-fade tablet-landscape-up"></div>
      <div className="primary-reverse-fade desktop-pad-vertical section-heading-left" style={{textAlign:'left', padding:'2rem 1rem'}}>
        <h3 className="heading">You'll learn modern full-stack web development - but not just as the only end in and of itself. Through our peer-driven project-based learning, you will be challenged to strengthen your creativity, collaboration and communication.</h3>
        <h3 className="heading">These are skills not just for your 'next job' - they're for the next chapter of your career, be it in:</h3>
        <div className="list">
          <span className="list-emoji" role="img" aria-label="">⚫</span>
          <p>software development</p>
          <span className="list-emoji" role="img" aria-label="">⚫</span>
          <p>product management</p>
          <span className="list-emoji" role="img" aria-label="">⚫</span>
          <p>startups</p>
          <div style={{position:'absolute', right:'0', bottom:'-18px'}}>
            <img src={wefImg} alt="" style={{width:'50px'}} />
            <h3 className="heading" style={{display:'inline-block', margin:'0 10px', width:'200px'}}>Future of jobs report</h3>
            <FontAwesomeIcon icon={faFilePdf} style={{fontSize:'2rem'}} />
          </div>
        </div>
      </div>
    </div>
    <div className="section-grid desktop-move-down">
      <h2 className="heading section-heading">Whilst we don't expect all our members to want to become software developers, the goal is to give you the flexibility to pursue that career if you wanted to. <br/>This means learning specific technologies, development practices and job-search skills.</h2>
    </div>
    <div className="section-grid">
      <div className="block-container tablet-landscape-up"></div>
      <div className="block-container topics">
        <FontAwesomeIcon icon={faJsSquare} />
        <FontAwesomeIcon icon={faReact} />
        <img src={reduxImg} alt="" />
        <FontAwesomeIcon icon={faGitAlt} />
      </div>
      <div className="block-container primary-fade">
        <div className="block">
          <div className="block-icon-container primary">
            <FontAwesomeIcon icon={faLaptopCode} className="block-icon" />
          </div>
          <h3 className="heading">We think this is JavaScript for full-stack web development, to include:</h3>
          <div className="list">
            <span className="list-emoji-small" role="img" aria-label="">⚫</span>
            <p>React (as a front-end library)</p>
            <span className="list-emoji-small" role="img" aria-label="">⚫</span>
            <p>Redux (as a state management library)</p>
            <span className="list-emoji-small" role="img" aria-label="">⚫</span>
            <p>Jest (as a testing library)</p>
            <span className="list-emoji-small" role="img" aria-label="">⚫</span>
            <p>Express (as a back-end library)</p>
            <span className="list-emoji-small" role="img" aria-label="">⚫</span>
            <p>PostgreSQL and Sequelize (as a database layer)</p>
            <span className="list-emoji-small" role="img" aria-label="">⚫</span>
            <p>TypeScript (for static type safety)</p>
          </div>
        </div>
      </div>
      <div className="block-container primary-fade">
        <div className="block primary">
          <div className="block-icon-container primary">
            <FontAwesomeIcon icon={faQuestion} className="block-icon" />
          </div>
          <h3 className="heading">Here’s Why:</h3>
          <p>JavaScript continues to be the most commonly used programming language [1] as well as the most sought by employers [2]</p>
          <p>Full-stack developers tend to be more prioritised as hires by engineering managers [3]</p>
          <p>React, Redux, Express, Jest and TypeScript are all popular and highly-rated by JavaScript developers [4]</p>
        </div>
      </div>
      <div className="block-container primary-fade tablet-landscape-up"></div>
    </div>
    <div className="section-grid desktop-move-up">
      <div className="block-container tablet-landscape-up"></div>
      <div className="block-container desktop-pad-vertical">
        <div className="block">
          <div className="block-icon-container primary">
            <FontAwesomeIcon icon={faSearchDollar} className="block-icon" />
          </div>
          <h3 className="heading">Job-search skills</h3>
          <p>Practical projects for your developer portfolio on GitHub.</p>
          <p>Algorithms and data structures for coding interview tasks.</p>
        </div>
      </div>
      <div className="block-container desktop-pad-vertical">
        <div className="block dark">
          <div className="block-icon-container dark">
            <FontAwesomeIcon icon={faCodeBranch} className="block-icon" />
          </div>
          <h3 className="heading">Development practices</h3>
          <p>It's all very well knowing programming tools, but you need to be useful in a team. That's why we'll also cover things such as:</p>
          <div className="list">
            <span className="list-emoji-small" role="img" aria-label="">⚪</span>
            <p>Version control with git</p>
            <span className="list-emoji-small" role="img" aria-label="">⚪</span>
            <p>Working in an agile workflow</p>
            <span className="list-emoji-small" role="img" aria-label="">⚪</span>
            <p>Pair programming with your peers</p>
          </div>
        </div>
      </div>
      <div className="block-container tablet-landscape-up"></div>
      <div className="block-container tablet-landscape-up"></div>
    </div>
  </Layout>
)

export default CurriculumPage
