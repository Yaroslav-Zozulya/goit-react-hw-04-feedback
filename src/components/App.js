import { useState } from 'react';
import Container from './Container';
import Statistics from './Statistics';
import FeedbackOptions from './FeedbackOptions';
import Section from './Section';
import Notification from './Notification';

const App = () => {
  const [feedbacks, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const handleBtnClick = e => {
    const { name } = e.currentTarget;
    setFeedback(prevState => {
      return { ...prevState, [name]: prevState[name] + 1 };
    });
  };

  const countTotalFeedback = () => {
    return Object.values(feedbacks).reduce((acc, feedback) => {
      return acc + feedback;
    }, 0);
  };

  const countPositiveFeedbackPercentage = () => {
    return parseInt((100 / countTotalFeedback(feedbacks)) * feedbacks.good);
  };

  const { good, neutral, bad } = feedbacks;
  return (
    <>
      <Container>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(feedbacks)}
            onLeaveFeedback={handleBtnClick}
          />
        </Section>

        <Section title="Statistics">
          {countTotalFeedback() ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback()}
              positivePercentage={countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="There is no feedbacks" />
          )}
        </Section>
      </Container>
    </>
  );
};

export default App;
