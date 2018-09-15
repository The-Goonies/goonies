import React from 'react';

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      elapsedTime: 0,
      savePoints: [],
      distanceInMiles: 0,
    };
    this.time = null;
    this.startTimer = this.startTimer.bind(this);
    this.stopTimer = this.stopTimer.bind(this);
    this.resetTimer = this.resetTimer.bind(this);
    this.saveTimer = this.saveTimer.bind(this);
    this.onChange = this.onChange.bind(this);
    this.handleSave = this.handleSave.bind(this);
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  startTimer() {
    this.time = setInterval(() => this.setState({
      /* eslint-disable */
      elapsedTime: this.state.elapsedTime + 1, 
      /* eslint-enable */
    }),
    1000);
  }

  stopTimer() {
    clearInterval(this.time);
  }

  resetTimer() {
    const { time } = this.state;
    clearInterval(time);
    this.setState({
      elapsedTime: 0,
      savePoints: [],
    });
  }

  saveTimer() {
    const { savePoints, elapsedTime } = this.state;
    this.setState({
      savePoints: savePoints.concat([elapsedTime]),
    });
  }

  handleSave(e) {
    e.preventDefault();
    const { distanceInMiles } = this.state;
    this.setState({ distanceInMiles });
  }

  render() {
    const timeFormat = sec => (`${Math.floor(sec / 60)}:${(`0${sec % 60}`).slice(-2)}`);
    const Button = props => (<button type="button" {...props} />);
    const {
      elapsedTime,
      savePoints,
      distanceInMiles,
    } = this.state;

    return (
      <div>
        <div className="timer-center">
          <h1 className="timer-format">
            {timeFormat(elapsedTime)}
          </h1>
          <Button className="timer-btns stop-btn" onClick={this.stopTimer}>Stop</Button>
          <Button className="timer-btns start-btn" onClick={this.startTimer}>Start</Button>
          <Button className="timer-btns stop-btn" onClick={this.resetTimer}>Reset</Button>
          <Button className="timer-btns start-btn" onClick={this.saveTimer}>Save</Button>
          <br />
          <div className="timer-text"> Distance: </div>
          <div className="fieldwrapper">
            <input type="text" name="distanceInMiles" value={distanceInMiles} onChange={this.onChange} />
            {/* <button type="button" onClick={this.handleSave}>Save</button> */}
          </div>
        </div>
        <ul className="timer-save">
          {savePoints.map(point => (
            <li className="timer-point" key={point + 1}>
              Time :
              {' '}
              {timeFormat(point)}
              <span className="timer-distance">
                {distanceInMiles / (point / 100)}
                {' '}
                mph
              </span>
            </li>))}
        </ul>
      </div>
    );
  }
}

export default Timer;
