import React from "react"
import { Link } from "gatsby"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import { IoIosPeople } from 'react-icons/io';
import { GiTeacher } from 'react-icons/gi';
import { BsFillQuestionCircleFill } from 'react-icons/bs';
import { FaDotCircle } from 'react-icons/fa';

const Faq1Page = () => (
  <Layout>
    <SEO title="FAQs - How is Tech Collective different to a bootcamp?" />
    <h2 className="heading desktop-move-down" style={{textAlign:'center'}}>How is Tech Collective different to a bootcamp?</h2>
    <div className="section-grid">
      <div className="block-container tablet-landscape-up"></div>
      <div className="block-container" style={{paddingBottom:'0'}}>
        <div className="block">
          <p>Tech Collective promotes active, collaborative learning.</p>
          <p>We think <a href='https://techcollective.substack.com/p/3e2fc406-d9cf-490a-9bed-16403b1951ed' className='link-text' target='_blank' rel="noreferrer">the traditional bootcamp model of crammed, passive and self-centred education is broken.</a></p>
        </div>
      </div>
      <div className="block-container" style={{paddingBottom:'0'}}>
        <div className="block">
          <p>Tech Collective is a <strong>tech-upskill community</strong> for active, collaborative learners.</p>
          <p>It's not a bootcamp - it's a third option to self-study and bootcamps.</p>
          <p>We start with our <Link to="/philosophy/" className="link-text">Values</Link>, and go from there.</p>
        </div>
      </div>
      <div className="block-container" style={{paddingBottom:'0'}}>
        <div className="block">
          <p>In the comparison table below, some specific bootcamps have variations, e.g. <a href='https://www.foundersandcoders.com/' className='link-text' target='_blank' rel="noreferrer">Founders and Coders</a> uses a non-traditional model.</p>
          <p>You should do your own research into particular bootcamps that you are considering.</p>
        </div>
      </div>
    </div>
    <div className="section-grid">
      <div className="block-container tablet-landscape-up"></div>
      <div className="block-container full-width">
        <table className="table bootcamp" border="1">
          <thead>
            <tr>
              <th style={{width:'20%'}}><BsFillQuestionCircleFill /> Question</th>
              <th style={{width:'40%'}}><IoIosPeople /> Tech Collective</th>
              <th style={{width:'40%'}}><GiTeacher /> Bootcamp</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>What educational expertise is there?</td>
              <td>
                <p>Tech Collective is built on two pillars of educational research:</p>
                <div className="list" style={{paddingBottom:'0'}}>
                  <FaDotCircle /><p>Spaced repetition: learning is demonstrably more effective if it is spread out over a larger time period; and</p>
                  <FaDotCircle /><p>Cognitive load: thinking and learning is less effective if we are overloaded with information.</p>
                </div>
              </td>
              <td>
                <p>Traditional bootcamps are oriented entirely against both the spaced repetition and cognitive load theory of educational research: in a bootcamp, you are overwhelmed with dense information in a very short period of time, and expected to digest it all.</p>
                <p>(If you are interested in understanding why they might do this even if it's less effective, read our article: 3 ways in which the traditional bootcamp model is broken)</p>
              </td>
            </tr>
            <tr>
              <td>Who keeps the revenue?</td>
              <td>
                <p>50% of Tech Collective membership revenues are shared amongst the community of members.</p>
                <p>We think this a fairer distribution of revenues, since you and your peers provide the bulk of the value to each other.</p>
              </td>
              <td>
                <p>Bootcamp keeps all the tuition fees, regardless of instructor skill, resource quality or student experience.</p>
                <p>(So, if you are considering a bootcamp, make sure to carefully research the instructors at a particular campus, as some cities might be better than others.)</p>
              </td>
            </tr>
            <tr>
              <td>Can I be finished in three months?</td>
              <td>
                <p>No. <strong>We're optimising to reduce career-change risk</strong>, and that means taking it part-time and more slowly, to ensure solid foundations.</p>
              </td>
              <td>
                <p>Yes. Some bootcamps are as short as eight weeks.</p>
              </td>
            </tr>
            <tr>
              <td>Will I learn to code in the way that real developers do?</td>
              <td>
                <p>Yes, through practical projects, talking to peers, and... Googling error messages, just like real developers.</p>
                <p>(You might be taught the occasional thing, but this will be the exception.)</p>
              </td>
              <td>
              <p>No. You'll have frequent lectures and classes. </p>
              <p> (It must be that bootcamps are using fees to pay for instructors to do that - because why else would they need so much of your money?) </p>
              </td>
            </tr>
            <tr>
              <td>Can I maintain an income whilst learning?</td>
              <td> <p>Yes, it's a part-time commitment</p> </td>
              <td> <p>No, you have to study full-time</p> </td>
            </tr>
            <tr>
              <td>Do I have to pay anything upfront?</td>
              <td>
                <p>Yes, but a £150 background check fee which our financing partner charges us, on which we make no profit. (We will share this invoice with you for maximum transparency.)</p>
              </td>
              <td><p>Yes - deposit or full fees</p></td>
            </tr>
            <tr>
              <td>Can I pay upfront if I prefer?</td>
              <td>
                <p> No, because we think that this skews organisational incentives badly. </p>
                <p> By stopping people from paying upfront, we stop people buying their way in regardless of fit. </p>
              </td>
              <td><p>Yes</p></td>
            </tr>
            <tr>
              <td>Who will my peers be?</td>
              <td>
                <p> You'll meet your prospective peers before you have to commit, in the application process. </p>
                <p> Knowing them is an important part of making an informed decision. </p>
              </td>
              <td>
                <p>Whomever they choose to admit. Hopefully this bootcamp is one which has rigorous and ethical admissions policies!</p>
              </td>
            </tr>
            <tr>
              <td>Can I see what materials we'll be using before I commit?</td>
              <td>
                <p>Yes. Part of the application process will involve looking at, and researching, the open-source materials we'll be using, so that you can make an informed decision.</p>
              </td>
              <td>
                <p>Probably not. It's certainly possible that this bootcamp has developed better resources than the open-source materials maintained by thousands of people passionate about developer education - but you'll have to take that on trust.</p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="block-container tablet-landscape-up"></div>
    </div>
  </Layout>
)

export default Faq1Page
