import React from "react";

class Timer extends React.Component {
  constructor(props) {
    super(props);
    let endTime = new Date(Date.parse(props.endTime));
    this.state = { endTime: endTime, timeString: "" };
    audio = new Audio("https://www.youtube.com/watch?v=GVAF07-2Xic");
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  getTimeRemaining() {
    const total = Date.parse(this.props.endTime) - Date.parse(new Date());
    let seconds = Math.floor((total / 1000) % 60);
    let minutes = Math.floor((total / 1000 / 60) % 60);
    let hours = Math.floor((total / 1000 / 60 / 60) % 24);
    if (total < 0) {
      hours = 0;
      minutes = 0;
      seconds = 0;
      this.ding();
    }
    return {
      hours,
      minutes,
      seconds,
    };
  }
  tick() {
    let { hours, minutes, seconds } = this.getTimeRemaining();
    let timeString =
      (hours > 9 ? hours : "0" + hours) +
      ":" +
      (minutes > 9 ? minutes : "0" + minutes) +
      ":" +
      (seconds > 9 ? seconds : "0" + seconds);
    this.setState({
      timeString: timeString,
    });
  }

  ding() {
    this.audio.play();
  }

  render() {
    return <div>{this.state.timeString}</div>;
  }
}

export default Timer;
