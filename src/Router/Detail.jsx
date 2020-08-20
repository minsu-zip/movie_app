import React, { useEffect } from "react";
import "./Detail.css";

const Detail = ({ location, history }) => {
  useEffect(() => {
    if (location.state === undefined) {
      history.push("/");
    }
  });

  if (location.state) {
    return <span>{location.state.title}</span>;
  } else {
    return null;
  }
};

export default Detail;
