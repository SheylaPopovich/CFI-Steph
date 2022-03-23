import React from "react";
import { Button } from "react-bootstrap";
// import Homepage from "../components/HomePage/Homepage";

function LandingPage() {
  return (
    <Button variant="btn btn-success" onClick="/#contact" href="/contact">
      Click button to view products
    </Button>
  );
}

export default LandingPage