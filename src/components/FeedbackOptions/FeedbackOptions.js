import shortid from 'shortid';
import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ul className={s.buttonList}>
      {options.map(option => (
        <li key={shortid.generate()} className={s.buttonListItem}>
          <button
            type="button"
            name={option}
            onClick={onLeaveFeedback}
            className={s.buttonListBtn}
          >
            {option}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default FeedbackOptions;

FeedbackOptions.prototype = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
};
