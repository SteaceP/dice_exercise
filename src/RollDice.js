import React, { Component } from "react";
import Die from "./Die";
import "./RollDice.css";

class RollDice extends Component {
  static defaultProps = {
    die: [
      ["fas fa-dice-one"],
      ["fas fa-dice-two"],
      ["fas fa-dice-three"],
      ["fas fa-dice-four"],
      ["fas fa-dice-five"],
      ["fas fa-dice-six"],
    ],
  };

  state = { diceOne: 0, diceTwo: 0 };

  handleRand = () => {
    let rand1 = Math.floor(Math.random() * 6);
    let rand2 = Math.floor(Math.random() * 6);
    this.setState({ diceOne: rand1, diceTwo: rand2 });
  };

  render() {
    return (
      <>
        <div className="dice">
          <Die face={[...this.props.die]} random={this.state.diceOne} />
          <Die face={[...this.props.die]} random={this.state.diceTwo} />
        </div>
        <button className="button" onClick={this.handleRand}>
          Roll Dice...
        </button>
      </>
    );
  }
}

export default RollDice;
