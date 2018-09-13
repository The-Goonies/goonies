import React from 'react';

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      elapsedTime: 0,
      stop: null,
      time: null,
    };
  }

  startTimer() {
    this.time = setInterval(() => this.setState({
      elapsedTime: this.state.elapsedTime + 1,
    }),
    1000);
  }

  stopTimer() {
    clearInterval(this.time);
    this.setState({
      stop: this.time
    });
  }

  resetTimer() {
    clearInterval(this.time);
    this.setState({
      elapsedTime: 0,
    });
  }
 
  render() {
    const timeFormat = (sec) => { return `${Math.floor(sec / 60)}:${(`0${sec % 60}`).slice(-2)}`; };

    const Button = (props) => { return <button type="button" {...props} />}
    return (
      <div>
        <div>
          <h1>
            {timeFormat(this.state.elapsedTime)} 
          </h1>      
            <Button onClick={this.startTimer.bind(this)}>Start</Button>
            <Button onClick={this.stopTimer.bind(this)}>Stop</Button>
            <Button  onClick={this.resetTimer.bind(this)}>Reset</Button>
        </div>
      </div>
    );
  }
}

export default Timer;
