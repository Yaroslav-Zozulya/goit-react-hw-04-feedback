import React, { Component } from 'react';
import Container from './Container';
import Statistics from './Statistics';
import FeedbackOptions from './FeedbackOptions';
import Section from './Section';
import Notification from './Notification';

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

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((acc, feedback) => {
      return acc + feedback;
    }, 0);
  };

  countPositiveFeedbackPercentage = () => {
    return parseInt(
      (100 / this.countTotalFeedback(this.state)) * this.state.good
    );
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <>
        <Container>
          <Section title="Please leave feedback">
            <FeedbackOptions
              options={Object.keys(this.state)}
              onLeaveFeedback={this.handleBtnClick}
            />
          </Section>

          <Section title="Statistics">
            {this.countTotalFeedback() ? (
              <Statistics
                good={good}
                neutral={neutral}
                bad={bad}
                total={this.countTotalFeedback()}
                positivePercentage={this.countPositiveFeedbackPercentage()}
              />
            ) : (
              <Notification message="There is no feedbacks" />
            )}
          </Section>
        </Container>
      </>
    );
  }
}

export default App;
