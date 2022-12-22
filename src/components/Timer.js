import React from "react";

// function Timer(props) {
//   // We need ref in this, because we are dealing
//   // with JS setInterval to keep track of it and
//   // stop it when needed
//   const Ref = useRef(null);

//   // The state for our timer
//   const [timer, setTimer] = useState("00:00:00");

//   const getTimeRemaining = (e) => {
//     const total = Date.parse(e) - Date.parse(new Date());
//     const seconds = Math.floor((total / 1000) % 60);
//     const minutes = Math.floor((total / 1000 / 60) % 60);
//     const hours = Math.floor((total / 1000 / 60 / 60) % 24);
//     return {
//       total,
//       hours,
//       minutes,
//       seconds,
//     };
//   };

//   const updateTimer = (e) => {
//     let { total, hours, minutes, seconds } = getTimeRemaining(e);
//     if (total >= 0) {
//       // update the timer
//       // check if less than 10 then we need to
//       // add '0' at the beginning of the variable
//       setTimer(
//         (hours > 9 ? hours : "0" + hours) +
//           ":" +
//           (minutes > 9 ? minutes : "0" + minutes) +
//           ":" +
//           (seconds > 9 ? seconds : "0" + seconds)
//       );
//     }
//   };

//   const runTimer = (e) => {
//     // If you adjust it you should also need to
//     // adjust the Endtime formula we are about
//     // to code next
//     setTimer("00:" + (props.time > 9 ? props.time : "0" + props.time) + ":00");

//     // If you try to remove this line the
//     // updating of timer Variable will be
//     // after 1000ms or 1sec
//     if (Ref.current) clearInterval(Ref.current);
//     const id = setInterval(() => {
//       updateTimer(e);
//     }, 1000);
//     Ref.current = id;
//   };

//   const getDeadTime = () => {
//     let deadline = new Date();

//     // This is where you need to adjust if
//     // you entend to add more time
//     deadline.setMinutes(props.time);
//     return deadline;
//   };

//   // We can use useEffect so that when the component
//   // mount the timer will start as soon as possible

//   // We put empty array to act as componentDid
//   // mount only
//   useEffect(() => {
//     runTimer(getDeadTime());
//   }, []);

//   return <span> {timer} </span>;
// }

// export default Timer;

class Timer extends React.Component {
  constructor(props) {
    super(props);
    let end = new Date();
    end.setMinutes(end.getMinutes() + parseInt(props.time));
    this.state = { endTime: end, timeString: "" };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  getTimeRemaining() {
    const total = Date.parse(this.state.endTime) - Date.parse(new Date());
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / 1000 / 60 / 60) % 24);

    return {
      total,
      hours,
      minutes,
      seconds,
    };
  }

  tick() {
    let { total, hours, minutes, seconds } = this.getTimeRemaining();
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

  render() {
    return <div>{this.state.timeString}</div>;
  }
}

export default Timer;
