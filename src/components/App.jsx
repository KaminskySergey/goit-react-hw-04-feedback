import React from 'react';

import Section from './Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics'
import Notification from './Notification/Notification';
import { useState } from 'react';




const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  

  
  const onLeaveFeedback = (evt) => {
const {name} = evt.target;

switch (name) {
  case 'good':
    setGood(pS => pS + 1)
    break;
  case 'neutral':
    setNeutral(pS => pS + 1)
    break;
  case 'bad': 
    setBad(pS => pS + 1)
    break;
    default:
      return;
}
}

const countTotalFeedback = () => {
  const totalFeedback = good + neutral + bad;
  return totalFeedback;
}

const countPositiveFeedbackPercentage = () => {
  const total = ((100 / countTotalFeedback()) * good).toFixed()
  return total;
}
  
  
  return (
        <>
        <Section title="Please leave feedback">
        <FeedbackOptions options={{good, neutral, bad}} onLeaveFeedback={onLeaveFeedback}/>
        </Section>
        
         
         {countTotalFeedback() > 0 && 
        <Section title="Statistics" children>
        <Statistics good={good} neutral={neutral} bad={bad} total={countTotalFeedback()} positivePercentage={countPositiveFeedbackPercentage()}/>
        </Section>
        }
        
        {countTotalFeedback() === 0 &&
        <Notification message="No feedback given"/>
        } 
        </>
        )
}



export default App;


