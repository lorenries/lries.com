import React from 'react'
import { confetti } from 'dom-confetti'

export default class Confetti extends React.Component {
  constructor(props) {
    super(props)
    this.confetti = null
    this.partyTime = this.partyTime.bind(this)
  }

  partyTime = () => {
    confetti(this.confetti)
  }

  render() {
    return (
      <span
        ref={el => (this.confetti = el)}
        onClick={this.partyTime}
        style={{ cursor: 'pointer', position: 'relative', userSelect: 'none' }}
        role="button"
        aria-label="Clicking creates a confetti animation"
        title="Click me"
      >
        🎉
      </span>
    )
  }
}
