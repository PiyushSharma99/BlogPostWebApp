import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { selectBlogById, updateBlog } from "../store/blogSlice";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";

const EditBlog = () => {
  const { id } = useParams();
  const blog = useSelector((state) => selectBlogById(state, id));
  const [validated, setValidated] = useState(false);
  const [title, setTitle] = useState(String(blog.title));
  const [category, setCategory] = useState(blog.category);
  const [description, setDescription] = useState(blog.description);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    console.log("========EDITform=========");
    console.log(form.checkValidity());

    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    event.preventDefault();
    setValidated(true);

    if (form.checkValidity() === true) {
      console.log("========EDITformtitle=========");
      console.log(title);
      dispatch(updateBlog({ id, title, category, description }));
      navigate(`/blog-details/${id}`);
    }
  };

  return (
    <div>
      <Button
        type="button"
        bg="light"
        variant="dark"
        onClick={() => navigate(-1)}
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
            Edit Blog
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
                    onChange={(e) => setTitle(e.target.value)}
                    // value={title}
                    defaultValue={title}
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
                    defaultValue={category}
                    placeholder="Enter category"
                    onChange={(e) => setCategory(e.target.value)}
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
                    defaultValue={description}
                    onChange={(e) => setDescription(e.target.value)}
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
    </div>
  );
};

export default EditBlog;
{
  /* <form onSubmit={handleSubmit}>
  <div>
    <label htmlFor="title">Title</label>
    <input
      type="text"
      id="title"
      value={title}
      onChange={(e) => setTitle(e.target.value)}
    />
  </div>
  <div>
    <label htmlFor="category">Category</label>
    <input
      type="text"
      id="category"
      value={category}
      onChange={(e) => setCategory(e.target.value)}
    />
  </div>
  <div>
    <label htmlFor="description">Description</label>
    <textarea
      id="description"
      value={description}
      onChange={(e) => setDescription(e.target.value)}
    />
  </div>
  <button type="submit">Save</button>
</form>; */
}
