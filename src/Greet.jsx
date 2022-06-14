import React from "react";
import { Timer } from "./Timer";

export class Greet extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      timer: null,
    };
    const interval = setInterval(() => {
      this.setState({ timer: new Date().toISOString() });
    }, 1000);
    setTimeout(() => {
        clearInterval(interval);
    }, 10000);
  }

  render() {
    return (
      <>
        <h1>Hello {this.props.name}</h1>
        <Timer timer={this.state.timer} />
      </>
    );
  }
}
