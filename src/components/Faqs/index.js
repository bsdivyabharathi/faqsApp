// Write your code here.
import FaqItem from '../FaqItem'

import './index.css'

const Faqs = props => {
  const {faqsList} = props

  return (
    <div className="app-container">
      <div className="faqs-container">
        <h1 className="heading">FAQs</h1>
        <ul className="faqs-container">
          {faqsList.map(eachFaqs => (
            <FaqItem faqDetails={eachFaqs} key={eachFaqs.id} />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Faqs
