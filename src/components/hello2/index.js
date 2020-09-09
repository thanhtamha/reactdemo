import React, { useState, useEffect } from "react";

export default function Hello2(props) {
  const [email, setEmail] = useState("default@wirecard.com");

  // componentDidMount
  useEffect(() => {
    if (props.name) {
      setEmail("thanhtam.ha@wirecard.com");
    }
  }, [props.name]);

  const changeEmail = () => {
    setEmail("newEmail@wirecard.com");
  };

  return (
    <div>
      <h3>Hello {props.name}</h3>
      <h3>Email {email}</h3>
      <button onClick={changeEmail}>Change email</button>
    </div>
  );
}
