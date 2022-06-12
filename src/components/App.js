import React, { Component } from 'react';
import Container from './Container';
import Feedback from './Feedback';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleBtnClick = e => {
    const { name } = e.currentTarget;
    this.setState(prevState => {
      return { [name]: prevState[name] + 1 };
    });
  };

  countTotalFeedback = ({ good, neutral, bad }) => {
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    return parseInt(
      (100 / this.countTotalFeedback(this.state)) * this.state.good
    );
  };

  render() {
    return (
      <Container>
        <Feedback
          feedbacks={this.state}
          onBtnClick={this.handleBtnClick}
          countFeedbacks={this.countTotalFeedback}
          positiveFeedbacks={this.countPositiveFeedbackPercentage}
        />
      </Container>
    );
  }
}

export default App;
