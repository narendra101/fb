import {Component} from 'react'
import './index.css'
class Feedback extends Component {
  state = {
    notChecked: true,
  }
  check = () => {
    this.setState(prev => ({notChecked: !prev.notChecked}))
  }
  renderAskFor() {
    const {feedbackData} = this.props
    const {emojis} = feedbackData
    return (
      <>
        <h1 className="heading">
          How satisfied are you with our customer support performance?
        </h1>
        <div className="cont">
          {emojis.map(emoji => {
            const {emojiUrl, name} = emoji
            return (
              <div>
                <img
                  onClick={this.check}
                  className="image"
                  src={emojiUrl}
                  alt={name}
                />
                <p>{emoji.name}</p>
              </div>
            )
          })}
        </div>
      </>
    )
  }
  renderThanks() {
    const {feedbackData} = this.props
    const {loveEmojiUrl} = feedbackData
    return (
      <div className="love-container">
        <img src={loveEmojiUrl} className="image" alt="love" />
        <h1>Thank You!</h1>
        <p>
          We’ll use your feedback to improve our customer support performance.
        </p>
      </div>
    )
  }
  render() {
    const {notChecked} = this.state
    return (
      <div className="main">
        <div className="sub">
          {notChecked ? this.renderAskFor() : this.renderThanks()}
        </div>
      </div>
    )
  }
}
export default Feedback
