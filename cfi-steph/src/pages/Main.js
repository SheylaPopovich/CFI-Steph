import React from "react";
import { Button } from "react-bootstrap";
import Homepage from "../components/HomePage/Homepage";
import { useHistory } from 'react-router-dom';

function Main() {
  return (
    <Button variant="btn btn-success" onClick="/homepage" href="/homepage">
      Click button to view products
    </Button>
  );
}

export default Main;
