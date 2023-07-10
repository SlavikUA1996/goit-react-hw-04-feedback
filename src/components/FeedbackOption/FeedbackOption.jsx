import PropTypes from 'prop-types';
import './Feedback.module.css';

export const FeedbackOption = ({ options, updateFeedback }) => {
  // const stateArr = Object.keys(options);
  

  return (
    <div>
      {options.map(option => (
        <button
          key={option}
          type="button"
          name={option}
          onClick={updateFeedback}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

FeedbackOption.propTypes = {
  // options: PropTypes.object,
  // onLeaveFeedback: PropTypes.func,
   options: PropTypes.array,
  updateFeedback: PropTypes.func,
};