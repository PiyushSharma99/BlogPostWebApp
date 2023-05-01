import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import {  setTitle, setCategory, setDescription } from "../store/index";


function NewBlog() {

  const blogData = useSelector(state => state.blogData);
  const [validated, setValidated] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleTitle = (e) => {
    dispatch(setTitle(e.target.value));
  };

  const handleCategory = (e) => {
    dispatch(setCategory(e.target.value));
  };

  const handleDescription = (e) => {
    dispatch(setDescription(e.target.value));
  };

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    

    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    event.preventDefault();
    setValidated(true);
    navigate("/blogs");
  };

  return (
    <div className="center">
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Form.Group as={Col} md="4" controlId="validationCustom01">
            <Form.Label>Title</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Enter Title"
              value={blogData.title}
              // onChange={handleChange}
              onChange={(e) => handleTitle(e)}
              // defaultValue="Trip to ..."
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
              Please provide title
            </Form.Control.Feedback>
          </Form.Group>
          <br></br>
          <Form.Group as={Col} md="4" controlId="validationCustom02">
            <Form.Label>Category</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Enter category"
              value={blogData.category}
              onChange={(e) => handleCategory(e)}
              // defaultValue="Vacation"
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
              Please provide category
            </Form.Control.Feedback>
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} md="6" controlId="validationCustom03">
            <Form.Label>Description</Form.Label>
            <Form.Control
              type="text"
              placeholder="Describe about your experience..."
              value={blogData.category}
              onChange={(e) => handleDescription(e)}
              required
            />
            <Form.Control.Feedback type="invalid">
              Please provide some story :(
            </Form.Control.Feedback>
          </Form.Group>
        </Row>

        <Button type="submit">Submit</Button>
      </Form>
    </div>
  );
}

export default NewBlog;
