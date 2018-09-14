import React from 'react';

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      elapsedTime: 0,
      savePoints: [],
    };
    this.time = null;
    this.startTimer = this.startTimer.bind(this);
    this.stopTimer = this.stopTimer.bind(this);
    this.resetTimer = this.resetTimer.bind(this);
    this.saveTimer = this.saveTimer.bind(this);
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

  render() {
    const timeFormat = sec => (`${Math.floor(sec / 60)}:${(`0${sec % 60}`).slice(-2)}`);
    const Button = props => (<button type="button" {...props} />);
    const { elapsedTime, savePoints } = this.state;
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
        </div>
        <ul className="timer-save">
          {savePoints.map(point => <li className="timer-point" key={point + 1}>{timeFormat(point)}</li>)}
        </ul>
      </div>
    );
  }
}

export default Timer;
