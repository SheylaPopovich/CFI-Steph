import React from "react";
import { Container, Form, Row, Col } from "react-bootstrap";

function Contact() {
  return (
    <Container>
      <Row>
        <Col>
          1 of 1
          <Form
            action="https://formsubmit.co/stephanielpopovich@gmail.com"
            method="POST"
            class="shadow p-3 mb-3 bg-body rounded align-self-center w-50"
          >
            <Form.Group
              className="mb-3 justify-content-center "
              controlId="exampleForm.ControlInput1"
            >
              <h1 class="formTitles pb-2">Contact Me</h1>
              <p>Use the form below to give us any feedback, ask questions, or give us topics that you would like discussed on this website.</p>
              <div class="row mb-3">
                <Form.Label className="formTitles col-md-2">Name: </Form.Label>
                <div class="col-md-10">
                  <input type="text" name="name" required class="pb-2" />
                </div>
              </div>
              <div class="row mb-3">
                <Form.Label className="formTitles col-md-2">Email: </Form.Label>
                <div class="col-md-10">
                  <input type="email" name="email" required />
                </div>
              </div>
            </Form.Group>
            <Form.Group className="row mb-3 pe-4 ps-4">
              <textarea
                name="textarea"
                placeholder="Please list any questions, comments, or concerns. Also, if there are any topics you'd like discussed on the site, let us know here."
                class="mb-2 "
              ></textarea>
              <button type="submit" class="btn btn-dark">
                Send
              </button>
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Contact;
