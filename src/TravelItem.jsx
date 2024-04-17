// rfce
import React from "react";

function TravelItem(props) {
  return (
    <article>
      <h3>{props.title}</h3>
      <p>{props.desc}</p>
      <img
        src={props.img_url}
        width={200}
        alt={props.title}
      />
    </article>
  );
}

export default TravelItem;
