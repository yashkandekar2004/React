import React from "react";
import Image from "./image";
import Details from "./Details";
function Card(para) {
  return (
    
    <div className="card">
      <div className="top">
        <h2 className="name">{para.name}</h2>
        <Image img={para.img} />
      </div>  
      <div className="bottom">
        <Details phone={para.phone}
        email={para.email}></Details>
      </div>
    </div>
  );
}

export default Card;

