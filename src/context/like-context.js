// import React from "react";

// const LikeContext = React.createContext({
//     isLiked: false
// })

// export default LikeContext;

import React, { createContext, useState } from "react";

export const LikesContext = createContext();

export const LikesProvider = ({ children }) => {
  const [likes, setLikes] = useState({});

  const toggleLike = (blogId) => {
    setLikes((prevLikes) => ({
      ...prevLikes,
      [blogId]: !prevLikes[blogId],
    }));
  };

  return (
    <LikesContext.Provider value={{ likes, toggleLike }}>
      {children}
    </LikesContext.Provider>
  );
};
