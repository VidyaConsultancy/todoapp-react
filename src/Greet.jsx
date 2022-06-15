import React from "react";
import { Timer } from "./Timer";

export class Greet extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      timer: null,
      timer2: null,
      timer3: null,
      timer4: null,
    };
    this.anotherproperty = "somevalue";
    this.updateAnotherProperty();
  }

  updateAnotherProperty() {
    this.anotherproperty = "some another value";
    // this.state = { timer: new Date().toISOString() }
    this.setState({
      timer: new Date().toISOString(),
      timer2: new Date().toISOString(),
    });
  }

  render() {
    console.log("render method");
    return (
      <>
        <h1>Hello {this.props.name}</h1>
        <Timer timer={this.state.timer} />
      </>
    );
  }
}
