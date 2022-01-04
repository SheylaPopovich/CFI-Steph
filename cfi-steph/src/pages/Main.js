import React from "react";
import { Button } from "react-bootstrap";
import Homepage from "../components/HomePage/Homepage";

function Main() {
 

  return (
    <Button variant="btn btn-success" onClick={Homepage} href="#homepage">
      Click button to view products
    </Button>
  );
}

export default Main;
