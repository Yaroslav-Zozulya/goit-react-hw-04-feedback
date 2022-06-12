const Feedback = ({
  feedbacks,
  onBtnClick,
  countFeedbacks,
  positiveFeedbacks,
}) => {
  const { good, neutral, bad } = feedbacks;

  return (
    <>
      <div>
        <h1>Please leave feedback</h1>
        <ul>
          <li>
            <button type="button" name="good" onClick={onBtnClick}>
              Good
            </button>
          </li>
          <li>
            <button type="button" name="neutral" onClick={onBtnClick}>
              Neutral
            </button>
          </li>
          <li>
            <button type="button" name="bad" onClick={onBtnClick}>
              Bad
            </button>
          </li>
        </ul>
        <h2>Statistics</h2>
        <ul>
          <li>Good: {good}</li>
          <li>Neutral: {neutral}</li>
          <li>Bad: {bad}</li>
          <li>Total: {countFeedbacks(feedbacks)}</li>
          <li>
            Positive feedbacks:{' '}
            {positiveFeedbacks() ? positiveFeedbacks() + '%' : 0}
          </li>
        </ul>
      </div>
    </>
  );
};

export default Feedback;
