import React from "react";
import { useLoaderData, useParams } from "react-router-dom";

const Postxxx = () => {
  let { id } = useParams();
  console.log({ id });
  const { post } = useLoaderData();
  console.log(post);
  const findItem = post.find((item) => item.id == id);
  console.log(findItem);
  return (
    <div>
      {post ? (
        <div>
          <h1 className="text-danger ">{findItem.title}</h1>
          <p>{findItem.body}</p>
        </div>
      ) : (
        <p>Loading....</p>
      )}
    </div>
  );
};

export default Postxxx;
