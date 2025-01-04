import { useState } from 'react';
import Button from './Button';
import StatisticLine from './StatisticLine';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button handleClick={() => setGood(good + 1)} text="Good" />
      <Button handleClick={() => setNeutral(neutral + 1)} text="Neutral" />
      <Button handleClick={() => setBad(bad + 1)} text="Bad" />

      {good + neutral + bad > 0 && (
        <div>
          <h2>Statistics</h2>
          <table>
            <tbody>
              <tr>
                <td>Good</td>
                <td>{good}</td>
              </tr>
              <tr>
                <td>Neutral</td>
                <td>{neutral}</td>
              </tr>
              <tr>
                <td>Bad</td>
                <td>{bad}</td>
              </tr>
              <tr>
                <td>Total</td>
                <td>{good + neutral + bad}</td>
              </tr>
              <tr>
                <td>Average</td>
                <td>{(good - bad) / (good + neutral + bad)}</td>
              </tr>
              <tr>
                <td>Positive</td>
                <td>{(good / (good + neutral + bad)) * 100}</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default App;
