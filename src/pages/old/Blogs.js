import React from 'react';
import { useSelector } from 'react-redux'

function Blogs() {

  const blogData = useSelector((state) => state.blogData);
  console.log(blogData);
  return (
    <>
      <h2>List of Blogs</h2>
      <div>Blogs</div>
      {/* {
        formData.length >0 
      } */}
      {blogData && blogData.length >0 ?        
      <div>
        <p>Title: {blogData.title}</p>
        <p>Category: {blogData.category}</p>
        <p>Description: {blogData.description}</p>
      </div> : 
      <div>Place for blog data</div>
      }






    </>
  )
}

export default Blogs