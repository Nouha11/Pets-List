import Button from '@restart/ui/esm/Button'
import React, { useState } from 'react'
import PetsList from './Components/PetsList'

function App() {
  let [petsList, setPetsList] = useState([
    {Img:'../cat.jpeg' , Name:'Flouff', Race:'Fluffy',Type:'Cat',Location:'Sousse',Id:1},
    {Img:'../cat2.jpeg' , Name:'Orangy', Race:'Orange Cat',Type:'Cat',Location:'Tunis',Id:2},
    {Img:'../dog.jpeg' , Name:'Roxie', Race:'Brownie',Type:'Dog',Location:'Beja',Id:3},
    {Img:'../dog2.jpg' , Name:'Sonne', Race:'Golden',Type:'Dog',Location:'Bizerte',Id:4}
  ]);
  const [inputText, setInputText] = useState("");
  const [fitteredPets, setFitteredPets] = useState([]);

  const inputTextHandler = (e) => {
    setInputText(e.target.value);
};



const searchHandler = () => {  
  setFitteredPets(petsList.filter(
    (el) => (
      (el.Type.toUpperCase().includes(inputText)) || (el.Type.toLowerCase().includes(inputText)) ||
      (el.Race.toUpperCase().includes(inputText)) || (el.Race.toLowerCase().includes(inputText)) ||
      (el.Location.toUpperCase().includes(inputText)) || (el.Location.toLowerCase().includes(inputText))
      )
      ))
};

  return (
    <div className="App">
      
      <label>
      <h4> Search for a specific Pet: </h4>
      <br />
      <input value={inputText} onChange={inputTextHandler} type="text" />
      <Button onClick={() => {
          searchHandler()}} variant="warning" className="btn-warning" type="submit">Search</Button>
      </label>

      <div>
        
      <PetsList  
      petsList={petsList}
      fitteredPets={fitteredPets}
      setFitteredPets={setFitteredPets}
      inputText={inputText}
      />
      </div>
    </div>
  );
}

export default App;
