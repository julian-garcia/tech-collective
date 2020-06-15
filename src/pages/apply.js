import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Modal, { showModalById } from '../components/modal'
import { AiOutlineNumber } from 'react-icons/ai';
import { FaDotCircle } from 'react-icons/fa';
import { GrTextAlignLeft } from 'react-icons/gr';
import { MdTimelapse } from 'react-icons/md';

const ApplyPage = () => (
  <Layout>
    <SEO title="Apply" />
    <h1 className="heading desktop-move-down" style={{textAlign:'center'}}>Apply to join</h1>
    <div className="section-grid">
      <div className="block-container tablet-landscape-up"></div>
      <div className="block-container" style={{paddingBottom:'0'}}>
        <p className="block">We're humbled by your interest in Tech Collective.<br/>We have a deliberately lengthy application process - but feedback will be provided to all unsuccessful applicants.</p>
      </div>
      <div className="block-container" style={{paddingBottom:'0', cursor:'pointer'}} onClick={() => showModalById('stages')} role="button" tabIndex="0" onKeyPress={() => {}}>
        <p className="block">When we say that this application process is for <strong>your benefit as well as ours</strong>, that's not corporate platitude, it's genuine sentiment. <span className="link-text">Learn more: Why are there so many stages in the application process?</span></p>
      </div>
      <div className="block-container" style={{paddingBottom:'0'}}>
        <p className="block">If you don't make our first cohort, you might well still make a future cohort. (Maybe you just weren't a good fit for the people in that first cohort!). Hopefully, it should also be fun - it'll involve some coding and working with other prospective peers.</p>
      </div>
    </div>
    <div className="section-grid">
      <div className="block-container tablet-landscape-up"></div>
      <div className="block-container full-width">
        <table className="table" border="1">
          <thead>
            <tr>
              <th><AiOutlineNumber /> Stage</th>
              <th><GrTextAlignLeft /> Purpose</th>
              <th><MdTimelapse /> Estimated time</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1. Build your own chatbot</td>
              <td><p><strong>Description:</strong> You will learn how to build a simple JavaScript chatbot (see <span role="img" aria-label="">🤖</span> Build your own chatbot with just enough JavaScript). You will then be tasked to use this learning to build a chatbot which represents you and your application to Tech Collective, answering questions like: what interests you about Tech Collective? What do you look for in a peer? etc.</p>
              <p><strong>Purpose for us:</strong> This is to examine both how you apply your learning practically as well as gain insight into your motivations for joining Tech Collective, so that we can judge whether you could be a strong fit.</p>
              <p><strong>Purpose for you:</strong> You will learn to code something concrete, following an example of the pre-recorded tutorials you will receive on the programme. This will help you to understand whether you enjoy coding and whether you can learn effectively on our programme. Do you find it an enjoyable or productive use of your time?</p>
              <p>(Maximum transparency: you should expect no more than 1-2 hours of video instruction a week. It is not intended to be the primary source of your learning.)</p>
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSdlaOkV39i4pSkLOf_nbAlygB8jtb3RXptCnDabb-65-MT9Ww/viewform" target="_blank" className="button" rel="noreferrer">Chatbot&nbsp;Submission</a>
              </td>
              <td><p>Tutorial: 1hr 40mins<br/>Exercise: 1-2 hours</p></td>
            </tr>
            <tr>
              <td>2. Peer prioritisation</td>
              <td><p><strong>Description:</strong> You'll receive links to other people's chatbot applications. You will be asked to prioritise them in the order in which you'd like to work with them, and (optionally) provide feedback.</p>
              <p><strong>Purpose for us:</strong> This is for us to get a gauge of how you both perceive, and might be perceived by, your prospective peers.</p>
              <p><strong>Purpose for you:</strong> You get an insight into some of the people you might be studying alongside with.</p></td>
              <td><p>40 minutes</p></td>
            </tr>
            <tr>
              <td>3. Pair programming exercise and reflection</td>
              <td><p><strong>Description:</strong> You will complete a pair programming task with a prospective peer, using concepts from the video tutorial, then reflect on the experience together.</p>
              <p><strong>Purpose for us:</strong> This is primarily to examine how you work with, help and learn from a peer, as well as how you give/receive feedback. How you retain information will be a secondary consideration.</p>
              <p><strong>Purpose for you:</strong> Pair programming will be a mandatory part of the programme. Is it something that you can see value coming from? Are you comfortable with the feedback experience?</p>
              <p>(Maximum transparency: from a single pair, it will be possible for neither, one or both of you to progress to the next stage. If you believe that you have been seriously impeded because of the person you happened to be paired with, you will have an opportunity to make your case.)</p></td>
              <td><p>30 minutes</p></td>
            </tr>
            <tr>
              <td>4. FreeCodeCamp and bootcamp research</td>
              <td><p><strong>Description:</strong> Go and speak to at least 1 from a coding bootcamp, and talk to them about their experiences. Go do research on the experiences of people self-studying materials like FreeCodeCamp. Submit a form detailing your conversations and reflections.</p>
              <p><strong>Purpose for us:</strong> The more informed you are about your options, the more confident we can be that those who continue with the process are making an informed - and therefore, more committed - decision.</p>
              <p><strong>Purpose for you:</strong> It is in your interest to make sure that you have seriously scrutinised other options. People who've been through these other paths of learning to code are also likely to have some advice that is useful to you.</p>
              </td>
              <td><p>60-90 minutes</p></td>
            </tr>
            <tr>
              <td>5. Write your user manual (*PROVISIONAL)</td>
              <td><p><strong>Description:</strong> Write an explanation for your prospective peers of what they need to know about you to get the best out of you (see this blog).</p>
              <p><strong>Purpose for us:</strong> This lets us look at your self-awareness, introspection and openness.</p>
              <p><strong>Purpose for you:</strong> If you are a good fit for the programme, this user manual should actually be genuinely useful to your peers. Even if not, we believe that reflecting on your own behaviours is a productive and important use of time.</p></td>
              <td><p>1-2 hours (very variable - depends on how you introspect)</p></td>
            </tr>
            <tr>
              <td>6. Speed-meet peers (*PROVISIONAL)</td>
              <td><p><strong>Description:</strong> Group speed-meeting of peers from your prospective cohort.</p>
              <p><strong>Purpose for us:</strong> At this point, we think we've identified the right cohort - we're not selecting here, it's down to you.</p>
              <p><strong>Purpose for you:</strong> To confirm that you are happy to commit to joining Tech Collective with this cohort</p></td>
              <td><p>60 minutes</p></td>
            </tr>
            <tr>
              <td>7. Trial month</td>
              <td><p><strong>Description:</strong> The first month of the programme.</p>
              <p><strong>Purpose for us:</strong> We're really satisfied that you are likely to be a good fit - but the best way to confirm that is by actually checking in practice!</p>
              <p><strong>Purpose for you:</strong> You're optimistic about the programme - but the best way to confirm that it works for you is by actually checking in practice!</p></td>
              <td><p>10 hours weekly</p></td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="block-container tablet-landscape-up"></div>
    </div>
    <Modal id="stages">
      <h2 className="heading" style={{marginTop:'-1.5rem'}}>Why are there so many stages in the application process?</h2>
      <p>We have multiple stages for benefit of all of the following:</p>
      <div className="list" style={{paddingBottom:'0.5rem'}}>
        <FaDotCircle /><p><strong>Yourself:</strong> we want you to know what you're committing to</p>
        <FaDotCircle /><p><strong>Your peers:</strong> we want every cohort to form an effective learning community</p>
        <FaDotCircle /><p><strong>Tech Collective:</strong> we want to minimise dropouts and maximise outcomes</p>
      </div>
      <h3 className="heading">For yourself</h3>
      <p>We want you to know what you're committing to. At 10 hours a week, for 12 months, Tech Collective is a serious commitment. It's important that you be able to make an informed decision about this commitment. That's why we have a lengthy application process to try to give you a good sense of:</p>
      <div className="list" style={{paddingBottom:'0.5rem'}}>
        <FaDotCircle /><p>what will I be learning?</p>
        <FaDotCircle /><p>who will I be learning with?</p>
        <FaDotCircle /><p>is this a manageable commitment?</p>
      </div>
      <p>(If you are finding the application process too onerous, then you might not have enough time right now to commit to Tech Collective.)</p>
      <h3 className="heading">For your peers</h3>
      <p>We want every cohort to form an effective learning community. Because of our peer-driven learning model, it is <strong>critically important</strong> that we have a thorough and rigorous application process. We would be failing our members if we did not surround them with people who have the right commitment, values and attitude.</p>
      <p>That's why we have a lengthy application process where you get to meet your prospective peers, and they get to meet you, to ensure that the cohorts we admit have the best possible odds of forming an effective learning community.</p>
      <h3 className="heading">For Tech Collective</h3>
      <p>We want to minimise dropouts and maximise outcomes. We don't make any money from you upfront. We only succeed if our members succeed. We only make money if:</p>
      <div className="list" style={{paddingBottom:'0.5rem'}}>
        <FaDotCircle /><p>admitted members commit seriously to Tech Collective; and</p>
        <FaDotCircle /><p>every cohort forms an effective learning community.</p>
      </div>
      <p>That's why it's in <strong>your</strong> interest, your <strong>peers'</strong> interest, <strong>and our</strong> interest for there to be a rigorous application process with multiple stages.</p>
    </Modal>
  </Layout>
)

export default ApplyPage
