import React from 'react'
import Link from './Link'

class Contact extends React.Component {
  constructor(props) {
    super(props)
    this.state = { email: '' }
  }
  componentDidMount() {
    this.setState({ email: 'loren@lries.com' })
  }
  render() {
    return (
      <section className="contact">
        <h3 className="contact__title">Get In Touch</h3>
        <p>
          You can reach me at {this.state.email}. My public key is on{' '}
          <Link to="https://keybase.io/lries">Keybase</Link>.
        </p>
      </section>
    )
  }
}

export default Contact
