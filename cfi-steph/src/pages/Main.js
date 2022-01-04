import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Homepage from "../components/HomePage/Homepage";

function Main() {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("you have searched for - " + value);
    // or you can send data to backend
  };

  return (
    <Button variant="btn btn-success" onClick={Homepage} href="/homepage">
      Click button to view products
    </Button>
  );
}

export default Main;
