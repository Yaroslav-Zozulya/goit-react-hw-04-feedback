import s from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <ul className={s.statisticsList}>
      <li>Good: {good}</li>
      <li>Neutral: {neutral}</li>
      <li>Bad: {bad}</li>
      <li>Total: {total}</li>
      <li>
        Positive feedbacks:{' '}
        {positivePercentage ? positivePercentage + '%' : '0%'}
      </li>
    </ul>
  );
};

export default Statistics;
