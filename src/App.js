import React, { useState } from 'react';
import './App.css';

function App() {
  const [dogs, setDogs] = useState([
    { name: 'Buddy', breed: 'Golden Retriever', age: 2, img: 'https://images.dog.ceo/breeds/retriever-golden/n02099601_280.jpg' },
    { name: 'Max', breed: 'German Shepherd', age: 4, img: 'https://images.dog.ceo/breeds/germanshepherd/n02106662_18405.jpg' },
    { name: 'Bailey', breed: 'Labrador Retriever', age: 1, img: 'https://images.dog.ceo/breeds/labrador/n02099712_5787.jpg' },
    { name: 'Daisy', breed: 'Beagle', age: 3, img: 'https://images.dog.ceo/breeds/beagle/n02088364_2106.jpg' },
  ]);

  const [selectedDog, setSelectedDog] = useState(null);

  const selectDog = (dog) => {
    setSelectedDog(dog);
  }

  const deselectDog = () => {
    setSelectedDog(null);
  }

  return (
    <div className="App">
      <h1>Dog Adoption Page</h1>
      <div className="dogs-container">
        {dogs.map((dog, index) => (
          <div key={index} className="dog-card" onClick={() => selectDog(dog)}>
            <img src={dog.img} alt={dog.name} />
            <h3>{dog.name}</h3>
            <p>{dog.breed}</p>
            <p>{dog.age} years old</p>
          </div>
        ))}
      </div>
      {selectedDog && (
        <div className="selected-dog">
          <img src={selectedDog.img} alt={selectedDog.name} />
          <h2>{selectedDog.name}</h2>
          <p>{selectedDog.breed}</p>
          <p>{selectedDog.age} years old</p>
          <button onClick={deselectDog}>Back to List</button>
        </div>
      )}
    </div>
  );
}

export default App;