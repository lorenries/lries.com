import React from 'react'
import { Runtime, Inspector } from '@observablehq/notebook-runtime'
import notebook from 'where-did-people-start-end-capital-bikeshare-trips-in-2017'

class capitalBikeshare extends React.Component {
  startingRidesRef = React.createRef()
  // startingMapRef = React.createRef()
  endingRidesRef = React.createRef()
  // endingMapRef = React.createRef()
  hourRef = React.createRef()
  timeRef = React.createRef()

  componentDidMount() {
    Runtime.load(notebook, cell => {
      if (cell.name === 'starting') {
        return new Inspector(this.startingRidesRef.current)
      }
      // if (cell.name === 'startingMap') {
      //   return new Inspector(this.startingMapRef.current)
      // }
      // if (cell.name === 'endingMap') {
      //   return new Inspector(this.endingMapRef.current)
      // }
      if (cell.name === 'ending') {
        return new Inspector(this.endingRidesRef.current)
      }
      if (cell.name === 'viewof hour') {
        return new Inspector(this.hourRef.current)
      }
      if (cell.name === 'time') {
        return new Inspector(this.timeRef.current)
      }
    })
  }

  render() {
    return (
      <div className="observable">
        <div ref={this.hourRef} />
        <div ref={this.timeRef} />
        <div ref={this.startingRidesRef} style={{ width: '100%' }} />
        <div ref={this.endingRidesRef} style={{ width: '100%' }} />
      </div>
    )
  }
}

export default capitalBikeshare
