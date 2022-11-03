// Write your code here
import {Component} from 'react'
import './index.css'

class FruitsCounter extends Component {
  state = {mango: 0, banana: 0}

  onIncreaseMango = () => {
    this.setState(prevState => ({mango: prevState.mango + 1}))
    console.log('Clicked')
  }

  onIncreaseBanana = () => {
    this.setState(prevState => ({banana: prevState.banana + 1}))
  }

  render() {
    const {mango} = this.state
    const {banana} = this.state
    return (
      <div className="bg-container">
        <div className="fruits-bg-container">
          <h1 className="main-header">
            Bob ate <span className="counter"> {mango} </span>Mangos{' '}
            <span className="counter"> {banana}</span> Bananas
          </h1>
          <div className="fruit-container">
            <div className="img-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mango"
                className="image"
              />
              <button
                type="button"
                className="btn"
                onClick={this.onIncreaseMango}
              >
                Eat Mango
              </button>
            </div>
            <div className="img-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="mango"
                className="image"
              />
              <button
                type="button"
                className="btn"
                onClick={this.onIncreaseBanana}
              >
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default FruitsCounter
