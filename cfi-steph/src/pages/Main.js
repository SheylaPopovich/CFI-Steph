import React, { useState } from "react";
import { Button } from 'react-bootstrap';
import HomePage from "../components/HomePage/Homepage";


function Main() {
    const [value, setValue] = useState("");

    const handleChange = e => {
      setValue(e.target.value);
    };
  
    const handleSubmit = e => {
      e.preventDefault();
      alert("you have searched for - " + value);
      // or you can send data to backend
    };
  
    const handleKeypress = e => {
        //it triggers by pressing the enter key
      if (e.keyCode === 13) {
        handleSubmit();
      }
    };

    return (
        // <div>
        //     <h1>LANDING PAGE</h1>
            
        // </div>
        <div>
      <form>
        <input
          value={value}
          onChange={handleChange}
          onKeyPress={handleKeypress}
        />
        <button onClick={handleSubmit} type="submit">
          Submit
        </button>
        <Button variant="btn btn-success" onClick={() => ('/Products') }>Click button to view products</Button>
      </form>
    </div>
    )
}

export default Main


