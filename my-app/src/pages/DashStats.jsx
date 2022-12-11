import React from "react";
import { useLoaderData } from "react-router-dom";

const DashStats = () => {
  const data = useLoaderData();
  console.log(data);
  return <div>Dashstast</div>;
};

export default DashStats;
