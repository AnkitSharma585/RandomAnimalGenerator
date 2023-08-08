import { useState } from 'react';
import AnimalShow from './AnimalShow';

function getRandomAnimals() {
  const animals = ['cat', 'dog', 'horse', 'gator', 'cow', 'bird'];
  return animals[Math.floor(Math.random() * animals.length)];
}

function App() {
  const [animals, setAnimals] = useState([]);

  const handleClick = () => {
    setAnimals([...animals, getRandomAnimals()]);
  };

  const renderedAnimals = animals.map((type, i) => {
    return <AnimalShow type={type} key={i} />;
  });
  return (
    <div>
      <h1>Random Animal Generator</h1>
      <button className='generateBtn' onClick={handleClick}>
        Add Animals
      </button>
      <div>{renderedAnimals}</div>
    </div>
  );
}
export default App;
