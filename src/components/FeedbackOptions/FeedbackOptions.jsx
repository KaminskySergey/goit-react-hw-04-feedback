
import PropTypes from 'prop-types';
import { ListButton, ItemButton, Button } from './FeedbackOptions.styled';

const FeedbackOptions = ({options, onLeaveFeedback}) => {
    console.log(options);
    const optionsKeys = Object.keys(options)
    return (
        <ListButton>
        {optionsKeys.map(el => (
            <ItemButton key={el}>
                <Button name={el} type="button" onClick={onLeaveFeedback}>{el}</Button>
            </ItemButton>
        ))}
        </ListButton>
    )
}

FeedbackOptions.propTypes = {
    option: PropTypes.arrayOf(PropTypes.string),
    onLeaveFeedback: PropTypes.func.isRequired,
}

export default FeedbackOptions;