import React from "react";
import { Link, useLoaderData, useNavigate } from "react-router-dom";

const Posts = () => {
  const { post } = useLoaderData();

  //   console.log(post[0]);
  return (
    <div>
      <h1>This is Page POST</h1>
      {!post ? (
        <p>Loading...</p>
      ) : (
        <ol>
          {post.map((item) => (
            <li key={item.id}>
              <Link to={`/dashboard/posts/${item.id}`}>{item.title}</Link>
            </li>
          ))}
        </ol>
      )}
    </div>
    // <h2>Post</h2>
  );
};

export default Posts;
