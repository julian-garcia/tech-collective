import React, { useState, Fragment } from "react"
import { Link } from "gatsby"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faFilter } from '@fortawesome/free-solid-svg-icons'
import Modal, { showModalById } from '../components/modal'
import Layout from "../components/layout"
import SEO from "../components/seo"
import faqData from "../../content/faqs.json"

const FaqsPage = () => {
  const [category, setCategory] = useState('All');
  const filteredFaqs = faqData.content.filter(faq => category==='All' || faq.tags.includes(category));

  function applyFilter(dropDown) {
    setCategory(dropDown.target.options[dropDown.target.selectedIndex].text);
  }

  return (
    <div className="faqs">
      <Layout>
        <SEO title="FAQs" />
        <div className="section-grid desktop-move-down">
          <div className="block-container dark tablet-landscape-up"></div>
          <div className="block-container dark">
            <FontAwesomeIcon icon={faFilter} className="block-icon" style={{margin:'0 1rem'}} />
            <select className="faqs-filter" name="filter" id="filter" onChange={applyFilter}>
              <option value="">All</option>
              <option value="">Applying</option>
              <option value="">Bootcamps</option>
              <option value="">Comparisons</option>
              <option value="">Curriculum</option>
              <option value="">Dates</option>
              <option value="">Effectiveness</option>
              <option value="">Employment</option>
              <option value="">Location</option>
              <option value="">Outreach</option>
              <option value="">Payments</option>
              <option value="">Programme</option>
              <option value="">Referrals</option>
              <option value="">Self-study</option>
              <option value="">Sharing</option>
            </select>
          </div>
        </div>
        <div className="section-grid">
          {
            filteredFaqs.map((data, index) => {
              return <Fragment key={index}>
                {index % 3 === 0 && <div className="block-container dark tablet-landscape-up" key={`faq.i.${index}`}></div>}
                <div className="block-container dark" key={`faq.ii.${index}`}>
                  <div className="block primary" onKeyPress={() => {}} onClick={() => showModalById(`${index}`)} role="button" tabIndex="0">
                    <div className="block-icon-container primary">
                      <FontAwesomeIcon icon={faPlus} className="block-icon" />
                    </div>
                    <h3 className="heading">{data.question}</h3>
                    <div className="faqs-tags">
                      {data.tags.map((tag, i) => {
                        return <span className="faqs-tag" key={`faq.${index}tag${i}`}>{tag}</span>
                      })}
                    </div>
                  </div>
                </div>
                <Modal id={`${index}`} key={`modal.${index}`}>
                  <h2 className="heading">{data.question}</h2>
                  {data.answer.map((paragraph, i) => (<p dangerouslySetInnerHTML={{ __html: paragraph }} key={`faq.${index}p${i}`}></p>))}
                  {data.link && <a href={data.link} target="_blank" rel="noreferrer">Read more</a>}
                  {data.internalLink && <Link to={data.internalLink}>Read more</Link>}
                </Modal>
                {(index + 1) % 3 === 0 && <div className="block-container dark tablet-landscape-up" key={`faq.iii.${index}`}></div>}
              </Fragment>
            })
          }
        </div>
      </Layout>
    </div>
  )
}

export default FaqsPage
