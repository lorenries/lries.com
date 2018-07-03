import React from 'react'
import { Runtime, Inspector } from '@observablehq/notebook-runtime'
import notebook from 'history-of-nuclear-explosions'

class nuclearExplosions extends React.Component {
  chartRef = React.createRef()
  dateRef = React.createRef()
  replayRef = React.createRef()

  componentDidMount() {
    Runtime.load(notebook, cell => {
      if (cell.name === 'chart') {
        return new Inspector(this.chartRef.current)
      }
      if (cell.name === 'date') {
        return new Inspector(this.dateRef.current)
      }
      if (cell.name === 'viewof replay') {
        return new Inspector(this.replayRef.current)
      }
    })
  }

  // replay = event => {}

  render() {
    return (
      <div className="observable">
        <div ref={this.replayRef} className="post__link" />
        <div>
          <pre ref={this.dateRef} style={{ marginBottom: 0 }} />
        </div>
        <div ref={this.chartRef} className="observable__chart" />
      </div>
    )
  }
}

export default nuclearExplosions
