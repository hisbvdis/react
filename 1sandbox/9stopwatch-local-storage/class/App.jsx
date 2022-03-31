import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      isLaunched: false,
      timerId: null,
    }
  }

  componentDidMount = () => {
    if (localStorage.getItem("count")) {
      this.setState({count: Number(localStorage.getItem("count"))});
    }
    if (localStorage.getItem("isLaunched") === "true") {
      this.startTimer();
    }
  }

  componentDidUpdate = () => {
    localStorage.setItem("count", String(this.state.count));
  }

  componentWillUnmount = () => {
    this.stopTimer();
  }

  // Запустить таймер
  startTimer = () => {
    const timerId = setInterval(() => {
      this.setState({count: this.state.count + 1});
    }, 1000)

    this.setState({isLaunched: true});
    this.setState({timerId});

    localStorage.setItem("isLaunched", "true");
  }

  
  // Остановить таймер
  stopTimer = () => {
    clearInterval(this.state.timerId);

    this.setState({isLaunched: false});
    localStorage.setItem("isLaunched", "false");
  }


  // Сбросить таймер
  resetTimer = () => {
    this.setState({count: 0});
    this.stopTimer();
  }

  render() {
    return (<>
      <h1>{this.state.count}</h1>
      {!this.state.isLaunched
        ? <button onClick={this.startTimer}>Start</button>
        : <button onClick={this.stopTimer}>Stop</button>}
      <button onClick={this.resetTimer}>Reset</button>
    </>)
  }
}

export default App;