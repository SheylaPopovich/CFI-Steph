import React from "react";
import { Button } from "react-bootstrap";
// import Homepage from "../components/HomePage/Homepage";
import { Link } from "react-router-dom";

function Main() {
  return (
    <Button  variant="btn btn-dark" onClick="/homepage" href="homepage">
      <Link to="/test3">Test 3</Link>
    </Button>
  );
}

export default Main;
