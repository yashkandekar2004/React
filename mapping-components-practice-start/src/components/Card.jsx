import React from "react";
import Emoji from "./Emoji";
import Name from "./Name";
import Description from "./Description";

function Card(props) {
  return (
    <dl className="dictionary">
      <div className="term">
        <dt>
          <Emoji emoji={props.emoji} />
          <Name name={props.name} />
        </dt>
        <Description meaning={props.meaning} />
      </div>
    </dl>
  );
}

export default Card;
