import {Component} from 'react'
import './index.css'
import FaqItem from '../FaqItem'

class Faqs extends Component {
  state = {isFaqHideList: []}

  onIcon = id => {
    const {isFaqHideList} = this.state
    if (isFaqHideList.includes(id)) {
      const updatedFaqHideList = isFaqHideList.filter(each => each !== id)
      this.setState({isFaqHideList: updatedFaqHideList})
    } else {
      this.setState({isFaqHideList: [...isFaqHideList, id]})
    }
  }

  render() {
    const {faqsList} = this.props
    const {isFaqHideList} = this.state
    return (
      <div className="main-container">
        <div className="faqs-card">
          <h1 className="heading">FAQs</h1>
          <ul>
            {faqsList.map(eachFaq => (
              <FaqItem
                faqDetails={eachFaq}
                isFaqHideList={isFaqHideList}
                onIcon={this.onIcon}
                key={eachFaq.id}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Faqs
