import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { v4 as uuid } from "uuid";
import { addBlog } from "../store/blogSlice";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import React, { useState } from "react";
import Card from "react-bootstrap/Card";

const AddPage = () => {
  const [validated, setValidated] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate("/");

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    console.log("========form=========");
    console.log(form.checkValidity());

    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    event.preventDefault();
    setValidated(true);

    if (form.checkValidity() === true) {
      const id = uuid();
      const title = event.target.title.value;
      const category = event.target.category.value;
      const description = event.target.description.value;
      console.log(id);
      console.log(title);
      console.log(category);
      console.log(description);

      dispatch(addBlog({ id, title, category, description }));
      // redirect to home page
      navigate("/");
    }

    // const id = uuid();
    // const title = event.target.title.value;
    // const category = event.target.category.value;
    // const description = event.target.description.value;
    // console.log(id);
    // console.log(title);
    // console.log(category);
    // console.log(description);

    // dispatch(addBlog({ id, title, category, description }));
    // // redirect to home page
  };

  return (
    <>
      <Button
        type="button"
        bg="light"
        variant="dark"
        onClick={() => navigate("/")}
        style={{
          justifyContent: "center",
          position: "relative",
          top: "50%",
          left: "10%",
          marginBottom: "25px",
        }}
      >
        {/* <Link to="/" style={{ textDecoration: "none" }}> */}
        BACK
        {/* </Link> */}
      </Button>
      <Card
        border="primary"
        // bg={colors[index % colors.length].toLowerCase()}
        // key={blogUnit.id}
        text={"dark"}
        style={{
          width: "50rem",
          justifyContent: "center",
          position: "relative",
          top: "50%",
          left: "20%",
          marginBottom: "25px",

          className: "mb-2",
        }}
      >
        <Card.Header>
          <h2 style={{ justifyContent: "center", textAlign: "center" }}>
            Add Blog
          </h2>
        </Card.Header>

        <Card.Body>
          {/* <Card.Title>{blogUnit.title}</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
            {blogUnit.description}
          </Card.Text> */}
          <div className="mx-auto col-10 col-md-8 col-lg-6">
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
              <Row className="mb-3">
                <Form.Group as={Col} md="10" controlId="title">
                  <Form.Label>Title</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Enter Title"
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  <Form.Control.Feedback type="invalid">
                    Please provide title
                  </Form.Control.Feedback>
                </Form.Group>
                <br></br>
              </Row>
              <Row className="mb-3">
                <Form.Group as={Col} md="10" controlId="category">
                  <Form.Label>Category</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Enter category"
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  <Form.Control.Feedback type="invalid">
                    Please provide category
                  </Form.Control.Feedback>
                </Form.Group>
              </Row>

              <Row className="mb-3">
                <Form.Group as={Col} md="10" controlId="description">
                  <Form.Label>Description</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Describe about your experience..."
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
        </Card.Body>
      </Card>
    </>
  );
};

{
  /* <form onSubmit={handleSubmit}>
      <label htmlFor="title">Title:</label>
      <input type="text" id="title" name="title" />
      <br />
      <br />
      <label htmlFor="category">Category:</label>
      <input type="text" id="category" name="category" />
      <br />
      <br />
      <label htmlFor="description">Description:</label>
      <textarea id="description" name="description"></textarea>
      <br />
      <br />
      <button type="submit">Add Blog</button>
    </form> */
}

export default AddPage;
