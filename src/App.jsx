import { useState } from 'react';
import Die from './component/Die.jsx';
import { nanoid } from 'nanoid';

const App = () => {
  const allNewDice = () => {
    const newDice = [];
    for (let i = 0; i < 10; i++) {
      newDice.push({
        id: nanoid(),
        value: Math.ceil(Math.random() * 6),
        isHeld: false,
      });
    }
    return newDice;
  };

  const [dice, setDice] = useState(allNewDice());

  const rollDice = () => {
    setDice(allNewDice());
  };

  const holdDice = (id) => {
    setDice((oldDice) =>
      oldDice.map((die) =>
        die.id === id ? { ...die, isHeld: !die.isHeld } : die
      )
    );
  };

  const diceElements = dice.map((die) => (
    <Die
      holdDice={() => holdDice(die.id)}
      key={die.id}
      value={die.value}
      isHeld={die.isHeld}
    />
  ));

  return (
    <main>
      <div className="dice-container">{diceElements}</div>
      <button className="rollDice" onClick={rollDice}>
        Roll
      </button>
    </main>
  );
};

export default App;
