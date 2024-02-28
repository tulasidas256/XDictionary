import './App.css';
import { useEffect, useState } from 'react';

const dictionary = [

  { word: "React", meaning: "A JavaScript library for building user interfaces." },

  { word: "Component", meaning: "A reusable building block in React." },

  { word: "State", meaning: "An object that stores data for a component." }

]


function App() {

  const [inputText, setinputText] = useState("");
  const [result, setResult] = useState("");
  //const [show, setShow] = useState(false);

  const handleChange = (e) => {
    let text = e.target.value.toLowerCase();
    setinputText(text);
  };

  const handleSearch = () => {
    let word = inputText.toLocaleLowerCase();
    let correctInput = dictionary.filter((itm) =>
      itm.word.toLocaleLowerCase() === word
    );
    console.log('<correctInput>',correctInput)

    if (correctInput.length === 0) {
      setResult("Word not found in the dictionary.");
    } else {
      console.log('Defination =>',correctInput[0].meaning);
      setResult(correctInput[0].meaning);
    }
  };


  useEffect(() => {
  }, []);

  useEffect(() => {
    console.log("render");
  }, [result]);



  return (
    <div>
      <h1>Dictionary App</h1>
      <input type='text'
        placeholder='Search for a word...'
        onChange={handleChange}
        required />
      <button onClick={handleSearch}>Search</button>
      <br />
      <span className='def'>Definition:</span>
      <div>
        <p>{result}</p>
      </div>
    </div>
  );

}

export default App;
