import PropTypes from 'prop-types';
import './Feedback.module.css';

export const FeedbackOption = ({ options, onLeaveFeedback }) => {
  const stateArr = Object.keys(options);
  

  return (
    <div>
      {stateArr.map(option => (
        <button
          key={option}
          type="button"
          name={option}
          onClick={() => onLeaveFeedback(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

FeedbackOption.propTypes = {
  options: PropTypes.object,
  onLeaveFeedback: PropTypes.func,
};