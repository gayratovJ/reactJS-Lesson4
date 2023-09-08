import React, { Component } from "react";

export class LifeCyclePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
    };
    console.log("constructor");
  }
  componentWillMount() {
    console.log("componentWillMount");
  }
  componentDidMount() {
    console.log("componentDidMount");
  }
  componentDidUpdate() {
    console.log("componentDidUpdate");
  }
  shouldComponentUpdate() {
    return false;
  }
  componentWillUnmount() {
    console.log("componentWillUnmount");
  }
  render() {
    console.log("render");
    const { counter } = this.state;
    const decrease = () => {
      this.setState({ counter: counter - 1 });
    };
    const increase = () => {
      this.setState({ counter: counter + 1 });
    };
    return (
      <section>
        <h1>LifeCyclePage {counter}</h1>
        <button onClick={decrease}>-</button>
        <button onClick={increase}>+</button>
      </section>
    );
  }
}

export default LifeCyclePage;
