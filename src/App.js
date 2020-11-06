import React, { useState } from 'react'
import Axios from 'axios'
import './App.css';

function App(props) {

  const [joke, setJoke] = useState("");


  const getJoke = () => {
    Axios.get("http://api.icndb.com/jokes/random/count").then((res)=> {
      console.log(res);
      setJoke(res.data.value.joke)
    });
  }

  return (
    <div className="App">
        <br/><br/>
        <button onClick={getJoke}>Get a Joke</button><br/><br/>
        
        <form>
          <label>
            Name:
            <input type="text" placeholder="Enter Your Name" name="name" required />
          </label>
          <br/> <br/>
          <label>
            Surname:
            <input type="text" placeholder="Enter Your SurName" name="surname" required />
          </label>
          <br/> <br/>
          <label>
            Number of Jokes:
            <input type="text" placeholder="Enter Number of Jokes" name="jokes" required />
          </label>
          <br/> <br/>
            <input type="submit" value="Submit" />
        </form>

        <br/><br/>
        {joke} 
    </div>
  );
}

export default App;

