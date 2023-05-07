import {Component} from 'react'

import './index.css'

class EvenOddApp extends Component {
  state = {
    count: 0,
  }

  onIncrement = () => {
    this.setState(prevState => ({
      count: prevState.count + Math.round(Math.random() * 100),
    }))
  }

  render() {
    const {count} = this.state
    return (
      <div className="container">
        <h1 className="title">Count {count}</h1>
        <p>Count is {count % 2 === 0 ? 'Even' : 'Odd'}</p>
        <button className="button" type="button" onClick={this.onIncrement}>
          Increment
        </button>
        <p>*Increase By Random Number Between 0 to 100</p>
      </div>
    )
  }
}
export default EvenOddApp
