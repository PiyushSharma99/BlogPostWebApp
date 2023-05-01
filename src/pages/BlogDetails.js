import React, { useContext, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import {
  selectBlogById,
  getMemoizedNumItems,
  updateBlog,
  deleteBlog,
  toggleLike,
  selectItemsByCategory,
} from "../store/blogSlice";
import Card from "react-bootstrap/Card";
import { Button } from "react-bootstrap";
import { LikesContext } from "../context/like-context";
import "./BlogDetails.module.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faHeart } from "@fortawesome/free-solid-svg-icons";
// import { faHeartBroken } from "@fortawesome/free-solid-svg-icons";
import { FaHeart, FaRegHeart } from "react-icons/fa";

const BlogDetails = () => {
  // const ctx = useContext(LikeContext);
  const [isLiked, setIsLiked] = useState(false);
  const { id } = useParams();
  console.log(id);
  const blogUnit = useSelector((state) => selectBlogById(state, id));
  console.log(blogUnit);
  const blogs = useSelector((state) => state.blogs.blogs);
  console.log(blogs);

  const { likes, toggleLike } = useContext(LikesContext);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDelete = (id) => {
    dispatch(deleteBlog(id));
    navigate("/");
  };

  const handleLikeClick = () => {
    toggleLike(id);
  };

  const likeButton = (
    <Button bg="light" variant="danger" onClick={handleLikeClick}>
      {likes[id] ? (<> 'Liked' <FaHeart /></>) : (<> 'Like' <FaRegHeart /></>)}
    </Button>
  );
  const handleEdit = (id) => {
    navigate(`/edit-blog/${id}`);
  };

  // const handleLike = () => {
  //   dispatch(toggleLike(id));
  // };

  const handleBack = () => {
    navigate("/");
  };

  return (
    <div>
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
        key={blogUnit.id}
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
          <Button
            type="button"
            bg="light"
            variant="warning"
            onClick={() => handleDelete(blogUnit.id)}
            style={{
              marginRight: "25px",
            }}
          >
            Delete
          </Button>
          <Button
            type="button"
            bg="dark"
            variant="info"
            onClick={() => handleEdit(blogUnit.id)}
            style={{
              marginRight: "25px",
            }}
          >
            Edit
          </Button>
          {likeButton}
        </Card.Header>

        <Card.Body>
          <Card.Title>{blogUnit.title}</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
            {blogUnit.description}
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default BlogDetails;

{
  /* <button onClick={handleBack}>BACK</button>
      Length of blogs array = {blogs.length}
      <div>{blogUnit.title}</div>
      <div>{blogUnit.category}</div>
      <div>{blogUnit.description}</div>
      <button onClick={() => handleDelete(blogUnit.id)}>Delete</button>
      <button onClick={() => handleEdit(blogUnit.id)}>Edit</button>
      <button onClick={() => handleLike(blogUnit.id)}>
        {blogUnit.liked ? "Unlike" : "Like"}
      </button> */
}
