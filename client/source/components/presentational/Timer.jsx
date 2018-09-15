import React from 'react';

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      elapsedTime: 0,
      savePoints: [],
      distanceInMiles: 0,
      trailDistance: 0,
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
      trailDistance,
    } = this.state;

    return (
      <div>
        <div className="timer-center">
          <h1 className="timer-format">
            {timeFormat(elapsedTime)}
          </h1>
          <Button className="timer-btns start-btn" onClick={this.startTimer}>Start</Button>
          <Button className="timer-btns stop-btn" onClick={this.stopTimer}>Stop</Button>
          <Button className="timer-btns start-btn" onClick={this.saveTimer}>Save</Button>
          <Button className="timer-btns stop-btn" onClick={this.resetTimer}>Reset</Button>
          <br />
          <div className="fieldwrapper">
            <div className="timer-text"> Distance Hiked: </div>
            <input className="distance-calculator" type="text" name="distanceInMiles" value={distanceInMiles} onChange={this.onChange} />
            <div className="timer-text"> Total: </div>
            <input className="distance-calculator" type="text" name="trailDistance" value={trailDistance} onChange={this.onChange} />
          </div>
        </div>
        <ul className="timer-save">
          {savePoints.map(point => (
            <li className="timer-point" key={point + 1}>
              Time :
              {' '}
              {timeFormat(point)}
              <span className="timer-distance">
                {/* Average speed formula: Distance / time. Note the time conversion: Hour = (seconds / 3600)  */}
                { Math.floor(distanceInMiles / (point / 3600)) }
                {' '}
                MPH
              </span>
              {/* Projected time formula: Total Distance / Avg Speed = Time to destination */}
              <div>
                Projected Time:
                {' '}
                { Math.floor(trailDistance / Math.floor(distanceInMiles / (point / 3600))) }
                {' '}
                Hours
              </div>
            </li>))}
        </ul>
      </div>
    );
  }
}

export default Timer;
