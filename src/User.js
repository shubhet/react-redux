import React from "react";

const User = (props) => {
  console.warn(props);
  return (
    <>
      <h2>User Component</h2>
      <h3>{props.data.name}</h3>
      <h3>{props.data.age}</h3>
    </>
  );
};

export default User;
