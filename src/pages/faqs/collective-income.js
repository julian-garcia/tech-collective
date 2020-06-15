import React from "react"
import { Link } from "gatsby"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import { FaDotCircle } from 'react-icons/fa';

const Faq2Page = () => (
  <Layout>
    <SEO title="FAQs - What do I get back from the collective income share pot?" />
    <h2 className="heading desktop-move-down" style={{textAlign:'center'}}>What do I get back from the collective income share pot?</h2>
    <div className="section-grid">
      <div className="block-container tablet-landscape-up"></div>
      <div className="block-container" style={{paddingBottom:'0'}}>
        <div className="block">
          <p>All funds from your cohort's collective pot (i.e. 50% of Tech Collective cohort revenues) will be distributed equally amongst your cohort (even those not currently paying into it, either through capping out their contributions or falling beneath the income threshold).</p>
          <p>If you're all earning the exact same, then this is effectively an immediate 50% rebate on your payments. If earnings are unequal, then the effective rebate will be larger for some and smaller for others.</p>
        </div>
      </div>
      <div className="block-container" style={{paddingBottom:'0'}}>
        <div className="block">
          <p>We think that distributing this pot like this is important because:</p>
          <div className="list" style={{paddingBottom:'0.5rem'}}>
            <span>1</span> <p>It pools your career-change risk amongst a group of motivated peers</p>
            <span>2</span> <p>It aligns incentives, such that peers have a direct interest in helping you succeed</p>
            <span>3</span> <p>You learn and earn together, symbolising the <Link to="/philosophy/" className="link-text">Tech Collective Values</Link></p>
          </div>
        </div>
      </div>
      <div className="block-container" style={{paddingBottom:'0'}}>
        <div className="block">
          <p>However, we acknowledge that this means there is a risk of outsized payments for some.</p>
          <p> We seek to mitigate this through: </p>
          <div className="list" style={{paddingBottom:'0.5rem'}}>
            <FaDotCircle /><p>a 3 year and £5k cap on payments, so you aren't tied down in perpetuity</p>
            <FaDotCircle /><p>a rigorous application process, which includes all prospective members vetting their prospective peers - so you get to vet the people who you'll be sharing your income with</p>
          </div>
        </div>
      </div>
    </div>
    <h2 className="heading" style={{textAlign:'center'}}>Worked example 1: relatively even payments</h2>
    <p className="centered">The below example documents a one-month snapshot for a cohort of 8 people who are earning relatively evenly. It assumes that nobody has yet capped out their payments.</p>
    <div className="section-grid">
      <div className="block-container tablet-landscape-up"></div>
      <div className="block-container full-width">
        <table className="table payments" border="1">
          <thead>
            <tr>
              <th style={{width:'16%'}}> </th>
              <th style={{width:'16%'}}>Gross salary (annual)</th>
              <th style={{width:'16%'}}>Repays?</th>
              <th style={{width:'16%'}}>Monthly payment</th>
              <th style={{width:'16%'}}>Share of pot</th>
              <th style={{width:'16%'}}>Net payment</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Ali</td><td>£40,000</td><td>Yes</td><td>£300</td><td>£127</td><td>£173</td></tr>
            <tr><td>Brooke</td><td>£40,000</td><td>Yes</td><td>£300</td><td>£127</td><td>£173</td></tr>
            <tr><td>Cora</td><td>£35,000</td><td>Yes</td><td>£263</td><td>£127</td><td>£136</td></tr>
            <tr><td>Dexter</td><td>£35,000</td><td>Yes</td><td>£263</td><td>£127</td><td>£136</td></tr>
            <tr><td>Elias</td><td>£30,000</td><td>Yes</td><td>£225</td><td>£127</td><td>£98</td></tr>
            <tr><td>Faye</td><td>£30,000</td><td>Yes</td><td>£225</td><td>£127</td><td>£98</td></tr>
            <tr><td>Grace</td><td>£30,000</td><td>Yes</td><td>£225</td><td>£127</td><td>£98</td></tr>
            <tr><td>Hugo</td><td>£30,000</td><td>Yes</td><td>£225</td><td>£127</td><td>£98</td></tr>
          </tbody>
        </table>
      </div>
      <div className="block-container tablet-landscape-up"></div>
    </div>
    <h3 className="heading centered">Total paid £2,025<br/>Shared pot £1,013</h3>
    <h2 className="heading" style={{textAlign:'center'}}>Worked example 2: relatively uneven payments</h2>
    <p className="centered">The below example documents a one-month snapshot for a cohort of 8 people who are earning relatively unevenly. It assumes that nobody has yet capped out their payments.</p>
    <div className="section-grid">
      <div className="block-container tablet-landscape-up"></div>
      <div className="block-container full-width">
        <table className="table payments" border="1">
          <thead>
            <tr>
              <th style={{width:'16%'}}> </th>
              <th style={{width:'16%'}}>Gross salary (annual)</th>
              <th style={{width:'16%'}}>Repays?</th>
              <th style={{width:'16%'}}>Monthly payment</th>
              <th style={{width:'16%'}}>Share of pot</th>
              <th style={{width:'16%'}}>Net payment</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Ali</td><td>£80,000</td><td>Yes</td><td>£600</td><td>£136</td><td>£464</td></tr>
            <tr><td>Brooke</td><td>£60,000</td><td>Yes</td><td>£450</td><td>£136</td><td>£314</td></tr>
            <tr><td>Cora</td><td>£50,000</td><td>Yes</td><td>£375</td><td>£136</td><td>£239</td></tr>
            <tr><td>Dexter</td><td>£35,000</td><td>Yes</td><td>£300</td><td>£136</td><td>£164</td></tr>
            <tr><td>Elias</td><td>£30,000</td><td>Yes</td><td>£225</td><td>£136</td><td>£89</td></tr>
            <tr><td>Faye</td><td>£30,000</td><td>Yes</td><td>£225</td><td>£136</td><td>£89</td></tr>
            <tr><td>Grace</td><td>£25,000</td><td>No</td><td>£0</td><td>£136</td><td>-£136</td></tr>
            <tr><td>Hugo</td><td>£0</td><td>No</td><td>£0</td><td>£136</td><td>-£136</td></tr>
          </tbody>
        </table>
      </div>
      <div className="block-container tablet-landscape-up"></div>
    </div>
    <h3 className="heading centered">Total paid £2,175<br/>Shared pot £1,088</h3>
  </Layout>
)

export default Faq2Page
